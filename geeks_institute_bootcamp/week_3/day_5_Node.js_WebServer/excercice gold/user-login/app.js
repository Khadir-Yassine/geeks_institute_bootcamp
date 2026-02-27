const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const PORT = 5000;
const JWT_SECRET = "super_secret_key_change_me";
const SALT_ROUNDS = 10;
const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_MINUTES = 10;

let users = [];
let nextUserId = 1;
function isPasswordStrong(password) {
  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return strongRegex.test(password);
}

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Missing or invalid Authorization header" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}

function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient permissions" });
    }
    next();
  };
}

function sanitizeUser(user) {
  const { passwordHash, failedLoginAttempts, lockUntil, ...safe } = user;
  return safe;
}

app.post("/api/register", async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }
    if (!isPasswordStrong(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 chars and include uppercase, lowercase, number, and special character",
      });
    }

    const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (existing) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = {
      id: nextUserId++,
      email: email.toLowerCase(),
      passwordHash,
      role: role === "admin" ? "admin" : "user",
      createdAt: new Date().toISOString(),

      failedLoginAttempts: 0,
      lockUntil: null, 
    };

    users.push(newUser);

    return res.status(201).json({
      message: "User registered successfully",
      user: sanitizeUser(newUser),
    });
  } catch (err) {
    console.error("Register error:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "email and password are required" });
    }

    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.lockUntil) {
      const lockUntilDate = new Date(user.lockUntil);
      if (lockUntilDate > new Date()) {
        return res.status(423).json({
          message: `Account locked. Try again after ${lockUntilDate.toISOString()}`,
        });
      } else {
        user.lockUntil = null;
        user.failedLoginAttempts = 0;
      }
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      user.failedLoginAttempts += 1;

      if (user.failedLoginAttempts >= MAX_FAILED_ATTEMPTS) {
        const lockMs = LOCKOUT_MINUTES * 60 * 1000;
        user.lockUntil = new Date(Date.now() + lockMs).toISOString();
        return res.status(423).json({
          message: `Too many failed attempts. Account locked until ${user.lockUntil}`,
        });
      }

      return res.status(401).json({
        message: "Invalid credentials",
        attemptsLeft: MAX_FAILED_ATTEMPTS - user.failedLoginAttempts,
      });
    }

    user.failedLoginAttempts = 0;
    user.lockUntil = null;

    const token = generateToken(user);

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("Login error:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

app.get("/api/profile", authMiddleware, (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "User not found" });

  return res.status(200).json({
    message: "Profile retrieved",
    profile: sanitizeUser(user),
  });
});

app.get("/api/admin/users", authMiddleware, requireRole("admin"), (req, res) => {
  res.status(200).json(users.map(sanitizeUser));
});
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
app.listen(PORT, () => {
  console.log(`User Login API running on http://localhost:${PORT}`);
});
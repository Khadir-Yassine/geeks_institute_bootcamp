# NexusMarket MongoDB Optimization Exercise

## 1. Avoiding the 16MB Trap (Over-Embedding)

MongoDB documents cannot exceed **16MB**. Embedding data that grows indefinitely can cause the document to reach this limit.

### Bad Design

Embedding all orders inside the User document.

Example:

```
User {
  name: "Yassine",
  email: "yassine@email.com",
  orders: [
    { product: "Laptop", price: 1000 },
    { product: "Phone", price: 700 }
  ]
}
```

If the user makes thousands of purchases, the document will grow too large.

### Good Design

Reference the user inside the Order document.

```
Order {
  user: ObjectId("USER_ID"),
  items: [
    { product: ObjectId("PRODUCT_ID"), quantity: 2 }
  ],
  totalPrice: 1200
}
```

This allows unlimited orders without increasing the user document size.

---

## 2. Indexing – The Goldilocks Rule

Indexes help improve query performance.

* Too few indexes → slow queries (collection scans)
* Too many indexes → slow writes and wasted memory

Best practice: **Index only fields used in filtering or sorting.**

Example search query:

```javascript
Product.find({ category: "electronics" }).sort({ price: -1 })
```

Create a compound index:

```javascript
productSchema.index({ category: 1, price: -1 });
```

This index speeds up filtering by category and sorting by price.

---

## 3. Silent Failures (Error Handling)

Never assume the database always returns valid data.

### Incorrect Example

```javascript
const user = await User.findById(id);
res.json(user);
```

If the user does not exist, it returns **null**.

### Correct Example

```javascript
const user = await User.findById(id);

if (!user) {
  return res.status(404).json({ message: "User not found" });
}

res.json(user);
```

This ensures the API returns a clear **404 error** if the user is missing.

---

# Performance Optimization

## Task A: Optimize Product Search

To optimize product filtering by category and sorting by price, create a compound index.

```javascript
productSchema.index({ category: 1, price: -1 });
```

This allows MongoDB to quickly locate products within a category and return them sorted by price.

---

## Task B: Infinite Scroll Pagination

Instead of returning all products at once, implement pagination.

```javascript
const getProducts = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 12;

  const products = await Product.find()
    .select('title price image')
    .skip((page - 1) * limit)
    .limit(limit)
    .lean();

  res.json(products);
};
```

Explanation:

* `page` determines the page number requested.
* `limit` controls how many products are returned per request.
* `skip()` skips products from previous pages.
* `limit()` restricts results to 12 products.
* `select()` returns only necessary fields.
* `lean()` improves performance by returning plain JavaScript objects.

---

# Design Decisions

**Why embed items in the Order model instead of referencing them?**

Order items are embedded because once an order is placed, its contents should not change. Embedding keeps the order data consistent and easier to retrieve.

**Why use `select: false` for the user password?**

Example:

```javascript
password: {
  type: String,
  select: false
}
```

This prevents the password from being returned in queries by default, improving application security.

---

# Final Reflection

Data is one of the most valuable assets of any company.
Proper database design ensures:

* Secure data (authentication and validation)
* Well-organized relationships
* High performance through indexing and optimized queries

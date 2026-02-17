const form = document.getElementById("userForm");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = document.getElementById("name").value;
    const lastNameValue = document.getElementById("lastname").value;

    const user = {
        name: nameValue,
        lastname: lastNameValue
    };

    const jsonUser = JSON.stringify(user);

    output.textContent = jsonUser;

    form.reset();
});

// Registration Validation
document.getElementById("registerForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "" || pass === "") {
        error.innerText = "All fields are required!";
        error.style.color = "red";
    } else {
        error.innerText = "Registration Successful!";
        error.style.color = "green";
    }
});

// Login Validation
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let pass = document.getElementById("loginPass").value.trim();
    let error = document.getElementById("errorLogin");

    if (email === "" || pass === "") {
        error.innerText = "Please enter login details!";
        error.style.color = "red";
    } else {
        error.innerText = "Login Successful!";
        error.style.color = "green";
    }
});

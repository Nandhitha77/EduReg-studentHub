function showHidePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.innerHTML = '<ion-icon name="lock-open"></ion-icon>';
    } else {
        passwordInput.type = "password";
        toggleIcon.innerHTML = '<ion-icon name="lock-closed"></ion-icon>';
    }
}

function login() {
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
const password = document.getElementById("password").value;

    const students = JSON.parse(localStorage.getItem("students")) || [];

    const student = students.find(user =>
        user.email === email && user.password === password
    );

    if (!student) {
        alert("Invalid email or password!");
        return;
    }

    localStorage.setItem("loggedInStudent", JSON.stringify(student));

    window.location.href = "dashBoard.html";
}


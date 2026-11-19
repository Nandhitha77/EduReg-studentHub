
// function register() {

//     const signupForm = document.getElementById("signupForm");

//     const password = document.getElementById("password");
//     const confirmPassword = document.getElementById("confirmPassword");

//     if (!signupForm.reportValidity()) {
//         return;
//     }

//     // Password matching
//     if (password.value !== confirmPassword.value) {
//         alert("Passwords do not match!");
//         return;
//     }

//     // Password strength validation
//     if (password.value.length < 8) {
//         alert("Password must contain at least 8 characters!");
//         return;
//     }

//     if (!/[A-Z]/.test(password.value)) {
//         alert("Password must contain an uppercase letter!");
//         return;
//     }

//     if (!/[a-z]/.test(password.value)) {
//         alert("Password must contain a lowercase letter!");
//         return;
//     }

//     if (!/[0-9]/.test(password.value)) {
//         alert("Password must contain a number!");
//         return;
//     }

//     if (!/[!@#$%^&*]/.test(password.value)) {
//         alert("Password must contain a special character!");
//         return;
//     }

//     // Collect student information
//     const student = {
//         fullName: document.getElementById("fullName").value.trim(),
//         registerNumber: document.getElementById("registerNumber").value.trim(),
//         email: document.getElementById("email").value.trim().toLowerCase(),
//         mobile: document.getElementById("mobile").value.trim(),
//         department: document.getElementById("department").value,
//         year: document.getElementById("year").value,
//         gender: document.querySelector('input[name="gender"]:checked').value,
//         password: password.value
//     };

//     // Get existing students
//     let students = JSON.parse(localStorage.getItem("students")) || [];

//     // Check duplicate registration
//     const existingStudent = students.find(user =>
//         user.email === student.email ||
//         user.registerNumber === student.registerNumber
//     );

//     if (existingStudent) {
//         alert("Email or Register Number already exists!");
//         return;
//     }

//     // Save student information
//     students.push(student);
    
//     localStorage.setItem("students", JSON.stringify(students));
    
//     alert("Registration successful! Please login.");
    
//     window.location.href = "value.html";
// } 

// document.querySelectorAll(".toggle-pw").forEach(function (btn) {
//     btn.addEventListener("click", function () {
//         const input = btn.previousElementSibling;
//         const isHidden = input.type === "password";

//         input.type = isHidden ? "text" : "password";
//         btn.classList.toggle("shown", isHidden);
//         btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
//     });
// });

function register() {
    console.log("Registration started");
    const signupForm = document.getElementById("signupForm");

    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    if (!signupForm.reportValidity()) {
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords do not match!");
        return;
    }

    if (password.value.length < 8 ||
        !/[A-Z]/.test(password.value) ||
        !/[a-z]/.test(password.value) ||
        !/[0-9]/.test(password.value) ||
        !/[!@#$%^&*]/.test(password.value)) {
        alert("Password must contain at least 8 characters, uppercase, lowercase, number and special character!");
        return;
    }

    const student = {
        fullName: document.getElementById("fullName").value.trim(),
        registerNumber: document.getElementById("registerNumber").value.trim(),
        email: document.getElementById("email").value.trim().toLowerCase(),
        mobile: document.getElementById("mobile").value.trim(),
        department: document.getElementById("department").value,
        year: document.getElementById("studyear").value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        password: password.value
    };

    let students = JSON.parse(localStorage.getItem("students")) || [];

    const existingStudent = students.find(user =>
        user.email === student.email ||
        user.registerNumber === student.registerNumber
    );

    if (existingStudent) {
        alert("Email or Register Number already exists!");
        return;
    }

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration successful! Please login.");
console.log("Redirecting to login page");
    window.location.href = "value.html";
}

document.querySelectorAll(".toggle-pw").forEach(function (btn) {
    btn.addEventListener("click", function () {
        const input = btn.previousElementSibling;
        const isHidden = input.type === "password";

        input.type = isHidden ? "text" : "password";
        btn.classList.toggle("shown", isHidden);
        btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
    });
});

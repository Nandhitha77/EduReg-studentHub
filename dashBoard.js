
const student = JSON.parse(
    localStorage.getItem("loggedInStudent")
);

// Prevent access without login
if (!student) {
    window.location.href = "value.html";
} else {

    // Welcome section
    document.getElementById("welcomeName").textContent =
        student.fullName;

    // Profile initial
    document.getElementById("profileInitial").textContent =
        student.fullName.charAt(0).toUpperCase();

    // Summary cards
    document.getElementById("cardRegisterNumber").textContent =
        student.registerNumber;

    document.getElementById("cardDepartment").textContent =
        student.department;

    document.getElementById("cardYear").textContent =
        student.year + " Year";

    // Student details
    document.getElementById("studentName").textContent =
        student.fullName;

    document.getElementById("studentRegister").textContent =
        student.registerNumber;

    document.getElementById("studentEmail").textContent =
        student.email;

    document.getElementById("studentMobile").textContent =
        student.mobile;

    document.getElementById("studentDepartment").textContent =
        student.department;

    document.getElementById("studentYear").textContent =
        student.year + " Year";

    document.getElementById("studentGender").textContent =
        student.gender;
}


// LOGOUT
function logout() {

    localStorage.removeItem("loggedInStudent");

    window.location.href = "value.html";
}

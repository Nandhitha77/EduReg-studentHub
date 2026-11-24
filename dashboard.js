
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
// CHATBOT FUNCTIONALITY

const chatbotToggle = document.getElementById("chatbotToggle");
const chatbotWindow = document.getElementById("chatbotWindow");
const closeChat = document.getElementById("closeChat");

const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");
const chatMessages = document.getElementById("chatMessages");

// Open chatbot
chatbotToggle.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
});

// Close chatbot
closeChat.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
});

// Display a message in the chat window
function addMessage(message, className) {

    const messageDiv = document.createElement("div");

    messageDiv.className = className;
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message to Gemini
async function sendMessage() {

    const userMessage = chatInput.value.trim();

    if (userMessage === "") {
        return;
    }

    // Display user's message
    addMessage(userMessage, "user-message");

    chatInput.value = "";

    sendChat.disabled = true;

    const loadingMessage = document.createElement("div");
    loadingMessage.className = "bot-message";
    loadingMessage.textContent = "Thinking...";

    chatMessages.appendChild(loadingMessage);

    try {

        // const response = await fetch("http://localhost:3000/api/chat", {
const response = await fetch("https://edureg-studenthub.onrender.com/api/chat", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: userMessage
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong.");
        }

        loadingMessage.textContent = data.reply;

    } catch (error) {

        loadingMessage.textContent =
            "Sorry, I couldn't connect to the AI assistant.";

        console.error(error);

    } finally {

        sendChat.disabled = false;
        chatInput.focus();

    }
}

// Send button click
sendChat.addEventListener("click", sendMessage);

// Send message using Enter key
chatInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        sendMessage();
    }

});

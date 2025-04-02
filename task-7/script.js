function sendMessage() {
  const inputField = document.getElementById("messageInput");
  const messageText = inputField.value.trim();

  if (messageText === "") return;

  addMessage(messageText, "user-message");
  inputField.value = "";
  inputField.focus();

  // Simulate bot response
  setTimeout(() => {
    const botReplies = [
      "Hello!",
      "How can I help?",
      "Nice to meet you!",
      "That's interesting!",
      "Tell me more!",
    ];
    const randomReply =
      botReplies[Math.floor(Math.random() * botReplies.length)];
    addMessage(randomReply, "bot-message");
  }, 1000);
}

function addMessage(text, className) {
  const chatBox = document.getElementById("chatBox");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", className);
  messageDiv.innerHTML = text + `<div class="timestamp">${getTime()}</div>`;

  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to the latest message
}

function getTime() {
  const now = new Date();
  return now.getHours() + ":" + String(now.getMinutes()).padStart(2, "0");
}

// Allow sending message with Enter key
document
  .getElementById("messageInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

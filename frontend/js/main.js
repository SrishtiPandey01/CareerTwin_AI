

const startButton = document.getElementById("startButton");
const startMessage = document.getElementById("startMessage");

startButton.addEventListener("click", function () {
    startMessage.textContent =
        "Welcome to CareerTwin AI! Your career journey starts here.";

    startButton.textContent = "You're Ready!";
    startButton.disabled = true;
});


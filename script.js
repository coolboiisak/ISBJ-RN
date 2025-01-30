const facts = [
    "Isbjörnar kan väga upp till 700 kg.",
    "De kan lukta en säl på 1,6 km avstånd.",
    "Deras päls är genomskinlig!"
];

document.getElementById("factButton").addEventListener("click", function() {
    document.getElementById("fact").textContent = facts[Math.floor(Math.random() * facts.length)];
});

function checkAnswer(button, type) {
    if (type === "ratt") {
        document.getElementById("quiz-result").textContent = "Rätt svar! 🏆";
    } else {
        document.getElementById("quiz-result").textContent = "Fel svar! ❌";
    }
}

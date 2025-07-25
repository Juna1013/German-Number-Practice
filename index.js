const allNumbers = [
    { num: 1, de: "eins" }, { num: 2, de: "zwei" }, { num: 3, de: "drei" },
    { num: 4, de: "vier" }, { num: 5, de: "fünf" }, { num: 6, de: "sechs" },
    { num: 7, de: "sieben" }, { num: 8, de: "acht" }, { num: 9, de: "neun" },
    { num: 10, de: "zehn" }, { num: 11, de: "elf" }, { num: 12, de: "zwölf" },
    { num: 13, de: "dreizehn" }, { num: 14, de: "vierzehn" }, { num: 15, de: "fünfzehn" },
    { num: 16, de: "sechzehn" }, { num: 17, de: "siebzehn" }, { num: 18, de: "achtzehn" },
    { num: 19, de: "neunzehn" }, { num: 20, de: "zwanzig" }, { num: 21, de: "einundzwanzig" },
    { num: 22, de: "zweiundzwanzig" }, { num: 23, de: "dreiundzwanzig" }, { num: 24, de: "vierundzwanzig" },
    { num: 25, de: "fünfundzwanzig" }, { num: 26, de: "sechsundzwanzig" }, { num: 27, de: "siebenundzwanzig" },
    { num: 28, de: "achtundzwanzig" }, { num: 29, de: "neunundzwanzig" }, { num: 30, de: "dreißig" },
    { num: 31, de: "einunddreißig" }, { num: 32, de: "zweiunddreißig" }, { num: 33, de: "dreiunddreißig" },
    { num: 34, de: "vierunddreißig" }, { num: 35, de: "fünfunddreißig" }, { num: 36, de: "sechsunddreißig" },
    { num: 37, de: "siebenunddreißig" }, { num: 38, de: "achtunddreißig" }, { num: 39, de: "neununddreißig" },
    { num: 40, de: "vierzig" }, { num: 41, de: "einundvierzig" }, { num: 42, de: "zweiundvierzig" },
    { num: 43, de: "dreiundvierzig" }, { num: 44, de: "vierundvierzig" }, { num: 45, de: "fünfundvierzig" },
    { num: 46, de: "sechsundvierzig" }, { num: 47, de: "siebenundvierzig" }, { num: 48, de: "achtundvierzig" },
    { num: 49, de: "neunundvierzig" }, { num: 50, de: "fünfzig" }, { num: 51, de: "einundfünfzig" },
    { num: 52, de: "zweiundfünfzig" }, { num: 53, de: "dreiundfünfzig" }, { num: 54, de: "vierundfünfzig" },
    { num: 55, de: "fünfundfünfzig" }, { num: 56, de: "sechsundfünfzig" }, { num: 57, de: "siebenundfünfzig" },
    { num: 58, de: "achtundfünfzig" }, { num: 59, de: "neunundfünfzig" }, { num: 60, de: "sechzig" },
    { num: 61, de: "einundsechzig" }, { num: 62, de: "zweiundsechzig" }, { num: 63, de: "dreiundsechzig" },
    { num: 64, de: "vierundsechzig" }, { num: 65, de: "fünfundsechzig" }, { num: 66, de: "sechsundsechzig" },
    { num: 67, de: "siebenundsechzig" }, { num: 68, de: "achtundsechzig" }, { num: 69, de: "neunundsechzig" },
    { num: 70, de: "siebzig" }, { num: 71, de: "einundsiebzig" }, { num: 72, de: "zweiundsiebzig" },
    { num: 73, de: "dreiundsiebzig" }, { num: 74, de: "vierundsiebzig" }, { num: 75, de: "fünfundsiebzig" },
    { num: 76, de: "sechsundsiebzig" }, { num: 77, de: "siebenundsiebzig" }, { num: 78, de: "achtundsiebzig" },
    { num: 79, de: "neunundsiebzig" }, { num: 80, de: "achtzig" }, { num: 81, de: "einundachtzig" },
    { num: 82, de: "zweiundachtzig" }, { num: 83, de: "dreiundachtzig" }, { num: 84, de: "vierundachtzig" },
    { num: 85, de: "fünfundachtzig" }, { num: 86, de: "sechsundachtzig" }, { num: 87, de: "siebenundachtzig" },
    { num: 88, de: "achtundachtzig" }, { num: 89, de: "neunundachtzig" }, { num: 90, de: "neunzig" },
    { num: 91, de: "einundneunzig" }, { num: 92, de: "zweiundneunzig" }, { num: 93, de: "dreiundneunzig" },
    { num: 94, de: "vierundneunzig" }, { num: 95, de: "fünfundneunzig" }, { num: 96, de: "sechsundneunzig" },
    { num: 97, de: "siebenundneunzig" }, { num: 98, de: "achtundneunzig" }, { num: 99, de: "neunundneunzig" },
    { num: 100, de: "hundert" }
];

let numbersToPractice = [];
let currentNumber = null;
const totalNumbers = allNumbers.length;

const numberDisplay = document.getElementById('numberToSpell');
const userAnswerInput = document.getElementById('userAnswer');
const feedbackMessage = document.getElementById('feedbackMessage');
const progressMessage = document.getElementById('progressMessage');
const restartButton = document.getElementById('restartButton');

function initializeGame() {
    numbersToPractice = [...allNumbers]; // Create a copy to modify
    userAnswerInput.disabled = false;
    document.querySelector('button[onclick="checkAnswer()"]').disabled = false;
    restartButton.style.display = 'none';
    askNewNumber();
}

function askNewNumber() {
    userAnswerInput.value = '';
    userAnswerInput.focus();
    feedbackMessage.textContent = '';
    feedbackMessage.className = 'feedback';

    if (numbersToPractice.length === 0) {
        numberDisplay.textContent = "🎉";
        feedbackMessage.textContent = "¡Glückwunsch! Du hast alle Zahlen perfekt geschrieben.";
        feedbackMessage.className = 'feedback correct';
        progressMessage.textContent = `Completed: ${totalNumbers} / ${totalNumbers}`;
        userAnswerInput.disabled = true;
        document.querySelector('button[onclick="checkAnswer()"]').disabled = true;
        restartButton.style.display = 'block';
        return;
    }

    const randomIndex = Math.floor(Math.random() * numbersToPractice.length);
    currentNumber = numbersToPractice[randomIndex];
    numberDisplay.textContent = currentNumber.num;
    updateProgress();
}

function checkAnswer() {
    if (!currentNumber) return;

    const userAnswer = userAnswerInput.value.trim().toLowerCase();
    
    if (userAnswer === currentNumber.de) {
        feedbackMessage.textContent = `Richtig! ${currentNumber.num} ist "${currentNumber.de}".`;
        feedbackMessage.className = 'feedback correct';
        
        // Remove the correctly spelled number from the practice list
        numbersToPractice = numbersToPractice.filter(item => item.num !== currentNumber.num);
        
        setTimeout(askNewNumber, 1500); // Wait a bit before showing the next number
    } else {
        feedbackMessage.innerHTML = `Falsch. Die richtige Antwort für ${currentNumber.num} ist "<strong>${currentNumber.de}</strong>". <br>Du hast geschrieben: "${userAnswer}".`;
        feedbackMessage.className = 'feedback incorrect';
        // Keep the number in the list to try again later
        setTimeout(askNewNumber, 3000); // Wait a bit longer on incorrect
    }
}

function updateProgress() {
    const numbersDone = totalNumbers - numbersToPractice.length;
    progressMessage.textContent = `Fortschritt: ${numbersDone} / ${totalNumbers} richtig. ${numbersToPractice.length} übrig.`;
}

// Allow Enter key to submit answer
userAnswerInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Start the game when the page loads
window.onload = initializeGame;

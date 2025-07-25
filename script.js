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

const userAnswerInput = document.getElementById('userAnswer');
const feedbackMessage = document.getElementById('feedbackMessage');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const restartButton = document.getElementById('restartButton');
const checkButton = document.querySelector('.submit-button'); // クラス名に変更
const currentWordDisplay = document.getElementById('currentWord');
const playAudioBtn = document.getElementById('playAudioBtn');

// Web Speech API setup
let speechSynth = window.speechSynthesis;
let germanVoice = null;

// Find German voice
function loadVoices() {
    const voices = speechSynth.getVoices();
    // 優先順位: 'de-DE' の完全一致 -> 'de' で始まるもの -> 最初の利用可能な音声
    germanVoice = voices.find(voice => voice.lang === 'de-DE' && voice.name.includes('Google') || voice.name.includes('Microsoft')) ||
                  voices.find(voice => voice.lang.startsWith('de')) || 
                  voices[0];
}

// Load voices when available
if (speechSynth) {
    speechSynth.onvoiceschanged = loadVoices;
    loadVoices(); // Initial load
} else {
    // SpeechSynthesis APIが利用できない場合のフォールバック（例: エラーメッセージ表示）
    feedbackMessage.textContent = 'お使いのブラウザは音声合成に対応していません。';
    feedbackMessage.classList.add('feedback-incorrect');
    userAnswerInput.disabled = true;
    checkButton.disabled = true;
    playAudioBtn.disabled = true;
}


function speakGerman(text) {
    if (!speechSynth || !germanVoice) {
        console.warn("SpeechSynthesis API またはドイツ語音声が利用できません。");
        return;
    }
    
    if (speechSynth.speaking) {
        speechSynth.cancel();
    }
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE';
    utterance.rate = 0.9; // 少しゆっくりめに調整
    utterance.pitch = 1;
    utterance.voice = germanVoice; // 選択したドイツ語音声を適用
    
    playAudioBtn.classList.add('is-speaking'); // アニメーションクラスを追加
    utterance.onend = () => {
        playAudioBtn.classList.remove('is-speaking'); // アニメーションクラスを削除
    };
    utterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance.onerror', event);
        playAudioBtn.classList.remove('is-speaking');
    };
    
    speechSynth.speak(utterance);
}

function playCurrentNumber() {
    if (currentNumber) {
        speakGerman(currentNumber.de);
        currentWordDisplay.textContent = `🔊 ドイツ語`; // 音声再生中は「ドイツ語」と表示
        setTimeout(() => {
            currentWordDisplay.textContent = '';
        }, 2000); // 2秒後に非表示
    }
}

function initializeGame() {
    numbersToPractice = [...allNumbers]; // 全ての数字で練習リストを初期化
    userAnswerInput.disabled = false;
    checkButton.disabled = false;
    playAudioBtn.disabled = false;
    restartButton.classList.add('hidden');
    feedbackMessage.className = 'text-center min-h-12 flex items-center justify-center rounded-md p-3 mb-4 text-sm';
    feedbackMessage.innerHTML = '';
    updateProgress();
    askNewNumber();
}

function askNewNumber() {
    userAnswerInput.value = '';
    userAnswerInput.focus();
    feedbackMessage.innerHTML = '';
    feedbackMessage.className = 'text-center min-h-12 flex items-center justify-center rounded-md p-3 mb-4 text-sm';
    currentWordDisplay.textContent = '';

    if (numbersToPractice.length === 0) {
        currentWordDisplay.textContent = "🎉";
        feedbackMessage.innerHTML = `
            <div class="text-green-600 font-semibold">
                <div class="text-xl mb-1">🎊 おめでとうございます！</div>
                <div>全ての数字を完璧に聞き取れました！</div>
            </div>
        `;
        feedbackMessage.classList.add('feedback-correct');
        userAnswerInput.disabled = true;
        checkButton.disabled = true;
        playAudioBtn.disabled = true;
        restartButton.classList.remove('hidden');
        return;
    }

    const randomIndex = Math.floor(Math.random() * numbersToPractice.length);
    currentNumber = numbersToPractice[randomIndex];
    
    // Auto-play the number after a short delay
    setTimeout(() => {
        playCurrentNumber();
    }, 500);
}

function checkAnswer() {
    if (!currentNumber) return;

    const userAnswer = parseInt(userAnswerInput.value);
    
    if (userAnswer === currentNumber.num) {
        feedbackMessage.innerHTML = `
            <div class="text-xl mb-1">✅ 正解！</div>
            <div><strong>${currentNumber.num}</strong> (${currentNumber.de}) です</div>
        `;
        feedbackMessage.classList.add('feedback-correct');
        
        // 正解した数字を練習リストから削除
        numbersToPractice = numbersToPractice.filter(item => item.num !== currentNumber.num);
        updateProgress();
        
        setTimeout(askNewNumber, 2000); // 2秒後に次の問題
    } else {
        feedbackMessage.innerHTML = `
            <div class="text-xl mb-1">❌ 不正解</div>
            <div class="mb-1">正解は <strong>${currentNumber.num}</strong> (${currentNumber.de}) です</div>
            <div class="text-sm">あなたの回答: ${isNaN(userAnswer) ? '未入力' : userAnswer}</div>
        `;
        feedbackMessage.classList.add('feedback-incorrect');
        
        // 不正解の場合、正しい音声を再度再生
        setTimeout(() => {
            speakGerman(currentNumber.de);
        }, 1000);
        
        // シェイクアニメーションをリセット
        feedbackMessage.classList.remove('shake');
        void feedbackMessage.offsetWidth; // 強制的にリフロー
        feedbackMessage.classList.add('shake');
        
        setTimeout(askNewNumber, 3500); // 3.5秒後に次の問題
    }
}

function updateProgress() {
    const numbersDone = totalNumbers - numbersToPractice.length;
    const percentage = (numbersDone / totalNumbers) * 100;
    
    progressText.textContent = `${numbersDone} / ${totalNumbers}`;
    progressBar.style.width = `${percentage}%`;
}

// Enterキーで回答を送信
userAnswerInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// ページロード時にゲームを開始
window.onload = initializeGame;

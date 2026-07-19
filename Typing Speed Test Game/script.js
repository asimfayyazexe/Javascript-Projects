const typingText = document.querySelector(".typing-content p");
let inputField = document.querySelector(".input-field");
let mistakesTag = document.querySelector("#mistakes");
let time = document.querySelector("#timeLeft");
let wpmTag = document.querySelector("#wpm");
let cpm = document.querySelector("#cpm");
let tryAgain = document.querySelector("#tryAgainBtn");

//  timer handle, time settings, and typing progress trackers
let timer,
    maxTime = 60,
    leftTime = maxTime,
    charIndex = mistakes = isTyping = 0;

function randomParagraph() {
    // Pick a random paragraph and wrap each character in its own span for styling
    let RandomIdx = Math.floor(Math.random() * paragraphs.length);
    paragraphs[RandomIdx].split("").forEach((span) => {
        let spanTags = `<span>${span}</span>`;
        typingText.innerHTML += spanTags;

        // Keep focus on the input field when typing or clicking the text
        document.addEventListener("keydown", () => inputField.focus());
        typingText.addEventListener("click", () => inputField.focus());
    })
}

function initTyping() {
    const characters = typingText.querySelectorAll("span");
    let typedChar = inputField.value.split("")[charIndex];

    if (charIndex < characters.length - 1 && leftTime > 0) {
        // Start the countdown on the first keystroke
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }

        if (typedChar == null) {
            // Handle backspace: step back and undo mistake styling
            charIndex--;
            if (characters[charIndex].classList.contains("incorrect")) {
                mistakes--;
            }
            characters[charIndex].classList.remove("correct", "incorrect");
        }
        else {
            // Check the typed character against the expected one
            if (characters[charIndex].innerText === typedChar) {
                characters[charIndex].classList.add("correct");
            }
            else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");

            }
            charIndex++;
        }
        // Move the active cursor highlight to the current character
        characters.forEach((span) => { span.classList.remove("active") });
        characters[charIndex].classList.add("active");
        mistakesTag.innerText = mistakes;

        // Calculate and display WPM/CPM stats
        wpm = Math.round(((charIndex - mistakes) / 5) / ((maxTime - leftTime) / 60));
        wpm = (wpm < 0 || !wpm || wpm === Infinity) ? 0 : wpm;
        cpm.innerText = charIndex - mistakes;
        wpmTag.innerText = wpm;
    }
    else {
        // Time's up or text finished, stop everything
        inputField.value = "";
        clearInterval(timer);
    }
}

function initTimer() {
    // Count down one second at a time until time runs out
    if (leftTime > 0) {
        leftTime--;
        time.innerText = leftTime;
    } else {
        clearInterval(timer);
    }
}

function resetTyping() {
    // Reload a fresh paragraph and reset all stats back to zero
    typingText.innerHTML = "";
    randomParagraph();
    leftTime = maxTime;
    charIndex = mistakes = isTyping = 0;
    
    clearInterval(timer);
    mistakesTag.innerText = 0;
    time.innerText = maxTime;
    cpm.innerText = 0;
    wpmTag.innerText = 0;
}


randomParagraph();
inputField.addEventListener("input", initTyping);
tryAgain.addEventListener("click", resetTyping)
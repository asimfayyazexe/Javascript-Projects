# Typing Speed Test
 
A simple browser-based typing speed test. Type out a randomly generated paragraph and get live feedback on your speed and accuracy.
 
## Features
 
- Random paragraph generator (pulls from a `paragraphs` array)
- Live character-by-character feedback (correct / incorrect / active highlighting)
- Real-time stats:
  - **WPM** (Words Per Minute)
  - **CPM** (Characters Per Minute)
  - **Mistakes** count
  - **Time Left** (60-second countdown)
- "Try Again" button to reset and start a new round
## How It Works
 
1. On page load, a random paragraph is picked and split into individual characters, each wrapped in its own `<span>` for styling.
2. As the user types into the hidden/styled input field, each keystroke is compared against the expected character:
   - Correct matches are highlighted green (`.correct`)
   - Wrong matches are highlighted red (`.incorrect`) and counted as a mistake
   - Backspace removes the highlight and decrements the mistake count if applicable
3. A 60-second timer starts on the first keystroke and counts down every second.
4. WPM and CPM are recalculated live using:
```
   WPM = ((correct characters) / 5) / (elapsed minutes)
   CPM = correct characters typed so far
```
5. Typing stops automatically when the timer hits 0 or the paragraph is fully typed.
6. Clicking **Try Again** resets all stats, loads a new random paragraph, and clears the input.

## Setup
 
1. Include `typing-test.js` in your HTML file.
2. Define a global `paragraphs` array of strings somewhere before this script runs, e.g.:
```js
   const paragraphs = [
     "The quick brown fox jumps over the lazy dog.",
     "Practice makes perfect when it comes to typing speed."
   ];
```
3. Open the page in a browser and start typing to begin the test.
## Known Behavior Notes
 
- The timer starts only after the first keystroke, not on page load.
- Typing is locked once time runs out or the paragraph is completed, until "Try Again" is clicked.

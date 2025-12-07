let score = 0;
let correctBoxIndex = -1;
let isGameActive = false;


const scoreElement = document.getElementById('score');
const messageElement = document.getElementById('message');
const boxElements = document.querySelectorAll('.box');


function startGame() {
    isGameActive = true;
    

    correctBoxIndex = Math.floor(Math.random() * boxElements.length);


    boxElements.forEach(box => {
        box.style.backgroundColor = '#3498db';
        box.textContent = '';
        box.classList.remove('correct', 'incorrect', 'opened');
        box.style.pointerEvents = 'auto';
    });

    messageElement.textContent = 'เลือกกล่องหนึ่งกล่อง!';
}


function checkGuess(selectedIndex) {
    if (!isGameActive) return;

    isGameActive = false;


    if (selectedIndex === correctBoxIndex) {
        score += 1;
        messageElement.textContent = '🎉 ยอดเยี่ยม! คุณเจอสีทอง!';
        boxElements[selectedIndex].classList.add('correct');
        boxElements[selectedIndex].textContent = '🏆';
    } else {
        score = Math.max(0, score - 1);
        messageElement.textContent = `❌ ผิดพลาด! กล่องที่ถูกต้องคือกล่องที่ ${correctBoxIndex + 1}`;
        boxElements[selectedIndex].classList.add('incorrect');
        boxElements[correctBoxIndex].classList.add('correct');
        boxElements[correctBoxIndex].textContent = '🏆';
    }

    scoreElement.textContent = score;


    boxElements.forEach(box => {
        box.style.pointerEvents = 'none';
    });
}


startGame()
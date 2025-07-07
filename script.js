const terminal = document.getElementById('terminal');
const cursor = document.querySelector('.cursor');
const enterBtn = document.getElementById('enter-btn');
const nextSection = document.getElementById('next-section');
const musicSection = document.getElementById('music-section');
const sound = document.getElementById('type-sound');

const lines = [
  "Inicializando sistema JEAN 1.0...",
  "Identidade reconhecida: Jean",
  "Carregando emoções...",
  "♥ Amor detectado."
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];
    terminal.textContent += currentLine[charIndex] || '';
    charIndex++;

    if (charIndex < currentLine.length) {
      sound.currentTime = 0;
      sound.play();
      setTimeout(typeLine, 50);
    } else {
      terminal.textContent += '\n';
      charIndex = 0;
      lineIndex++;
      setTimeout(typeLine, 500);
    }
  } else {
    cursor.style.display = 'none';
    enterBtn.style.display = 'inline-block';
  }
}

function typeNextSectionText() {
  const typingElem = document.querySelector('.typing-text');
  const text = "Processando sentimentos... Conectando coração à rede...";
  let idx = 0;

  function typeChar() {
    if (idx <= text.length) {
      typingElem.textContent = text.substring(0, idx);
      idx++;
      setTimeout(typeChar, 60);
    }
  }

  typeChar();
}

function enterSystem() {
  alert("Bem-vindo ao campo onde a lógica se curva ao amor — aqui, sentimentos são códigos eternos.");

  terminal.classList.add('fade-out');
  cursor.classList.add('fade-out');
  enterBtn.classList.add('explode');

  setTimeout(() => {
    document.getElementById('terminal-container').style.display = 'none';
    nextSection.classList.add('active');
    nextSection.scrollIntoView({ behavior: 'smooth' });
    typeNextSectionText();
  }, 1000);
}

function goToMusicSection() {
  nextSection.style.display = 'none';
  musicSection.classList.add('active');
  musicSection.scrollIntoView({ behavior: 'smooth' });
}
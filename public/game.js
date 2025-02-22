import { story } from './story.js';

const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');
const statusIndicator = document.getElementById('status-indicator');
const backgroundAudio = document.getElementById('background-audio');
const clickSound = document.getElementById('click-sound');
let energy = 100;
let oxygen = 100;

backgroundAudio.volume = 0.3;
backgroundAudio.play().catch(() => console.log("Автозапуск звука заблокирован браузером"));

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        particlesContainer.appendChild(particle);
    }
}

createParticles();

function updateScene(sceneId) {
    const scene = story[sceneId];
    if (!scene) {
        storyText.innerHTML = "Ошибка: сцена не найдена.";
        choicesDiv.innerHTML = "";
        return;
    }

    if (energy <= 0 || oxygen <= 0) {
        renderScene(story["ending2"]);
        return;
    }

    renderScene(scene);
}

function renderScene(scene) {
    storyText.innerHTML = "";
    choicesDiv.innerHTML = "";
    const lines = scene.text.split('\n');
    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let spans = [];

    lines.forEach((line, index) => {
        const span = document.createElement('span');
        let className = '';
        let text = line.replace(/\*(.*?)\*/g, '$1');

        if (line.startsWith("'Луна':")) {
            className = 'dialogue-luna';
            text = text.substring(7); // Убираем имя персонажа из текста для отображения
        } else if (line.startsWith("'Эхо':")) {
            className = 'dialogue-echo';
            text = text.substring(6); // Убираем имя персонажа из текста для отображения
        } else if (line.startsWith("'МЫ — ЭХО'")) {
            className = 'dialogue-echo';
            text = text.substring(10); // Убираем имя персонажа из текста для отображения
        } else if (line.startsWith("'Орион':")) {
            className = 'dialogue-orion';
            text = text.substring(8); // Убираем имя персонажа из текста для отображения
        } else if (line.includes('Энергия') || line.includes('Кислород')) {
            className = 'system';
        }

        span.className = className;
        span.textContent = "";
        spans.push({ span, text });
        storyText.appendChild(span);
        if (index < lines.length - 1) {
            storyText.appendChild(document.createElement('br'));
        }
    });

    function typeText() {
        if (currentLineIndex >= lines.length) {
            storyText.scrollTop = storyText.scrollHeight;
            showChoices(scene);
            return;
        }

        const { span, text } = spans[currentLineIndex];
        if (currentCharIndex < text.length) {
            span.textContent = text.substring(0, currentCharIndex + 1);
            currentCharIndex++;
            setTimeout(typeText, 30);
        } else {
            currentLineIndex++;
            currentCharIndex = 0;
            setTimeout(typeText, 100);
        }

        storyText.scrollTop = storyText.scrollHeight;
    }

    typeText();
    statusIndicator.innerText = `Энергия: ${energy}% | Кислород: ${oxygen}%`;
}

function showChoices(scene) {
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            clickSound.currentTime = 0;
            clickSound.play();
            if (choice.next.includes("ending")) {
                energy -= 10;
                oxygen -= 5;
            } else {
                energy -= 5;
                oxygen -= 2;
            }
            updateScene(choice.next);
        };
        choicesDiv.appendChild(button);
    });

    if (scene.choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.innerText = "Начать заново";
        restartButton.onclick = () => {
            clickSound.currentTime = 0;
            clickSound.play();
            energy = 100;
            oxygen = 100;
            updateScene('start');
        };
        choicesDiv.appendChild(restartButton);
    }
}

updateScene('start');
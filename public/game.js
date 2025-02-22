import { story } from './story.js';

const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');
let energy = 100;
let oxygen = 100;

function updateScene(sceneId) {
    const scene = story[sceneId];
    if (!scene) {
        storyText.innerHTML = "Ошибка: сцена не найдена.";
        choicesDiv.innerHTML = "";
        return;
    }

    // Проверка ресурсов перед отображением сцены
    if (energy <= 0 || oxygen <= 0) {
        renderScene(story["ending2"]); // Прямой рендеринг концовки без рекурсии
        return;
    }

    renderScene(scene);
}

function renderScene(scene) {
    // Обновляем текст с учётом ресурсов
    storyText.innerHTML = `${scene.text.replace(/\*(.*?)\*/g, '<span class="flicker">$1</span>')}<br><br>Энергия: ${energy}%. Кислород: ${oxygen}%.`;
    choicesDiv.innerHTML = "";

    // Добавляем кнопки для выборов
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => {
            // Уменьшаем ресурсы
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

    // Если выборов нет, это конец
    if (scene.choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.innerText = "Начать заново";
        restartButton.onclick = () => {
            energy = 100;
            oxygen = 100;
            updateScene('start');
        };
        choicesDiv.appendChild(restartButton);
    }
}

// Запускаем игру
updateScene('start');
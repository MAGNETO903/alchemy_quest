import { story } from './story.js';

const storyText = document.getElementById('story-text');
const choicesDiv = document.getElementById('choices');

function updateScene(sceneId) {
    const scene = story[sceneId];
    if (!scene) {
        storyText.innerHTML = "Ошибка: сцена не найдена.";
        choicesDiv.innerHTML = "";
        return;
    }

    // Отображаем текст сцены с эффектом мерцания для некоторых слов
    storyText.innerHTML = scene.text.replace(/\*(.*?)\*/g, '<span class="flicker">$1</span>');

    // Очищаем кнопки
    choicesDiv.innerHTML = "";

    // Добавляем кнопки для выборов
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice.text;
        button.onclick = () => updateScene(choice.next);
        choicesDiv.appendChild(button);
    });

    // Если выборов нет, это конец
    if (scene.choices.length === 0) {
        const restartButton = document.createElement('button');
        restartButton.innerText = "Начать заново";
        restartButton.onclick = () => updateScene('start');
        choicesDiv.appendChild(restartButton);
    }
}

// Запускаем игру
updateScene('start');
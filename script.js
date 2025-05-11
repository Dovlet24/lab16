// Функция для приветствия
function showGreeting() {
    const date = new Date();
    const hours = date.getHours();
    let greeting;
    
    if (hours < 12) {
        greeting = "Доброе утро";
    } else if (hours < 18) {
        greeting = "Добрый день";
    } else {
        greeting = "Добрый вечер";
    }
    
    // Добавление приветствия на страницу
    const container = document.querySelector('.container');
    const greetingElement = document.createElement('div');
    greetingElement.className = 'greeting';
    greetingElement.textContent = `${greeting}! Текущее время: ${date.toLocaleTimeString()}`;
    greetingElement.style.textAlign = 'center';
    greetingElement.style.marginTop = '20px';
    greetingElement.style.padding = '10px';
    greetingElement.style.backgroundColor = '#f0f8ff';
    greetingElement.style.borderRadius = '4px';
    
    container.appendChild(greetingElement);
}

// Выполнение функции после загрузки страницы
document.addEventListener('DOMContentLoaded', showGreeting); 
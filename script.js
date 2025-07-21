const btn = document.getElementById('runaway-btn');
const counter = document.getElementById('counter');
let attempts = 0;

// Пытаемся сделать клик
btn.addEventListener('click', () => {
    alert('Ага, поймал!');
    btn.style.transform = 'scale(1.1)';
    setTimeout(() => { btn.style.transform = 'scale(1)'; }, 200);
});

// Кнопка убегает при наведении
btn.addEventListener('mouseover', () => {
    attempts++;
    counter.textContent = `Попытки: ${attempts}`;
    
    // Случайные координаты (ограничены размерами окна)
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    
    // Анимация "испуга"
    btn.style.transform = 'rotate(5deg)';
    setTimeout(() => { btn.style.transform = 'rotate(-5deg)'; }, 100);
});

// Сброс анимации
btn.addEventListener('mouseout', () => {
    btn.style.transform = 'rotate(0)';
});
// Получаем элементы
const modal = document.getElementById("modal");
const portfoliomodal = document.getElementById("portfolio-modal");
const menuLinks = document.querySelectorAll('.menu-element__link');
const floatingButton = document.querySelector('.floating-button');
const menuButton = document.querySelector('.js-menu-button');
const hamburger = document.getElementById('hamburger');
const button = document.getElementById('menu-button');
const offset = 100; // Смещение для фиксированного меню

// Функция для переключения отображения модального окна
function toggleModal(modalElement, displayStyle) {
    modalElement.style.display = displayStyle;
}

// Обработчик для клика по кнопке
floatingButton.addEventListener('click', () => toggleModal(modal, "block"));

// Закрытие модального окна при клике вне его
window.addEventListener('click', (event) => {
    if (event.target === modal) toggleModal(modal, "none");
});

// Переключение отображения портфолио-модального окна
menuButton.addEventListener('click', () => {
    const displayStyle = portfoliomodal.style.display === "block" ? "none" : "block";
    toggleModal(portfoliomodal, displayStyle);
});









// Обработчик для портфолио-элементов
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', () => {
            const subList = item.querySelector('.sub-list');
            if (subList) {
                subList.style.display = subList.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

// Переключение классов для кнопок
[hamburger, button].forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('active'));
});



const images = document.querySelectorAll('.photo-grid img');
const modal23 = document.getElementById('modal23');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showImage(index) {
    currentIndex = index;
    modalImg.src = images[index].src;
    modal23.style.display = 'flex';
}

images.forEach((img, index) => {
    img.addEventListener('click', () => showImage(index));
});

closeBtn.addEventListener('click', () => {
    modal23.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
});

modal23.addEventListener('click', (e) => {
    if (e.target === modal23) {
        modal23.style.display = 'none';
    }
});

// Навигация с клавиатуры
document.addEventListener('keydown', (e) => {
    if (modal23.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextBtn.click();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'Escape') closeBtn.click();
    }
});
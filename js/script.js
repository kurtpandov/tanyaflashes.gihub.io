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

// Функция для проверки, находится ли элемент в области видимости
function isInViewport(section, scrollPosition) {
    return section.offsetTop - offset <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition;
}

// Функция для выделения активного элемента меню
function highlightMenu() {
    const scrollPosition = window.scrollY;

    menuLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (isInViewport(section, scrollPosition)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Функция для плавной прокрутки к секции
function smoothScrollToSection(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Добавляем обработчики событий для ссылок меню
menuLinks.forEach(link => link.addEventListener('click', smoothScrollToSection));

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', highlightMenu);

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


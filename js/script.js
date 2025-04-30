// Получаем элементы
const modal = document.getElementById("modal");
const portfoliomodal = document.getElementById("portfolio-modal");
const menuLinks = document.querySelectorAll('.menu-element__link');
const offset = 100; // Смещение для фиксированного меню


document.querySelector('.floating-button').addEventListener('click', function() {
    modal.style.display = "block";
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
document.querySelector('.menu-elementPortfolio').addEventListener('click', function() {
    if (portfoliomodal.style.display === "block"){
        portfoliomodal.style.display = "none";
    }
    else {
        portfoliomodal.style.display = "block";
    }
});


document.querySelector('.floating-button').addEventListener('click', function() {
    modal.style.display = "block";
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
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
    event.preventDefault(); // Отменяем стандартное поведение ссылки

    const targetSection = document.querySelector(this.getAttribute('href'));
    const elementPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

    // Плавная прокрутка к целевой позиции
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Добавляем обработчики событий
menuLinks.forEach(link => {
    link.addEventListener('click', smoothScrollToSection);
});

// Добавляем обработчик события прокрутки
window.addEventListener('scroll', highlightMenu);

document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            const subList = this.querySelector('.sub-list');
            if (subList) {
                subList.style.display = subList.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
});
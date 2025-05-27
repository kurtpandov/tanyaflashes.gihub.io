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
// Добавляем обработчик события прокрутки
window.addEventListener('scroll', highlightMenu);
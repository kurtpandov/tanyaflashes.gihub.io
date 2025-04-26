// Получаем элементы
const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementById("close");

document.querySelector('.floating-button').addEventListener('click', function() {
    modal.style.display = "block";
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

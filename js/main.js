const demoA = document.querySelectorAll('.demo');




demoA.forEach(function (i) {
    i.addEventListener('click',
        function () {
            alert("Извините. Вы нажали на кнопку демо.");

        });
});

// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Cоздаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// Отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
    // Отменяем стандартное поведение ссылки
    event.preventDefault();
    // Вешаем класс на меню, когда кликаем по кнопке меню
    menu.classList.toggle('visible');
})

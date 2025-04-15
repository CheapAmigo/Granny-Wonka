// Функция для динамической загрузки HTML-контента
function loadHTML(id, filename) {
    fetch(filename)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Ошибка загрузки:", error));
}

function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    console.log(menu); // Добавьте эту строку для проверки
    menu.classList.toggle("show");
}



// Загружаем секции
loadHTML("header", "header.html");
loadHTML("about", "about.html");
loadHTML("benefits", "benefits.html");
loadHTML("products", "products.html");
loadHTML("order", "order.html");

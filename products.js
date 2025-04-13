// Данные для модального окна товаров
const products = {
    'egg-on-stick': {
        title: 'Яйцо на палочке',
        description: 'Вкусное шоколадное яйцо на палочке.',
        price: '89₽',
        images: [
            'шоколадки/egg-on-stick1.jpg',
            'шоколадки/egg-on-stick2.jpg',
            'шоколадки/egg-on-stick3.jpg'
        ]
    },
    'sweet-box': {
        title: 'Сладкая коробочка',
        description: 'Коробочка с прозрачной крышкой, обвёрнута верёвочкой с авторской биркой. Внутри 4 съедобных элемента: 1 Мишка с цветочками; 2 Розочки; 1 Тройка маленьких бутонов.',
        price: '399₽',
        images: [
            'шоколадки/sweet-box.jpg'
        ]
    },
    'chocolate-set': {
        title: 'Шоколадное яйцо "набор"',
        description: 'Прозрачный пакетик, плотно перевязан верёвочкой. Состоит из: Пасхальное шоколадное яйцо; Съедобная шоколадная корзинка (под яйцом); Открытка к Пасхе.',
        price: '239₽',
        images: [
            'шоколадки/chocolate-set1.jpg',
            'шоколадки/chocolate-set2.jpg',
            'шоколадки/chocolate-set3.jpg'
        ]
    },

    'Fruit-chips': {
        title: 'Фруктовые чипсы',
        description: 'Прозрачный пакетик, плотно перевязан верёвочкой с авторской биркой. Состоит из: Яблочки, киви, лимон',
        price: '159₽',
        images: [
            'шоколадки/chips.jpg'
        ]
    }
    
};

// Открыть модальное окно для товара
function openModal(productId) {
    const product = products[productId];
    
    // Проверяем, что элементы существуют
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalPrice = document.getElementById('modal-price');
    const sliderContainer = document.querySelector('.modal-image-container');
    
    if (!modalTitle || !modalDescription || !modalPrice || !sliderContainer) {
        console.error("Не удалось найти элементы для модального окна");
        return;
    }

    // Настройка данных для модального окна
    modalTitle.innerText = product.title;
    modalDescription.innerText = product.description;
    modalPrice.innerText = product.price;
    
    // Инициализация слайдера (если изображений несколько)
    initializeSlider(product.images);

    // Показать модальное окно
    document.getElementById('modal').style.display = 'block';
}

// Закрыть модальное окно
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    resetSlider(); // Очистить слайдер при закрытии модального окна
}

// Инициализация слайдера
function initializeSlider(images) {
    const sliderContainer = document.querySelector('.modal-image-container');
    sliderContainer.innerHTML = ''; // Очистить контейнер с изображениями

    images.forEach((imgSrc, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = imgSrc;
        imgElement.classList.add('modal-image');
        imgElement.style.display = index === 0 ? 'block' : 'none'; // Показываем только первое изображение
        sliderContainer.appendChild(imgElement);
    });

    let slideIndex = 0;

    // Слушатели для кнопок "предыдущее" и "следующее"
    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex = (slideIndex === 0) ? images.length - 1 : slideIndex - 1;
        updateSlide(slideIndex);
    });

    document.querySelector('.next').addEventListener('click', () => {
        slideIndex = (slideIndex === images.length - 1) ? 0 : slideIndex + 1;
        updateSlide(slideIndex);
    });

    // Функция обновления слайда
    function updateSlide(index) {
        const allImages = document.querySelectorAll('.modal-image');
        allImages.forEach(img => img.style.display = 'none'); // Скрываем все изображения
        allImages[index].style.display = 'block'; // Показываем текущее изображение
    }
}

// Очистка слайдера при закрытии модального окна
function resetSlider() {
    const sliderContainer = document.querySelector('.modal-image-container');
    sliderContainer.innerHTML = ''; // Удаление всех изображений
    document.querySelector('.prev').removeEventListener('click', () => {});
    document.querySelector('.next').removeEventListener('click', () => {});
}

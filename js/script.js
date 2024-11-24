/*seção 4*/
document.addEventListener('DOMContentLoaded', function () {
    // Inicializar tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Inicializar Swiper
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 4,
        spaceBetween: 0,/*Espaço entre os cards */
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });
});

/*Conf da parte responsiva*/

document.addEventListener('DOMContentLoaded', function () {
    // Inicializar tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Inicializar Swiper com configurações responsivas
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1, // Padrão para telas menores
        spaceBetween: 15, // Espaço entre os slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        breakpoints: {
            // Tela pequena (>= 576px)
            576: {
                slidesPerView: 2,
            },
            // Tela média (>= 768px)
            768: {
                slidesPerView: 3,
            },
            // Tela grande (>= 1024px)
            1024: {
                slidesPerView: 4,
            },
        },
    });
});






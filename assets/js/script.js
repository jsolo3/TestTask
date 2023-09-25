let burgerMenuOpen = false;
let modalIsOpen = false;
const swiperData =  [
    {
        "id" : 1,
        "name": "Лёгкий, брусок",
        "weight" : "180 г",
        "src": "assets/images/slider/image-37.png"
    },
    {
        "id" : 2,
        "name": "Лёгкий, слайсы",
        "weight" : "120, 225 г",
        "src": "assets/images/slider/image-38.png"
    },
    {
        "id" : 3,
        "name": "Сливочный, брусок",
        "weight" : "200, 300 г",
        "src": "assets/images/slider/image-39.png"
    },
    {
        "id" : 4,
        "name": "Сливочный, слайсы",
        "weight" : "130, 250 г",
        "src": "assets/images/slider/image-40.png"
    },
    {
        "id" : 5,
        "name": "Лёгкий, брусок",
        "weight" : "180 г",
        "src": "assets/images/slider/image-37.png"
    },
    {
        "id" : 6,
        "name": "Лёгкий, слайсы",
        "weight" : "120, 225 г",
        "src": "assets/images/slider/image-38.png"
    },
    {
        "id" : 7,
        "name": "Сливочный, брусок",
        "weight" : "200, 300 г",
        "src": "assets/images/slider/image-39.png"
    },
    {
        "id" : 8,
        "name": "Сливочный, слайсы",
        "weight" : "130, 250 г",
        "src": "assets/images/slider/image-40.png"

    },
];

init();

function init() {
    // loadSwiperData();
    initSubscription();
    drawSwiperElements();
    swiperInit();
    
}

function initSubscription() {
    document.body.addEventListener('click', function(e) {
        if (!modalIsOpen) {
            return;
        } else if (event.target.classList.contains('window') === false) {
            closeWindow();
        }
    });
    document.body.addEventListener('click', function(e) {
        const button = document.getElementById("burger_toggle");
        const menu = document.getElementById("burger_main");

        if (!burgerMenuOpen) {
            return;
        } else if (event.target.classList.contains('burger_main') === false) {
            button.classList.remove('active');
            menu.classList.remove('active');
            burgerMenuOpen = false;
        }
    });
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos !== 0) {
            document.getElementById("burger_main").classList.remove('active'),
                document.getElementById("burger_toggle").classList.remove('active');
        }};
}

async function loadSwiperData() {
    // const res = (await fetch('C:/Users/user/Desktop/frontend/Test-task/assets/mock/slider-data.json')).json();
}

function drawSwiperElements() {
    const swiperDOM = document.querySelector(".swiper-wrapper");
    swiperData.forEach( el => {
        const div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = 
        `<div class="slider_img">
            <img src="${el.src}" alt="">
         </div>
         <div class="slider_suptitle">
            ${el.name}
         </div>
         <div class="slider_weight">
            ${el.weight}
         </div>`
         swiperDOM.append(div);
    })
    
}

function swiperInit() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        slidesPerView: 1.5,
        loop: true,

        direction: 'horizontal',
    
        //  pagination
        pagination: {
            el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.slider-button.next',
            prevEl: '.slider-button.prev',
        },
    
        spaceBetween: 15,

        breakpoints: {

            1240: {
                slidesPerView: 4,
                spaceBetween: 80,

                pagination: {
                    el: '.swiper-pagination',
                },
            },
    
            720: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            480: {
                slidesPerView: 2,
                spaceBetween: 25,
            }
        }
        
    });
}

function burgerMenuToggle () {
    const button = document.getElementById("burger_toggle");
    const menu = document.getElementById("burger_main");
    menu.classList.toggle("active");
    button.classList.toggle("active");
    setTimeout( () => burgerMenuOpen = true)
}

function openModalWindow () {
    const body = document.querySelector("body");
    let div = document.createElement("div")
    div.classList.add("modal_window")
    div.innerHTML = `<div class="window"></div>
    <div class="btn_div">
    <span onclick="closeWindow()" class="btn_close"></span></div>`
    body.append(div)
    body.style.overflow = "hidden"
    setTimeout( () => modalIsOpen = true);
}

function closeWindow () {
    const body = document.querySelector("body");
    const modal_window = document.querySelector(".modal_window");
    modal_window.remove()
    body.style.overflow = "visible"
    modalIsOpen = false;
}




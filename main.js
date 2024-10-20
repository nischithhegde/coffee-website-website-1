const menu_open_button=document.querySelector(".fa-bars");
const menu_close_button=document.querySelector(".fa-xmark");
const navLinks=document.querySelectorAll(".nav-menu .nav-link");

menu_open_button.addEventListener("click",function(){
    document.body.classList.toggle("show-mobile-menu");
});

menu_close_button.addEventListener("click",() => {
    menu_open_button.click();
});

navLinks.forEach(link => {
    link.addEventListener("click",() => menu_open_button.click());
});


const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },

        1024: {
            slidesPerView: 3
        }
    }
  });
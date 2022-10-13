var swiper = new Swiper(".slider-content",{
    slidesPreview: 4,
    spaceBetween:25,
    slidesPerGroup:4,
    loop:true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor:'true',
    pagination:{
        el: ".swiper-pagination",
        clickable: true,
        dynamicsBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints:{
      0: {
        slidesPreview:1,
      },
     520: {
        slidesPreview:2,
      },
      950: {
        slidesPreview:3,
      }
    }
});
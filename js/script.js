$('.banner_row').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow:false,
    nextArrow:false,
    mobileFirst:true,
  });
 AOS.init();

 // ===============menu bar fixed start=====================
let main_menu = document.querySelector('.menu_bar')
console.log(main_menu)
window.addEventListener('scroll', function () {
  let scrolling = this.scrollY
  if (scrolling > 100) {
    main_menu.classList.add('menu_fixed')
  } else {
    main_menu.classList.remove('menu_fixed')
  }
})


$('.about_slider_row').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-angle-left prev"></i>',
    nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
  });


  $('.counter').counterUp({
    delay: 10,
    time: 1000
});
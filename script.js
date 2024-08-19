const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 1000,
      reverseDirection : true,
      disableOnInteraction: false,
    },
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable : true,
    },
  
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
  
  });
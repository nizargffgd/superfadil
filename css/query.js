const swiper = new Swiper('.d', {
 
    loop: true,
    watchOverflow: false,

    initialSlide: 1,
    freeMode: true,
    

  

    navigation: {
      nextEl: '.next2',
      prevEl: '.prev2',
    },

   
    slidesPerView:2,
    spaceBetween:10,

    breakpoints:{
      320 :{
        slidesPerView:2,
        spaceBetween:10,

      },
      480:{
        slidesPerView:2,
        spaceBetween:10,
      },
      740:{
        slidesPerView:3,
        spaceBetween:10,
      },
      950:{
        slidesPerView:4,
        spaceBetween:10,
      },
      1156:{
        slidesPerView:6,
        spaceBetween:10,
      },
      1400:{
        slidesPerView:6,
        spaceBetween:10,
      },
    }
  
   
  });



  const Swipernum2 = new Swiper('.dd', {
 
    loop: true,
    watchOverflow: false,
    

    navigation: {
      nextEl: '.next1',
      prevEl: '.prev1',
    },
    slidesPerView:2,
    spaceBetween:10,

    breakpoints:{
      320 :{
        slidesPerView:1,
        spaceBetween:10,

      },
      480:{
        slidesPerView:1,
        spaceBetween:10,
      },
      640:{
        slidesPerView:1,
        spaceBetween:10,
      },
    }
  
   
  });



  const prswiper = new Swiper('.pr', {
 
    loop: true,
    watchOverflow: false,

    initialSlide: 1,
    freeMode: true,
    

  

    navigation: {
      nextEl: '.prnext',
      prevEl: '.prprev',
    },
    slidesPerView:2,
    spaceBetween:10,

    breakpoints:{
      320 :{
        slidesPerView:1,
        spaceBetween:10,

      },
      480:{
        slidesPerView:1,
        spaceBetween:10,
      },
      640:{
        slidesPerView:6,
        spaceBetween:10,
      },
    }
  
   
  });

 

export const slider = () => {
  const swiperTrainers = new Swiper('.trainers__slider', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.trainers__slider-button-next',
      prevEl: '.trainers__slider-button-prev',
    },

    watchSlidesProgress: true,
    slideVisibleClass: 'slider__slide--visible',
    simulateTouch: false,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  const swiperReviews = new Swiper('.reviews__slider', {
    direction: 'horizontal',

    navigation: {
      nextEl: '.reviews__slider-button-next',
      prevEl: '.reviews__slider-button-prev',
    },
  });

  if (window.matchMedia('(max-width: 1200px)').matches) {
    if (document.querySelectorAll('.trainers__item').length > 0) {
      const trainers = document.querySelectorAll('.trainers__item');

      trainers.forEach(item => {
        item.addEventListener('click', () => {
          item.classList.toggle('active');
        });
      });
    }
  }

  return {swiperTrainers, swiperReviews};
};

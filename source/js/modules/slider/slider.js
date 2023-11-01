import {swiper} from '../../vendor/swiper';

const slider = () => {
  const swiperTrainers = new Swiper('.trainers__slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      }
    }
  });

  const swiperReviews = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export {slider};
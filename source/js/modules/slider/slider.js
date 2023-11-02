import {swiper} from '../../vendor/swiper';

const slider = () => {
  const swiperTrainers = new Swiper('.trainers__slider', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

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
      }
    }
  });

  console.log(swiperTrainers)

  const swiperReviews = new Swiper('.reviews__slider', {
    direction: 'horizontal',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  console.log(swiperReviews)
};

export {slider};
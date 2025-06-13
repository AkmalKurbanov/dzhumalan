import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay], // достаточно только здесь
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination'
  },
  autoplay: {
    delay: 3000
  }
});

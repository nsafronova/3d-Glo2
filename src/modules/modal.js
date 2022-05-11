"use strict";
import {
   animate
} from './helpers';

const modal = () => {
   const modal = document.querySelector('.popup');
   const modalContent = document.querySelector('.popup-content');
   const buttons = document.querySelectorAll('.popup-btn');

   let width;

   buttons.forEach(btn => {
      btn.addEventListener('click', () => {
         if (width > 786) {
            animate({
               duration: 700,
               timing(timeFraction) {
                  return Math.pow(timeFraction, 2);
               },
               draw(progress) {
                  modalContent.style.top = (15 * progress) + '%';
                  modal.style.display = 'block';
               }
            });
         } else {
            modal.style.display = 'block';
         }
      });
   });

   const listenWidth = () => {
      window.addEventListener('resize', () => {
         width = document.documentElement.clientWidth;
      });
   };

   modal.addEventListener('click', (e) => {
      if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
         modal.style.display = 'none';
      }
   });

   listenWidth();
};

export default modal;
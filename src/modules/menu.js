"use strict";
const menu = () => {
   const menu = document.querySelector('menu');

   document.addEventListener('click', (e) => {
      let target = e.target;
      if (target.closest('.menu')) {
         menu.classList.toggle('active-menu');
         return;
      } else if (target.closest('a') || target.closest('close-btn') || !target.closest('menu')) {
         menu.classList.remove('active-menu');
      }

   });

};

export default menu;
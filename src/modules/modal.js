const modal = () => {
   const modal = document.querySelector('.popup');
   const modalContent = document.querySelector('.popup-content');
   const buttons = document.querySelectorAll('.popup-btn');

   let count = 0;
   let idInterval;
   let width;

   const animateOpen = () => {
      count++;
      idInterval = requestAnimationFrame(animateOpen);
      if (count < 15) {
         modalContent.style.top = count + '%';
      } else {
         cancelAnimationFrame(idInterval);
         count = 0;
      }
   };

   const openModal = () => {
      if (width < 786) {
         modal.style.display = 'block';
      } else {
         animateOpen();
         modal.style.display = 'block';
      }

   };

   buttons.forEach(btn => {
      btn.addEventListener('click', () => {
         openModal();

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
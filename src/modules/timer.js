const timer = (deadline) => {
   const timerHours = document.getElementById('timer-hours');
   const timerMinutes = document.getElementById('timer-minutes');
   const timerSeconds = document.getElementById('timer-seconds');

   const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemaining = (dateStop - dateNow) / 1000;
      let hours = Math.floor((timeRemaining / 60 / 60));
      let minutes = Math.floor((timeRemaining / 60) % 60);
      let seconds = Math.floor(timeRemaining % 60);

      return {
         timeRemaining,
         hours,
         minutes,
         seconds
      };
   };

   const updateClock = () => {
      let getTime = getTimeRemaining();
      if (getTime.timeRemaining > 0) {
         timerHours.textContent = getZero(getTime.hours);
         timerMinutes.textContent = getZero(getTime.minutes);
         timerSeconds.textContent = getZero(getTime.seconds);
      }

   };
   setInterval(updateClock, 1000);

   const getZero = (num) => {
      if (num >= 0 && num < 10) {
         return '0' + num;
      } else {
         return num;
      }
   };
};

export default timer;
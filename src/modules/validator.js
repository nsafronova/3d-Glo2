"use strict";
const validator = () => {

   const inputCalc = document.querySelectorAll('.calc-block input');
   const inputText = document.querySelectorAll('[name="user_name"]');
   const inputEmail = document.querySelectorAll('[type="email"]');
   const inputPhone = document.querySelectorAll('[type="tel"]');

   inputCalc.forEach((input) => {
      input.addEventListener('input', (e) => {
         e.target.value = e.target.value.replace(/\D+/, '');
      });
   });


   inputText.forEach((e) => {
      e.addEventListener('input', (e) => {
         e.target.value = e.target.value.match(/[а-я-]+/gi);
      });
   });


   inputEmail.forEach((e) => {
      e.addEventListener('input', (e) => {
         e.target.value = e.target.value.match(/[a-z0-9@-_.!~*']+/gi);
      });
   });


   inputPhone.forEach((e) => {
      e.addEventListener('input', (e) => {
         e.target.value = e.target.value.match(/[0-9-()]+/gi);
      });
   });

};

export default validator;
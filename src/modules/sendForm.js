'use strict';
const sendForm = ({
   formId,
   someElem = []
}) => {
   const form = document.querySelector(`#${formId}`);
   const statusBlock = document.createElement('div');
   const loadText = 'Загрузка..';
   const errorText = 'Ошибка';
   const successText = 'Спасибо! Наш менеджер свяжется с Вами!';

   const inputPhone = form.querySelector('[name="user_phone"]');
   const inputName = form.querySelector('[name="user_name"]');
   const inputMessage = document.querySelectorAll('[name="user_message"]');
   const inputEmail = form.querySelector('[name="user_email"]');

   inputPhone.addEventListener('input', (e) => {
      if (e.target.value.match(/[0-9-()]+/gi)) {
         e.target.classList.add('success');
      } else {
         e.target.classList.add('error');
      }
   });

   inputName.addEventListener('input', (e) => {
      if (e.target.value.match(/[а-я -]+/gi)) {
         e.target.classList.add('success');
      } else {
         e.target.classList.add('error');
      }
   });

   inputMessage.forEach((e) => {
      e.addEventListener('input', (e) => {
         if (e.target.value.match(/[а-я -0-9,:;.]+/gi)) {
            e.target.classList.add('success');
         } else {
            e.target.classList.add('error');
         }
      });
   });


   inputEmail.addEventListener('input', (e) => {
      if (e.target.value.match(/[a-z0-9@-_.!~*']+/gi)) {
         e.target.classList.add('success');
      } else {
         e.target.classList.add('error');
      }
   });

   const validate = (list) => {
      let success = true;

      list.forEach(input => {

         if (!input.classList.contains('success') && input.classList.contains('error')) {
            success = false;
         }
      });
      return success;
   };

   const sentData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-Type': 'application/json'
         }

      }).then(res => res.json());
   };

   const clearClasses = () => {
      inputMessage.forEach((e) => {
         e.classList.remove('success');
         e.classList.remove('error');
      });

   };

   const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};

      statusBlock.textContent = loadText;
      form.append(statusBlock);

      formData.forEach((val, key) => {
         formBody[key] = val;
      });

      someElem.forEach((elem) => {
         const element = document.getElementById(elem.id);
         if (elem.type === "block" && element.textContent !== "0") {
            formBody[elem.id] = element.textContent;
         } else if (elem.type === "input" && element.value !== 0) {
            formBody[elem.id] = element.value;
         }
      });


      if (validate(formElements)) {
         sentData(formBody)
            .then((data) => {
               formElements.forEach(input => {
                  input.value = '';
                  statusBlock.textContent = successText;
               });
            })
            .catch((error) => {
               statusBlock.textContent = errorText;
            });
      } else {
         alert('Данные не валидны!');
         formElements.forEach(input => {
            input.value = '';
            statusBlock.textContent = '';
         });
      }
   };

   try {
      if (!form) {
         throw new Error('Пожалуйста, верните форму)');
      }

      form.addEventListener('submit', (e) => {
         e.preventDefault();
         submitForm();
         clearClasses();
      });

   } catch (error) {
      console.log(error.message);
   }
};

export default sendForm;
'use strict';
const sendForm = ({
   formId,
   someElem = []
}) => {
   const form = document.getElementById(formId);
   const statusBlock = document.createElement('div');
   const loadText = 'Загрузка..';
   const errorText = 'Ошибка';
   const successText = 'Спасибо! Наше менеджер свяжется с Вами!';

   const inputPhone = document.querySelectorAll('[name="user_phone"]');
   const inputName = document.querySelectorAll('[name="user_name"]');
   const inputMessage = document.querySelectorAll('[name="user_message"]');
   const inputEmail = document.querySelectorAll('[name="user_email"]');


   inputPhone.forEach((e) => {
      e.addEventListener('input', (e) => {
         if (e.target.value.match(/[0-9-()]+/gi)) {
            e.target.classList.add('success');
            console.log(inputPhone);
         } else {
            e.target.classList.add('error');
         }
      });
   });

   inputName.forEach((e) => {
      e.addEventListener('input', (e) => {
         if (e.target.value.match(/[а-я -]+/gi)) {
            e.target.classList.add('success');
         } else {
            e.target.classList.add('error');
         }
      });
   });

   inputMessage.forEach((e) => {
      e.addEventListener('input', (e) => {
         console.log(inputMessage);
         if (e.target.value.match(/[а-я -0-9,:;.]+/gi)) {
            e.target.classList.add('success');
         } else {
            e.target.classList.add('error');
         }
      });
   });

   inputEmail.forEach((e) => {
      e.addEventListener('input', (e) => {
         console.log(inputMessage);
         if (e.target.value.match(/[a-z0-9@-_.!~*']+/gi)) {
            e.target.classList.add('success');
         } else {
            e.target.classList.add('error');
         }
      });
   });

   const validate = (list) => {
      let success = true;

      list.forEach(input => {
         console.log(input);
         if (!input.classList.contains('success')) {
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
      inputMessage.forEach(input => {
         input.classList.remove('success');
         input.classList.remove('error');
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

      someElem.forEach(elem => {
         const element = document.getElementById(elem.id);
         if (elem.type === 'input') {
            formBody[elem.id] = element.value;
         } else if (elem.type === 'block') {
            formBody[elem.id] = element.textContent;
         }
      });
      console.log('submit');

      if (validate(formElements)) {
         sentData(formBody)
            .then(data => {
               formElements.forEach(input => {
                  input.value = '';
                  statusBlock.textContent = successText;
               });
            })
            // .then(() => {
            //    input.forEach.classList.remove('success');
            // })
            .catch(error => {
               formElements.forEach(input => {
                  input.value = '';
                  statusBlock.textContent = errorText;
               });
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
         throw new Error('пожалуйста, верните форму)');
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
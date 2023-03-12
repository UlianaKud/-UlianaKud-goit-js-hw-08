import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageText = document.querySelector('textarea');
const FORM_KEY = 'feedback-form-state';


let formData = {};
formFilling();

feedbackForm.addEventListener('input', throttle(onFormInput, 500));

feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(event) {
  console.log(event.target.value);
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log({ ...formData });
  event.target.reset();
  localStorage.removeItem(FORM_KEY);
}

function formFilling() {
  const savedMessage = JSON.parse(localStorage.getItem(FORM_KEY));

  if (savedMessage) {
    emailInput.value = savedMessage.email;
    messageText.value = savedMessage.message;
    formData = savedMessage;
  }
}

import emailjs from 'emailjs-com'
import apiKeys from './apikeys'
import{ init } from 'emailjs-com';
init("user_MF6O9xXb4AoxZRYkgc6OK");
const sendEmail = e => {
    e.preventDefault()
 
    emailjs
    .sendForm('service_2v6qbgk', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
}

const form = document.querySelector('.form')
form.addEventListener('submit',sendEmail)
import emailjs from 'emailjs-com'
import apiKeys from './apikeys'
import{ init } from 'emailjs-com';
init("user_MF6O9xXb4AoxZRYkgc6OK");
const sendEmail =()  => {
    
 
    emailjs
    .sendForm('service_2v6qbgk', apiKeys.TEMPLATE_ID, null, apiKeys.USER_ID)
    .then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
}

sendEmail()
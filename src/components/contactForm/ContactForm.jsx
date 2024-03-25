import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('portfolio_mail', 'portfolio_contact', form.current, {
        publicKey: '1wp-9B4m2d2WtnBiv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <p className='contactForm__title'> ENVOYER UN MAIL </p>
      <div className='contactForm__content'>
        <input className='contactForm__content--input' type="text" name="user_name" placeholder='NOM'/>
        <input className='contactForm__content--input' type="email" name="user_email" placeholder='EMAIL'/>
        <textarea className='contactForm__content--input' name="message" placeholder='MESSAGE'/>
        <input className='contactForm__content--input button' type="submit" value="ENVOYER" />
      </div>
    </form>
  );
};

export default Form;
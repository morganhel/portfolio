import React, { useRef } from 'react';
import {useState} from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();

  const [nom, setNom]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');

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

    alert('Message envoyé avec succés');

    setNom('');setEmail('');setMessage('');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <h3 className='contactForm__title'> ENVOYER UN MAIL </h3>
      <div className='contactForm__content'>
        <input className='contactForm__content--input' type="text" name="user_name" placeholder='NOM' value={nom} onChange={(e)=>setNom(e.target.value)} required/>
        <input className='contactForm__content--input' type="email" name="user_email" placeholder='EMAIL' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <textarea className='contactForm__content--input' name="message" placeholder='MESSAGE' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
        <input className='contactForm__content--input button' type="submit" value="ENVOYER" />
      </div>
    </form>
  );
};

export default Form;
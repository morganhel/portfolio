import React, { useRef } from 'react';
import {useState} from 'react';
import emailjs from '@emailjs/browser';

function Form() {
  const form = useRef();

  const [nom, setNom]=useState('');
  const [email, setEmail]=useState('');
  const [message, setMessage]=useState('');
  const [offre, setOffre]=useState('');

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

    setNom('');setEmail('');setMessage('');setOffre('');
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <h3 className='contactForm__title'> PRENEZ CONTACT ! </h3>
      <div className='contactForm__content'>
        <input className='contactForm__content--input' type="text" name="nom" placeholder='NOM' value={nom} onChange={(e)=>setNom(e.target.value)} required/>
        <input className='contactForm__content--input' type="email" name="email" placeholder='EMAIL' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        <select className='contactForm__content--input' name="offre"  value={offre} onChange={(e)=>setOffre(e.target.value)}>
          <option>CREATION</option>
          <option>MAINTENANCE</option>
          <option>OPTIMISATION</option>
          <option>CONTACT</option>
        </select>
        <textarea className='contactForm__content--input' name="message" placeholder='MESSAGE' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
        <input className='contactForm__content--input button' type="submit" value="ENVOYER" />
      </div>
    </form>
  );
};

export default Form;
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [offre, setOffre] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!nom || !email || !message || !offre) {
      setError("Merci de remplir tous les champs obligatoires.");
      return;
    }

    emailjs
      .sendForm('portfolio_mail', 'portfolio_contact', form.current, '1wp-9B4m2d2WtnBiv')
      .then(() => {
        setError('');
        setShowSuccessModal(true);
        setNom('');
        setEmail('');
        setOffre('');
        setMessage('');
      })
      .catch(() => {
        setError("Une erreur est survenue. Merci de réessayer.");
      });
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h3 className="contact-form__title">Prenez contact !</h3>

        <div className="contact-form__fields">
          <input
            type="text"
            name="nom"
            placeholder="Votre nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select
            name="offre"
            value={offre}
            onChange={(e) => setOffre(e.target.value)}
            required
          >
            <option value="">Choisissez une offre</option>
            <option value="CREATION">Création</option>
            <option value="MAINTENANCE">Maintenance</option>
            <option value="OPTIMISATION">Optimisation</option>
            <option value="CONTACT">Autre demande</option>
          </select>
          <textarea
            name="message"
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          {error && <p className="error-message">{error}</p>}

          <input type="submit" value="Envoyer" className="button submit" />
        </div>
      </form>

      {showSuccessModal && (
        <div className="modal-confirm__overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal-confirm__content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-confirm__close" onClick={() => setShowSuccessModal(false)}>×</button>
            <h3>Merci pour votre message ✨</h3>
            <p>Je vous recontacte très vite par mail ou téléphone.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;

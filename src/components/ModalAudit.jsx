import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function ModalAudit({ show, onClose }) {
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    numero: '',
    site: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'portfolio_mail', // Remplace par ton service ID EmailJS
      'audit', // Remplace par ton template ID EmailJS
      formData,
      '1wp-9B4m2d2WtnBiv' // Remplace par ta public key EmailJS
    ).then(() => {
      setSubmitted(true);
      setError(false);
    }).catch(() => {
      setError(true);
    });
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className="modal-audit__overlay">
      <div className="modal-audit__content" ref={modalRef}>
        <button className="modal-audit__close" onClick={onClose}>×</button>
        {submitted ? (
          <div className="modal-audit__success">
            <h3>Merci pour votre demande !</h3>
            <p>Je reviendrai vers vous rapidement avec un retour personnalisé. ☺️</p>
          </div>
        ) : (
          <>
            <h3>Demandez votre audit gratuit</h3>
            <form onSubmit={handleSubmit} className="modal-audit__form">
              <input type="text" name="name" placeholder="Votre nom" required onChange={handleChange}/>
              <input type="email" name="email" placeholder="Votre email" required onChange={handleChange}/>
              <input type="tel" name="phone" placeholder="Votre numéro" onChange={handleChange}/>
              <input type="url" name="website" placeholder="Adresse de votre site" required onChange={handleChange} />
              <button type="submit">Envoyer ma demande</button>
              {error && <p className="error">Une erreur est survenue, merci de réessayer.</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ModalAudit;

import React, {useState} from 'react';
import ModalMentions from '../modalMentions/modalMentions';

function Footer() {
    const [showModal, setShowModal]=useState(false);
    const handleClick = () => {setShowModal(true)};
    const closeModal = () => {setShowModal(false)}; 

    return (
        <footer className='footer'>
            <p className='footer__txt'>© 2024 Morgan HELEINE.</p>
            <p className='footer__txt'>Tous droits réservés.</p>
            <div onClick={handleClick}> 
                <p className='footer__txt footer__txt--button'>Mentions Légales </p>
            </div>
            {showModal && <ModalMentions onClose={closeModal} />}
    
        </footer>
    )
}

export default Footer
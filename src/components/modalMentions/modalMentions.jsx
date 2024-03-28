import React, {useRef} from "react";

function ModalMentions({onClose}) {
    const modalRef = useRef();
    const handleCloseModal = (e) => {
        if (modalRef.current === e.target){
            onClose();
        }
    };

    return(
        <div className="modal" onClick={handleCloseModal} ref={modalRef}>
            <div className="modal__content">
                <span className="modal__content--close" onClick={onClose}>x</span>
                <h2 className="modal__content--title">MENTIONS LEGALES</h2>
                <div className="modal__content--txt">
                    <div className="modal__content--paragraph">
                        <p>Ce site est édifié par HELEINE Morgan</p>
                        <p>Email : morgan.heleine@gmail.com</p>
                        <p>Hebergeur du site : HOSTINGER INTERNATIONAL LTD <br />Siège social : 61 Lordou Vironos Street, 6023 Larnaca, Chypre <br />Contact : https://wwwhostingerfr/contact</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Propriété intellectuelle </h3>
                        <p>L’ensemble des éléments figurant sur ce site (textes, images, vidéos, code source, etc.) sont protégés par les dispositions du Code de la propriété intellectuelle. Toute reproduction, représentation, modification, publication, transmission ou dénaturation, totale ou partielle, du contenu du site, par quelque procédé que ce soit, et sur quelque support que ce soit, est interdite. </p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Droits d’auteur </h3>
                        <p>Tous les droits d’auteur relatifs au contenu de ce site sont réservés. Sauf autorisation écrite préalable, toute reproduction ou utilisation du contenu du site, même partielle, à des fins commerciales ou non, est strictement interdite. </p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Responsabilité</h3>
                        <p>L’utilisateur reconnaît utiliser ce site sous sa responsabilité exclusive. HELEINE Morgan décline toute responsabilité quant à l’exactitude, l’exhaustivité ou la pertinence des informations contenues sur ce site. HELEINE Morgan ne saurait être tenue responsable des dommages directs ou indirects résultant de l’utilisation du site ou de son contenu.</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Liens externes</h3>
                        <p>Ce site peut contenir des liens vers des sites tiers. HELEINE Morgan décline toute responsabilité concernant le contenu de ces sites tiers et les éventuels dommages qu’ils pourraient causer</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Contact</h3>
                        <p>Pour toute question ou préoccupation concernant ce site ou son contenu, veuillez nous contacter à l’adresse e-mail suivante : morgan.heleine@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalMentions;
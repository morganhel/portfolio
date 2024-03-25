import React, {useRef} from "react";

function Modal({onClose,title,client,besoin,mission,details}) {
    const paragraphes=details.split('\n\n');
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
                <h2 className="modal__content--title">{title}</h2>
                <div className="modal__content--txt">
                    <div className="modal__content--paragraph">
                        <h3>Client</h3>
                        <p>{client}</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Besoin</h3>
                        <p>{besoin}</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Mission</h3>
                        <p>{mission}</p>
                    </div>
                    <div className="modal__content--paragraph">
                        <h3>Travail effectué</h3>
                        {paragraphes.map((paragraphe,index) => (
                            <p key={index}>{paragraphe}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
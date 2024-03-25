import React, {useState} from 'react';
import logoGit from '../../assets/images/logo_github.png';
import Modal from '../modal/Modal';


function Card({img,title,client,besoin,mission,details,repo}) {
    const [showModal, setShowModal]=useState(false);
    const handleClick = () => {setShowModal(true)};
    const closeModal = () => {setShowModal(false)};

    return (
        <>
        <article className="card" onClick={handleClick}>
            <div className='card__top'>
                <img className='card__top--img' src={img} alt='apercu du site'/>
                <a href={repo}>
                    <img className='card__top--logo' src={logoGit} alt='logo Github' />
                </a>
            </div>
            <div className='card__bottom'>
            <h3>{title}</h3>
            <p>Ma mission : {mission}</p>
            </div>
        </article>
        {showModal && <Modal onClose={closeModal} title={title} img={img} client={client} besoin={besoin} mission={mission} details={details}/>}
        </>
    )
}


export default Card
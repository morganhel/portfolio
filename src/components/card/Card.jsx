import React, {useState} from 'react';
import logoGit from '../../assets/images/Logo/github.webp';
import Modal from '../modal/Modal';
import Thumbnail from '../thumbnail/Thumbnail'


function Card({img,title,client,besoin,mission,details,repo}) {
    const [showModal, setShowModal]=useState(false);
    const handleClick = () => {setShowModal(true)};
    const closeModal = () => {setShowModal(false)};

    return (
        <>
        <article className="card">
            <div className='card__content'>
                <h3 className='card__content--title'>{title}</h3>
                <p className='card__content--txt'>{client}</p>
                <p className='card__content--txt'>Son besoin : <br />{besoin}</p>
                <div className='card__content--buttons'>
                    <button className='card__content--buttons--details' onClick={handleClick}>Le projet en détails</button>
                    <a href={repo}>
                    <Thumbnail logo={logoGit} name='repo github' />
                    {/* <img className='card__top--logo' src={logoGit} alt='logo Github' /> */}
                    </a>
                </div>
            </div>
            <img className='card__img' src={img} alt='apercu du site'/>
        </article>
        {showModal && <Modal onClose={closeModal} title={title} img={img} client={client} besoin={besoin} mission={mission} details={details}/>}
        </>
    )
}


export default Card
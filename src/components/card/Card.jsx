import React, {useState} from 'react';
import logoGit from '../../assets/images/logo_github.png';
import Modal from '../modal/Modal';
import Thumbnail from '../thumbnail/Thumbnail'


function Card({img,title,client,besoin,mission,details,repo}) {
    const [showModal, setShowModal]=useState(false);
    const handleClick = () => {setShowModal(true)};
    const closeModal = () => {setShowModal(false)};

    return (
        <>
        <article className="card">
            <div className='card__top'>
                <img className='card__top--img' src={img} alt='apercu du site'/>
                <a href={repo}>
                    <Thumbnail logo={logoGit} name='repo github' />
                    {/* <img className='card__top--logo' src={logoGit} alt='logo Github' /> */}
                </a>
            </div>
            <div className='card__bottom'   onClick={handleClick}>
                <div  className='card__bottom--txt'>
                    <h3>{title}</h3>
                    <p>Ma mission : {mission}</p>
                </div>
                <p className='card__bottom--plus'>+</p>
            </div>
        </article>
        {showModal && <Modal onClose={closeModal} title={title} img={img} client={client} besoin={besoin} mission={mission} details={details}/>}
        </>
    )
}


export default Card
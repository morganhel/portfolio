import React from 'react';
import { ReactTyped} from "react-typed";
import BigLogoW from "../../assets/images/MyLogo/LOGOCARRE.svg"

function Banner(){
    return(
        <section className='banner'>
            <div className='banner__logo'>
                <img className='banner__logo--img' src={BigLogoW} alt='MorganH-dev Logo'/>
            </div>
            <div className='banner__content'>
                <h1  className='banner__content--title'>Bienvenue, je suis Morgan Développeuse web ! </h1>
                <div className='banner__content--txt'>
                <ReactTyped 
                    strings={["Votre partenaire de confiance pour la création de votre site vitrine. <br /> <br /> Ensemble, nous pouvons créer un site web qui reflète vraiment l’essence de votre entreprise. <br /> <br /> Prêt à démarrer cette aventure avec moi ? Explorez mes services des maintenant !"]}
                    typeDelay={30}
                    typeSpeed={30}
                    cursorChar="|"
                    showCursor={true}
                    delay={30}
                    style={{
                        fontFamily: 'Courier New',
                        fontSize: '20px',
                        fontWeight: '50',
                        color:'#9d97cf'
                    }}
                />
                </div>
            </div>
        </section>
    )
}

export default Banner;
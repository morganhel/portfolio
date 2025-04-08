import React from 'react';
import { ReactTyped} from "react-typed";
import BigLogoW from "../../assets/images/MyLogo/LOGOCARRE.webp"

function Banner(){
    return(
        <section className='banner'>
            <div className='banner__logo'>
                <img className='banner__logo--img' src={BigLogoW} alt='MorganH-dev Logo'/>
            </div>
            <div className='banner__content'>
                <h1  className='banner__content--title'>Bienvenue, moi c'est Morgan ! </h1>
                <div className='banner__content--txt'>
                <ReactTyped 
                    strings={["Développeuse web et créatrice de sites vitrines sur-mesure  <br /> <br /> Je vous accompagne avec cœur et simplicité dans la création (ou la transformation) de votre site vitrine. <br /> <br />Prêt à démarrer cette aventure avec moi ? Explorez mes services des maintenant !"]}
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
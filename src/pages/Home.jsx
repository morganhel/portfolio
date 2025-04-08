import React from 'react';
import Banner from '../components/banner/Banner';
import Header from '../components/header/Header';
import Me from '../assets/images/Me-min.webp';
import Card from '../components/card/Card';
import Projets from '../data/projets.json';
import Skills from '../data/skills.json';
import Thumbnail from '../components/thumbnail/Thumbnail';
import ContactForm from '../components/contactForm/ContactForm';
import Linkedin from '../assets/images/Logo/linkedin.webp';
import OfferCard from '../components/offercard/OfferCard';
import Offres from '../data/offres.json';
import ScrollTo from '../hook/ScrollTo';
import CV from '../assets/pdf/CV.pdf'

function Home() {
  // const location = useLocation();

  // useEffect(()=>{
  //   const hash  = location.hash;
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       element.scrollIntoView({behavior: "instant"});
  //     }
  //   }
  // }, [location]);

  ScrollTo();

  return (
    <>
    <Banner />
    
    <main>
      <Header />
      <section className='presentation' id='presentation'>
        <h2>A PROPOS</h2>
        <div className='presentation__content'>
          <img className='presentation__content__photo' src={Me} alt="Morgan" />
          <div className='presentation__content__txt'>
            <p>Je m'appelle Morgan <strong>créatrice de sites vitrines</strong> passionnée et engagée !</p>
            <p>J'accompagne les entrepreneur.euse.s, artisan.e.s et les petites structure dans la création d'une présence en ligne authentique, alignée avec leurs valeurs.</p>
            <p>Je me suis reconvertie dans le développement web après être devenue maman, animée par l’envie de redonner du sens à ma vie pro et de créer avec cœur.</p>
            <p>Envie d’en savoir plus sur mon parcours ? Consultez mon {''}
              <a href={CV} className='link' target="_blank" rel="noreferrer">CV</a></p>
            </div>
        </div>
        <p className='presentation__details presentation__details--color'>Mon approche ? De la proximité, de l’écoute et des solutions sur mesure, pour que votre site reflète pleinement votre identité et vos ambitions.</p>
        <p  className='presentation__details'>Un projet en tête ? <a href="../#contact"  className='link'>Contactez-moi</a>, je serai ravie d’en discuter avec vous.</p>
      </section>
      <section className='offres' id='offres'>
        <h2 className='offres__title'>MES SERVICES</h2>
        <div className='offres__content'>
        {Offres.map((offre)=>{
            return (
              <OfferCard 
                key={offre.title} 
                img={offre.img}
                title={offre.title} 
                txt1={offre.txt1}
                txt2={offre.txt2}
                txt3={offre.txt3}
                page={offre.page}
              />
            )
          })}
          </div>
      </section>
      {/* <section className='realisations' id='realisations'>
        <h2>MES DERNIERS PROJETS</h2>
        <div className='realisations__content'>
          {Projets.map((projet)=>{
            return (
              <Card 
                key={projet.title} 
                title={projet.title} 
                client={projet.client}
                besoin={projet.besoin}
                mission={projet.mission} 
                details={projet.details}
                img={projet.img} 
                repo={projet.repo} />
            )
          })}
        </div>
        <button className='realisations__button'>VOIR PLUS DE PROJETS</button>
      </section> */}
      {/* <section className='competences' id='competences'>
        <h2>MES COMPETENCES</h2>
        <div className='competences__content'>
          <div className='competences__content--hardSkills'>
            <h3>hard skills</h3>
            <div className='competences__content--hardSkills--grid'>
            {Skills.map((skill)=>{
              return (
                <Thumbnail logo={skill.logo} name={skill.name} />
              )
            })}
            </div>
          </div>
          <div className='competences__content--softSkills'>
            <h3>soft skills</h3>
            <ul className='competences__content--softSkills--grid'>
                <li>Adaptabilité</li>
                <li>Autonomie</li>
                <li>Créativité</li>
                <li>Ingéniosité</li>
                <li>Proactivité</li>
                <li>Méticulosité</li>
                <li>Sociabilité</li>
            </ul>
          </div>
        </div>
      </section> */}
      <section className='contact' id='contact'>
        <h2>CONTACT</h2>
        <div className='contact__content'>
          <ContactForm />
          <div className='contact__content--link'>
            <h3>Retrouvez moi ici ↓ </h3>
            <a href="https://github.com/morganhel">
              <Thumbnail logo={Skills[7].logo} name={Skills[7].name}/>
            </a>
            <a href='https://www.linkedin.com/in/morgan-heleine-230a13138/'>
              <Thumbnail logo={Linkedin} name='LINKEDIN'/>
            </a>
          </div>
        </div>

      </section>
    </main>
    </>
  );
}

export default Home;

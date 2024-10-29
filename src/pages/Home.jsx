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
    {/* <Banner /> */}
    
    <main>
      <Header />
      <section className='presentation' id='presentation'>
        <h2>UN PEU DE MOI</h2>
        <div className='presentation__content'>
          <img className='presentation__content__photo' src={Me} alt="Morgan" />
          <div className='presentation__content__txt'>
            <p>Je m'appelle Morgan et je suis ravie de vous rencontrer ici. 
            <br />En tant que jeune maman, j'ai entrepris un changement de parcours professionnel pour me recentrer et me reconnecter avec moi-même. C'est ainsi que j'ai redécouvert ma passion pour le développement web. </p>
            <p>Si vous souhaitez en savoir un peu plus sur mon parcours et mes compétences, on se retrouve juste ici →</p>
            <p>Je suis une <strong>créatrice de sites vitrines</strong> passionnée, spécialisée dans la création de présences en ligne percutantes pour les entrepreneurs et les petites entreprises. Mon objectif est de vous aider à vous démarquer sur le web et à atteindre vos objectifs commerciaux. </p>
            <p>Que vous soyez un entrepreneur en herbe ou une petite entreprise établie, je suis là pour vous accompagner à chaque étape du processus, de la conception à la mise en ligne. Je crois fermement que chaque entreprise mérite une présence en ligne professionnelle et je suis là pour vous aider à la réaliser. </p>
            </div>
        </div>
        <p className='presentation__details presentation__details--color'>Si vous recherchez une approche personnalisée, une collaboration étroite et des résultats à la hauteur de vos attentes, je suis là pour vous aider à concrétiser vos ambitions en ligne.</p>
        <p  className='presentation__details'>N'hésitez pas à me contacter pour discuter de votre projet et commencer cette belle aventure ensemble !</p>
        <div>
          <p>contact</p>
        </div>

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
      <section className='realisations' id='realisations'>
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
      </section>
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

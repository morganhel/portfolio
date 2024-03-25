import React from 'react';
import Me from '../assets/images/Me.jpg';
import Card from '../components/card/Card';
import Projets from '../data/projets.json';
import Skills from '../data/skills.json';
import Thumbnail from '../components/thumbnail/Thumbnail';
import ContactForm from '../components/contactForm/ContactForm';
import Linkedin from '../assets/images/Logo/linkedin.webp'

function Home() {
  return (
    <main>
      <section className='presentation' id='presentation'>
        <h2>PRESENTATION</h2>
        <div className='presentation__content'>
          <img className='presentation__content__photo' src={Me} alt="Morgan"/>
          <div className='presentation__content__txt'>
            <p className='presentation__content__txt--bold'>Bonjour, je suis MORGAN HELEINE 
            <br />DEVELOPPEUR FRONT-END</p>
            <p>En 2022, je suis devenu maman. Et depuis ma vision de ma vie a changé
            <br />Je me suis consacrée à ma casquette de maman plusieurs mois,
            <br />ce qui m&apos;a donné le temps de réfléchir à mon &quot;dream job&quot; :
            <br />DEVELOPPEUR FULL STACK FREELANCE
            <br />Pour arriver à celui-ci dans quelques années, 
            <br />j&apos;ai entamé la formation diplômante &quot;Intégrateur Web&quot; d&apos;Open Classrooms</p>
            <p>Voici <a>mon CV</a> pour entrevoir ma quête du &quot;dream job&quot;.</p>
          </div>
        </div>
      </section>
      <section className='realisations' id='realisations'>
        <h2>REALISATIONS</h2>
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
      </section>
      <section className='competences' id='competences'>
        <h2>COMPETENCES</h2>
        <div className='competences__content'>
          <div className='competences__content--hardSkills'>
            <h3>HARD SKILLS</h3>
            <div className='competences__content--hardSkills--grid'>
            {Skills.map((skill)=>{
              return (
                <Thumbnail logo={skill.logo} name={skill.name} />
              )
            })}
            </div>
          </div>
          <div className='competences__content--softSkills'>
            <h3>SOFT SKILLS</h3>
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
      </section>
      <section className='contact' id='contact'>
        <h2>CONTACT</h2>
        <div className='contact__content'>
          <ContactForm />
          <div className='contact__content--link'>
            <h3>RETROUVEZ MOI SUR </h3>
            <a href="https://github.com/morganhel">
              <Thumbnail logo={Skills[8].logo} name={Skills[8].name}/>
            </a>
            <a href='https://www.linkedin.com/in/morgan-heleine-230a13138/'>
              <Thumbnail logo={Linkedin} name='LINKEDIN'/>
            </a>
          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;

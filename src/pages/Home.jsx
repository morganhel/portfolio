import React from 'react';
import Me from '../assets/images/Me.jpg';
import Card from '../components/card/Card';
import Projets from '../data/projets.json';
import Skills from '../data/skills.json';
import Skill from '../components/skill/Skill';

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
              <Card key={projet.title} title={projet.title} txt={projet.description.mission} img={projet.img} repo={projet.repo} />
            )
          })}
        </div>
      </section>
      <section className='competences' id='competences'>
        <h2>COMPETENCES</h2>
        <div>
          <div>
          {Skills.map((skill)=>{
            console.log(skill.name)
            return (
              <Skill key={skill.id} logo={skill.logo} name={skill.name}/>
            )
          })}
          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;

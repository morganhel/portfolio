import React from 'react';
import Me from '../assets/images/Me.jpg';
import Card from '../components/card/Card';
import Ecran from '../assets/images/ecran.png';
import Projets from '../data/projets.json';


function Home() {
  return (
    <main>
      <section className='presentation'>
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
      <section className='realisations'>
        <h2>REALISATIONS</h2>
        <div className='realisations__content'>
          {Projets.map((projet)=>{
            return (
              <Card key={projet.id} title={projet.title} txt={projet.description} img={projet.img} repo={projet.repo} />
            )
          })}


          <Card title="Projet" img={Ecran} txt="blablabli blablablou" repo="https://github.com/"/>
          <Card title="Projet" img={Ecran} txt="blablabli blablablou" repo="https://github.com/"/>
        </div>
      </section>
    </main>
  );
}

export default Home;

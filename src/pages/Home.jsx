import React from 'react';
import Me from '../assets/images/Me.jpg';
import Card from '../components/card/Card'
import Ecran from '../assets/images/ecran.png'

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
            <br />ce qui m'a donné le temps de réfléchir à mon "dream job" :
            <br />DEVELOPPEUR FULL STACK FREELANCE
            <br />Pour arriver à celui-ci dans quelques années, 
            <br />j'ai entamé la formation diplômante "Intégrateur Web" d'Open Classrooms</p>
            <p>Voici <a>mon CV</a> pour entrevoir ma quête du "dream job".</p>
          </div>
        </div>
      </section>
      <section className='realisations'>
        <h2>REALISATIONS</h2>
        <div className='realisations__content'>
          <Card title="Projet" img={Ecran} txt="blablabli blablablou" repo="https://github.com/"/>
          <Card title="Projet" img={Ecran} txt="blablabli blablablou" repo="https://github.com/"/>
        </div>
      </section>
    </main>
  );
}

export default Home;

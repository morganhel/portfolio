import React from 'react';
import Me from '../assets/images/Me.jpg';
import Card from '../components/card/Card'

function Home() {
  return (
    <main>
      <section className='presentation'>
        <h2>PRESENTATION</h2>
        <div className='presentation__content'>
          <img className='presentation__content__photo' src={Me} alt="Morgan"/>
          <div className='presentation__content__txt'>
            <div className='presentation__content__txt--bold'>
            <p>Bonjour, je suis MORGAN HELEINE 
            <br />DEVELOPPEUR FRONT-END</p>
            </div>
            <p>En 2022, je suis devenu maman. Et depuis ma vision de ma vie a changé
            <br />Je me suis consacrée à ma casquette de maman plusieurs mois,
            <br />ce qui m'a donné le temps de réfléchir à mon "dream job" :
            <br />DEVELOPPEUR FULL STACK FREELANCE
            <br />Pour arriver à celui-ci dans quelques années, 
            <br />j'ai entamé la formation diplômante "Intégrateur Web" d'Open Classrooms</p>
            <p>Voici <a>mon CV</a> entrevoir ma quête du "dream job"</p>
          </div>
        </div>
      </section>
      <section className='realisations'>
        <h2>REALISATIONS</h2>
        <div className='realisations__content'>
          <Card />
        </div>
      </section>
    </main>
  );
}

export default Home;

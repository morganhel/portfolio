import React from 'react';
import Header from '../components/header/Header';
import Formules from '../data/formules.json';
import FormulaCard from '../components/offercard/FormulaCard';
import Icone1 from '../assets/images/Icones/creation/1.svg';
import Icone2 from '../assets/images/Icones/creation/2.svg';
import Icone3 from '../assets/images/Icones/creation/3.svg';
import Icone4 from '../assets/images/Icones/creation/4.svg';
import Icone5 from '../assets/images/Icones/creation/5.svg';
import Icone6 from '../assets/images/Icones/creation/6.svg';

function formuleCreation() {

    const CreaFormules =  Formules.filter(formule => formule.offre === "crea")

    return(
        <>
        <Header />
        <h1>CREATION DE VOTRE SITE VITRINE</h1>
        <section className='formules'>
            <h2 className='formules__title'>QU'EST CE QUE JE VOUS PROPOSE ?</h2>
            <p className='formules__content--center'>Mettez votre activité en lumière avec un site vitrine unique, moderne et optimisé pour capter l'attention de vos clients.</p>
            <p>Je crée des sites qui reflètent votre identité et mettent en avant vos services de façon claire et attractive.</p>
                <p><strong>Ce que vous obtenez :</strong></p>
                <p className='formules__content--point'>
                ✿ Design personnalisé pour votre marque.
                    <br />✿ Structure claire et intuitive pour vos visiteurs.
                    <br />✿ Optimisation SEO de base pour améliorer votre visibilité.
                    <br />✿ Site responsive, adapté à tous les appareils.
                    <br />✿ Intégration des fonctionnalités essentielles (formulaire de contact, galeries, etc.).
                </p>
            <p className='formules__content--center formules__content--center--color'>Ne laissez pas votre présence en ligne au hasard – démarquez-vous dès aujourd’hui avec un site vitrine sur mesure !</p>
            <div className='formules__content--choice'>
                {CreaFormules.map((formule)=>{
                    return (
                    <FormulaCard 
                        key={formule.id} 
                        title={formule.title}
                        stitle={formule.stitle}
                        price={formule.price}
                        txt1={formule.txt1}
                        txt2={formule.txt2}
                        page={formule.page}
                        fclass={formule.class}
                    />
                    )
                })}
          </div>
        </section>
        <section className='deroulement'>
            <h2>COMMENT CA SE DEROULE ?</h2>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img' src={Icone1} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>1. Analyse des besoins : Parfaitement comprendre vos attentes pour mieux créer</h3>
                        <p>La première étape dans la création de votre site vitrine est cruciale : l’analyse de vos besoins.À travers plusieurs échanges, je prends le temps de comprendre vos objectifs, votre public cible et les fonctionnalités essentielles. Cette phase me permet de poser des bases solides pour un site parfaitement adapté à votre activité.</p>
                    </div>
                </div>
                <p className='deroulement__etape__part2'>Ce que nous abordons ensemble :
                    <br />
                    <br /><strong>Multiples échanges :</strong> Plusieurs réunions pour approfondir la compréhension de vos attentes, affiner les objectifs, et clarifier vos besoins spécifiques.
                    <br /><strong>Identification des objectifs : </strong> Définir la finalité du site (générer des leads, améliorer la visibilité, vendre en ligne, etc.).
                    <br /><strong>Définition du public cible :</strong> Comprendre qui sont vos visiteurs et comment adapter le site à leurs attentes.
                    <br /><strong>Étude de la concurrence :</strong> Analyse des sites concurrents pour mieux appréhender le marché et en tirer des bonnes pratiques.
                    <br /><strong>Création de wireframes :</strong> Élaboration de maquettes fonctionnelles (wireframes) pour visualiser la structure et l’agencement des pages.
                    <br /><strong>Identification des fonctionnalités clés :</strong> Définir les fonctionnalités essentielles pour une expérience utilisateur optimale (formulaires, galerie d’images, blog, etc.).
                </p>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone2} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>2. Création de la maquette : L’esquisse de votre futur site</h3>
                        <p>La création d'un site vitrine commence toujours par une discussion approfondie avec vous. Je prends le temps de comprendre votre activité, vos objectifs, et votre public cible. Que vous ayez une idée précise ou non, je suis là pour vous conseiller et vous aider à définir ce que vous attendez de votre site. </p>
                    </div>
                </div>
                <p className='deroulement__etape__part2'>Ce que nous abordons ensemble :
                    <br />  
                    <br /><strong>Objectifs du site :</strong> Attirer des clients, présenter vos services, ou simplement améliorer votre visibilité en ligne.
                    <br /><strong>Public cible :</strong> Qui sont vos visiteurs ? Quelles informations doivent-ils trouver rapidement ?
                    <br /><strong>Contenus essentiels :</strong> Textes, images, vidéos, ou autres éléments que vous souhaitez mettre en avant.
                    <br /><strong>Design :</strong> Couleurs, styles visuels ou fonctionnalités que vous imaginez pour votre site. 
                </p>
            </article>
        </section>
        </>
    )
}

export default formuleCreation;
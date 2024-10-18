import React from 'react';
import Header from '../components/header/Header';
import Formules from '../data/formules.json';
import FormulaCard from '../components/offercard/FormulaCard';

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
            <div className='formules__content--formules'>
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
        <section>
            <h2>COMMENT CA SE DEROULE ?</h2>
            <article>
                <img />
                <div>
                    <h3>1. Ecoute et Analyse de VOS Besoins</h3>
                    <p>La création d'un site vitrine commence toujours par une discussion approfondie avec vous. Je prends le temps de comprendre votre activité, vos objectifs, et votre public cible. Que vous ayez une idée précise ou non, je suis là pour vous conseiller et vous aider à définir ce que vous attendez de votre site. </p>
                    <p>Ce que nous abordons ensemble :
                        <br />Objectifs du site : Attirer des clients, présenter vos services, ou simplement améliorer votre visibilité en ligne.
                        <br />Public cible : Qui sont vos visiteurs ? Quelles informations doivent-ils trouver rapidement ?
                        <br />Contenus essentiels : Textes, images, vidéos, ou autres éléments que vous souhaitez mettre en avant.
                        <br />Design : Couleurs, styles visuels ou fonctionnalités que vous imaginez pour votre site. 
                        </p>
                </div>
            </article>
            <article>
                <img />
                <div>
                    <h3>1. Ecoute et Analyse de VOS Besoins</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </article>
            <article>
                <img />
                <div>
                    <h3>1. Ecoute et Analyse de VOS Besoins</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </article>
            <article>
                <img />
                <div>
                    <h3>1. Ecoute et Analyse de VOS Besoins</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </article>
            <article>
                <img />
                <div>
                    <h3>1. Ecoute et Analyse de VOS Besoins</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </article>
            <article>
                <img />
                <div>
                    <h3>1. Ecoute et Analyse de VOS Besoins</h3>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
            </article>
        </section>
        </>
    )
}

export default formuleCreation;
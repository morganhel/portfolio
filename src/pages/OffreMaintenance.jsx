import React from 'react';
import Header from '../components/header/Header';
import Formules from '../data/formules.json';
import MaintDetails from '../data/maintdetails.json';
import FormulaCard from '../components/offercard/FormulaCard';
import FormulaCardDetails from '../components/offercard/FormulaCardDetails';
import Icone1 from '../assets/images/Icones/creation/1.svg';
import Icone2 from '../assets/images/Icones/creation/2.svg';
import Icone3 from '../assets/images/Icones/creation/3.svg';
import Icone4 from '../assets/images/Icones/creation/4.svg';
import Icone5 from '../assets/images/Icones/creation/5.svg';
import Icone6 from '../assets/images/Icones/creation/6.svg';

function formuleCreation() {

    const CreaFormules =  Formules.filter(formule => formule.offre === "maint")

    const StarterDetails = MaintDetails.filter(part => part.formule === "starter")
    const MiddleDetails = MaintDetails.filter(part => part.formule === "middle")
    const PreniumDetails = MaintDetails.filter(part => part.formule === "prenium")

    return(
        <>
        <Header />
        <h1>MAINTENANCE DE VOTRE NOUVEAU SITE</h1>
        <section className='formules'>
            <h2 className='formules__title'>QU'EST CE QUE JE VOUS PROPOSE ?</h2>
            <p className='formules__content--center'>Prenez soin de votre site web, laissez-nous gérer la technique !</p>
            <p>Votre site web est un outil essentiel pour votre activité, et il nécessite un suivi régulier pour garantir sa performance, sa sécurité, et son évolution. Avec mes formules de maintenance, assurez-vous d’avoir un site toujours opérationnel, sécurisé et optimisé sans effort de votre part.</p>
                <p><strong>Ce que vous obtenez :</strong></p>
                <p className='formules__content--point'>
                ✿ <strong>Mises à jour régulières :</strong> Protection contre les vulnérabilités et amélioration continue de votre site.
                    <br />✿ <strong>Surveillance de sécurité 24/7 :</strong> Protégez-vous des cyberattaques et autres menaces.
                    <br />✿ <strong>Sauvegardes automatiques :</strong> Récupérez rapidement vos données en cas de problème.
                    <br />✿ <strong>Optimisation des performances :</strong> Des améliorations continues pour un site rapide et fluide.
                    <br />✿ <strong>Support technique dédié :</strong> Une assistance prioritaire pour résoudre vos soucis techniques en toute simplicité.
                </p>
            <p className='formules__content--center formules__content--center--color'>Assurez la pérennité de votre site avec une maintenance complète et sur mesure. Ne laissez aucun détail compromettre votre performance en ligne !</p>
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
                        <h3>1. Analyse de l’état actuel du site</h3>
                        <p>Avant toute intervention, il est essentiel de réaliser une analyse complète de l’état de votre site. Cela permet d’identifier les zones à risque, les améliorations possibles et de définir les priorités pour la maintenance.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Audit technique :</strong> Vérification des performances du site, des éventuelles erreurs et des problèmes de sécurité.
                        <br /><strong>•	Évaluation des plugins et modules :</strong> Analyse de la compatibilité et des mises à jour nécessaires.
                        <br /><strong>•	Examen des sauvegardes :</strong> Vérification que des sauvegardes régulières et efficaces sont en place.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone2} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>2. Mise en place des mises à jour</h3>
                        <p>Les mises à jour régulières sont cruciales pour garantir la sécurité et la performance de votre site. Elles permettent de protéger contre les vulnérabilités et de bénéficier des dernières fonctionnalités.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Mise à jour du CMS :</strong> Installation des dernières versions pour assurer une sécurité optimale.
                        <br /><strong>•	Mise à jour des plugins et extensions : </strong> Installation des nouvelles versions pour améliorer les performances et la compatibilité.
                        <br /><strong>•	Test post-mise à jour : </strong> Vérification que les mises à jour n’ont pas perturbé le fonctionnement du site.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone3} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>3. Sécurisation du site</h3>
                        <p>La sécurité de votre site est une priorité absolue. Cette étape consiste à mettre en place des mesures de protection contre les menaces extérieures telles que les piratages, les virus ou les malwares.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Installation de pare-feu :</strong> Protection contre les tentatives d’intrusion.
                        <br /><strong>•	Mise en place de protocoles SSL :</strong> Sécurisation des données échangées entre le site et ses utilisateurs.
                        <br /><strong>•	Surveillance en temps réel :</strong> Système d’alerte pour repérer les comportements suspects ou les tentatives d'attaque.
                        <br /><strong>•	Gestion des sauvegardes automatiques :</strong> Configuration des sauvegardes régulières pour restaurer le site en cas de problème.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone4} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>4. Optimisation des performances</h3>
                        <p>Un site performant garantit une meilleure expérience utilisateur et un meilleur référencement. Cette étape vise à analyser et optimiser les performances du site pour réduire les temps de chargement.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                <p>Ce que comprend cette étape :</p>
                <p>
                    <br /><strong>•	Optimisation des images :</strong> Compression des images pour alléger les pages.
                    <br /><strong>•	Minification du code :</strong> Réduction du poids des fichiers CSS, HTML et JavaScript.
                    <br /><strong>•	Mise en cache : </strong> Configuration de systèmes de cache pour accélérer le temps de chargement des pages.
                    <br /><strong>•	Tests de performance :</strong> Analyse de la vitesse et identification des points à améliorer.
                </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone5} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>5. Support technique et interventions</h3>
                        <p>Enfin, un support technique réactif et des interventions régulières permettent de garantir que votre site reste fonctionnel et qu’aucun problème majeur ne survienne.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Assistance technique :</strong> Support en cas de bug ou de problème technique.
                        <br /><strong>•	Interventions correctives :</strong>  Réparation des erreurs détectées sur le site.
                        <br /><strong>•	Rapports réguliers :</strong> Envoi de rapports de maintenance avec détails des actions effectuées.
                        <br /><strong>Suivi des performances :</strong> Vérification continue de l’état général du site.
                    </p>
                </div>
            </article>
        </section>
        <section className='details'>
            <h2 className='details__title'>ENCORE PLUS DE DETAILS ?</h2>
            <div className='details__formule'>
                <h3 className='details__formule--title'>FORMULE STARTER :
                    <br />TRANQUILLITE DE BASE POUR VOTRE SITE
                </h3>
                <div className='details__formule--content'>
                    {StarterDetails.map((formule)=>{
                        return (
                        <FormulaCardDetails 
                        key={formule.id} 
                        title={formule.title}
                        txt={formule.txt}
                        fclass={formule.class}/>
                        )
                    })}
                </div>
            </div>
            <div className='details__formule'>
                <h3 className='details__formule--title'>FORMULE MIDDLE :
                    <br />OPTIMISATION POUR DES PERFORMANCES ACCRUES
                </h3>
                <div className='details__formule--content'>
                    {MiddleDetails.map((formule)=>{
                        return (
                        <FormulaCardDetails 
                        key={formule.id} 
                        title={formule.title}
                        txt={formule.txt}
                        fclass={formule.class}/>
                        )
                    })}
                </div>
            </div>

            <div className='details__formule'>
                <h3 className='details__formule--title'>FORMULE PRENIUM :
                    <br />SUIVI PERSONNALISE ET EVOLUTION CONTINUE
                </h3>
                <div className='details__formule--content'>
                    {PreniumDetails.map((formule)=>{
                        return (
                        <FormulaCardDetails 
                        key={formule.id} 
                        title={formule.title}
                        txt={formule.txt}
                        fclass={formule.class}/>
                        )
                    })}
                </div>
            </div>

        </section>
        </>
    )
}

export default formuleCreation;
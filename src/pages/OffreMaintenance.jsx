import React from 'react';
import Header from '../components/header/Header';
import Formules from '../data/formules.json';
import MaintDetails from '../data/maintdetails.json';
import FormulaCard from '../components/offercard/FormulaCard';
import FormulaCardDetails from '../components/offercard/FormulaCardDetails';
import Icone1 from '../assets/images/Icones/maintenance/1.svg';
import Icone2 from '../assets/images/Icones/maintenance/2.svg';
import Icone3 from '../assets/images/Icones/maintenance/3.svg';
import Icone4 from '../assets/images/Icones/maintenance/4.svg';
import Icone5 from '../assets/images/Icones/maintenance/5.svg';


function formuleMaintenance() {

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
            <p className='formules__content--center'>Prenez soin de votre site web, laissez-moi gérer la technique !</p>
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
            <h2 className='deroulement__title'>COMMENT CA SE DEROULE ?</h2>
            <p className='deroulement__intro'>Dans le cadre de mon offre de maintenance, je veille à assurer la sécurité, la performance et l’évolution continue de votre site web. Chaque étape est pensée pour répondre à vos besoins spécifiques et garantir que votre site fonctionne de manière optimale, qu'il s'agisse de la formule starter ou des options les plus avancées. Voici les étapes détaillées du processus, qui englobent les trois formules pour offrir une vision claire de ce que vous obtenez.
            </p>
            
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img' src={Icone1} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>1. Audit Initial et Évaluation du Site</h3>
                        <p>Durant la première étape et afin de vous garantir une bonne maintenance, j'analyse en profondeur votre site pour identifier les éventuels problèmes techniques, les opportunités d’optimisation et les failles de sécurité. <br />Que ce soit pour une maintenance légère ou complète, l’audit est indispensable pour établir un diagnostic et personnaliser notre intervention.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Évaluation de la sécurité </strong> Identification des failles potentielles et vulnérabilités du site.
                        <br /><strong>•	Analyse des performances : </strong> Mesure des temps de chargement et de la réactivité du site.
                        <br /><strong>•	Diagnostic SEO : </strong> Un audit de base du référencement naturel pour les sites cherchant à améliorer leur visibilité.
                        <br /><strong>•	Audit complet : </strong>Analyse approfondie de la structure, du code et de l’optimisation SEO.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone2} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>2. Mise à Jour et Corrections Techniques</h3>
                        <p>Après l’audit, j'entame la phase de corrections. <br/> C’est une étape clé où je résous les problèmes détectés, mets à jour les systèmes, et installe des solutions de sécurité pour protéger le site.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Mises à jour de sécurité :</strong> Installation des derniers correctifs et des mises à jour pour protéger le site contre les attaques potentielles.
                        <br /><strong>•	Corrections de bugs mineurs : </strong> Résolution des petites anomalies techniques identifiées lors de l’audit.
                        <br /><strong>•	Optimisation des plugins : </strong> Vérification et mise à jour des extensions pour une meilleure performance et compatibilité.
                        <br /><strong>Refonte partielle si nécessaire :</strong> Ajustements plus profonds pour corriger des problèmes techniques graves.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone3} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>3. Sauvegardes et Sécurisation des Données</h3>
                        <p>Un site performant repose sur la sécurité des données. <br />C'est pourquoi, à ce stade, je mets en place un système de sauvegarde régulier et assure la protection contre les attaques et les pannes.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Sauvegardes régulières : </strong> Automatisation des sauvegardes hebdomadaires ou mensuelles pour garantir la restauration du site en cas de problème.
                        <br /><strong>•	Protection contre les attaques :</strong> Installation d'outils de surveillance et de pare-feux pour sécuriser le site contre les intrusions.
                        <br /><strong>•	Contrôle des sauvegardes :</strong> Test régulier pour s’assurer de la bonne fonctionnalité des sauvegardes et de la capacité de restauration.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone4} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>4. Suivi de Performance et Optimisation Continue</h3>
                        <p>Un site performant garantit une meilleure expérience utilisateur et un meilleur référencement. Cette étape vise à analyser et optimiser les performances du site pour réduire les temps de chargement.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                <p>Ce que comprend cette étape :</p>
                <p>
                <br /><strong>•	Suivi des temps de chargement :</strong> Surveillance continue des temps de chargement et ajustements pour maintenir la rapidité du site.
                <br /><strong>•	Optimisation de la base de données :</strong> Nettoyage des données inutiles pour garantir des performances optimales.
                <br /><strong>•	Tests de compatibilité :</strong> Vérification régulière pour s’assurer que le site fonctionne correctement sur différents navigateurs et appareils.
                <br /><strong>•	Amélioration du SEO :</strong> Ajustements du SEO technique pour maintenir ou améliorer la visibilité du site sur les moteurs de recherche.</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone5} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>5. Accompagnement et Conseils Personnalisé</h3>
                        <p>La dernière étape de mon offre de maintenance, et particulièrement dans la Formule Premium, est l'accompagnement stratégique pour faire évoluer votre site selon vos besoins. Cela inclut des conseils pour améliorer l’efficacité de votre site, ainsi que des recommandations pour maximiser ses performances à long terme.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Consultations régulières :</strong> Rencontre périodique pour discuter de l’évolution du site et des améliorations possibles.
                        <br /><strong>•	Rapports mensuels de performance :</strong> Envoi de rapports détaillés pour suivre l’état du site et les progrès réalisés.
                        <br /><strong>•	Modifications de contenu :</strong> Gestion des mises à jour de contenu (textes, images, etc.) selon les besoins du client.
                        <br /><strong>•	Conseils en SEO et marketing digital :</strong> Recommandations pour améliorer la visibilité du site et attirer davantage de trafic.</p>
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

export default formuleMaintenance;
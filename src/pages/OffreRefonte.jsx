import React from 'react';
import Header from '../components/header/Header';
import Formules from '../data/formules.json';
import CreaDetails from '../data/creadetails.json';
import FormulaCard from '../components/offercard/FormulaCard';
import FormulaCardDetails from '../components/offercard/FormulaCardDetails';
import Icone1 from '../assets/images/Icones/refonte/1.svg';
import Icone2 from '../assets/images/Icones/refonte/2.svg';
import Icone3 from '../assets/images/Icones/refonte/3.svg';
import Icone4 from '../assets/images/Icones/refonte/4.svg';
import Icone5 from '../assets/images/Icones/refonte/5.svg';
import Icone6 from '../assets/images/Icones/refonte/6.svg';
import Icone7 from '../assets/images/Icones/refonte/7.svg';

function formuleRefonte() {

    const CreaFormules =  Formules.filter(formule => formule.offre === "refo")

    const StarterDetails = CreaDetails.filter(part => part.formule === "starter")
    const MiddleDetails = CreaDetails.filter(part => part.formule === "middle")
    const PreniumDetails = CreaDetails.filter(part => part.formule === "prenium")

    return(
        <>
        <Header />
        <h1>REFONTE DE VOTRE SITE ACTUEL</h1>
        <section className='formules'>
            <h2 className='formules__title'>QU'EST CE QUE JE VOUS PROPOSE ?</h2>
            <p className='formules__content--center'>Mettez votre activité en lumière avec un site vitrine unique, moderne et optimisé pour capter l'attention de vos clients.</p>
            <p>Je crée des sites qui reflètent votre identité et mettent en avant vos services de façon claire et attractive.</p>
                <p><strong>Ce que vous obtenez :</strong></p>
                <p className='formules__content--point'>
                ✿ Design personnalisé pour votre marque.
                    <br />✿ Structure claire et intuitive pour vos visiteurs.
                    <br />✿ Optimisation SEO pour améliorer votre visibilité.
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
            <h2 className='deroulement__title'>COMMENT CA SE DEROULE ?</h2>
            <p className='deroulement__description'>L’offre de refonte est idéale pour redonner un nouveau souffle à votre site web en le modernisant, en améliorant ses performances et en optimisant son expérience utilisateur. Que vous choisissiez une formule de base ou une solution sur-mesure, chaque étape de ce processus est conçue pour maximiser l’impact de votre site et répondre à vos objectifs. Voici un aperçu détaillé du déroulement complet de l’offre de refonte, intégrant les trois formules pour vous donner une vue claire de ce qui vous attend.</p>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img' src={Icone1} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>1. Analyse Complète et Diagnostic Initial</h3>
                        <p>La refonte débute par une analyse approfondie de votre site existant afin d’identifier les points à améliorer et les failles techniques. Cette étape est cruciale pour établir une stratégie de refonte adaptée à vos objectifs.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Audit du design et de l’ergonomie :</strong> Analyse de l’aspect visuel du site, de sa navigation et de l'expérience utilisateur (toutes formules).
                        <br /><strong>•	Évaluation technique :</strong> Identification des problèmes de performance, des bugs, et des besoins en sécurité (formule Essentielle et plus).
                        <br /><strong>•	Analyse SEO :</strong> Vérification du référencement actuel du site et des possibilités d'amélioration (à partir de la formule Avancée).
                        <br /><strong>•	Recommandations personnalisées :</strong> Conseils stratégiques pour moderniser le site et optimiser ses performances (incluse dans la formule Premium).</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone2} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>2. Définition des Objectifs et Création du Plan de Refonte</h3>
                        <p>Une fois l’audit réalisé, l’étape suivante consiste à définir clairement les objectifs de la refonte et à concevoir un plan d’action. Cela permet de garantir que le projet avance dans la bonne direction et que chaque aspect du site est pris en compte.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Définition des objectifs :</strong> Clarification des besoins en termes de design, fonctionnalités, et performance (toutes formules).
                        <br /><strong>•	Proposition de wireframes (croquis) :</strong> Création de maquettes basse-fidélité pour visualiser la structure du futur site (formule Avancée et Premium).
                        <br /><strong>•	Plan d’action détaillé :</strong> Étapes précises de la refonte avec délais et priorités (toutes formules).
                        <br /><strong>•	Échanges réguliers :</strong> Points réguliers avec le client pour valider les avancées et ajuster les priorités (à partir de la formule Avancée).
                    </p>
</div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone3} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>3. Création de la maquette :</h3>
                        <p>À partir de ce qui est ressorti de l'étape 1, je réalise une maquette personnalisée pour concevoir un site qui vous ressemble. Le design est pensé pour être à la fois esthétique, ergonomique et responsive, afin d’offrir une expérience fluide sur tous les appareils.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>• Création d'une maquette sur mesure :</strong> Proposition de design unique en accord avec votre charte graphique et vos préférences visuelles.
                        <br /><strong>• Ergonomie intuitive :</strong> Construction d'une navigation claire et fluide pour que les visiteurs trouvent facilement l’information.
                        <br /><strong>• Design responsive :</strong> Un site qui s’adapte parfaitement aux mobiles, tablettes et ordinateurs pour offrir une expérience utilisateur optimale.
                        <br /><strong>• Révisions :</strong> Ajustements basés sur vos retours pour un design qui correspond exactement à vos attentes.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone4} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>4. Refonte Technique et Optimisation des Performances</h3>
                        <p>Après validation du design, le développement du site commence. La phase technique de la refonte consiste à reconstruire votre site en améliorant ses fondations, en corrigeant les erreurs existantes et en veillant à une optimisation des performances.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                <p>Ce que comprend cette étape :</p>
                <p>
                    <br /><strong>•	Reconstruction du code :</strong> Nettoyage et optimisation du code pour améliorer la rapidité et la fluidité du site (toutes formules).
                    <br /><strong>•	Optimisation de la sécurité :</strong> Mise en place des dernières technologies pour protéger votre site contre les menaces (toutes formules).
                    <br /><strong>•	Amélioration des temps de chargement :</strong> Optimisation des ressources pour accélérer les temps de réponse (à partir de la formule Avancée).
                    <br /><strong>•	Révision des fonctionnalités :</strong> Mise à jour ou ajout de nouvelles fonctionnalités en fonction des besoins (formule Premium).</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone5} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>5. Refonte du Design et Expérience Utilisateur</h3>
                        <p>Une fois les aspects techniques revus, il est temps de se concentrer sur l’aspect visuel et l’expérience utilisateur de votre site. Cela comprend la refonte de l’interface pour la rendre plus attrayante et intuitive.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Modernisation du design :</strong> Actualisation de l’identité visuelle du site, selon les tendances actuelles et vos préférences (toutes formules).
                        <br /><strong>Optimisation mobile :</strong> Garantir que le site soit entièrement responsive et fonctionne parfaitement sur tous les appareils (toutes formules).
                        <br /><strong>Amélioration de la navigation :</strong> Réorganisation des menus et des sections pour une navigation plus fluide (à partir de la formule Avancée).
                        <br /><strong>Personnalisation avancée du design :</strong> Création d’un design sur-mesure avec des éléments graphiques uniques (formule Premium).</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone6} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>Mise en Ligne et Tests</h3>
                        <p>Avant la mise en ligne définitive, plusieurs tests rigoureux sont effectués pour s’assurer que tout fonctionne correctement. Cette étape permet d'identifier et de corriger les derniers bugs avant que votre nouveau site ne soit accessible à vos visiteurs.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Tests de compatibilité :</strong> Vérification du fonctionnement sur différents navigateurs et appareils (mobiles et tablettes).
                        <br /><strong>•	Tests de performance :</strong> Évaluation de la vitesse de chargement et de la fluidité de navigation.
                        <br /><strong>•	Validation avec le client :</strong> Présentation du site pour obtenir votre approbation finale avant la mise en ligne.
                        <br /><strong>•	Mise en ligne :</strong> Publication du site sur votre domaine et configuration des paramètres nécessaires.
                        <br /><strong>•	Formation :</strong> Session de formation pour vous familiariser avec l'interface de gestion du site.
                        <br /><strong>•	Documentation :</strong> Fourniture de guides et de ressources pour vous aider dans la gestion du site.</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone7} alt='Illustration étape 7'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>7. Suivi Post-Lancement</h3>
                        <p>Enfin, un suivi de 3 mois est effectué pour garantir que le site fonctionne correctement et pour apporter des ajustements si nécessaire.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Suivi des performances :</strong> Surveillance des métriques de performance pour identifier d'éventuelles améliorations.
                        <br /><strong>•	Support technique :</strong> Assistance disponible pour résoudre les problèmes techniques éventuels.
                        <br /><strong>•	Évaluations régulières :</strong> Points de contrôle programmés pour discuter des performances du site et des ajustements à apporter.</p>
                </div>
            </article>
        </section>
        <section className='details'>
            <h2 className='details__title'>ENCORE PLUS DE DETAILS ?</h2>
            <div className='details__formule'>
                <h3 className='details__formule--title'>FORMULE STARTER :
                    <br />SIMPLICITE ET EFFICACITE EN UNE SEULE PAGE
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
                    <br />UN SITE VITRINE STRUCTURE ET POLYVALENT POUR VOTRE ENTREPRISE
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
                    <br />L'EXCELLENCE POUR VOTRE SITE VITRINE
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

export default formuleRefonte;
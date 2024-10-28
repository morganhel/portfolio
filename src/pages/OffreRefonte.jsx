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
import ScrollTo from '../hook/ScrollTo';

function formuleRefonte() {
    ScrollTo();

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
            <p className='formules__content--center'>Offrez une nouvelle vie à votre site web grâce à notre service de refonte et d’optimisation.</p>
            <p>Je modernise votre site et le rends plus efficace, tout en améliorant son design et sa visibilité en ligne.</p>
                <p><strong>Ce que vous obtenez :</strong></p>
                <p className='formules__content--point'>
                ✿ Design personnalisé pour votre marque.
                    <br />✿ Refonte complète du design pour une image plus moderne.
                    <br />✿ Réorganisation de la navigation pour une meilleure expérience utilisateur.
                    <br />✿ Optimisation SEO pour améliorer votre positionnement dans les moteurs de recherche.
                    <br />✿ Amélioration des performances pour un chargement plus rapide.
                    <br />✿ Ajout de nouvelles fonctionnalités pour enrichir l’expérience client.
                </p>
            <p className='formules__content--center formules__content--center--color'>Redonnez du dynamisme à votre site et attirez plus de clients dès maintenant !</p>
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
            <p className='deroulement__description'>La refonte d’un site web est bien plus qu’une simple mise à jour visuelle. C’est une occasion de repenser et d’optimiser l’ensemble de votre présence en ligne pour mieux répondre aux besoins de vos visiteurs et de votre entreprise. <br />En tant que partenaire de confiance, je m’efforce d’établir une relation de proximité avec chacun de mes clients, où vos attentes et vos objectifs sont au centre de chaque décision. <br />Chaque étape du processus de refonte est abordée de manière collaborative, afin que votre site soit à la fois performant, fonctionnel et fidèle à votre image. <br /><br />Découvrez en détail les étapes que j’ai conçues pour assurer une refonte complète et réussie, de l’analyse initiale aux ajustements finaux, en passant par une optimisation globale.</p>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img' src={Icone1} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>1. Analyse Complète et Diagnostic Initial</h3>
                        <p>Cette étape initiale est consacrée à une analyse approfondie de votre site actuel. <br />Elle permet d’identifier les points forts et les axes d’amélioration, que ce soit en matière de design, de performance ou d’expérience utilisateur. <br />Cet audit complet constitue le point de départ pour établir ensemble les priorités de la refonte.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Audit du design et de l’ergonomie :</strong> Analyse de l’aspect visuel du site, de sa navigation et de l'expérience utilisateur.
                        <br /><strong>•	Évaluation technique :</strong> Identification des problèmes de performance, des bugs, et des besoins en sécurité.
                        <br /><strong>•	Analyse SEO :</strong> Vérification du référencement actuel du site et des possibilités d'amélioration.
                        <br /><strong>•	Recommandations personnalisées :</strong> Conseils stratégiques pour moderniser le site et optimiser ses performances.</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone2} alt='Illustration étape 2'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>2. Définition des Objectifs et Création du Plan de Refonte</h3>
                        <p>Une fois l’audit réalisé, l’étape suivante consiste à définir clairement les objectifs de la refonte et à concevoir un plan d’action. Cela permet de garantir que le projet avance dans la bonne direction et que chaque aspect du site est pris en compte.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Définition des objectifs :</strong> Clarification des besoins en termes de design, fonctionnalités, et performance.
                        <br /><strong>•	Proposition de wireframes (croquis) :</strong> Création de maquettes basse-fidélité pour visualiser la structure du futur site.
                        <br /><strong>•	Plan d’action détaillé :</strong> Étapes précises de la refonte avec délais et priorités.
                        <br /><strong>•	Échanges réguliers :</strong> Points réguliers avec le client pour valider les avancées et ajuster les priorités.
                    </p>
</div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone3} alt='Illustration étape 3'/>
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
                    <img   className='deroulement__etape__part1--img ' src={Icone4} alt='Illustration étape 4'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>4. Refonte Technique et Optimisation des Performances</h3>
                        <p>Après validation du design, le développement du site commence. La phase technique de la refonte consiste à reconstruire votre site en améliorant ses fondations, en corrigeant les erreurs existantes et en veillant à une optimisation des performances.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                <p>Ce que comprend cette étape :</p>
                <p>
                    <br /><strong>•	Reconstruction du code :</strong> Nettoyage et optimisation du code pour améliorer la rapidité et la fluidité du site.
                    <br /><strong>•	Optimisation de la sécurité :</strong> Mise en place des dernières technologies pour protéger votre site contre les menaces.
                    <br /><strong>•	Amélioration des temps de chargement :</strong> Optimisation des ressources pour accélérer les temps de réponse.
                    <br /><strong>•	Révision des fonctionnalités :</strong> Mise à jour ou ajout de nouvelles fonctionnalités en fonction des besoins.</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone5} alt='Illustration étape 5'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>5. Refonte du Design et Expérience Utilisateur</h3>
                        <p>Une fois les aspects techniques revus, il est temps de se concentrer sur l’aspect visuel et l’expérience utilisateur de votre site. Cela comprend la refonte de l’interface pour la rendre plus attrayante et intuitive.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Modernisation du design :</strong> Actualisation de l’identité visuelle du site, selon les tendances actuelles et vos préférences.
                        <br /><strong>Optimisation mobile :</strong> Garantir que le site soit entièrement responsive et fonctionne parfaitement sur tous les appareils.
                        <br /><strong>Amélioration de la navigation :</strong> Réorganisation des menus et des sections pour une navigation plus fluide.
                        <br /><strong>Personnalisation avancée du design :</strong> Création d’un design sur-mesure avec des éléments graphiques uniques.</p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone6} alt='Illustration étape 6'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>6. Mise en Ligne et Tests</h3>
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
                <div className='deroulement__etape__part1'>
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
            <article className='details__formule' id="starter">
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
            </article>
            <article className='details__formule' id="middle">
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
            </article>

            <article className='details__formule' id="prenium">
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
            </article>

        </section>
        </>
    )
}

export default formuleRefonte;
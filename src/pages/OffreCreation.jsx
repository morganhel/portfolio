import React from 'react';
import Header from '../components/header/Header';
import Formules from '../data/formules.json';
import CreaDetails from '../data/creadetails.json';
import FormulaCard from '../components/offercard/FormulaCard';
import FormulaCardDetails from '../components/offercard/FormulaCardDetails';
import Icone1 from '../assets/images/Icones/creation/1.svg';
import Icone2 from '../assets/images/Icones/creation/2.svg';
import Icone3 from '../assets/images/Icones/creation/3.svg';
import Icone4 from '../assets/images/Icones/creation/4.svg';
import Icone5 from '../assets/images/Icones/creation/5.svg';
import Icone6 from '../assets/images/Icones/creation/6.svg';

function formuleCreation() {

    const CreaFormules =  Formules.filter(formule => formule.offre === "crea")

    const StarterDetails = CreaDetails.filter(part => part.formule === "starter")

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
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Multiples échanges :</strong> Plusieurs réunions pour approfondir la compréhension de vos attentes, affiner les objectifs, et clarifier vos besoins spécifiques.
                        <br /><strong>•	Identification des objectifs : </strong> Définir la finalité du site (générer des leads, améliorer la visibilité, vendre en ligne, etc.).
                        <br /><strong>•	Définition du public cible :</strong> Comprendre qui sont vos visiteurs et comment adapter le site à leurs attentes.
                        <br /><strong>•	Étude de la concurrence :</strong> Analyse des sites concurrents pour mieux appréhender le marché et en tirer des bonnes pratiques.
                        <br /><strong>•	Création de wireframes :</strong> Élaboration de maquettes fonctionnelles (wireframes) pour visualiser la structure et l’agencement des pages.
                        <br /><strong>•	Identification des fonctionnalités clés :</strong> Définir les fonctionnalités essentielles pour une expérience utilisateur optimale (formulaires, galerie d’images, blog, etc.).
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone2} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>2. Création de la maquette : L’esquisse de votre futur site</h3>
                        <p>À partir de vos besoins et de votre identité, je réalise une maquette personnalisée pour concevoir un site qui vous ressemble. Le design est pensé pour être à la fois esthétique, ergonomique et responsive, afin d’offrir une expérience fluide sur tous les appareils.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Création d'une maquette sur mesure :</strong> Proposition de design unique en accord avec votre charte graphique et vos préférences visuelles.
                        <br /><strong>•	Ergonomie intuitive :</strong> Construction d'une navigation claire et fluide pour que les visiteurs trouvent facilement l’information.
                        <br /><strong>•	Design responsive : </strong> Un site qui s’adapte parfaitement aux mobiles, tablettes et ordinateurs pour offrir une expérience utilisateur optimale.
                        <br /><strong>•	Révisions : </strong> Ajustements basés sur vos retours pour un design qui correspond exactement à vos attentes.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone3} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>3. Développement technique : Transformer le design en un site fonctionnel</h3>
                        <p>Une fois le design validé, je transforme celui-ci en un site web entièrement fonctionnel. J'intègre les fonctionnalités que nous avons définies ensemble et je m'assure que chaque aspect technique est optimisé pour une navigation fluide et une expérience utilisateur agréable. L'objectif est de créer un site web fonctionnel, rapide et bien référencé.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Développement des fonctionnalités :</strong> Toutes les fonctionnalités nécessaires, telles que des formulaires de contact, des galeries d’images et d’autres éléments interactifs, sont mises en place pour assurer leur bon fonctionnement.
                        <br /><strong>•	Optimisation des performances :</strong> Le site est optimisé pour garantir un chargement rapide et une navigation fluide.
                        <br /><strong>•	Optimisation SEO :</strong> Les métadonnées et le contenu sont travaillés pour améliorer le référencement naturel sur les moteurs de recherche, augmentant ainsi la visibilité en ligne. À ce stade, je veille à ce que chaque élément soit conforme aux meilleures pratiques SEO.
                        <br /><strong>•	Option Premium :</strong> Pour ceux qui choisissent l'offre Premium, le site est développé sur un CMS, permettant une gestion facile du contenu et des mises à jour autonomes.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone4} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>4. Tests et vérifications : S’assurer que tout est parfait</h3>
                        <p>Avant la mise en ligne, je réalise une série de tests rigoureux pour garantir que votre site est totalement fonctionnel. Ces vérifications me permettent de corriger d’éventuels bugs et de m’assurer que tout est prêt pour le lancement.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                <p>Ce que comprend cette étape :</p>
                <p>
                    <br /><strong>•	Tests de fonctionnalité :</strong> Toutes les fonctionnalités nécessaires, telles que des formulaires de contact, des galeries d’images et d’autres éléments interactifs, sont mises en place pour assurer leur bon fonctionnement.
                    <br /><strong>•	Tests de compatibilité :</strong> Le site est optimisé pour garantir un chargement rapide et une navigation fluide.
                    <br /><strong>•	Tests de sécurité :</strong> Les métadonnées et le contenu sont travaillés pour améliorer le référencement naturel sur les moteurs de recherche, augmentant ainsi la visibilité en ligne. À ce stade, je veille à ce que chaque élément soit conforme aux meilleures pratiques SEO.
                    <br /><strong>•	Tests de performance :</strong> Mesure des temps de chargement et optimisation finale.
                </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1'>
                    <img   className='deroulement__etape__part1--img ' src={Icone5} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>5. Formation et mise en ligne : Préparer et déployer votre site</h3>
                        <p>Une fois que tout est validé, je procède à la mise en ligne de votre site pour le rendre accessible au public. Si vous avez choisi l’option prenium je vous forme à l’utilisation et la gestion de votre site, afin que vous soyez totalement autonome pour la mise à jour du contenu et la gestion quotidienne.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Mise en ligne du site :</strong> Toutes les fonctionnalités nécessaires, telles que des formulaires de contact, des galeries d’images et d’autres éléments interactifs, sont mises en place pour assurer leur bon fonctionnement.
                        <br /><strong>•	Assistance technique initiale :</strong> Support technique pendant la phase de lancement pour corriger rapidement d’éventuels ajustements de dernière minute.
                        <br /><strong>•	Formation à l’utilisation du site :</strong> Sessions de formation pour vous apprendre à utiliser le CMS, à gérer le contenu et les fonctionnalités du site.
                    </p>
                </div>
            </article>
            <article className='deroulement__etape'>
                <div className='deroulement__etape__part1 reverse'>
                    <img   className='deroulement__etape__part1--img ' src={Icone6} alt='Illustration étape 1'/>
                    <div  className='deroulement__etape__part1--content'>
                        <h3>6. Suivi de 3 mois : Vous accompagner après la mise en ligne</h3>
                        <p>Mon engagement ne s'arrête pas à la mise en ligne. Pendant les 3 mois qui suivent, je vous propose un suivi personnalisé pour m’assurer que tout fonctionne bien et apporter les ajustements nécessaires en fonction de vos besoins.</p>
                    </div>
                </div>
                <div className='deroulement__etape__part2'>
                    <p>Ce que comprend cette étape :</p>
                    <p>
                        <br /><strong>•	Mises à jour techniques et de sécurité :</strong> J’effectues les mises à jour du CMS et des plugins pour maintenir votre site à jour.
                        <br /><strong>•	Optimisation continue :</strong> Analyse des performances du site et ajustements pour maximiser la rapidité et la compatibilité.
                        <br /><strong>•	Support technique prioritaire :</strong> Assistance technique pour résoudre rapidement les éventuels problèmes ou bugs.
                        <br /><strong>•	Suivi SEO :</strong> Analyse des performances SEO et ajustements pour améliorer le positionnement sur les moteurs de recherche.
                        <br /><strong>•	Rapports et recommandations :</strong> Rapport d’évolution mensuel avec des recommandations pour améliorer ou faire évoluer votre site.
                    </p>
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
                <h3 className='details__formule--title'>FORMULE PRENIUM :
                    <br />L'EXCELLENCE POUR VOTRE SITE VITRINE
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

        </section>
        </>
    )
}

export default formuleCreation;
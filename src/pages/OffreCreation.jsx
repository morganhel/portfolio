import React from 'react';
import Header from '../components/header/Header';
import ScrollTo from '../hook/ScrollTo';
import Button from '../components/button/Button';
import Etapes from '../assets/images/etapes.png';
import EtapesM from '../assets/images/acc_mob.png'

function formuleCreation() {
    ScrollTo ();

    return(
        <>
        <Header />
        <h1>CREATION DE VOTRE SITE VITRINE</h1>
        <section className='formules'>
            <h2 className='formules__title'>UNE OFFRE CLAIRE, SOUPLE ET ACCESSIBLE</h2>
            <p className='formules__content--center'>Mettez votre activité en lumière avec un site vitrine unique, moderne et optimisé pour capter l'attention de vos clients.</p>
            <p>Vous avez besoin d'un site simple, clair et beau, qui présente votre activité de façon professionnelle ? <br />Je vous accompagne à chaque étape pour construire un site vitrine adapté à vos besoins, votre rythme et vos envies.</p>
            <p className='formules__content--center formules__content--center--color'>Ne laissez pas votre présence en ligne au hasard – démarquez-vous dès aujourd’hui avec un site vitrine sur mesure !</p>
            <div className='formules__content--choice'>
                <article className="formulacard">
                    <h3 className="formulacard__title">OFFRE DE BASE</h3>
                    <p className='formulacard__price'>500 € TTC</p>
                    <p className="formulacard__content--txt1">Idéale pour poser les bases d'une présence en ligne professionnelle.</p>
                    <div className="formulacard__content--txt2">
                        <p>✿ 1 page (accueil ou présentation)
                        <br />✿ Design adapté à votre image (couleurs, polices, ambiance)
                        <br />✿ Affichage adapté aux mobiles et tablettes
                        <br />✿ Formulaire de contact simple
                        <br />✿ SEO de base : structure lisible, balises optimisées 
                        <br />✿ Mentions légales et politique de confidentialité
                        <br />✿ Hébergement inclus pendant 1 an
                        <br />✿ Maintenance offerte pendant 3 mois  </p>
                    </div>
                    <Button 
                        txt="CA M'INTERRESSE !"
                        lien="/#contact"
                        bclass="button button__color"/>
                </article>
                <article className='options'>
                    <h2 className='options__title'> + OPTIONS AU CHOIX </h2>
                    <p className='options__txt'>Chaque site est unique. Choisissez les compléments qui correspondent à vos besoins :</p>
                    <table class="options__table">
                        <thead>
                            <tr>
                            <th>Option</th>
                            <th>Description</th>
                            <th>Prix TTC</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='ligne'>
                            <td className='bold'>Ajout d’une 2ᵉ page</td>
                            <td>Ajout d'une 2ᵉ page + mise en place de la navigation</td>
                            <td>100 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Pages suivantes</td>
                            <td>Ajout de pages supplémentaires (ex : prestations, tarifs...)</td>
                            <td>70 € / page</td>
                            </tr>
                            <tr>
                            <td className='bold'>Blog / actualités</td>
                            <td>Espace pour publier vos articles ou mises à jour</td>
                            <td>100 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>SEO avancé</td>
                            <td>Optimisation mots-clés, structure, balises</td>
                            <td>100 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Rédaction complète des contenus</td>
                            <td>Création de vos textes à partir de vos idées</td>
                            <td>150 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Retravail de vos textes</td>
                            <td>Amélioration des textes existants pour plus de clarté</td>
                            <td>70 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Identité visuelle légère</td>
                            <td>Choix des couleurs, polices, ambiance (hors logo)</td>
                            <td>50 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Galerie / portfolio</td>
                            <td>Mise en valeur de vos réalisations ou créations</td>
                            <td>100 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Témoignages clients</td>
                            <td>Affichage des avis clients avec un design adapté</td>
                            <td>50 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Prise de rendez-vous</td>
                            <td>Connexion à un agenda en ligne (Calendly, etc.)</td>
                            <td>150 €</td>
                            </tr>
                            <tr>
                            <td className='bold'>Ajout d’un CMS (Strapi) + formation prise en main</td>
                            <td>Interface simple pour modifier vos textes & images</td>
                            <td>150 €</td>
                            </tr>
                        </tbody>
                    </table>
                </article>
            </div>
            <article className='formules__exemple'>
                <h4>Exemple de site personnalisé</h4>
                <p><em>Julie est sophrologue. Elle souhaite un site doux, simple et clair avec : une page d'accueil, une page "À propos", une page prestations, une page contact, et la prise de rendez-vous en ligne.</em></p>
                <ul>
                <li>✿ Offre de base : 500 €</li>
                <li>✿ Ajout de la 2ᵉ page : 100 €</li>
                <li>✿ 2 pages supplémentaires : 2 x 70 € = 140 €</li>
                <li>✿ Prise de rendez-vous en ligne : 200 €</li>
                </ul>
                <p><strong>Total estimé : 940 € TTC</strong></p>  
            </article>
        </section>
        <section className='deroulement'>
            <h2 className='deroulement__title'>COMMENT CA SE PASSE ?</h2>
            <p className='deroulement__intro'>Je prends le temps de vous accompagner à chaque étape, en toute simplicité. <br />L’idée : avancer ensemble, sans stress ni jargon technique.</p>
            <img   className='deroulement__img1' src={Etapes} alt='Etapes du projet'/>
            <img   className='deroulement__img2' src={EtapesM} alt='Etapes du projet'/>
        </section>
        <section className='faq'>
            <h2 className='faq__title'>QUESTIONS FREQUENTES</h2>
                <article className='faq__questions'>
                <div  className='faq__questions--q'>
                    <h4>✿  Est-ce que je peux modifier mon site moi-même ?</h4>
                    <p>Oui, si vous optez pour le CMS, vous aurez accès à une interface simple.</p>
                </div>
                <div className='faq__questions--q'>
                    <h4>✿ Combien de temps pour créer un site ?</h4>
                    <p>Entre 2 et 4 semaines en moyenne selon votre réactivité et les options choisies.</p>
                </div>
                <div className='faq__questions--q'>
                    <h4>✿ Et si je n'ai pas encore mes textes ou photos ?</h4>
                    <p>Je peux vous aider à les retravailler ou vous guider pas à pas.</p>
                </div>
                <div className='faq__questions--q'>
                    <h4>✿ Je ne suis pas sûre de ce qu’il me faut...</h4>
                    <p>Pas de souci, on en parle ensemble tranquillement pour clarifier votre besoin.</p>
                </div>
                <div className='faq__questions--q'>
                    <h4>✿ Je peux payer en plusieurs fois ?</h4>
                    <p>Oui, des facilites de paiement sont possibles, on en discute ensemble.</p>
                </div>
                </article>
        </section>
        </>
    )
}

export default formuleCreation;
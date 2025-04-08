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
        <h1>MAINTENANCE DE VOTRE SITE</h1>
<section className='formules'>
  <h2 className='formules__title'>UN SITE TOUJOURS RAPIDE, SÉCURISÉ ET BIEN ENTRETENU</h2>
  <p className='formules__content--center'>
    Même un petit site a besoin d’attention ! Grâce à la maintenance, votre site reste fonctionnel, fiable et agréable à visiter – sans que vous ayez à vous en soucier.
  </p>
  <p>
    Cette offre est pensée pour les entrepreneuses qui veulent une présence en ligne toujours au top, sans perdre du temps à gérer l’aspect technique.
  </p>
  <p className='formules__content--center formules__content--center--color'>
    Confiez-moi l’entretien de votre site et concentrez-vous sur ce que vous faites de mieux : votre métier !
  </p>

  <div className='formules__content--choice'>
    <article className="formulacard">
      <h3 className="formulacard__title">OFFRE DE BASE</h3>
      <p className='formulacard__price'>40 € TTC / mois</p>
      <p className="formulacard__content--txt1">L’essentiel pour garder votre site en bonne santé.</p>
      <div className="formulacard__content--txt2">
        <p>
          ✿ Mises à jour de Strapi & du site<br />
          ✿ Sauvegarde mensuelle de vos contenus<br />
          ✿ Vérifications de sécurité et bugs<br />
          ✿ Support par mail ou message
        </p>
      </div>
      <Button 
        txt="JE SOUHAITE LA MAINTENANCE"
        lien="/#contact"
        bclass="button button__color"/>
    </article>

    <article className='options'>
      <h2 className='options__title'> + OPTIONS AU CHOIX </h2>
      <p className='options__txt'>Ajoutez les options qui vous rassurent ou vous simplifient la vie :</p>
      <table class="options__table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Description</th>
            <th>Prix TTC</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className='bold'>Sauvegardes hebdomadaires</td><td>Contenus enregistrés chaque semaine</td><td>10 €</td></tr>
          <tr><td className='bold'>Surveillance du site 24/7</td><td>Alerte immédiate en cas de panne ou bug</td><td>15 €</td></tr>
          <tr><td className='bold'>Rapport mensuel d'activité</td><td>Résumé technique + trafic simplifié</td><td>20 €</td></tr>
          <tr><td className='bold'>Optimisation des performances</td><td>Vitesse, poids des images, fluidité, SEO</td><td>25 €</td></tr>
          <tr><td className='bold'>Support prioritaire</td><td>Réponse garantie sous 2h ouvrées</td><td>20 €</td></tr>
          <tr><td className='bold'>Modifs de contenu (2h/mois)</td><td>Changements de textes ou images par mes soins</td><td>20 €</td></tr>
        </tbody>
      </table>
    </article>
  </div>

  <article className='formules__exemple'>
    <h4>Exemple de forfait personnalisé</h4>
    <p><em>Sophie est coach bien-être. Elle veut que son site soit toujours fluide, sauvegardé chaque semaine et recevoir un point mensuel.</em></p>
    <ul>
      <li>✿ Offre de base : 40 €</li>
      <li>✿ Sauvegardes hebdo : 10 €</li>
      <li>✿ Rapport mensuel : 20 €</li>
    </ul>
    <p><strong>Total estimé : 70 € TTC / mois</strong></p>  
  </article>
</section>

<section className='faq'>
  <h2 className='faq__title'>QUESTIONS FRÉQUENTES</h2>
  <article className='faq__questions'>
    <div className='faq__questions--q'>
      <h4>✿ Est-ce vraiment utile si je ne touche pas à mon site ?</h4>
      <p>Oui ! Même sans changement de contenu, le CMS, l’hébergement et les navigateurs évoluent. La maintenance évite les bugs, failles ou lenteurs.</p>
    </div>
    <div className='faq__questions--q'>
      <h4>✿ Puis-je modifier mon forfait plus tard ?</h4>
      <p>Bien sûr, vous pouvez ajuster les options chaque mois selon vos besoins.</p>
    </div>
    <div className='faq__questions--q'>
      <h4>✿ Est-ce que je peux faire les modifs moi-même ?</h4>
      <p>Oui, si vous avez choisi le CMS, je vous forme à l'utiliser. Sinon, je peux les faire pour vous avec l'option contenu.</p>
    </div>
    <div className='faq__questions--q'>
      <h4>✿ Puis-je arrêter la maintenance à tout moment ?</h4>
      <p>Oui, c’est sans engagement. Vous pouvez mettre en pause ou arrêter quand vous le souhaitez.</p>
    </div>
  </article>
</section>
        </>
    )
}

export default formuleCreation;
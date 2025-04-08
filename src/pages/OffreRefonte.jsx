import React from 'react';
import Header from '../components/header/Header';
import ScrollTo from '../hook/ScrollTo';
import Button from '../components/button/Button';
import ModalAudit from '../components/ModalAudit';
import { useState } from 'react';


function FormuleRefonte() {

    const [showModal, setShowModal] = useState(false);
    ScrollTo();


    return(
        <>
        <Header />
        <h1>REFONTE DE VOTRE SITE</h1>
<section className='formules'>
  <h2 className='formules__title'>DONNEZ UN SECOND SOUFFLE À VOTRE SITE</h2>
  <p className='formules__content--center'>
    Votre site a vieilli, il ne vous représente plus ou n’est plus agréable à consulter ?<br />
    La refonte vous permet de repartir sur des bases solides, sans tout recommencer de zéro.
  </p>
  <p>
    Ensemble, on modernise l’aspect visuel, on fluidifie la navigation, on améliore les performances et on adapte le site à vos nouveaux besoins. Le tout, avec douceur et méthode.
  </p>
  <p className='formules__content--center formules__content--center--color'>
    Une refonte, c’est un nouveau départ pour votre visibilité en ligne.
  </p>

  <div className='formules__content--choice'>
    <article className="formulacard">
      <h3 className="formulacard__title">OFFRE DE BASE</h3>
      <p className='formulacard__price'>625 € TTC</p>
      <p className="formulacard__content--txt1">Idéale pour redonner un coup de frais à votre site existant (jusqu’à 2 pages).</p>
      <div className="formulacard__content--txt2">
        <p>
          ✿ Audit du site actuel (design, contenu, structure)<br />
          ✿ Refonte de 2 pages : accueil + 1 page<br />
          ✿ Nouveau design moderne et responsive<br />
          ✿ Optimisation de la navigation<br />
          ✿ Réutilisation de vos textes/images<br />
          ✿ Mise en ligne + 3 mois de maintenance
        </p>
      </div>
      <button onClick={() => setShowModal(true)} className="button button__color">
  JE VEUX UN AUDIT GRATUIT !
</button>

<ModalAudit show={showModal} onClose={() => setShowModal(false)} />
    </article>

    <article className='options'>
      <h2 className='options__title'> + OPTIONS AU CHOIX </h2>
      <p className='options__txt'>Ajoutez ce dont vous avez besoin pour aller plus loin :</p>
      <table className="options__table">
        <thead>
          <tr>
            <th>Option</th>
            <th>Description</th>
            <th>À partir de</th>
          </tr>
        </thead>
        <tbody>
          <tr><td className='bold'>Page supplémentaire</td><td>Refonte de pages additionnelles</td><td>70 € / page</td></tr>
          <tr><td className='bold'>Refonte de l’arborescence</td><td>Réorganisation du menu et des parcours</td><td>80 €</td></tr>
          <tr><td className='bold'>Retravail des textes</td><td>Amélioration, clarté, fluidité</td><td>100 €</td></tr>
          <tr><td className='bold'>Sourcing & remplacement des visuels</td><td>Choix de nouvelles images adaptées</td><td>80 €</td></tr>
          <tr><td className='bold'>Nouvelle identité visuelle</td><td>Palette couleurs, typographies, ambiance</td><td> €</td></tr>
          <tr><td className='bold'>SEO structurel</td><td>Balises, hiérarchie, mots-clés</td><td>90 €</td></tr>
          <tr><td className='bold'>Ajout d’un CMS (Strapi)</td><td>Pour modifier facilement votre contenu</td><td>220 €</td></tr>
        </tbody>
      </table>
    </article>
  </div>

  <article className='formules__exemple'>
    <h4>Exemple de refonte</h4>
    <p><em>Isabelle est réflexologue. Son site date de 2018, elle souhaite un design plus doux, une navigation simplifiée, et pouvoir modifier ses textes seule.</em></p>
    <ul>
      <li>✿ Offre de base : 625 €</li>
      <li>✿ 1 page supplémentaire : 70 €</li>
      <li>✿ Nouvelle identité visuelle : 50 €</li>
      <li>✿ Ajout d’un CMS : 220 €</li>
    </ul>
    <p><strong>Total estimé : 965 € TTC</strong></p>  
  </article>
</section>

<section className='faq'>
  <h2 className='faq__title'>QUESTIONS FRÉQUENTES</h2>
  <article className='faq__questions'>
    <div className='faq__questions--q'>
      <h4>✿ Est-ce qu’on doit tout refaire ?</h4>
      <p>Non, on garde ce qui fonctionne (contenus, structure) et on améliore ce qui freine : design, clarté, expérience utilisateur…</p>
    </div>
    <div className='faq__questions--q'>
      <h4>✿ Combien de temps dure une refonte ?</h4>
      <p>En moyenne entre 2 et 4 semaines selon les modifications choisies.</p>
    </div>
    <div className='faq__questions--q'>
      <h4>✿ Pourquoi c’est parfois plus cher qu’une création ?</h4>
      <p>Parce qu’il faut analyser, décortiquer et réadapter un site existant : c’est plus complexe que partir de zéro. Mais c’est souvent plus rapide et économique qu’une refonte totale.</p>
    </div>
    <div className='faq__questions--q'>
      <h4>✿ Est-ce que je pourrai gérer le site après ?</h4>
      <p>Oui, si vous choisissez l’option CMS. Je vous forme à l’utiliser en toute autonomie.</p>
    </div>
    <div className='faq__questions--q'>
      <h4>✿ Et si je ne sais pas ce qui ne va pas dans mon site ?</h4>
      <p>Pas de souci ! Je vous propose un mini-audit gratuit pour y voir clair et décider ensemble de ce qui doit évoluer.</p>
    </div>
  </article>
</section>
        </>
    )
}

export default FormuleRefonte;
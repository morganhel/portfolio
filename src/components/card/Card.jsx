import logoGit from '../../assets/images/logo_github.png';
import projets from '../../data/projets.json'


function Card({img,title,txt,repo}) {
    const cheminImage=projets[0].img;

    return (
        <article className="card">
            <div className='card__top'>
                <img className='card__top--img' src={cheminImage} alt='apercu du site'/>
                <a href={repo}>
                    <img className='card__top--logo' src={logoGit} alt='logo Github' />
                </a>
            </div>
            <div className='card__bottom'>
            <h3>{title}</h3>
            <p>{txt}</p>
            </div>
        </article>
    )
}

export default Card
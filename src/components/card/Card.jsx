import logoGit from '../../assets/images/logo_github.png';

function Card({img,title,txt,repo}) {

    return (
        <article className="card">
            <div className='card__top'>
                <img className='card__top--img' src={img} alt='apercu du site'/>
                <a href={repo}>
                    <img className='card__top--logo' src={logoGit} alt='logo Github' />
                </a>
            </div>
            <div className='card__bottom'>
            <h3>{title}</h3>
            <p>Ma mission : {txt}</p>
            </div>
        </article>
    )
}


export default Card
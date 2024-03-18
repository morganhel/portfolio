import logoGit from '../../assets/images/logo_github.png'
function Card({img,title,txt,repo}) {
    return (
        <article className="card">
            <div className='card__top'>
                <img className='card__top--img' src={img} />
                <a href={repo}>
                    <img className='card__top--logo' src={logoGit} />
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
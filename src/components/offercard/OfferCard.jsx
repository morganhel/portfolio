function OfferCard ({img,title,txt}){
    return(
        <article className="offercard">
            <img src={img} className="offercard__img" alt='icon'/>
            <div className="offercard__content">
                <h3 className="offercard__content--title">{title}</h3>
                <p className="offercard__content--txt">{txt}</p>
                <a>En savoir plus &gt;</a>
            </div>
        </article>
    )
}

export default OfferCard
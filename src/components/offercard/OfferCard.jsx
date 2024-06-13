function OfferCard ({img,title,txt}){
    const paragraphes=txt.split('\n\n');

    return(
        <article className="offercard">
            <img src={img} className="offercard__img" alt='icon'/>
            <div className="offercard__content">
                <h3 className="offercard__content--title">{title}</h3>
                {paragraphes.map((paragraphe,index) => (
                            <p className="offercard__content--txt" key={index}>{paragraphe}</p>
                        ))}
                <a>En savoir plus &gt;</a>
            </div>
        </article>
    )
}

export default OfferCard
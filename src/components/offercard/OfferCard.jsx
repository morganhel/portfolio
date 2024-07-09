function OfferCard ({img,title,txt1,price,txt2}){
    const paragraphes1=txt1.split('\n\n');
    const paragraphes2=txt2.split('\n\n');

    return(
        <article className="offercard">
            <div className="offercard__header">
                <h3 className="offercard__header--title">{title}</h3>
                <img src={img} className="offercard__header--img" alt='icon'/>
                <p className="offercard__header--price">{price}</p>
            </div>
            <div className="offercard__content">
                {paragraphes1.map((paragraphe1,index) => (
                <p className="offercard__content--txt" key={index}>{paragraphe1}</p>
                ))}
                {paragraphes2.map((paragraphe2,index) => (
                            <p className="offercard__content--txt" key={index}>{paragraphe2}</p>
                        ))}
                <a>L'offre en détails &gt;</a>
            </div>
        </article>
    )
}

export default OfferCard
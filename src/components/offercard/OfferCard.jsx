import Button from '../button/Button'

function OfferCard ({img,title,txt1,txt2,txt3,page}){
    const paragraphes2=txt2.split('\n\n');

    return(
        <article className="offercard">
            <div className="offercard__header">
                <h3 className="offercard__header--title">{title}</h3>
                <img src={img} className="offercard__header--img" alt='icon'/>
            </div>
            <div className="offercard__content">
                <p className="offercard__content--txt1" key={title}>{txt1}</p>
                {paragraphes2.map((paragraphe2,index) => (
                            <p className="offercard__content--txt2" key={index}>{paragraphe2}</p>
                        ))}
                <p className="offercard__content--txt3">{txt3}</p>
                <Button 
                    txt="DECOUVRIR LES FORMULES"
                    lien={page}
                    bclass="button" />
            </div>
        </article>
    )
}

export default OfferCard
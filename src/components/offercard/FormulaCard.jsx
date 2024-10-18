import Button from '../button/Button'

function FormulaCard ({title,stitle,price,txt1,txt2,page,fclass}){
    const paragraphes2=txt2.split('\n\n');

    return(
        <article className={fclass}>
                <h3 className="formulacard__title">{title}</h3>
                <h4 className="formulacard__stitle">{stitle}</h4>
                <p className='formulacard__price'>{price}</p>
                <p className="formulacard__content--txt1">{txt1}</p>
                {paragraphes2.map((paragraphe2,index) => (
                            <p className="formulacard__content--txt2" key={index}>{paragraphe2}</p>
                        ))}
                <Button 
                    txt="PLUS DE DETAILS"
                    lien={page} 
                    bclass="button button__color"/>
        </article>
    )
}

export default FormulaCard
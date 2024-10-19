

function FormulaCard ({title,txt,fclass}){
    const paragraphes2=txt.split('\n\n');

    return(
        <article className={fclass}>
                <h4 className="formuladetailscard__title">{title}</h4>
                {paragraphes2.map((paragraphe2,index) => (
                            <p className="formuladetailscard__txt" key={index}>{paragraphe2}</p>
                        ))}
        </article>
    )
}

export default FormulaCard
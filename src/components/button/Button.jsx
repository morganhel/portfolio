import { Link } from "react-router-dom";

function Button ({txt,lien}){

    return(
        <div class='button'>
            <Link to={lien}>
            <button  class='button__txt' type="button">{txt}</button>
            </Link>
        </div>
    )
}

export default Button
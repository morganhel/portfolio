import { NavLink } from "react-router-dom";

function Button ({txt,lien}){
    console.log({lien})
    return(
        <div class='button'>
            <NavLink to={lien}>
            <button  class='button__txt' type="button">{txt}</button>
            </NavLink>
        </div>
    )
}

export default Button
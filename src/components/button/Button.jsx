import { NavLink } from "react-router-dom";

function Button ({txt,lien,bclass}){
    console.log({lien})
    return(
        <NavLink to={lien}>
        <button  className={bclass} type="button">{txt}</button>
        </NavLink>
    )
}

export default Button
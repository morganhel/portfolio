import CV from "../../assets/pdf/CV.pdf";
import LogoSmall from '../../assets/images/MyLogo/LOGO_carré_petit.svg'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className='header' id='header'>
            <img className='header__logo' src={LogoSmall} alt="MH Logo"/>
            <nav >
                <ul className='header__nav'>
                    <li><a href="../#presentation" className='header__nav--link'>PRESENTATION</a></li>
                    <li className="nav-item dropdown">
                        <span className='header__nav--link dropdown-title'>SERVICES</span>
                        <ul className="dropdown-menu">
                            <li><NavLink to="/#offres" className='header__nav--link dropdown-item'>MES SERVICES</NavLink></li>
                            <li><NavLink to="/offreCreation" className='header__nav--link dropdown-item'>✿ CREATION</NavLink></li>
                            <li><NavLink to="/offreMaintenance" className='header__nav--link dropdown-item'>✿ MAINTENANCE</NavLink></li>
                            <li><NavLink to="/offreRefonte" className='header__nav--link dropdown-item'>✿ REFONTE</NavLink></li>
                        </ul>
                    
                    </li>
                    <li><a href="../#realisations" className='header__nav--link'>PROJETS</a></li>
                    <li><a href="../#contact" className='header__nav--link'>CONTACT</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
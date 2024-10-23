import CV from "../../assets/pdf/CV.pdf";
import LogoSmall from '../../assets/images/MyLogo/LOGO_carré_petit.svg'

function Header() {
    return (
        <header className='header'>
            <img className='header__logo' src={LogoSmall} alt="MH Logo"/>
            <nav >
                <ul className='header__nav'>
                    <li><a href="../#presentation" className='header__nav--link'>PRESENTATION</a></li>
                    <li><a href="../#offres" className='header__nav--link'>SERVICES</a></li>
                    <li><a href="../#realisations" className='header__nav--link'>PROJETS</a></li>
                    <li><a href="../#contact" className='header__nav--link'>CONTACT</a></li>
                    {/* <li><a href={CV} className='header__nav--link'>CV</a></li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Header
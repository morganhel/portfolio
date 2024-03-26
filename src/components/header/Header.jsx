function Header() {
    return (
        <header className='header'>
            <p className='header__name'>MH</p>
            <nav >
                <ul className='header__nav'>
                    <li><a href="../#presentation" className='header__nav--link'>PRESENTATION</a></li>
                    <li><a href="../#realisations" className='header__nav--link'>REALISATIONS</a></li>
                    <li><a href="../#competences" className='header__nav--link'>COMPETENCES</a></li>
                    <li><a href="../#contact" className='header__nav--link'>CONTACT</a></li>
                    <li><a href="#" className='header__nav--link'>CV</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
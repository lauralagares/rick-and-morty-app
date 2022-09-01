import './style.css';
// import Logo from '../../images/rickandmorty.webp';
import Logo from '../../images/rickandmorty.png';

function Header() {
    return (
        <nav className="navbar d-flex justify-content-center header-background">
            <img src={Logo}
                width="95%"
                alt="Rick and Morty" />
        </nav>
    )
}

export default Header
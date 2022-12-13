import './style.css';
import Logo from '../../images/rickandmorty.png';
import Arrow from '../arrow';

function Header() {
    return (
        <nav className="navbar d-flex justify-content-center align-content-center header-background">
            <img src={Logo}
                width="100%"
                alt="Rick and Morty" />
                
            <Arrow/>
        </nav>
    )
}

export default Header
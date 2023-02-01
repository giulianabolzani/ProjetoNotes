import { Link } from 'react-router-dom';
import Container from './Container.js';
import styles from './Navbar.module.css';
import logo from '../../img/logo.png';

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img className={styles.logo} src={logo} alt="Anotações"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/nova-anotacoes">Nova Anotações</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/anotacoes">Minhas Anotações</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar;
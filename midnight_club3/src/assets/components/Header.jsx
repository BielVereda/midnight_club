import styles from "./Header.module.css";
import Logo from "./../images/midnight-logo.webp";

export default function Header() {
    return (
        <header className={styles.header}>
            
            <div className={styles.logo}>
                <img 
                    src={Logo} 
                    alt="Midnight Club Logo" 
                    className={styles.logoImg} 
                />
            </div>

            <nav className={styles.nav}>
                <a href="#" className={styles.link}>Início</a>
                <a href="#" className={styles.link}>Carros</a>
                <a href="#" className={styles.link}>Sobre</a>
                <a href="#" className={styles.link}>Contato</a>
            </nav>

        </header>
    );
}
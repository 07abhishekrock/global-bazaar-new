const { faFacebook, faTwitter , faInstagram } = require("@fortawesome/free-brands-svg-icons")
const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome")
import Link from 'next/link';
import styles from '../styles/footer.module.scss';

const Footer = ()=>{
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer-heading"]}>
                <h1>Global Bazaar</h1>
                <div className={styles['footer-head-links']}>
                    <Link href="#about">About Us</Link>
                    <Link href="#sell">Sell With Us</Link>
                    <Link href="#affi">Affiliates</Link>
                    <Link href="#priv">Privacy</Link>
                </div>
                <div className={styles['footer-social-media']}>
                    <Link href="/#facebook">
                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </Link>
                    <Link href="/#instagram">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </Link>
                    <Link href="/#twitter">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
            <div className={styles['footer-links-grid']}>

                <div className={styles['footer-links']}>
                    <h3>Heading</h3>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>
                </div>
                <div className={styles['footer-links']}>
                    <h3>Heading</h3>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>

                </div>
                <div className={styles['footer-links']}>
                    <h3>Heading</h3>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>
                    <Link href="#sell">Option 1</Link>

                </div>


            </div>
        </footer>
    )
}

export default Footer;
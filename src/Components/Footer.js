import styles from '../Css/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faLinkedin,} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <div className={styles.div}>
         <footer className={styles.fot}>© Copyright OC. All Rights Reserved</footer>
        <div className={styles.social}>
          
        <a className={styles.a} href='https://github.com/Manisha-404' target={'blank'}>
        <FontAwesomeIcon className={styles.icon} icon={faGithub} size="2x" color='#B0FAFF'/>
        </a>
        <a className={styles.a} href='https://www.facebook.com/karus.manisha/' target={'_blank'}>
        <FontAwesomeIcon className={styles.icon} icon={faFacebook} size="2x" color='#B0FAFF'/>
        </a>
        <a className={styles.a} href='https://www.instagram.com/manisha_439/' target={'_blank'}>
        <FontAwesomeIcon className={styles.icon} icon={faInstagram} size="2x" color='#B0FAFF'/>
        </a>
        <a className={styles.a} href='https://www.linkedin.com/in/manisha-karus-114513228/' target={'_blank'}>
        <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="2x" color='#B0FAFF'/>
        </a>
        <Link className={styles.a} to="/Contact">
        <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="2x" color='#B0FAFF'/>
        </Link>
        </div>
      </div>
    );
  }
  
  export default Footer;

import styles from '../Css/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Pbg from './Particlebg';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Nav/>
      <Pbg/>      
      <div className={styles.main}>
      <h1 className={styles.h1}>HELLO WORLD!!👋👋</h1>
      <h1 className={styles.h2}>This is Karus Manisha</h1>
      <p className={styles.h2} > ^_~ </p>
      <Link className={styles.link} to="/About"> 
      <p className={styles.p} >Know more about me {' '}<FontAwesomeIcon icon={faHeart} size="lg" color='#B0FAFF' beat/></p>
      </Link>
      <ul className={styles.ul}>
          
          <li className={styles.li}>
            <a href='https://github.com/Manisha-404' target={'blank'}>
            <FontAwesomeIcon className={styles.icon} icon={faGithub} size="2x" color='#B0FAFF'/>
            </a>
          </li>
          <li className={styles.li}>
            <a href='https://www.facebook.com/karus.manisha/' target={'_blank'}>
            <FontAwesomeIcon className={styles.icon} icon={faFacebook} size="2x" color='#B0FAFF'/>
            </a>
          </li>
          <li className={styles.li}>
          <a href='https://www.instagram.com/manisha_439/' target={'_blank'}>
            <FontAwesomeIcon className={styles.icon} icon={faInstagram} size="2x" color='#B0FAFF'/>
          </a>
          </li>
          <li className={styles.li}>
          <a href='https://www.linkedin.com/in/manisha-karus-114513228/' target={'_blank'}>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} size="2x" color='#B0FAFF'/>
          </a>
          </li>
          <li className={styles.li}>  
          <Link className={styles.link} to="/Contact">
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} size="2x" color='#B0FAFF'/>
          </Link>
          </li>
      </ul>
      </div>
    </>
  );
}

export default Home;

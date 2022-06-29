import styles from '../Css/Nav.module.css';
import logo from '../logo.png';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Nav() {
  const [isChecked, setIsChecked] = useState(false);
  return (
   <>
     <div className={styles.main}>
      <div className={styles.left}>
      {/* <img src={logo} className={styles.logo} alt="logo" /> */}
      <Link className={styles.link} to="/"> 
      <h2 className={styles.h2}>KM</h2>
      </Link>
      </div>
      <div className={styles.nav}>
        <ul className={styles.ul}>
            <input className={styles.input} type="checkbox"  onChange={(event) => setIsChecked(event.currentTarget.checked)}checked={isChecked} id="checkbox_toggle" />
            <FontAwesomeIcon onClick={() => setIsChecked(!isChecked)} className={styles.hamburger} icon={faBars} size="xl" color='#B0FAFF'/>
          <div className={styles.menu}>
          <Link className={styles.link} to="/About"> 
            <li className={styles.li}>
              ABOUT
            </li>
          </Link>
          <Link className={styles.link} to="/Education"> 
            <li className={styles.li}>
              EDUCATION
            </li>
          </Link>
          <Link className={styles.link} to="/Project">
            <li className={styles.li}>
              PROJECT
            </li>
          </Link>
          <Link className={styles.link} to="/Gallery"> 
            <li className={styles.li}>
              GALLERY
            </li>
            </Link>
            <Link className={styles.link} to="/Contact">
            <li className={styles.li}>
              CONTACT
            </li>
            </Link>
           </div>
        </ul>
      </div>
     </div> 
   </>
  );
}

export default Nav;
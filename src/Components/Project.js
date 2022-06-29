import main from '../img/t.png';
import h from '../img/h.png';
import styles from '../Css/Project.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Nav from '../Components/Nav.js'
import Footer from '../Components/Footer.js'
import port from '../img/protfolio.jpg';

function Project() {
    return (
      <> 
        <Nav/>
        <div className={styles.main} >
            <div className= {styles.span}></div>
            <div className={styles.card}>
                <div className={styles.div}>
                <img className={styles.img} src={main} alt="Logo" />
                <h1 className={styles.h1}>TRIP UP</h1>
                <p className={styles.p} >
                It is a web app bulid using react which is helpful for traveller who are visting new places and want to know about the destination
                </p>
                <div className={styles.live}>
                {/* https://github.com/Manisha-404/binary_brains */}
                  <a className={styles.link} href='https://github.com/Manisha-404/binary_brains' target="_blank"> 
                    <FontAwesomeIcon className={styles.icon} icon={faGithub} size="3x" color='#053D57'/>
                  </a>
                  <a className={styles.link} href='https://binary-brains.vercel.app/'>
                    <FontAwesomeIcon className={styles.icon} icon={faGlobe} size="3x" color='#053D57'/>
                  </a>
                </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.div}>
                <img className={styles.img} src={h} alt="Logo" />
                <h1 className={styles.h1}>PATERNSHIP.COM</h1>
                <p className={styles.p} >
                This is a react-app which is helpful for the people who want investment for there events,they can connect to the sponsers.
                </p>
                <div className={styles.live}>
                  <a className={styles.link} href='https://github.com/Manisha-404/hint' target="_blank"> 
                    <FontAwesomeIcon className={styles.icon} icon={faGithub} size="3x" color='#053D57'/>
                  </a>
                  <a className={styles.link} href='https://hint.vercel.app/'>
                    <FontAwesomeIcon className={styles.icon} icon={faGlobe} size="3x" color='#053D57'/>
                  </a>
                </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.div}>
                <img className={styles.img} src={port} alt="Logo" />
                <h1 className={styles.h1}>PORTFOLIO</h1>
                <p className={styles.p} >
                  A basic portfolio website made using  
                  'HTML' , 'CSS' , 'javascript'
                   <br></br>
                   <br></br>
                   <br></br>
                </p>
                <div className={styles.live}>
                  <a className={styles.link} href='https://github.com/Manisha-404/mywebsite' target="_blank"> 
                    <FontAwesomeIcon className={styles.icon} icon={faGithub} size="3x" color='#053D57'/>
                  </a>
                  <a className={styles.link} href='https://manisha-404.github.io/mywebsite/'>
                    <FontAwesomeIcon className={styles.icon} icon={faGlobe} size="3x" color='#053D57'/>
                  </a>
                </div>
                </div>
            </div>
            {/* <div className={styles.card}>
                <div className={styles.div}>
                <img className={styles.img} src={main} alt="Logo" />
                <h1 className={styles.h1}>TRIP UP</h1>
                <p className={styles.p} >
                It is a web app bulid using react which is helpful for traveller who are visting new places and want to know about the destination
                </p>
                <div className={styles.live}>
                    <FontAwesomeIcon className={styles.icon} icon={faGithub} size="3x" color='#053D57'/>
                    <FontAwesomeIcon className={styles.icon} icon={faGlobe} size="3x" color='#053D57'/>
                </div>
                </div>
            </div> */}
        </div>
        
        <Footer/>
      </>
    );
  }
  
  export default Project;
  
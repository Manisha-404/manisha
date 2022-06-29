import styles from '../Css/About.module.css'
import profile from '../img/img.png' 
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
import resume from '../assests/resume.pdf'
import Skill from './Skill';
import Nav1 from './Nav';
import Footer from '../Components/Footer';
function About() {
    return (
      <>
        <Nav1/>
        <div className={styles.over}>
        <div className={styles.div}>
         <img className={styles.img} src={profile} alt="profile" ></img>
         <div className={styles.content}>
            <h1 className={styles.h1}>  HELLO WORLD!!!</h1>
            <h2 className={styles.h2}> THIS IS KARUS MANISHA ^_~ </h2>
            <p className={styles.p}> 
                Studying in BTECH 2nd year
                in Information Technology at Indian Institute of Information Technology Allahbad.
                I am an enthusiast tech lover trying to
                explore and learn new skills.
            </p>
            <p className={styles.p1}>I AM A &nbsp;
            <span className={styles.type}> <Typewriter
                 options={{
                    strings: ['PROGRAMMER', 'WEB DEVELOPER'],
                    autoStart: true,
                    loop: true,
                }}
                />
            </span>
            </p>
            <Link to={resume} target="_blank"  >
             <button className={styles.but}>RESUME</button>
            </Link>
         </div>
        </div>
         <Skill/>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default About;
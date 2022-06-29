import { faCss3, faFigma, faGitAlt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../Css/Skills.module.css'
import cpp from '../img/c++.png'
function Skill() {

    return (
      <>
       <div className={styles.div} >
         <h1 className={styles.h1}>TECHNICAL SKILLS</h1>
         <ul className={styles.ul}>
           <div className={styles.bor}>
           <li className={styles.li}>            
             <FontAwesomeIcon className={styles.icon} icon={faHtml5} size="xl" color='#B0FAFF'/>
             <br></br>
             <h6 className={styles.h6}>HTML</h6>
           </li>
           </div>
           <div className={styles.bor}>
           <li className={styles.li}>
             <FontAwesomeIcon className={styles.icon} icon={faCss3} size="xl" color='#B0FAFF'/>
             <br></br>
             <h6 className={styles.h6}> CSS</h6>
           </li>
           </div>
           <div className={styles.bor}>
           <li className={styles.li}>
             <FontAwesomeIcon className={styles.icon} icon={faJs} size="xl" color='#B0FAFF'/>
             <br></br>
             <h6 className={styles.h6}> JS </h6>
           </li>
           </div>
           <div className={styles.bor}>
           <li className={styles.li}>
             <FontAwesomeIcon className={styles.icon} icon={faReact} size="xl" color='#B0FAFF'/>
             <br></br>
             <h6 className={styles.h6}>REACT</h6>
           </li>
           </div>
           <div className={styles.bor}>
           <li className={styles.li}>
             <FontAwesomeIcon className={styles.icon} icon={faC} size="xl" color='#B0FAFF'/>
             <br></br>
              <h6 className={styles.h6}>C</h6>
           </li>
           </div>
           <div className={styles.bor}>
           <li className={styles.li}>
             {/* <FontAwesomeIcon icon={faC} size="xl" color='#B0FAFF'/> */}
             <img className={styles.img} src={cpp} alt="cpp"></img>
             <br></br>
             <h6 className={styles.h61}>C++</h6>
           </li>
           </div>
           <div className={styles.bor}>
           <li className={styles.li}>
             <FontAwesomeIcon className={styles.icon} icon={faGitAlt} size="xl" color='#B0FAFF'/>
             <br></br>
             <h6 className={styles.h6}>GIT</h6>
           </li>
           </div>
           <div className={styles.bor}>
           <li className={styles.li}>
             <FontAwesomeIcon className={styles.icon} icon={faFigma} size="xl" color='#B0FAFF'/>
             <br></br>
             <h6 className={styles.h6}>FIGMA</h6>
           </li>
           </div>
         </ul>
         <h1 className={styles.h12}>Online Programing Profiles</h1>
         <ul className={styles.ul} >
           <div className={styles.bor1}>
           <li className={styles.li}>
             <h6 className={styles.h6}>CODE CHEF : 1651 (MAX) </h6>
           </li>
           </div>
           <div className={styles.bor1}>
           <li className={styles.li}>
            <h6 className={styles.h6}> CODEFORCES: 1037 (MAX) </h6>
           </li>
           </div>
         </ul>
       </div>
      </>
    );
  }
  
  export default Skill;
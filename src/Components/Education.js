import styles from '../Css/Education.module.css';
import Nav from './Nav'
import Footer from './Footer' 
function Education() {
    return (
      <>
        <Nav/>
        <div className={styles.div}>
         <h1 className={styles.h1}>Education</h1>
         <div className={styles.card}>
             <h2 className={styles.h2}>BACHELOR OF TECHNOLOGY INFORMATION TECHNOLOGY <br></br>2020-PRESENT</h2>
             <h3 className={styles.h3}>Indian Institute of Information Technology <br></br>Prayagraj,Allahabad</h3>
             <h3 className={styles.h3}>Current CG : 8.39</h3>
         </div>
         <div className={styles.card}>
             <h2 className={styles.h2}>INTERMEDIATE MPC<br></br>2017-2019</h2>
             <h3 className={styles.h3}>CHAITANYA JUNIOR COLLEGE <br></br>Hyderabad, TELANGANA</h3>
             <h3 className={styles.h3}>PERCENTAGE:97.3% </h3>
         </div>
         <div className={styles.card}>
             <h2 className={styles.h2}>TENTH STANDARD<br></br>2016-2017</h2>
             <h3 className={styles.h3}>NOBLE HIGH SCHOOL<br></br>Hyderabad, TELANGANA</h3>
             <h3 className={styles.h3}>GRADE:9.7 CGPA</h3>
         </div>
        </div>
        <Footer/>
      </>
    );
  }
  
  export default Education;
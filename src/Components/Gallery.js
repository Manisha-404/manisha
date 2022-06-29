import styles from '../Css/Gallery.module.css';
import Nav from './Nav'
import a from '../img/p1.png'
import b from '../img/p2.png'
import c from '../img/p3.png'
import d from '../img/p4.png'
import e from '../img/hotel.png'
import f from '../img/plane.jpeg'
function Gallery() {
    return (
        <>
        <Nav/>
        <div className={styles.content}>
            <h1 className={styles.h1}>GALLERY</h1>
            <div className={styles.row}>   
                    <img className={styles.img} src={a}></img>
                    <img className={styles.img} src={b}></img>
                    <img className={styles.img} src={c}></img>
                    <img className={styles.img} src={d}></img>                
                    <img className={styles.img} src={a}></img>
                    <img className={styles.img} src={b}></img>
                    <img className={styles.img} src={c}></img>
                    <img className={styles.img} src={d}></img>                
                    <img className={styles.img} src={a}></img>
                    <img className={styles.img} src={b}></img>
                    <img className={styles.img} src={c}></img>
                    <img className={styles.img} src={d}></img>                         </div>
        </div>
        </>
    );
  }
  
  export default Gallery;
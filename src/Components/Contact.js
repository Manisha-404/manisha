import Nav from './Nav'
import Footer from './Footer'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../Css/Contact.module.css'
import a from '../img/contact.jpg'

function Contact() {
    const [state, handleSubmit] = useForm("mrgjapdj");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
    <>
      <Nav/>
      <div className={styles.div}>
      <div className={styles.div1}>
      <img className={styles.img} src={a} alt="logo"></img>
      <div className={styles.div2}>
        <h1 className={styles.h1} >GET IN TOUCH</h1>
        <form  className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.lable} htmlFor="name">
            Name <br></br>
            <input className={styles.input} id="name" type="name" name="name" placeholder='Name' />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
          <br></br>
          <label className={styles.lable} htmlFor="email">
            Email Address<br></br>
            <input className={styles.input} id="email" type="email" name="email" placeholder='EMAIL' />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </label>
          <br></br>
          
          <label className={styles.lable} >
              Message <br></br>
              <textarea className={styles.text} id="message" name="message" placeholder='ENTER YOUR MESSAGE HERE'/>
              <ValidationError prefix="Message" field="message" errors={state.errors}/>
          </label>
          <button className={styles.but} type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
      </div>  
      </div>
      
      </div>
      <Footer/>
    </>
  );
}

export default Contact;

import React from 'react'

import styles from './Contact.module.css'
import {Alert} from '../Alert/Alert'

import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {useSelector, useDispatch} from 'react-redux'

import {openAlert} from '../../Redux/openSlice'

export const Contact = () => {
    
    const dispatch = useDispatch()
    const selectAlert = state => state.open.alert
    const alert = useSelector(selectAlert)
	
	/* React.useEffect(()=>{
		console.log(alert)
		},[alert]) */
	
	 const form = useRef()
	
	 const sendEmail = (e) => {
       e.preventDefault()

       emailjs.sendForm(
      'service_wzlecr5', 'template_hu92t85', form.current, 'LTwbosNcCwgaQan9I')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      });
      e.target.reset()
  }
	 return(
	    <section>
	       <div className={styles.contForm}>
	       <h2>Contact me</h2>
	       <form ref={form} onSubmit={sendEmail}>
	         <input className={styles.input}
				                   type='text' placeholder='Full Name' name='user' required/>
	         <input className={styles.input} 
				               type='email' placeholder='Email' name='user_email' required />
	         <input className={styles.input}
				                 type='text' placeholder='Subject' name='subject' required />
	         <textarea className={styles.textarea}
				                               name='message' cols='30' rows='5'></textarea>
	         <button className={styles.button} type="submit" onClick={()=>dispatch(openAlert())}>Send Message</button>
	       </form> 
	       </div>
	       {alert ? <Alert />  :null}
	      
	     </section>
	       )
	}
 
export default  Contact

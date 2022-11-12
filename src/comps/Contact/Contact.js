import React from 'react'

import styles from './Contact.module.css'
import {Alert} from '../Alert/Alert'

import {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {useSelector, useDispatch} from 'react-redux'

import {open} from '../../Redux/alertSlice'

export const Contact = () => {
    
    const dispatch = useDispatch()
    const selectAlert = state => state.alert.state
    const alert = useSelector(selectAlert)
	
	React.useEffect(()=>{
		console.log(alert)
		},[alert])
	
	 const form = useRef()
	
	 const sendEmail = (e) => {
       e.preventDefault()

       emailjs.sendForm(
      'service_wzlecr5', 'template_hu92t85', form.current, 'LTwbosNcCwgaQan9I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
	 return(
	    <section>
	       <div className={styles.contForm}>
	       <h2>Contact me</h2>
	       <form ref={form} onSubmit={sendEmail}>
	         <input type='text' placeholder='Full Name' name='user' required/>
	         <input type='email' placeholder='Email' name='user_email' required />
	         <input type='text' placeholder='Subject' name='subject' required />
	         <textarea name='message' cols='30' rows='10'></textarea>
	         <button type="submit" onClick={()=>dispatch(open())}>Send Message</button>
	       </form> 
	       </div>
	       {alert ? <Alert />  :null}
	      
	     </section>
	       )
	}
 
export default  Contact

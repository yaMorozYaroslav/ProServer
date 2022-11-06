import React from 'react'
import {useRef} from 'react'
export const Contact = () => {
	const form = useRef()
	 return(
	    <section>
	       <div>
	       <h2>Contact me</h2>
	       <form ref={form}>
	         <input type='text' placeholder='Full Name' name='user' required/>
	         <input type='email' placeholder='Email' name='user_email' required />
	         <input type='text' placeholder='Subject' name='subject' required />
	         <textarea name='message' cols='30' rows='10'></textarea>
	         <button type="submit">Send Message</button>
	       </form> 
	       </div>
	     </section>
	       )
	}

export default  Contact

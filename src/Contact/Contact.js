import React from 'react'
import {useRef} from 'react'
import emailjs from '@emailjs/browser'

export const Contact = () => {
	
	const [sent, setSent] = React.useState(false)
	const handSent = () => setSent(true)
	
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
   console.log(sent)
	 return(
	    <section>
	       <div>
	       <h2>Contact me</h2>
	       <form ref={form} onSubmit={sendEmail}>
	         <input type='text' placeholder='Full Name' name='user' required/>
	         <input type='email' placeholder='Email' name='user_email' required />
	         <input type='text' placeholder='Subject' name='subject' required />
	         <textarea name='message' cols='30' rows='10'></textarea>
	         <button type="submit" onClick={handSent}>Send Message</button>
	       </form> 
	       </div>
	       {sent ? <button>1</button>:<button>2</button>}
	     </section>
	       )
	}
    
export default  Contact

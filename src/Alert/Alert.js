import React from 'react'

export const Alert = (sent) => {
	const message = sent ? <h1>You've successfully sent a message. I will reply as soon as possible.</h1>
	                                               : null
	return(
	<section>
    {message}
	</section>
	)
	}

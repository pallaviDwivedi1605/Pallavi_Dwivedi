import React from 'react'
import styles from  './contactCard.module.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactCard() {
  return (
    <div className={styles.info}>
        <ul>
        <li> <CallIcon/> +91-9306098158 </li>
        <li> <EmailIcon/> dpallavi854@gmail.com </li>
        <li> <LinkedInIcon/> linkedin.com/in/pallavidwivedi/ </li>
        </ul>
    </div>
  )
}

export default ContactCard
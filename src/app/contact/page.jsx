"use client"
import React,{useState} from 'react'
import styles from "./page.module.css"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Form from '@/components/form/Form';


function Contact() {

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        e.target.reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage('');
    }
  };

  return (
    <section className={styles.contact_section}>
      <div className={styles.container}>
        <div className={styles.form}>
          <Form handleSubmit={handleSubmit} successMessage={successMessage} />
        </div>
        <div className={styles.info}>
          <ul>
            <li> <CallIcon/> +91-9306098158 </li>
            <li> <EmailIcon/> dpallavi854@gmail.com </li>
            <li> <LinkedInIcon/> linkedin.com/in/pallavidwivedi/ </li>
          </ul>
        </div>
      </div>
    </section>
  
  )
}

export default Contact
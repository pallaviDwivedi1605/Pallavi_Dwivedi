"use client"
import React,{useState} from 'react'
import styles from "./page.module.css"
import Form from '@/components/form/Form';
import ContactCard from '@/components/contactDetailCard/ContactCard';


function Contact() {

  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        const responseData = await response.json();
  
        if (responseData.message) {
          setSuccessMessage(responseData.message);
          e.target.reset();
        } else {
          throw new Error('Failed to send email.');
        }
      } else {
        throw new Error('Failed to send email.');
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
        <ContactCard />
      </div>
    </section>
  
  )
}

export default Contact
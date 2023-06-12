"use client"
import { useState } from 'react';
import styles from "./form.module.css"

function Form(props) {

  return (
    <div className={styles.container}>
      <h1>Drop Your Message Here.</h1>
      <form onSubmit={props.handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit" className={styles.btn}>Send Message</button>
      </form>
      <div id="success-message" className={`${props.successMessage ? styles.animated : ''}`}>{props.successMessage}</div>
    </div>
  );
};

export default Form;

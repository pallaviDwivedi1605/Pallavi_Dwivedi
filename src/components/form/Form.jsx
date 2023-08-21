"use client";
import React from "react";
import styles from "./form.module.css";

function Form(props) {
  const handleSubmit = async (e) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxipujinuI_6WE0SjOEHYUA-os1AI_RDMVUHGf2Jn3SvPxQfWApQr5nzhmuwa7itfILfw/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        console.log("Success!", response);
      } else {
        console.error("Error!", response.statusText);
      }
    } catch (error) {
      console.error("Error!", error);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={`${styles.heading} ${styles.heading_animation}`}>
        Drop Your Message Here.
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="name">Name</label>
          <input type="text" name="Name" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="email">Email</label>
          <input type="text" name="Email" required />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="message">Message</label>
          <textarea rows={10} cols={30} name="Message" required></textarea>
        </div>
        <button type="submit" className={styles.btn}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;

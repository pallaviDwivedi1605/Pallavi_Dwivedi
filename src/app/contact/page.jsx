"use client";
import React from "react";
import styles from "./page.module.css";
import Form from "@/components/form/Form";
import ContactCard from "@/components/contactDetailCard/ContactCard";

function Contact() {
  return (
    <section className={styles.contact_section}>
      <div className={styles.container}>
        <div className={styles.info}>
          <ContactCard />
        </div>
        <div className={styles.form}>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Contact;

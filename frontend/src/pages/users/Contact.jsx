import React from "react";
import "../../styles/contact.css";
import contactCover from "../../assets/contact/coverPhoto.jpg";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import ContactHero from "../../components/contact/ContactHero";

const Contact = () => {
  return (
    <div className="contact">
      {/*  contact hero section starts */}
      <ContactHero />
      {/*  contact hero section ends */}

      {/*  contact info section starts */}
      <ContactInfo />
      {/*  contact info section ends */}

      {/*  contact form section starts */}
      <ContactForm />
      {/*  contact form section ends */}
    </div>
  );
};

export default Contact;

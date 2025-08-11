import React from 'react';
import '../../styles/contact.css';
import contactCover from '../../assets/contact/coverPhoto.jpg';
import ContactInfo from '../../components/contact/ContactInfo';
import ContactForm from '../../components/contact/ContactForm';

const Contact = () => {
  return (
    <div className='contact'>
    <div className="contact-header">
  <img src={contactCover} alt="Contact Header" className='w-100' style={{height:"500px", }} />
</div>

    {/*  contact info section starts */}
    <ContactInfo/>
    {/*  contact info section ends */}

    {/*  contact form section starts */}
    <ContactForm/>
    {/*  contact form section ends */}
    </div>
  );
};

export default Contact;

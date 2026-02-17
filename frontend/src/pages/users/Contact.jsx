import { useRef } from "react";
import "../../styles/contact.css";
import contactCover from "../../assets/contact/coverPhoto.jpg";
import ContactInfo from "../../components/contact/ContactInfo";
import ContactForm from "../../components/contact/ContactForm";
import ContactHero from "../../components/contact/ContactHero";

const Contact = () => {
  const getInTouchRef = useRef(null);
  const writeToUsRef = useRef(null);
  return (
    <div className="contact">
      {/*  contact hero section starts */}
      <ContactHero
        onGetInTouchClick={() =>
          getInTouchRef.current.scrollIntoView({ behavior: "smooth" })
        }
        onWriteToUsClick={() =>
          writeToUsRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      {/*  contact hero section ends */}

      {/*  contact info section starts */}
      <div ref={getInTouchRef}>
        <ContactInfo/>
      </div>
      {/*  contact info section ends */}

      {/*  contact form section starts */}
      <div ref={writeToUsRef}>
        <ContactForm/>
      </div>
      {/*  contact form section ends */}
    </div>
  );
};

export default Contact;

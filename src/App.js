import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import logo from './logo.png';
import pic1 from './pic1.jpeg';
import pic2 from './pic2.jpeg';
import pic3 from './pic3.jpeg';
import pic_main from './pic_main.jpg';
import pic5 from './pic5.jpeg';
import { useState } from 'react';

import { faInfoCircle, faCalendarCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons'

library.add(fab)
library.add(faInfoCircle, faCalendarCheck, faEnvelope)

const App = () => (
    <>
      <Header />
      <Intro />
      <Plans />
      <ContactForm />
      <Footer />
    </>
);

const Header = () => (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
      <div className="nav-spacer">
        <a href="#intro" className="nav-link">
          <FontAwesomeIcon icon="info-circle" className="nav-icon" />
          Introduction
        </a>
        <a href="#plans" className="nav-link">
          <FontAwesomeIcon icon="calendar-check" className="nav-icon" />
          Plans
        </a>
        <a href="#contact" className="nav-link">
          <FontAwesomeIcon icon="envelope" className="nav-icon" />
          Contact
        </a>
      </div>
      </nav>
    </header>
);

const Intro = () => (
    <section id="intro" className="intro-section">
      <h2 className="section-title">Introduction: Who are we?</h2>
      <article className="content">
        <img src={pic_main} alt="Picture" className="intro-image" />
        <p className="intro-text">
        At Gokuraku, we embody the magic of Tokyo's breathtaking landscapes and the vibrant pulse of its city life, all wrapped up in Japan's rich and diverse cultural history. Our name, Gokuraku or 極楽 in Kanji, echoes the Buddhist concept of the pure land - an ideal, serene sphere and a blissful antidote to chaos. This is what we strive to provide our guests - an immaculate, joyous break from the mundane, a gateway to paradise.
        <br></br><br></br>
        We believe in more than just showing you the sights; we aim to curate experiences that soak in the essence of Tokyo. From the busy streets to the tranquility of Mount Fuji, our tours are meticulously designed to ensure you experience Tokyo in all its glory. Whether you are on honeymoon, on a short trip or simply looking for an adventure, we tailor our tours to fit around your needs.
        <br></br><br></br>
        Our commitment to service is deep-seated and unwavering. Infused with the philosophy of 'Omotenashi' or the spirit of selfless hospitality, we aspire to provide extraordinary levels of customer service coupled with a personalized approach. Our knowledgeable and friendly guides are not just fluent English speakers; they are the torchbearers of Japanese warmth and hospitality.
        <br></br><br></br>
        Embarking on a tour with Gokuraku means stepping into a reliable service that promises you an unforgettable adventure. We aim to bring you not just a journey, but a story to tell, experiences to relish and memories that last a lifetime. We are not just tour guides; we are your key to Tokyo's heart. We invite you to join us, as we journey together to make your time in Japan an experience of a lifetime. Welcome to Gokuraku. Welcome to paradise.
        </p>
      </article>
    </section>
);


const Plans = () => {
  const images = [pic1, pic2, pic3];
  const plans = [
    { 
      name: "Plan A: Tokyo's All Access Pass ($800)", 
      description: "Experience the magic of Tokyo at your own pace. This plan gives you the freedom to create a personalized itinerary tailored to your interests.", 
      bulletPoints: [
        "Choose up to 4 preferred destinations",
        "Guided tour with image and verbal explanations",
        "Comfortable, air-conditioned transportation",
        "Accommodates a group of up to 5 people",
        "Includes hotel pickup and return",
      ],
      image: pic1,
    },
    {
      name: "Plan B: Honeymoon Heights ($1200)",
      description: "A unique honeymoon experience in Tokyo. This romantic plan includes a trip to Mount Fuji, a private spa, and a drone photography session.",
      bulletPoints: [
        "Access to iconic Tokyo destinations including Mount Fuji",
        "Drone photography and videography session for lasting memories",
        "Private bath and spa at Onsen Yurari",
        "Includes transportation and hotel pick up and drop off",
        "Perfect for couples seeking a unique honeymoon experience",
      ],
      image: pic2,
    },
    {
      name: "Plan C: Tokyo's Uncharted Adventure ($1000)",
      description: "This tour takes the guesswork out of your trip. Let our experienced local drivers create the perfect itinerary for you.",
      bulletPoints: [
        "Personalized itinerary based on the day's weather and situation",
        "Experience the best of Tokyo with a local guide",
        "Comfortable, air-conditioned transportation",
        "Includes hotel pickup and return",
        "Suitable for a group of up to 5 people",
      ],
      image: pic3,
    },
  ];

  return (
    <section id="plans" className="plans-section">
      <h2 className="section-title pl">Plans: What do we offer?</h2>

      <div className="content">
      {plans.map((plan, i) => (
        <article key={i} className="plan-item">
          <img src={plan.image} alt={`Plan ${i+1}`} className="plan-image" />
          <h3 className="plan-title">{plan.name}</h3>
          <p className="plan-description">{plan.description}</p>
          <ul className="plan-points">
            {plan.bulletPoints.map((point, j) => (
              <li key={j} className="plan-point">• {point}</li>
            ))}
          </ul>
        </article>
      ))}
      </div>
      </section>
  );
};

const ContactForm = () => {
  const [plan, setPlan] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = (planName) => {
    setPlan(planName);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:support@gokuraku-jp.com?subject=Contact%20from%20website&body=Hello.%20My%20name%20is%20${encodeURIComponent(name)}.%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0APlan%20Interest:%20${encodeURIComponent(plan)}`;
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact: How to reach us?</h2>
      
      <article className="content ct">
      <img src={pic5} alt="Picture" className="intro-image" />
      <p className="intro-text">
      We understand the value of your time and the importance of providing a swift response. When reaching out to us, kindly make sure to include as much relevant information as possible such as your preferred tour plan, the number of participants, any specific requirements or preferences you might have, and potential dates of your visit. The more details you provide, the better we can assist you and tailor our response to effectively address your individual needs.
      <br></br><br></br>
      Rest assured, our dedicated team of friendly customer service representatives will thoroughly review your email upon receipt and will promptly get back to you at the earliest to assist with your booking process or address any of your concerns. Your satisfaction is paramount to us and we strive to provide exceptional service at every level of interaction.
      <br></br><br></br>
      Please note that upon clicking the 'Contact Us' link, it will open up your default email client. After drafting your email, please remember to manually send it to complete the submission. 
      <br></br><br></br>
      Alternatively, if you wish to compose and send your email using a different method, you can contact us directly at <a href="mailto:support@gokuraku-jp.com">support@gokuraku-jp.com</a>. 
      <br></br><br></br>
      We look forward to assisting you with your queries and to making your Tokyo adventure a truly memorable experience. Thank you for choosing Gokuraku!
      </p>
      </article>

      
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required onChange={e => setName(e.target.value)} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required onChange={e => setEmail(e.target.value)} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required onChange={e => setMessage(e.target.value)} />

        <div className="plan-interests">
      {['Plan A', 'Plan B', 'Plan C', 'Unsure'].map(button => 
        <button 
          onClick={() => handleClick(button)} 
          className={`plan-interest ${plan === button ? "selected" : ""}`}
          key={button}
        >
          {button}
        </button>
      )}
      </div>
      
        <button type="submit">Submit</button>
      </form>

    </section>
  );
};

const Footer = () => (
  <footer>
    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="social-link">
      <FontAwesomeIcon icon={['fab', 'tiktok']} className="social-icon" />
    </a>
    <a href="https://www.instagram.com/gokuraku._jp/" target="_blank" rel="noopener noreferrer" className="social-link">
      <FontAwesomeIcon icon={['fab', 'instagram']} className="social-icon" />
    </a>
    
    <a href="mailto:support@gokuraku-jp.com" className="social-link">
      <FontAwesomeIcon icon={['fas', 'envelope']} className="social-icon" />
    </a>
  </footer>
);

export default App;
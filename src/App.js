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
import pic6 from './pic6.jpeg';
import { useState } from 'react';

import { faInfoCircle, faCalendarCheck, faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab)
library.add(faInfoCircle, faCalendarCheck, faEnvelope, faQuestionCircle)

const App = () => (
    <>
      <Header />
      <Intro />
      <Plans />
      <FAQ />
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
        <a href="#faq" className="nav-link">
          <FontAwesomeIcon icon="question-circle" className="nav-icon" />
          FAQ
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
      <article className="content in">
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
  const [flip, setFlip] = useState(false);
  const destinations = [
    "Lake Kawaguchiko (河口湖)",
    "Mt. Fuji Fifth Station (富士山五合目)",
    "West Lake Healing Village (西湖癒しの里)",
    "Kachikachi Ropeway (かちかちロープウェイ)",
    "Shinyayama Shrine (新屋山神社)",
    "Fuji Azuma Shrine (富士阿祖山太神社)",
    "Kitamoto Asama Shrine (北本郷浅間神社)",
    "Oshino Hakkai (忍野八海)",
    "Oishi Park (大石公園)",
    "Arashiyama Asama Shrine (嵐山浅間神社)",
    "Ninja Village (忍びの村)",
    "Arakura Asama Shrine (新倉山浅間神社)",
    "Shinyayama Shrine (新屋山神社),
    "Arayama Shrine (荒山神社)",
    "Lake Ashi (芦ノ湖)",
    "Owakudani (大涌谷)",
    "Hakone Ropeway (箱根ロープウェイ)",
    "Gotemba Premium Outlets (御殿場アウトレット)",

  ];
  const plans = [
    { 
      name: "Plan A: Tokyo's All Access Pass ($800)", 
      description: "Experience the magic of Tokyo at your own pace. This plan gives you the freedom to create a personalized itinerary tailored to your interests. Click on the card to see the full list of destinations.", 
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
      name: "Plan B: Honeymoon Heights ($1000)",
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
      name: "Plan C: Tokyo's Uncharted Adventure ($900)",
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
        <article onClick={() => i === 0 ? setFlip(!flip) : null} key={i} className={`plan-item ${i === 0 && flip ? 'flip' : ''}`}>
          {!flip || i !== 0 ? (
            <>
              <img src={plan.image} alt={`Plan ${i+1}`} className="plan-image" />
              <h3 className="plan-title">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <ul className="plan-points">
                {plan.bulletPoints.map((point, j) => (
                  <li key={j} className="plan-point">• {point}</li>
                ))}
              </ul>
            </>
          ) : (
            <ul>
              <h3 className="plan-title">Destinations</h3>
              {destinations.map((destination, j) => (
                <li className="destin" ikey={j}>{destination}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
      </div>
    </section>
  );
};

const FAQ = () => (
  <section id="faq" className="faq-section">
    <h2 className="section-title">Frequently Asked Questions</h2>
    
    <article className="content-faq">
    <img src={pic6} alt="Picture" className="intro-image faq" />

      <h3 className="faq-question">How long is the private 1-day Mount Fuji Hakone tour with an English-speaking driver guide?
      <p className="faq-answer">Our tours typically last around 10 hours, providing a comprehensive and immersive experience.</p></h3>
      

      <h3 className="faq-question">Is there insurance coverage for the private vehicles used in the tours?
      <p className="faq-answer">Yes, all our vehicles are covered by comprehensive insurance policies. For your peace of mind, we ensure a safe, secure, and comfortable journey for all our guests.</p>
      </h3>
      

      <h3 className="faq-question">Which languages can be accommodated by the interpreters and guides?
      <p className="faq-answer">Our dynamic team comprises staff fluent in both English and Japanese. We are equipped to provide you with seamless communication throughout your tour.</p>
      </h3>
      

      <h3 className="faq-question">What is your cancellation policy?
      <p className="faq-answer">We offer a full refund for cancellations made up to 24 hours before the start of the tour.</p>
      </h3>
      

      <h3 className="faq-question">Additional Information
      <p className="faq-answer">Please note that our tours may not be suitable for people with back issues or those who are pregnant. If you have a heart condition or other serious ailments, we advise against participation. Our tours may require a moderate level of physical fitness. Additionally, all our tours are private, ensuring a personalized experience exclusive to your group.</p>
      </h3>
      

    </article>
  </section>
);

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
    <a href="https://www.tiktok.com/@gokuraku.jp03" target="_blank" rel="noopener noreferrer" className="social-link">
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

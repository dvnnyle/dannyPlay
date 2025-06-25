import React, { useEffect, useRef } from 'react';
import './style/sorPage.css';
import PWS from '../../assets/PWS.png';
import SocialEmbeds from '../../comp/SocialEmbeds';
import { FaFacebookF, FaInstagram, FaTiktok, FaGlobe } from "react-icons/fa";

export default function SorPage() {
  const tiktokRef = useRef(null);

  useEffect(() => {
    // Remove any previous TikTok embed.js scripts to avoid duplicates
    const prev = document.querySelector('script[src="https://www.tiktok.com/embed.js"]');
    if (prev) prev.remove();
    // Add TikTok embed.js script
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    // Place script after TikTok blockquote for reliable hydration
    if (tiktokRef.current) {
      tiktokRef.current.parentNode.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
    return () => {
      script.remove();
    };
  }, []);

  return (
    <>
      <div className="rectangle">
        <h1 className="pagetitle">SØRLANDET</h1>
      </div>

      <div className="sor-cards-container">
        <div className="content-card sor-content-card">
          <img src={PWS} alt="PWS" className="content-image center-logo" />
        </div>

        <div className="rectangle card-rectangle">
          <h2 className="card-rectangle-title">PLAYWORLD SØRLANDET</h2>
        </div>

        <div className="social-links">
          <a href="https://www.facebook.com/playworldsorlandet" className="social-link" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://playworld.no/" className="social-link" target="_blank" rel="noopener noreferrer"><FaGlobe /></a>
          <a href="https://www.instagram.com/playworldsorlandet/" className="social-link" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@playworldsorlandet" className="social-link" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>

        <div className="content-card sor-content-card">
          <img src={require('../../assets/bdimage.webp')} alt="Bursdag" className="content-image" />
          <a className="bursdag-btn" href="https://playworld.no/bursdagsfeiring-barnebursdag-lekeland/" target="_blank" rel="noopener noreferrer">Bestill bursdag</a>
          <h2 className="cardtitle">BURSDAG</h2>
          <p className="card-desc">
            Feir bursdagen din hos oss! Vi tilbyr egne bursdagsrom, vert som hjelper gjennom hele feiringen, mat og drikke inkludert, og fri lek i hele parken. Bursdagsbarnet får selvfølgelig en overraskelse!
          </p>
        </div>
        <div className="content-card sor-content-card">
          <h2 className="cardtitle">fasiliteter</h2>
          <p className="card-desc">
            Utforsk vårt store lekeland med klatrestativer, trampoliner, sklier og ballbinge. Her er det moro for både små og store barn, og foreldre kan slappe av i vår koselige kafé mens barna leker trygt.
          </p>
        </div>
        <div className="content-card sor-content-card">
          <h2 className="cardtitle">kontakt & åpningstider</h2>
          <p className="card-desc">
            <strong>Åpningstider:</strong><br />
            Mandag–fredag: 10:00–19:00<br />
            Lørdag–søndag: 10:00–18:00<br /><br />
            <strong>Adresse:</strong><br />
            Playworld Sørlandet AS<br />
            Barstølveien 35, 4636 Kristiansand<br /><br />
            <strong>Kontakt:</strong><br />
            Telefon: <a href="tel:+4740000000" className="contact-link">+47 40 00 00 00</a><br />
            E-post: <a href="mailto:sorlandet@playworld.no" className="contact-link">sorlandet@playworld.no</a>
          </p>
        </div>
      </div>

      <div className="divider-with-text">
        <hr className="divider-line" />
        <span className="divider-text">SOSIALE MEDIER</span>
        <hr className="divider-line" />
      </div>

      {/* Instagram and TikTok profile embeds at the bottom */}
      <SocialEmbeds />
    </>
  );
}

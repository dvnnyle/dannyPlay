import React, { useEffect, useRef } from 'react';
import './style/sorPage.css';
import PWS from '../../assets/PWS.png';
import SocialEmbeds from '../../comp/SocialEmbeds';

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
          <img src={PWS} alt="PWS" className="content-image" />
        </div>
        <div className="content-card sor-content-card">
          <h2 className="cardtitle">Card Title 2</h2>
          <p className="cardsubtitle">This is a description for the second content card.</p>
        </div>
        <div className="content-card sor-content-card">
          <h2 className="cardtitle">Card Title 3</h2>
          <p className="cardsubtitle">This is a description for the third content card.</p>
        </div>
      </div>
      {/* Instagram and TikTok profile embeds at the bottom */}
      <SocialEmbeds />
    </>
  );
}

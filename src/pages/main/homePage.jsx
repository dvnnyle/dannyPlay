import React from "react";
import { useNavigate } from "react-router-dom";
import './style/homePage.css';
import PWSImage from '../../assets/PWS.png';
import TriadenImage from '../../assets/Triaden.webp';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="rectangle">
        <h1 className="pagetitle">PARKER</h1>
      </div>

      <div className="content-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/sor')}>
        <img src={PWSImage} alt="PWS" className="content-image" />
        <div className="title-row">
          <h2 className="cardtitle">📍 SØRLANDET</h2>
          <span className="cardsubtitle">Kristiansand</span>
        </div>
      </div>

      <div className="content-card" style={{ cursor: 'pointer' }} onClick={() => navigate('/sor')}>
        <img src={TriadenImage} alt="Triaden" className="content-image" />
        <div className="title-row">
          <h2 className="cardtitle">📍 TRIADEN</h2>
          <span className="cardsubtitle">Lørenskog</span>
        </div>
      </div>

      <hr style={{ width: '50%', border: 'none', borderTop: '2px solid #eee', margin: '30px auto 0 auto' }} />


    </>
  );
};

export default HomePage;

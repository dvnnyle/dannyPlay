import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { useReactToPrint } from 'react-to-print';
import "./styles/qrGenerator.css";

function getRandomString(length = 12) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function QrGenerator() {
  const [randomString, setRandomString] = useState("");
  const [qrValue, setQrValue] = useState("");
  const componentRef = useRef();

  const handleRandom = () => {
    const randomStr = getRandomString();
    setQrValue(randomStr);
    setRandomString(randomStr);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: 62mm 29mm; margin: 0; } @media print { body { margin: 0; background: #fff; } }"
  });

  return (
    
    <div className="qr-card">
      <div style={{
        background: '#f8f9fa',
        padding: '16px',
        borderRadius: '8px',
        marginBottom: '24px',
        border: '1px solid #e9ecef',
      }}>
        <h3 style={{ margin: '0 0 8px 0', color: '#495057', fontSize: '16px' }}>🎫 QR Code billett</h3>
        <p style={{ margin: 0, color: '#6c757d', fontSize: '14px', lineHeight: '1.5' }}>
         testing av qr kode billett
        </p>
      </div>

      <h2 className="qr-title">QR Code</h2>
      <button
        className="qr-btn qr-btn-random"
        onClick={handleRandom}
      >
        Random QR
      </button>
      <div style={{ marginTop: 24, position: "relative", display: "inline-block" }}>
        {qrValue && (
          <>
            <div ref={componentRef} style={{ background: '#fff', width: '62mm', height: '29mm', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '2px solid #222', borderRadius: 6, boxShadow: '0 2px 8px #0002' }}>
              <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: 1, color: '#222', marginBottom: 6 }}>Playworld billett</div>
              <QRCodeCanvas value={qrValue} size={90} fgColor="#222" bgColor="#fff" style={{ border: '2px solid #222', borderRadius: 4, background: '#fff', padding: 4 }} />
              <div style={{ marginTop: 10, fontSize: 15, color: '#333', fontWeight: 600, letterSpacing: 1 }}>{randomString}</div>
              <div style={{ marginTop: 6, fontSize: 11, color: '#888', fontStyle: 'italic' }}>Scan at entrance</div>
            </div>
            
            <button className="qr-btn" style={{ marginTop: 18 }} onClick={handlePrint}>
              Print Label
            </button>
          </>
        )}
      </div>
    </div>
  );
}
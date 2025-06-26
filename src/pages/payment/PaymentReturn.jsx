import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSpinner, FaCheckCircle, FaClock } from 'react-icons/fa';

export default function PaymentReturn() {
  const [status, setStatus] = useState('processing');
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');

    if (status === 'success') {
      setStatus('success');
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate('/');
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setStatus('failed');
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            navigate('/products');
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [navigate]);

  return (
    <div className="payment-return-container">
      <div className="payment-status-card">
        {status === 'processing' && (
          <>
            <div className="status-icon status-processing">
              <FaSpinner className="fa-spin" />
            </div>
            <h2>Behandler betaling...</h2>
            <p>Vennligst vent mens vi bekrefter betalingen din.</p>
            <p>Vi behandler din bestilling og du vil motta en e-post når den er bekreftet.</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="status-icon status-success">
              <FaCheckCircle />
            </div>
            <h2>Betaling vellykket!</h2>
            <p>Takk for kjøpet ditt. Vi har sendt deg en ordrebekreftelse på e-post.</p>
            <p>Du vil bli videresendt til hjemmesiden.</p>
          </>
        )}
        {status === 'failed' && (
          <>
            <div className="status-icon status-failed">
              <FaClock />
            </div>
            <h2>Betaling reservert</h2>
            <p>Din betaling er nå reservert og vil bli behandlet innen kort tid.</p>
            <p>Du vil bli videresendt til produktsiden.</p>
          </>
        )}
        <div className="redirect-timer">
          Viderekobler om {countdown} sekunder...</div>
      </div>
    </div>
  );
}

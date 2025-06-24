import React, { useState } from 'react';
import { createVippsPayment } from '../../api/vipps';
import './styles/ProductPage.css';

export default function ProductPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addedToCart, setAddedToCart] = useState([]); // array of product ids
  const [loading, setLoading] = useState(false);

  const products = [
    {
      id: "sock123",
      name: "sokker",
      price: 1000, // in øre, so 10 NOK
      currency: "NOK",
    },
    {
      id: "hat456",
      name: "golf",
      price: 2500, // 25 NOK
      currency: "NOK",
    },
    {
      id: "mug789",
      name: "sokekr",
      price: 1500, // 15 NOK
      currency: "NOK",
    },
  ];

  const handleAddToCart = (id) => {
    if (!addedToCart.includes(id)) setAddedToCart([...addedToCart, id]);
  };

  const handlePay = async () => {
    if (!phoneNumber.match(/^47\d{8}$/)) {
      alert("Please enter a valid Norwegian phone number starting with 47");
      return;
    }
    setLoading(true);
    const total = addedToCart.reduce((sum, id) => {
      const p = products.find((prod) => prod.id === id);
      return sum + (p ? p.price : 0);
    }, 0);
    const paymentData = {
      amountValue: total,
      phoneNumber,
      reference: `order-${Date.now()}`,
      returnUrl: "http://localhost:3000/payment-return",
      paymentDescription: `Order: ${addedToCart.map(id => products.find(p => p.id === id)?.name).join(", ")}`,
    };
    try {
      const vippsResponse = await createVippsPayment(paymentData);
      if (vippsResponse?.url) {
        window.open(vippsResponse.url, "_blank", "noopener,noreferrer");
      } else {
        alert("Vipps payment URL not received in the response.");
      }
    } catch (error) {
      alert("Payment failed: " + (error.message || error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
            <div className="rectangle">
        <h1 className="pagetitle">BILLETTER</h1>
      </div>
      <div className="product-card">
        <div className="product-header">
          <h2 className="product-title">Produkter</h2>
        </div>
        <div>
          {products.map((product) => (
            <div key={product.id} className="product-list-item">
              <div className="product-list-row">
                <span className="product-list-name">{product.name}</span>
                <span className="product-list-price">{(product.price / 100).toFixed(2)} {product.currency}</span>
              </div>
              <button
                onClick={() => handleAddToCart(product.id)}
                className="product-btn"
                disabled={addedToCart.includes(product.id)}
              >
                {addedToCart.includes(product.id) ? "Lagt til" : "Legg i handlekurv"}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Order Summary in its own card */}
      <div className="product-card order-summary-card">
        <h3 className="order-summary-title">Ordresammendrag</h3>
        <ul className="order-summary-list">
          {addedToCart.map((id) => {
            const p = products.find((prod) => prod.id === id);
            return p ? (
              <li key={id}>
                <span>{p.name}</span>
                <span className="product-list-price">{(p.price / 100).toFixed(2)} {p.currency}</span>
              </li>
            ) : null;
          })}
        </ul>
        {addedToCart.length > 0 && (
          <div className="order-summary-total">
            <span>Totalt:</span>
            <span style={{ color: "#fc4a1a" }}>
              {(addedToCart.reduce((sum, id) => {
                const p = products.find((prod) => prod.id === id);
                return sum + (p ? p.price : 0);
              }, 0) / 100).toFixed(2)} NOK
            </span>
          </div>
        )}
        {/* Phone number input and pay button at the bottom */}
        {addedToCart.length > 0 && (
          <>
            <div className="product-input-group">
              <label className="product-input-label">
                Telefonnummer:{' '}
                <input
                  type="tel"
                  placeholder="XXXXXXXX"
                  value={phoneNumber.startsWith('47') ? phoneNumber.slice(2) : phoneNumber}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, '');
                    if (val.length > 8) val = val.slice(0, 8);
                    setPhoneNumber('47' + val);
                  }}
                  className="product-input"
                />
              </label>
            </div>
            <button
              onClick={handlePay}
              className="product-btn"
              disabled={loading}
            >
              {loading ? 'Behandler...' : 'Betal med Vipps'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

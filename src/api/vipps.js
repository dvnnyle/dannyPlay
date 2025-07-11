// vipps.js
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || (window.location.hostname === 'localhost' ? 'http://localhost:4000' : '');

export async function createVippsPayment(paymentData) {
  const response = await fetch(`${BACKEND_URL}/create-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paymentData),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(JSON.stringify(error));
  }

  return response.json(); // Should include the redirect URL as { url: 'https://...' }
}

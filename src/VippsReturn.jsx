// VippsReturn.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VippsReturn() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const status = queryParams.get('status'); // or other params you expect

  return (
    <div style={{ padding: 20 }}>
      <h1>Vipps Payment Return</h1>
      {token ? (
        <>
          <p><strong>Payment token:</strong> {token}</p>
          <p>Use this token to verify payment status.</p>
        </>
      ) : (
        <p>No payment token found in URL.</p>
      )}
      {status && <p><strong>Status:</strong> {status}</p>}
    </div>
  );
}

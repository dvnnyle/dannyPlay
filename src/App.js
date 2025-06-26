import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "../src/pages/products/ProductPage.jsx";
import HomePage from "../src/pages/main/homePage.jsx";
import SorPage from "../src/pages/main/sorPage.jsx";
import NewsPage from "../src/pages/main/newsPage.jsx";
import CustomNavbar from "../src/comp/navbar.jsx";
import QrGenerator from "../src/qr/qrGenerator.jsx";
import PaymentReturn from "../src/pages/payment/PaymentReturn.jsx";

export default function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/sor" element={<SorPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/qr" element={<QrGenerator />} />
        <Route path="/payment" element={<PaymentReturn />} />
      </Routes>
    </Router>
  );
}

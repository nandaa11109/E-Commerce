import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Component/CartContext'; // Import Context
import './index.css';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import Product from './Component/Product';
import CartPage from './Page/CartPage';
import { useState } from "react";
import Service from './Component/Service';
import Faq from './Component/FaQ';
import Footer from './Component/Footer';
import CheckOut from './Page/CheckOut';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Halaman dengan Navbar */}
          <Route path="/" element={
            <>
              <Navbar setSearchQuery={setSearchQuery} />
              <Hero />
              <Product searchQuery={searchQuery} />
              <Service />
              <Faq />
              <Footer/>
            </>
          } />

          {/* Halaman CartPage tanpa Navbar */}
          <Route path="/CartPage" element={<CartPage />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

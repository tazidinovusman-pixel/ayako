import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Category from './pages/Category';
import Admin from './pages/Admin';
import Wishlist from './pages/Wishlist';
import CartModal from './components/CartModal';
import { initialProducts } from './data/defaultProducts';

export default function App() {
  // Товары магазина (Обновили ключ на ayako_products_v2, чтобы применить новые фото из Pinterest)
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('ayako_products_v2');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  // Корзина
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('ayako_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Избранное
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('ayako_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  // Открытие/закрытие модального окна корзины
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('ayako_products_v2', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('ayako_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ayako_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [newProduct, ...prev]);
  };

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
    alert(`Товар "${product.name}" добавлен в корзину!`);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleToggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.some(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
        <Header 
          cartCount={cart.length} 
          wishlistCount={wishlist.length} 
          onOpenCart={() => setIsCartOpen(true)} 
        />

        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                products={products} 
                wishlist={wishlist} 
                onToggleWishlist={handleToggleWishlist} 
                onAddToCart={handleAddToCart} 
              />
            } 
          />
          <Route 
            path="/category/:type" 
            element={
              <Category 
                products={products} 
                wishlist={wishlist} 
                onToggleWishlist={handleToggleWishlist} 
                onAddToCart={handleAddToCart} 
              />
            } 
          />
          <Route 
            path="/wishlist" 
            element={
              <Wishlist 
                wishlist={wishlist} 
                onToggleWishlist={handleToggleWishlist} 
                onAddToCart={handleAddToCart} 
              />
            } 
          />
          <Route path="/admin" element={<Admin onAddProduct={handleAddProduct} />} />
        </Routes>

        <CartModal 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cartItems={cart} 
          onRemoveFromCart={handleRemoveFromCart} 
        />
      </div>
    </Router>
  );
}
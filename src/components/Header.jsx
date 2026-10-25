import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, PlusCircle, Search } from 'lucide-react';

export default function Header({ cartCount, wishlistCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 lg:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Логотип */}
        <Link to="/" className="text-2xl font-black tracking-widest text-black">
          AYAKO
        </Link>

        {/* Навигация по категориям (ПК) */}
        <nav className="hidden md:flex items-center space-x-6 font-medium text-sm text-gray-700">
          <Link to="/" className="hover:text-black transition">Главная</Link>
          <Link to="/category/caps" className="hover:text-black transition">Шапки</Link>
          <Link to="/category/tshirts" className="hover:text-black transition">Футболки</Link>
          <Link to="/category/pants" className="hover:text-black transition">Штаны</Link>
          <Link to="/category/shoes" className="hover:text-black transition">Обувь</Link>
          <Link to="/category/other" className="hover:text-black transition">Прочие</Link>
        </nav>

        {/* Иконки справа */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Link 
            to="/admin" 
            className="flex items-center space-x-1 text-xs font-semibold bg-black text-white px-3 py-2 rounded-full hover:bg-gray-800 transition shadow-sm"
          >
            <PlusCircle size={16} />
            <span className="hidden sm:inline">Админка</span>
          </Link>

          {/* Избранное */}
          <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full text-gray-700 relative transition">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </Link>

          {/* Корзина */}
          <button 
            onClick={onOpenCart} 
            className="p-2 hover:bg-gray-100 rounded-full text-gray-700 relative transition"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-black text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Мобильное меню категорий */}
      <div className="flex md:hidden justify-around mt-3 pt-2 border-t border-gray-100 text-xs font-semibold text-gray-600 overflow-x-auto space-x-3">
        <Link to="/category/caps" className="whitespace-nowrap">Шапки</Link>
        <Link to="/category/tshirts" className="whitespace-nowrap">Футболки</Link>
        <Link to="/category/pants" className="whitespace-nowrap">Штаны</Link>
        <Link to="/category/shoes" className="whitespace-nowrap">Обувь</Link>
        <Link to="/category/other" className="whitespace-nowrap">Прочие</Link>
      </div>
    </header>
  );
}
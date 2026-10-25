import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Home({ products, wishlist, onToggleWishlist, onAddToCart }) {
  return (
    <div>
      {/* Баннер (Hero Section) */}
      <section className="relative h-[70vh] w-full flex items-center justify-center text-center text-white px-4">
        <img 
          src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600" 
          alt="Ayako Banner" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        <div className="relative z-20 max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            AYAKO SPORT
          </h1>
          <p className="text-base sm:text-xl font-light text-gray-200 mb-8">
            Новая коллекция одежды и обуви для активной жизни. Стиль, качество и комфорт каждый день.
          </p>
          <a href="#catalog" className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition">
            Смотреть каталог
          </a>
        </div>
      </section>

      {/* Сетка товаров */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Новые поступления
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map(product => {
            // Проверяем, находится ли этот конкретный товар в избранном
            const isWishlisted = wishlist.some(item => item.id === product.id);

            return (
              <ProductCard 
                key={product.id} 
                product={product} 
                isWishlisted={isWishlisted}
                onToggleWishlist={onToggleWishlist}
                onAddToCart={onAddToCart}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
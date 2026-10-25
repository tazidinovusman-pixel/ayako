import React from 'react';
import ProductCard from '../components/ProductCard';

export default function Wishlist({ wishlist, onToggleWishlist, onAddToCart }) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Избранное</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">Вы еще ничего не добавили в избранное.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {wishlist.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              isWishlisted={true}
              onToggleWishlist={onToggleWishlist}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
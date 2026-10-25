import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

export default function Category({ products, wishlist, onToggleWishlist, onAddToCart }) {
  const { type } = useParams();

  const categoryTitles = {
    caps: 'Шапки',
    tshirts: 'Футболки',
    pants: 'Штаны',
    shoes: 'Обувь',
    other: 'Прочие товары',
  };

  const filteredProducts = products.filter(p => p.category === type);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        {categoryTitles[type] || 'Категория'}
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">В этой категории пока нет товаров.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map(product => {
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
      )}
    </div>
  );
}
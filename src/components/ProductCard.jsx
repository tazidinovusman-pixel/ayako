import React from 'react';
import { Heart, ShoppingBag } from 'lucide-react';

export default function ProductCard({ product, isWishlisted, onToggleWishlist, onAddToCart }) {
  return (
    <div className="group flex flex-col relative">
      {/* Картинка и оверлей с кнопками */}
      <div className="w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden mb-3 relative shadow-sm">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Кнопка "Избранное" (Сердечко) */}
        <button 
          onClick={() => onToggleWishlist(product)}
          className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition ${
            isWishlisted 
              ? 'bg-white text-red-500 shadow-md' 
              : 'bg-white/70 text-gray-700 hover:bg-white hover:text-red-500'
          }`}
        >
          <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Кнопка быстрого добавления в корзину прямо на фото */}
        <button 
          onClick={() => onAddToCart(product)}
          className="absolute bottom-3 right-3 bg-white/90 hover:bg-black hover:text-white text-black p-2.5 rounded-full shadow-lg backdrop-blur-md transition-all flex items-center justify-center"
          title="В корзину"
        >
          <ShoppingBag size={18} />
        </button>
      </div>

      {/* Текстовая информация */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{product.name}</h3>
          <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">{product.description}</p>
        </div>
      </div>
      <span className="font-bold text-black mt-1 text-sm sm:text-base">{product.price} сом</span>
    </div>
  );
}
import React from 'react';
import { X, Trash2 } from 'lucide-react';

export default function CartModal({ isOpen, onClose, cartItems, onRemoveFromCart }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm transition-opacity">
      <div className="w-full max-w-md bg-h-full bg-white h-full shadow-2xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
        
        {/* Шапка корзины */}
        <div className="flex items-center justify-between pb-4 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Ваша корзина</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition">
            <X size={20} />
          </button>
        </div>

        {/* Список товаров в корзине */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p>Корзина пока пуста</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-50 p-3 rounded-xl border border-gray-100">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.price} сом</p>
                </div>
                <button 
                  onClick={() => onRemoveFromCart(index)}
                  className="text-gray-400 hover:text-red-500 p-2 transition"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Итог и кнопка заказа */}
        {cartItems.length > 0 && (
          <div className="pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600 font-medium">Итого:</span>
              <span className="text-xl font-black text-black">{totalPrice} сом</span>
            </div>
            <button 
              onClick={() => alert('Заказ успешно оформлен! Спасибо, что выбрали Айако.')}
              className="w-full bg-black text-white font-semibold py-3.5 rounded-xl hover:bg-gray-800 transition shadow-lg"
            >
              Оформить заказ
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
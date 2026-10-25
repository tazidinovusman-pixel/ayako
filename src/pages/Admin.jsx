import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin({ onAddProduct }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('head');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price || !imageUrl) return alert('Заполните обязательные поля!');

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      imageUrl,
      description
    };

    onAddProduct(newProduct);
    alert('Товар успешно добавлен!');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Добавить новый товар
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Название товара *</label>
          <input 
            type="text" 
            value={name} 
            onChange={e => setName(e.target.value)}
            placeholder="Например: Худи Ayako Black"
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-black"
          />
        </div>

   <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Категория *</label>
          <select 
            value={category} 
            onChange={e => setCategory(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-black"
          >
            <option value="caps">Шапки</option>
            <option value="tshirts">Футболки</option>
            <option value="pants">Штаны</option>
            <option value="shoes">Обувь</option>
            <option value="other">Прочие</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Цена (сом/руб) *</label>
          <input 
            type="number" 
            value={price} 
            onChange={e => setPrice(e.target.value)}
            placeholder="2500"
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Ссылка на фото (URL) *</label>
          <input 
            type="url" 
            value={imageUrl} 
            onChange={e => setImageUrl(e.target.value)}
            placeholder="https://example.com/photo.jpg"
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-black"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Описание</label>
          <textarea 
            value={description} 
            onChange={e => setDescription(e.target.value)}
            placeholder="Короткое описание товара..."
            rows="3"
            className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-black"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition mt-2"
        >
          Опубликовать товар
        </button>
      </form>
    </div>
  );
}
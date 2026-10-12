
import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem,removeItem,clearCart } from '../Utils/CartSlice';

const Card = ({ info }) => {

  const dispatch = useDispatch();

  const {
    title,
    description,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    thumbnail,
    availabilityStatus,
    reviews,
  } = info;

  const discountedPrice = (
    price - (price * discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="bg-[#141414] text-white rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-[#dfdbdb] hover:shadow-[0_0_15px_rgba(229,9,20,0.2)] transition-all duration-300 group">

      <div className="overflow-hidden bg-[#1f1f1f]">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-5">

        <div className="mb-3">
          <p className="text-[#E50914] text-xs uppercase tracking-widest font-semibold mb-2">
            {category}
          </p>

          <h2 className="text-xl font-bold line-clamp-1 group-hover:text-[#E50914] transition-colors duration-300">
            {title}
          </h2>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
          {description}
        </p>

        <div className="flex items-center gap-3 mb-4 flex-wrap">

          <span className="text-2xl font-bold text-white">
            ${discountedPrice}
          </span>

          <span className="text-gray-500 line-through text-sm">
            ${price}
          </span>

          <span className="bg-[#E50914] text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercentage}% OFF
          </span>

        </div>

        <div className="flex items-center justify-between text-sm mb-4">

          <span className="text-yellow-400">
            ⭐ {rating}
          </span>

          <span className="text-gray-400">
            {reviews?.length ?? 0} Reviews
          </span>

        </div>

        <div className="flex items-center justify-between border-t border-gray-800 pt-3 mb-5">

          <span
            className={`text-sm font-medium ${
              stock > 10 ? "text-green-500" : "text-orange-400"
            }`}
          >
            {availabilityStatus}
          </span>

          <span className="text-gray-400 text-sm">
            Stock: {stock}
          </span>

        </div>

        <button
          onClick={() => {
            dispatch(addItem(info));
          }}
          className="w-full bg-[#bc545a] hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300 active:scale-95"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
};

export default Card;
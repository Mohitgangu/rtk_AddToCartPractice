
import React from 'react';
import { addItem,removeItem,clearCart } from '../Utils/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const data = useSelector((store) => store.Cartz);
  const dispatch = useDispatch();
  const nav = useNavigate();

  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-[#141414] text-white flex flex-col items-center justify-center px-4">
        <div className="text-7xl mb-6">🛒</div>

        <h1 className="text-3xl font-bold mb-4">
          Your Cart is Empty
        </h1>

        <p className="text-gray-400 mb-6 text-center">
          Looks like you haven't added anything to your cart yet.
        </p>

        <button
          onClick={() => nav("/home")}
          className="bg-[#E50914] hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#141414] text-white px-4 md:px-10 py-8">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 border-b border-gray-800 pb-5">

        <h1 className="text-3xl md:text-4xl font-bold">
          Shopping <span className="text-[#E50914]">Cart</span>
        </h1>

        <button
          onClick={() => dispatch(clearCart())}
          className="border border-[#E50914] text-[#E50914] hover:bg-[#E50914] hover:text-white px-5 py-2 rounded-lg transition duration-300"
        >
          Clear Cart
        </button>

      </div>

      {/* Cart Items */}
      <div className="flex flex-col gap-5">

        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gradient-to-r from-[#1c1c1c] to-[#141414] border border-gray-800 hover:border-[#d19a9e] rounded-xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-6 transition duration-300 shadow-lg"
          >

            {/* Product Image */}
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full md:w-36 h-48 md:h-32 object-cover rounded-lg bg-[#222]"
            />

            {/* Product Details */}
            <div className="flex-1 text-center md:text-left">

              <h2 className="text-xl font-bold mb-2">
                {item.title}
              </h2>

              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {item.description}
              </p>

              <p className="text-[#E50914] text-xl font-bold">
                ${item.price}
              </p>

            </div>

            {/* Quantity Control */}
            <div className="flex items-center gap-4">

              <button
              onClick={()=>dispatch(removeItem(item.id))}
                className="w-9 h-9 bg-[#292929] hover:bg-[#E50914] rounded-md font-bold transition duration-300"
              >
                -
              </button>

              <span className="text-lg font-semibold">
                {item.quantity}
              </span>

              <button
              onClick={()=>dispatch(addItem(item))}
                className="w-9 h-9 bg-[#292929] hover:bg-[#E50914] rounded-md font-bold transition duration-300"
              >
                +
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Cart;

"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Cartslice";
import { RootState } from "../redux/Store"; // Update with the correct path to your store file
import Image from "next/image";
import Checkout from "@/components/CheckOut";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CartPage: React.FC = () => {
  const dispatch = useDispatch();

  // Correctly select cart items from Redux
  const cartItems = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    dispatch(remove(id)); // Remove item by id
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h3 className="text-2xl font-semibold text-gray-500">
          Your cart is empty!
        </h3>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
      <div className="space-y-6">
        {cartItems.map((item: CartItem) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow-md rounded-lg p-4"
          >
            {/* Image Section */}
            <div className="flex-shrink-0">
              <Image
                src={item.image}
                alt={item.title}
                height={150}
                width={150}
                className="rounded-md"
              />
            </div>

            {/* Content Section */}
            <div className="ml-4 flex-grow">
              <h5 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h5>
              <h5 className="text-lg font-medium text-gray-600 mt-2">
                PKR {item.price}
              </h5>
            </div>

            {/* Remove Button */}
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
        <Checkout/>
      </div>
    </div>
  );
};

export default CartPage;

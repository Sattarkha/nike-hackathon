"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState<string>("");
  const [order, setOrder] = useState<any | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const initialOrderId = searchParams.get("orderId");

  useEffect(() => {
    if (initialOrderId) {
      setOrderId(initialOrderId);
      fetchOrderDetails(initialOrderId);
    }
  }, [initialOrderId]);

  const fetchOrderDetails = async (id: string) => {
    if (!id) {
      setError("Please enter a valid order ID.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/orders?orderId=${id}`);
      const data = await response.json();

      if (data.success) {
        setOrder(data.order);
      } else {
        setError("Order not found.");
        setOrder(null);
      }
    } catch (err) {
      setError("An error occurred while fetching order details.");
      setOrder(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-md shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Track Your Order
      </h1>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
        <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Your Order ID
        </label>
        <div className="flex gap-4">
          <input
            id="orderId"
            type="text"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="E.g., 12345"
            className="flex-grow border rounded-lg p-2 text-gray-800 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={() => fetchOrderDetails(orderId)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Track Order
          </button>
        </div>
        {loading && <p className="mt-4 text-gray-500">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
      </div>

      {order && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Details</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-700">Order ID</p>
              <p className="text-lg font-semibold text-gray-900">{order.orderId}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Product</p>
              <p className="text-lg font-semibold text-gray-900">{order.productName}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Status</p>
              <p className="text-lg font-semibold text-gray-900">{order.status}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Estimated Delivery</p>
              <p className="text-lg font-semibold text-gray-900">
                {order.estimatedDelivery}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">Current Location</p>
              <p className="text-lg font-semibold text-gray-900">
                {order.currentLocation}
              </p>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
            Tracking History
          </h3>
          <ul className="list-disc ml-6 text-gray-700">
            {order.trackingHistory.map((item: any, index: number) => (
              <li key={index}>
                <strong>{item.date}:</strong> {item.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default OrderTracking;

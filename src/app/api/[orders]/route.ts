import { NextResponse } from "next/server";

// Mock orders data
const orders = [
  {
    orderId: "12345",
    productName: "Nike Air Max 90",
    status: "Shipped",
    estimatedDelivery: "2025-02-01",
    currentLocation: "Los Angeles, CA",
    trackingHistory: [
      { date: "2025-01-20", status: "Order Placed" },
      { date: "2025-01-22", status: "Shipped from Warehouse" },
      { date: "2025-01-25", status: "In Transit - Los Angeles, CA" },
    ],
  },
  {
    orderId: "67890",
    productName: "Nike Dunk Low Retro",
    status: "Out for Delivery",
    estimatedDelivery: "2025-01-28",
    currentLocation: "San Francisco, CA",
    trackingHistory: [
      { date: "2025-01-22", status: "Order Placed" },
      { date: "2025-01-24", status: "Shipped from Warehouse" },
      { date: "2025-01-26", status: "Out for Delivery - San Francisco, CA" },
    ],
  },
];

export async function GET(request: Request, { params }: { params: { orderId: string } }) {
  const { orderId } = params;
  const order = orders.find((o) => o.orderId === orderId);

  if (!order) {
    return NextResponse.json({ success: false, message: "Order not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true, order });
}

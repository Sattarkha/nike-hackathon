"use client"
import { createClient } from "../../../../utils/sanityClient";
import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/Cartslice";





const ProductDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const dispatch = useDispatch();


  const query = groq`
    *[_type == "product" && _id == $id][0] {
      _id,
      name,
      description,
      price,
      colors,
      image {
        asset-> {
          url
        }
      }
    }
  `;

  const product = await createClient.fetch(query, { id });

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      add({
        id: product._id,
        title: product.name,
        price: product.price,
        image: product.image?.asset?.url || "/placeholder.jpg",
      })
    );
    alert(`${product.name} added to the cart!`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        {product.name}
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <Image
            src={product.image?.asset?.url || "/placeholder.jpg"}
            alt={product.name}
            width={600}
            height={600}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-3xl font-semibold text-green-600">
            PKR {product.price}
          </p>
          {product.colors && product.colors.length > 0 && (
            <div>
              <strong className="text-lg text-gray-800">Available Colors:</strong>
              <ul className="mt-2 space-y-2">
                {product.colors.map((color: string, index: number) => (
                  <li key={index} className="text-sm text-gray-600">
                    <span className="inline-block bg-gray-200 py-1 px-3 rounded-full">
                      {color}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            className="w-full py-3 mt-6 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductDetailPage;

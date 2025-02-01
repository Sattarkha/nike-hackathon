'use client'; // Add this line to indicate it's a client-side component

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createClient } from "../../utils/sanityClient";
import { getProductsQuery } from "../../utils/queries";
import SearchBar from "@/components/SearchBar";



interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const HomePage = () => {

  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products client-side
  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts: Product[] = await createClient.fetch(getProductsQuery);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts); // Set the filtered list as well initially
    };
    fetchProducts();
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto p-4">


      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link href={`/product/${product._id}`} key={product._id}>
              <div className="w-fit border rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-lg font-bold text-green-600">
                  PKR {product.price}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;

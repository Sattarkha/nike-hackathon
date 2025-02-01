"use client";
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { RootState } from '../app/redux/Store';
import React from "react";

const Header: React.FC = () => {
  const item = useSelector((state: RootState) => state.cart);

  return (
    <div>
      {/* Top Header */}
      <div className="flex justify-between items-center bg-[#F5F5F5] px-14 py-2">
        {/* Left Side: Logo */}
        <div>
          <Image
            src="/Frame (2).png"
            alt="ball"
            width={24}
            height={24}
            className="py-1"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row sm:flex-row items-center space-x-4 text-[9px] sm:text-[11px] font-medium">
          <Link href="/"><li>Find & Store <span className="pl-2">|</span></li></Link>
          <Link href="/help"><li>Help <span className="pl-2">|</span></li></Link>
          <Link href="/join"><li>Join us <span className="pl-2">|</span></li></Link>
          <Link href="/signIn"><li>Sign in</li></Link>
        </ul>
      </div>

      {/* Middle Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="mb-2 sm:mb-0">
          <Image
            src="/Vector.png"
            width={58}
            height={20}
            alt="teer"
            className="ml-2 sm:ml-11"
          />
        </div>

        {/* Main Menu Links */}
        <ul className="flex flex-wrap justify-center items-center gap-5 sm:gap-7 text-[14px] font-medium ml-20">
          <li>New & Featured</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Sale</li>
          <li>SNKRS</li>
          {/* Add Order Tracking Link */}
          <Link href="/order-tracking"><li>Order Tracking</li></Link>
        </ul>

        {/* Right Side: Search and Icons */}
        <div className="mt-2 sm:mt-0 flex items-center space-x-2 relative">
          {/* Search Input with Icon */}
          <div className="flex items-center bg-[#F5F5F5] rounded-2xl w-[150px] sm:w-[180px] h-10 px-4 text-sm focus-within:ring-2 focus-within:ring-blue-500">
            <FiSearch className="h-5 w-5 text-gray-500" />
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent outline-none ml-2 w-full text-sm"
            />
          </div>

          {/* Heart and Cart Icons */}
          <div className="flex items-center space-x-3">
            <FiHeart className="h-6 w-6 text-gray-500" />
            <Link href="/cart">
              <FiShoppingCart className="h-6 w-6 text-gray-500" />
            </Link>
            <span>{item.length}</span>
          </div>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="bg-[#F5F5F5] text-center py-3">
        <h1 className="font-medium text-[15px]">Hello Nike App</h1>
        <p className="text-[11px]">
          Download the app to access everything Nike.{' '}
          <span className="font-medium underline text-[12px]">Get Your Great</span>
        </p>
      </div>
    </div>
  );
};

export default Header;

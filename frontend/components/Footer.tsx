import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/running" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Running Shoes
                </Link>
              </li>
              <li>
                <Link href="/category/casual" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Casual Sneakers
                </Link>
              </li>
              <li>
                <Link href="/category/athletic" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Athletic Footwear
                </Link>
              </li>
              <li>
                <Link href="/category/formal" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Formal Shoes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Shipping Information
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/stores" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            <p className="text-sm text-gray-400">Sign up for our newsletter to get updates on new arrivals and exclusive offers!</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">© {new Date().getFullYear()} ShoePalace. All rights reserved.</div>
      </div>
    </footer>
  );
}

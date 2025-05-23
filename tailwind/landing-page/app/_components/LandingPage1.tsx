import Image from 'next/image';
import { ShoppingCart, Star, ChevronRight, Battery, Wifi, Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function LandingPage1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Image 
                  src={"https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-dark.svg"} 
                  alt="Logo" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SoundPro
                </span>
                <span className="text-xs text-gray-500">Premium Audio</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-6 text-gray-600">
                <a href="#" className="hover:text-blue-600 transition-colors">Products</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Features</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Reviews</a>
              </div>
              <div className="flex items-center gap-4">
                <button className="relative group p-2 cursor-pointer rounded-full hover:bg-blue-50 transition-all duration-300">
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">2</span>
                  <ShoppingCart className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" />
                  <div className="absolute inset-0 bg-blue-100 rounded-full scale-110 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </button>
                <button className="hidden sm:flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                  <span>Login</span>
                </button>
                <button className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
                  <span>Contact Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Limited Time Offer
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Experience Premium<br />Wireless Sound
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Immerse yourself in crystal-clear audio with our latest noise-cancelling technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                Shop Now <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>
            <div className="group relative overflow-hidden rounded-2xl">
              <Image 
                src={"https://images.unsplash.com/photo-1590658268037-6bf12165a8df"} 
                alt="Premium Wireless Earbuds" 
                width={600} 
                height={400}
                className="w-full max-w-2xl transition-all duration-300 group-hover:scale-110 group-hover:brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-gray-900 font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Product
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose SoundPro?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition">
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 w-full">
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <Image 
                  src={"https://images.unsplash.com/photo-1606220838315-056192d5e927"} 
                  alt="Product Details" 
                  width={500} 
                  height={500}
                  className="w-full rounded-2xl shadow-xl transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <span className="bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full text-gray-900 font-semibold transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    View Details
                  </span>
                  <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm md:text-base">Experience premium sound quality with our latest technology</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8 w-full">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Premium Wireless Earbuds Pro Max
                </h2>
                <div className="flex items-center gap-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current transform hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm md:text-base">(2,945 reviews)</span>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Experience premium sound quality with our latest wireless earbuds featuring active noise cancellation and crystal-clear audio.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 group">
                    <span className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">40-hour battery life</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Active noise cancellation</span>
                  </li>
                  <li className="flex items-center gap-3 group">
                    <span className="w-3 h-3 bg-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                    <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Wireless charging case</span>
                  </li>
                </ul>
                <button className="mt-8 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg max-w-2xl mx-auto">
            <span className="text-sm font-semibold bg-white/20 px-4 py-1 rounded-full">
              FLASH SALE
            </span>
            <h2 className="text-4xl font-bold mt-4 mb-2">Special Launch Offer</h2>
            <p className="mb-6">Limited time offer - Save 50% Today!</p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <span className="text-4xl sm:text-6xl font-bold">$99.99</span>
              <div className="text-center sm:text-left">
                <span className="text-xl sm:text-2xl line-through opacity-75">$199.99</span>
                <p className="text-sm">50% OFF</p>
              </div>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition">
              Claim Offer Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">SoundPro</h3>
              <p className="text-gray-400">Premium audio solutions for everyone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Products</li>
                <li>Support</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>FAQ</li>
                <li>Shipping</li>
                <li>Returns</li>
                <li>Warranty</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-blue-400 transition">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SoundPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Battery,
    title: "40H Battery Life",
    description: "Never worry about running out of power with our long-lasting battery"
  },
  {
    icon: Wifi,
    title: "Wireless Freedom",
    description: "Experience crystal clear sound without any wires"
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "Shop with confidence with our extended warranty coverage"
  }
];
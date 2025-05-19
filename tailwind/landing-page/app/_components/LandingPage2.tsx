import Image from 'next/image';
import { Phone, ShoppingCart, Star, ChevronRight, Battery, Wifi, Shield, Facebook, Twitter, Instagram, Linkedin, Check, Play, ArrowRight } from 'lucide-react';

export default function LandingPage2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Premium Design */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <Image 
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a2f2e6cf88_Vector.svg"
                  alt="Logo" 
                  width={45} 
                  height={45} 
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  AudioPro
                </span>
                <span className="text-xs text-gray-500">Premium Sound Experience</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-violet-600 transition-colors">Features</a>
              <a href="#products" className="text-gray-600 hover:text-violet-600 transition-colors">Products</a>
              <a href="#reviews" className="text-gray-600 hover:text-violet-600 transition-colors">Reviews</a>
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Modern Design */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-violet-50 via-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full">
                <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">New Release 2024</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Experience Pure <br />
                <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  Wireless Freedom
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Immerse yourself in crystal-clear sound with our revolutionary noise-cancelling technology. Experience music like never before.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  Shop Now <ArrowRight className="w-5 h-5" />
                </button>
                <button className="group flex items-center gap-3 px-8 py-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-violet-100 rounded-full animate-ping"></div>
                    <div className="relative bg-violet-600 text-white p-2 rounded-full">
                      <Play className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-gray-600 group-hover:text-violet-600 transition-colors">Watch Video</span>
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative group">
                <Image 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
                  alt="Premium Headphones" 
                  width={600} 
                  height={600}
                  className="w-full rounded-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                <div className="bg-violet-100 p-3 rounded-xl">
                  <Star className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="font-semibold">4.9 Rating</p>
                  <p className="text-sm text-gray-500">Best in class</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AudioPro?
            </h2>
            <p className="text-gray-600">
              Experience the perfect blend of premium sound quality, comfort, and cutting-edge technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-violet-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-violet-600 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="group relative overflow-hidden rounded-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1484704849700-f032a568e944"
                  alt="Product Details" 
                  width={600} 
                  height={600}
                  className="w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 w-full p-8">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-900 font-medium">
                      Learn More
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <span className="inline-block bg-violet-100 text-violet-600 px-4 py-2 rounded-full text-sm font-medium">
                New Release
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                AudioPro Wireless Pro Max
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(2,945 reviews)</span>
              </div>
              <p className="text-gray-600">
                Experience unparalleled sound quality with our flagship wireless headphones. Featuring advanced noise cancellation and premium build quality.
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-violet-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-violet-600" />
                    </div>
                    <span className="text-gray-700">{feature.title}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-3xl font-bold text-violet-600">$299</p>
                  <p className="text-gray-500 line-through">$399</p>
                </div>
                <button className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">
              Don't just take our word for it. Hear what our customers have to say about their AudioPro experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{review.text}</p>
                <div className="flex items-center gap-4">
                  <Image 
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image 
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a2f2e6cf88_Vector.svg"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="font-bold text-xl">AudioPro</span>
              </div>
              <p className="text-gray-400">
                Experience premium sound quality with our cutting-edge audio technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Products</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-violet-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get special offers, free giveaways, and updates.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1"
                />
                <button className="bg-violet-600 px-4 py-2 rounded-lg hover:bg-violet-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 AudioPro. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
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
    description: "Never worry about running out of power with our long-lasting battery technology."
  },
  {
    icon: Wifi,
    title: "Wireless Freedom",
    description: "Experience crystal clear sound without any wires getting in your way."
  },
  {
    icon: Shield,
    title: "2-Year Warranty",
    description: "Shop with confidence knowing your purchase is protected by our warranty."
  }
];

const reviews = [
  {
    name: "Sarah Johnson",
    title: "Music Producer",
    text: "The sound quality is absolutely incredible. I use these headphones in my studio and they never disappoint.",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    name: "Michael Chen",
    title: "Audio Engineer",
    text: "Best investment I've made for my audio needs. The noise cancellation is top-notch.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    name: "Emily Davis",
    title: "Professional DJ",
    text: "These headphones have become an essential part of my setup. The sound clarity is unmatched.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];
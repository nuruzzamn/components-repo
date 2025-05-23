'use client'

import { ArrowRight, Facebook, Instagram, Menu, ShoppingCart, Twitter, Youtube } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const LandingPage5 = () => {
  // States
  const [email, setEmail] = useState('')
  const [mounted, setMounted] = useState(false)

  // Use useEffect to handle client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll handlers
  const scrollToSection = (sectionId: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(sectionId)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // If not mounted, return null or a loading state
  if (!mounted) {
    return null // Or return a loading skeleton
  }

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: "Premium Laptop",
      price: "$1,299",
      originalPrice: "$1,499",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop&crop=center",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Wireless Workspace",
      price: "$899",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
      badge: "New"
    },
    {
      id: 3,
      name: "Professional Setup",
      price: "$2,199",
      originalPrice: "$2,399",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=center",
      badge: "Limited"
    },
    {
      id: 4,
      name: "Modern MacBook",
      price: "$1,899",
      originalPrice: null,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
      badge: "Popular"
    }
  ];

  const categories = [
      {
        name: "Laptops & Tech",
        description: "Premium computing devices",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
        itemCount: "120+ items"
      },
      {
        name: "Workspace Setup",
        description: "Professional office solutions",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop&crop=center",
        itemCount: "85+ items"
      },
      {
        name: "Home & Living",
        description: "Elegant lifestyle products",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&crop=center",
        itemCount: "200+ items"
      }
    ];

    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Creative Director",
        content: "The quality of products exceeded my expectations. Every detail is perfectly crafted and the customer service is outstanding.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Michael Chen",
        role: "Tech Entrepreneur",
        content: "I've been shopping here for years. The premium quality and attention to detail make every purchase worth it.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Emily Rodriguez",
        role: "Designer",
        content: "Beautiful products, fast shipping, and excellent customer support. This has become my go-to store for premium items.",
        rating: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
      }
    ];

    const paymentMethods = [
      {
        name: 'visa',
        icon: (
          <svg className="h-6 w-auto" viewBox="0 0 48 16" fill="currentColor">
            <path d="M44.098 1.024H41.16c-.914 0-1.594.254-2.002.99l-5.674 12.836h4.010l.796-2.196h4.871l.462 2.196h3.533L44.098 1.024zm-3.227 8.282l1.483-4.078.853 4.078h-2.336zM32.448 1.024l-3.154 12.836h3.81L36.258 1.024h-3.81zM24.714 1.024l-3.961 8.694-1.699-7.5c-.197-.99-1.005-1.194-1.963-1.194h-6.523l-.099.396c1.253.274 2.506.715 3.319 1.194 0 0 3.137 13.002 3.137 13.002h3.861l5.928-14.592h-2.z"/>
          </svg>
        )
      },
      {
        name: 'mastercard',
        icon: (
          <svg className="h-6 w-auto" viewBox="0 0 32 20" fill="currentColor">
            <path d="M16 20c8.837 0 16-4.477 16-10S24.837 0 16 0 0 4.477 0 10s7.163 10 16 10z"/>
            <path fill="#ED0006" d="M16 20c4.97 0 9-4.477 9-10S20.97 0 16 0s-9 4.477-9 10 4.03 10 9 10z"/>
            <path fill="#F9A000" d="M16 20c4.97 0 9-4.477 9-10S20.97 0 16 0"/>
          </svg>
        )
      },
      {
        name: 'amex',
        icon: (
          <svg className="h-6 w-auto" viewBox="0 0 32 32" fill="#006FCF">
            <path d="M32 15.198V24.2H28.342L26.11 18.52l-2.263 5.68H20V16.13l-3.287 8.07h-2.112L11.314 16.13V24.2H6.546L6.037 22.5H1.72L1.211 24.2H0V15.198h3.727l3.766 8.843 3.727-8.843h3.766v8.304l2.995-8.304h3.247l3.017 8.304V15.198H32z"/>
          </svg>
        )
      },
      {
        name: 'paypal',
        icon: (
          <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="#00457C">
            <path d="M20.067 8.478c.492.315.844.825.962 1.426.117.6.003 1.25-.313 1.77-.316.52-.81.89-1.374 1.028-.563.136-1.15.076-1.629-.17l-.005.027c.184.964-.157 1.97-.912 2.684-.755.714-1.814 1.03-2.832.848l.012-.061c.349.935.19 2-.424 2.784-.615.784-1.597 1.2-2.609 1.102-1.012-.098-1.907-.717-2.378-1.646l-4.935.006c-.196 0-.355-.157-.355-.353l.002-8.838c0-.195.157-.354.352-.354h1.753l8.311-.006c.873-.03 1.709-.303 2.4-.781l.03-.007c.837-.234 1.727-.25 2.572-.044.846.207 1.627.637 2.272 1.25l.017.016.053.039zm-6.428-3.095h-7.352c-.195 0-.354-.159-.354-.354v-.674c0-.195.159-.354.354-.354h7.352c.196 0 .354.159.354.354v.674c0 .195-.158.354-.354.354zm-8.104 10.876v-.674c0-.195.159-.354.354-.354h7.352c.196 0 .354.159.354.354v.674c0 .195-.158.354-.354.354h-7.352c-.195 0-.354-.159-.354-.354z"/>
          </svg>
        )
      },
      {
        name: 'apple-pay',
        icon: (
          <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.078 5.434c.812-.842 1.361-2.034 1.205-3.184-1.164.048-2.575.776-3.41 1.754-.748.87-1.402 2.25-1.232 3.584 1.298.1 2.625-.658 3.437-1.554zM12.14 18.478c.721-.977 2.003-1.709 3.179-1.758.128 1.039-.305 2.051-.849 2.809-.721.976-1.928 1.734-3.104 1.734-.137-.976.305-1.989.774-2.785zm4.776-8.597c-1.668-.1-3.084.976-3.87.976-.813 0-2.056-.921-3.37-.897-1.741.024-3.334 1.01-4.219 2.57-1.797 3.126-.465 7.72 1.284 10.24.85 1.26 1.885 2.644 3.214 2.595 1.284-.048 1.765-.833 3.31-.833 1.524 0 1.956.833 3.288.809 1.357-.025 2.22-1.236 3.07-2.472.947-1.4 1.357-2.76 1.381-2.833-.024-.024-2.665-1.034-2.689-4.07-.025-2.545 2.081-3.762 2.153-3.835-1.165-1.735-2.967-1.932-3.552-1.98z"/>
          </svg>
        )
      },
      {
        name: 'google-pay',
        icon: (
          <svg className="h-6 w-auto" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.285 12c0-.677-.057-1.334-.164-1.965H12v3.714h4.84a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.874 2.684-6.724z" fill="#4285F4"/>
            <path d="M12 20.571c2.43 0 4.467-.806 5.956-2.18l-2.909-2.258c-.806.54-1.836.86-3.047.86-2.344 0-4.328-1.584-5.036-3.711H3.957v2.332A8.997 8.997 0 0012 20.571z" fill="#34A853"/>
            <path d="M6.964 13.282A5.41 5.41 0 016.682 12c0-.445.103-.876.282-1.282V8.386H3.957A8.996 8.996 0 003 12c0 1.452.348 2.827.957 4.046l3.007-2.764z" fill="#FBBC05"/>
            <path d="M12 6.571c1.321 0 2.508.454 3.44 1.345l2.582-2.58C16.463 3.891 14.426 3 12 3a8.997 8.997 0 00-8.043 4.958l3.007 2.332C7.672 8.156 9.656 6.571 12 6.571z" fill="#EA4335"/>
          </svg>
        )
      }
    ];

    // tag : newsletter
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Newsletter signup:', email);
      setEmail('');
      // Add toast notification here
    };
  return (
    <div className="min-h-screen bg-white">
      {/* tag : <Navigation /> */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              LUXE
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection('categories')}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Categories
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                Reviews
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-700 hover:text-gray-900 transition-colors">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="md:hidden p-2 text-gray-700">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* tag:  <Hero /> */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover 
                <span className="text-blue-600"> Premium</span>
                <br />
                Collection
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Curated selection of luxury items designed to elevate your lifestyle. 
                Quality craftsmanship meets modern elegance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('products')}
                  className="bg-blue-600 text-white cursor-pointer px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Shop Now 
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-300 cursor-pointer text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="relative cursor-pointer">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop&crop=center"
                  alt="Premium Collection"
                  width={500}
                  height={400}
                  className="w-full h-80 object-cover rounded-lg"
                  priority
                />
              </div>
              <div className="absolute top-4 left-4 w-full h-full bg-blue-100 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* tag : <FeaturedProducts /> */}
      <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Products
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our handpicked selection of premium products that combine style, functionality, and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl bg-gray-50 mb-4">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                        <ShoppingCart size={20} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      {/* tag: <Categories /> */}
      <section id="categories" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Explore our carefully curated categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 h-80">
                  <Image 
                    src={category.image} 
                    alt={category.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm font-medium mb-1">{category.itemCount}</p>
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* tag: <Testimonials /> */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.564-.955L10 0l3.436 5.955L20 6.91l-5.245 4.635L15.878 18z"/>
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </blockquote>
                
                <div className="flex items-center">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* tag: <Newsletter /> */}
       <section className="py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        {/* Animated background circles */}
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200/30 mb-6 inline-block">
              Newsletter
            </span>
            
            <h2 className="text-5xl font-bold text-white mb-6 tracking-tight">
              Stay in the 
              <span className="relative">
                <span className="relative z-10">Loop</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-blue-400/30 -rotate-2"></span>
              </span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              Get exclusive access to new products, special offers, and insider updates.
              <br />Join our community of tech enthusiasts.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto backdrop-blur-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-lg transform transition-all duration-300 focus:scale-105"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group font-semibold"
              >
                Subscribe
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 opacity-75" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
                </svg>
                Weekly Newsletter
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 opacity-75" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tag : <Footer /> */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">LUXE</div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Premium products for the modern lifestyle. Quality, style, and innovation in every item.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                 {[
                    { icon: Facebook, name: 'Facebook', url: 'facebook.com' },
                    { icon: Twitter, name: 'Twitter', url: 'twitter.com' },
                    { icon: Instagram, name: 'Instagram', url: 'instagram.com' },
                    { icon: Youtube, name: 'Youtube', url: 'youtube.com' }
                  ].map(({ icon: Icon, name, url }) => (
                    <a
                      key={name}
                      // href={`https://${name.toLowerCase()}.com`}
                      href={`https://${url}`}
                      target="_blank"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    >
                      <span className="sr-only">{name}</span>
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
              </h3>
              <ul className="space-y-3 text-gray-400">
                {['About Us', 'Products', 'Categories', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="font-semibold text-lg mb-6 relative inline-block">
                Customer Care
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
              </h3>
              <ul className="space-y-3 text-gray-400">
                {['Shipping Info', 'Returns', 'Size Guide', 'FAQ'].map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-6 relative inline-block">
                Stay Updated
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></span>
              </h3>
              <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
              <form className="flex gap-2 mb-6">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Payment Methods & Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Copyright and Legal Links */}
              <div className="text-gray-400">
                <div className="flex flex-wrap items-center gap-6 mb-4">
                  <p className="font-medium">&copy; 2024 LUXE</p>
                  <div className="h-4 w-px bg-gray-700"></div>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm hover:underline">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm hover:underline">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-white transition-colors duration-300 text-sm hover:underline">
                    Cookie Policy
                  </a>
                </div>
                <p className="text-sm text-gray-500">
                  All rights reserved. LUXE® is a registered trademark
                </p>
              </div>

              {/* Payment Methods */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400 text-right mb-3">Secure Payment Methods</p>
                <div className="flex flex-wrap gap-3 justify-end">
                  {paymentMethods.map(({ name, icon }) => (
                    <div 
                      key={name} 
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                      <div className="bg-gray-800 p-2.5 rounded-lg relative transform hover:translate-y-[-2px] transition-all duration-300">
                        <div className="h-8 w-auto text-white opacity-75 group-hover:opacity-100 transition-all duration-300">
                          {icon}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
                      </div>
                      <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end gap-2 mt-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-xs text-gray-400">All transactions are secure and encrypted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage5
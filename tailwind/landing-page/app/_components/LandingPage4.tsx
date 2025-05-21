"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronRight, Play, Check, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin, ShoppingCart, Clock, Truck, ChevronLeft, Plus, Minus, X } from 'lucide-react';

export default function LandingPage4() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showVideo, setShowVideo] = useState(false);
  const single_product_page = {
    id: 7955,
    shop_id: 2,
    inventory_id: 597395,
    slug: 'Dairy_Cow_Store_7955',
    page_title: 'Dairy Cow Store',
    page_description: 'Dairy Cow Store – A specialized shop offering high-quality dairy cows and essential products for dairy farming, catering to both small and commercial farm needs.',
    theme_data: [{
      message_on_top: 'Premium quality dairy cows for your farming needs'
    }],
    inventory: {
      name: 'Dairy Cow Store',
      price: 100000,
      old_price: 120000,
      condition: 'NEW',
      product_code: 'DC7955',
      quantity: 10,
      images: [
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041929244923578.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041930147945421.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041930835299872.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041929437150427.jpg',
      ],
      video_link: 'https://www.youtube.com/watch?v=n3iCnhEyT64',
      short_description: 'Dairy Cow Store – A specialized shop offering high-quality dairy cows and essential products for dairy farming, catering to both small and commercial farm needs.',
    }
  };

  const shopDetails = {
    shop_name: 'Gear And Gadget',
    shop_phone: '09965843643',
    image_url: 'https://d10rvdv6rxomuk.cloudfront.net/shops/2037319295261379.png',
    address: 'ABCD, Level#3, Multiplan Center, 71 New Elephant Rd, Dhaka 1205',
    payment_methods: ['bkash', 'aamarpay', 'zatiq_seller_pay', 'cod'],
    country_currency: 'BDT',
    shopCurrencySymbol: '৳',
    shop_count: 1000,
    message_on_top: 'Free delivery on orders above ৳10,000',
    specific_delivery_charges: {
      'Dhaka City': 60,
      'Outside Dhaka': 120,
      'Express Delivery': 150
    },
    social_links: {
      facebook: 'https://facebook.com/dairycowstore',
      instagram: 'https://instagram.com/dairycowstore',
      youtube: 'https://youtube.com/dairycowstore',
      linkedIn: 'https://linkedin.com/company/dairycowstore'
    }
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Trust Banner */}
      <div className="bg-blue-600 text-white py-2 text-center text-sm">
        <div className="container mx-auto px-4">
          {shopDetails.message_on_top}
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src={shopDetails.image_url}
                alt={shopDetails.shop_name}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xl">{shopDetails.shop_name}</span>
                <span className="text-xs text-gray-500">Serving {shopDetails.shop_count.toLocaleString()}+ happy customers</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a href="#product" className="text-gray-600 hover:text-blue-600">Product</a>
                <a href="#details" className="text-gray-600 hover:text-blue-600">Details</a>
                <a href="#delivery" className="text-gray-600 hover:text-blue-600">Delivery</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
              </div>
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src={single_product_page.inventory.images[0]}
          alt={single_product_page.page_title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{single_product_page.page_title}</h1>
              <p className="text-lg mb-8">{single_product_page.theme_data[0].message_on_top}</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setShowVideo(true)}
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50 transition-colors"
                >
                  <Play className="w-5 h-5" /> Watch Video
                </button>
                <a href="#product" className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                  View Details <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden relative group">
                <Image
                  src={single_product_page.inventory.images[selectedImage]}
                  alt={`Product view ${selectedImage + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => setSelectedImage(prev => prev > 0 ? prev - 1 : single_product_page.inventory.images.length - 1)}
                    className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setSelectedImage(prev => prev < single_product_page.inventory.images.length - 1 ? prev + 1 : 0)}
                    className="bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {single_product_page.inventory.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-blue-600' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded">
                    {single_product_page.inventory.condition.toUpperCase()}
                  </span>
                  <span>Product Code: {single_product_page.inventory.product_code}</span>
                </div>
                <h1 className="text-3xl font-bold mb-2">{single_product_page.page_title}</h1>
                <p className="text-gray-600">{single_product_page.inventory.short_description}</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold text-blue-600">
                  {shopDetails.shopCurrencySymbol}{single_product_page.inventory.price.toLocaleString()}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-x"
                    />
                    <button 
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="p-2 hover:bg-gray-100"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <span className="text-gray-600">
                    {single_product_page.inventory.quantity} units available
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                    Buy Now
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Truck className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Free Delivery</p>
                      <p className="text-sm text-gray-600">On selected areas</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Check className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Quality Assured</p>
                      <p className="text-sm text-gray-600">100% genuine product</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">24/7 Support</p>
                      <p className="text-sm text-gray-600">Dedicated assistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Delivery Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Delivery Charges by Region</h3>
              <div className="space-y-2">
                {Object.entries(shopDetails.specific_delivery_charges).map(([region, charge]) => (
                  <div key={region} className="flex justify-between py-2 border-b">
                    <span>{region}</span>
                    <span>{shopDetails.shopCurrencySymbol}{charge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Payment Methods</h3>
              <div className="grid grid-cols-2 gap-4">
                {shopDetails.payment_methods.map((method) => (
                  <div key={method} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="capitalize">{method.replace('_', ' ')}</span>
                  </div>
                ))}
                {/* {shopDetails.advanced_payment_percentage > 0 && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      <span className="font-semibold">Advance Payment Required: </span>
                      {shopDetails.advanced_payment_percentage}% of total amount
                    </p>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>{shopDetails.shop_phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{shopDetails.address}</span>
                </div>
                <div className="flex gap-4 mt-6">
                  {Object.entries({
                    facebook: Facebook,
                    instagram: Instagram,
                    youtube: Youtube,
                    linkedIn: Linkedin
                  }).map(([platform, Icon]) => (
                    <a
                      key={platform}
                      href={shopDetails.social_links[platform]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button 
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video">
              <iframe
                src={single_product_page.inventory.video_link.replace('watch?v=', 'embed/')}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        )}
    </div>
    </>
  )
}
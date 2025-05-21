import React from 'react'
import Image from 'next/image';
import { ShoppingCart, Star, ChevronRight, Play, Check, Phone, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

export default function LandingPage3() {
  const single_product_page = {
    id: 7955,
    shop_id: 2,
    inventory_id: 597395,
    slug: 'Dairy_Cow_Store_7955',
    page_title: 'Dairy Cow Store',
    page_description: 'Dairy Cow Store – A specialized shop offering high-quality dairy cows and essential products for dairy farming, catering to both small and commercial farm needs.',
    theme_name: 'Arcadia',
    theme_data: [
      {
        theme_name: 'Arcadia',
        message_on_top: 'Dairy Cow Store – A specialized shop offering high-quality dairy cows and essential products for dairy farming, catering to both small and commercial',
        show_product_details: false,
        color: [Object],
        banners: [Array],
        features: [Array],
        product_videos: [Array],
        product_image: [Object]
      }
    ],
    created_at: '2025-05-12 10:30:24',
    updated_at: '2025-05-12 10:34:51',
    deleted_at: null,
    inventory: {
      id: 597395,
      name: 'Dairy Cow Store',
      image_url: null,
      price: 100000,
      quantity: 1,
      unit_name: null,
      shop_id: 2,
      created_at: '2025-05-12 10:27:31',
      updated_at: '2025-05-12 10:27:31',
      category_id: null,
      warranty: null,
      description: '<p><strong>Dairy Cow Store</strong> – A specialized shop offering high-quality dairy cows and essential products for dairy farming, catering to both small and commercial farm needs.</p>',
      old_price: 100000,
      is_active: true,
      serial: 12,
      has_variant: false,
      images: [
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041929244923578.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041930147945421.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041930835299872.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041929437150427.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041932060049023.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041929639704682.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041933250046992.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041930820569448.jpg',
        'https://d10rvdv6rxomuk.cloudfront.net/inventories/2041934673847987.jpg'
      ],
      custom_fields: {
        Cow: 'Dairy Cow Store – A specialized shop offering high-quality dairy cows and essential products for dairy farming, catering to both small and commercial farm needs.'
      },
      buying_price: 90000,
      product_code: 'COW - 101',
      isApplyDefaultDeliveryCharge: true,
      specific_delivery_charges: null,
      others_delivery_charge: null,
      image_variant_type_id: null,
      is_stock_manage_by_variant: false,
      video_link: 'https://www.youtube.com/watch?v=n3iCnhEyT64',
      inventory_view_count: 1,
      initial_product_sold: 0,
      short_description: 'Dairy Cow Store – A specialized shop offering high-quality dairy cows and essential products for dairy farming, catering to both small and commercial farm needs.',
      brand: null,
      condition: 'new',
      deleted_at: null,
      banned_at: null,
      category: null,
      categories: [],
      variant_types: [],
      stocks: [],
      reviews: []
    }
  }

  const shopDetails = {
    id: 2,
    shop_name: 'Gear And Gadget',
    shop_phone: '09965843643',
    image_url: 'https://d10rvdv6rxomuk.cloudfront.net/shops/2037319295261379.png',
    address: 'ABCD, Level#3, Multiplan Center, 71 New Elephant Rd, Dhaka 1205',
    details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's \n" +    '\n' +
      'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has...',
    vat_tax: 0,
    specific_delivery_charges: {
      Dhaka: 36,
      Bagerhat: 36,
      Bogura: 120,
      Dinajpur: 20,
      Mymensingh: 20,
      Akhaura: 69
    },
    others_delivery_charge: 10,
    shop_count: 3223,
    payment_custom_message: 'পেমেন্ট করে অবশ্যই আপনার নাম ও লাস্ট নম্বর/ ট্রানজেকশন আইডি রেফারেন্সে অথবা আমাদের ম্যাসেজ অপশনে অথবা অর্ডার নোট এ লিখবেন ।\n' +
      '\n' +
      'hsjjs\n' +
      'hjdjd\n' +
      'hbdvd\n' +
      'bskd\n' +
      'hbd\n' +
      'hhdb',
    social_links: {
      facebook: 'https://web.facebook.com',
      instagram: 'https://web.Instagram.com',
      linkedIn: 'https://web.LinkedIn.com',
      youtube: 'https://web.Youtube.com',
      tiktok: 'https://web.Tiktok.com',
      discord: 'https://web.Discord.com',
      telegram: 'https://web.Telegram.com',
      daraz: 'https://web.Daraz.com',
      amazon: 'https://web.Amazon.com',
      walmart: 'https://web.Walmart.com'
    },
    created_at: '2025-03-19 06:00:00',
    subdomain: 'tuktuk.zatiqeasy.com',
    domain: null,
    business_type: 'Books & Media',
    shop_email: 'mobileexpress@gmail.com',
    country_code: 'BD',
    timezone: 'UTC+06:00',
    country_currency: 'BDT',
    theme_color: { primary_color: '#ffff8924' },
    isStockMaintain: true,
    deleted_at: null,
    pixel_id: '3553320774890549',
    is_full_advanced_payment: false,
    is_only_delivery_charge: false,
    advanced_payment_percentage: 20,
    payment_methods: [ 'bkash', 'aamarpay', 'zatiq_seller_pay', 'cod' ],
    trade_license_number: null,
    gtm_id: 'GTM-56DKSR89',
    message_info: {
      facebook_page_id: '116621498189484',
      facebook_app_id: null,
      whatsapp_phone: '+8801521404361'
    },
    message_option: 'facebook',
    pixel_access_token: 'EAAK9J1o1t80BOzIKHlf85ycnsQclESskVHhEEZBEZCMZBjb1qDsOYVAgGJoHBm2SuNQkYPs1TaF60flrz1V4t4ZAkKZBXROmS9RripK6UauVUBmOie6nUfsHnZCVfbaCwyIw5kUoUYUSVD80sZBEQqyOzbGZByfA52fNNU2JyK6zSZC8MI84jpO3Vmr5g6DCZAVwZDZD',
    pixel_test_event_id: 'TEST11099',
    default_language_code: 'en',
    delivery_option: 'zones',
    advance_payment_type: 'Percentage',
    advanced_payment_fixed_amount: 10,
    shop_uuid: '1cc13a52-e633-4954-b7f5-c840067dddd7',
    message_on_top: '🎉 Free delivery all over the country💯',
    show_product_sold_count: true,
    is_delivery_charge_not_refundable: true,
    banned_at: null,
    analytics_id: 'de91db85-ba12-4b6f-bbc0-7ea96febc0b8',
    subscription: {
      easybill: {
        id: 31719,
        plan_id: 2,
        start_date: '2025-04-24',
        end_date: '2025-05-24',
        status: 'completed'
      }
    },
    shop_theme: {
      id: 223,
      shop_id: 2,
      theme_name: 'Basic',
      carousels: [ [Object], [Object] ],
      enable_buy_now_on_product_card: true,
      theme_mode: 'light',
      selected_categories: [ [Object] ],
      selected_inventories: [ [Object], [Object], [Object], [Object] ],
      on_sale_inventories: [ [Object], [Object], [Object], [Object], [Object] ],
      new_arrival_inventories: [],
      singleProductTheme: null
    },
    hasPixelAccess: true,
    hasGTMAccess: true,
    baseUrl: '/merchant/2',
    baseFullUrl: 'https://localhost:3000/merchant/2',
    shopCurrencySymbol: '৳'
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src={shopDetails.image_url}
                alt={shopDetails.shop_name}
                width={45}
                height={45}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-bold text-2xl text-green-800">{shopDetails.shop_name}</span>
                <span className="text-xs text-gray-500">{shopDetails.message_on_top}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-green-700 transition-colors">About</a>
              <a href="#products" className="text-gray-600 hover:text-green-700 transition-colors">Products</a>
              <a href="#contact" className="text-gray-600 hover:text-green-700 transition-colors">Contact</a>
              <button className="bg-green-700 text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-green-50 via-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full">
                <span className="animate-pulse w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Premium Dairy Cows</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Quality Dairy Cows for Your
                <span className="block text-green-700">Farming Success</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                {single_product_page.inventory.short_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-700 text-white px-8 py-4 rounded-full hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  View Catalog <ChevronRight className="w-5 h-5" />
                </button>
                <button className="group flex items-center gap-3 px-8 py-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-100 rounded-full animate-ping"></div>
                    <div className="relative bg-green-700 text-white p-2 rounded-full">
                      <Play className="w-4 h-4" />
                    </div>
                  </div>
                  <span className="text-gray-600 group-hover:text-green-700 transition-colors">Watch Video</span>
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative group">
                <Image 
                  src={single_product_page.inventory.images[0]}
                  alt="Premium Dairy Cow"
                  width={600}
                  height={600}
                  className="w-full rounded-2xl shadow-xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <Star className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <p className="font-semibold">Premium Quality</p>
                  <p className="text-sm text-gray-500">Best in class</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Dairy Cows?</h2>
            <p className="text-gray-600">Experience the finest quality dairy cows, carefully selected for optimal milk production and health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Breeds",
                description: "High-quality dairy cow breeds known for excellent milk production",
                icon: Star
              },
              {
                title: "Health Certified",
                description: "All cows are thoroughly health checked and certified",
                icon: Check
              },
              {
                title: "Expert Support",
                description: "Ongoing support and guidance for optimal dairy farming",
                icon: Phone
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="bg-green-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-700 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-green-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Premium Dairy Cows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {single_product_page.inventory.images.slice(0, 6).map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl">
                <Image
                  src={image}
                  alt={`Dairy Cow ${index + 1}`}
                  width={400}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 w-full p-6">
                    <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-900 font-medium">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-gray-600">{shopDetails.details}</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-700" />
                  <span>{shopDetails.shop_phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-green-700" />
                  <span>{shopDetails.address}</span>
                </div>
              </div>
              <div className="flex gap-4">
                {Object.entries({
                  facebook: Facebook,
                  instagram: Instagram,
                  youtube: Youtube,
                  linkedIn: Linkedin
                }).map(([platform, Icon]) => (
                  <a
                    key={platform}
                    href={shopDetails.social_links[platform]}
                    className="bg-green-100 p-3 rounded-full hover:bg-green-700 group transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5 text-green-700 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-700"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-700"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-green-700"
                ></textarea>
                <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition-colors duration-300">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
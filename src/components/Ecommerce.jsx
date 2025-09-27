"use client";
import React, { useState, useEffect } from "react";
import {
  ShoppingBag,
  Star,
  Zap,
  Gift,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Heart,
  Store,
  Globe,
  Rocket,
  Users,
  Lightbulb,
  Search,
  MousePointerClick,
  Share2,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";


function Ecommerce() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingElements = [
    { icon: Star, delay: "0s", x: "10%", y: "20%", size: "w-6 h-6" },
    { icon: Gift, delay: "1s", x: "85%", y: "25%", size: "w-8 h-8" },
    { icon: Zap, delay: "2s", x: "15%", y: "75%", size: "w-5 h-5" },
    { icon: Sparkles, delay: "0.5s", x: "90%", y: "60%", size: "w-6 h-6" },
    { icon: Heart, delay: "1.5s", x: "20%", y: "40%", size: "w-4 h-4" },
    { icon: TrendingUp, delay: "2.5s", x: "80%", y: "80%", size: "w-7 h-7" },
  ];
    const tools = [
    {
      name: "Google Analytics",
      category: "Analytics",
      description: "Advanced web analytics and user behavior tracking",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      name: "SEMrush",
      category: "SEO",
      description: "Comprehensive SEO and competitive analysis",
      icon: "🔍",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      name: "Facebook Ads",
      category: "Advertising",
      description: "Social media advertising and campaign management",
      icon: "📱",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      name: "Google Ads",
      category: "Advertising",
      description: "Pay-per-click advertising and search marketing",
      icon: "🎯",
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50"
    },
    {
      name: "Shopify",
      category: "E-commerce",
      description: "E-commerce platform and store management",
      icon: "🛒",
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50"
    },
    {
      name: "Mailchimp",
      category: "Email Marketing",
      description: "Email automation and newsletter campaigns",
      icon: "📧",
      color: "from-yellow-500 to-amber-500",
      bgColor: "from-yellow-50 to-amber-50"
    },
    {
      name: "Canva",
      category: "Design",
      description: "Graphic design and visual content creation",
      icon: "🎨",
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50"
    },
    {
      name: "Hootsuite",
      category: "Social Media",
      description: "Social media management and scheduling",
      icon: "📅",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-50 to-pink-50"
    },
    {
      name: "Klaviyo",
      category: "Email Marketing",
      description: "Advanced email marketing automation",
      icon: "✉️",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50"
    },
    {
      name: "Hotjar",
      category: "Analytics",
      description: "User experience analytics and heatmaps",
      icon: "🔥",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    },
    {
      name: "Slack",
      category: "Communication",
      description: "Team collaboration and project management",
      icon: "💬",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50"
    },
    {
      name: "Zapier",
      category: "Automation",
      description: "Workflow automation and app integrations",
      icon: "⚡",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50"
    }
  ];

  const categories = ["All", "Analytics", "SEO", "Advertising", "E-commerce", "Email Marketing", "Design", "Social Media", "Communication", "Automation"];

  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredTools = activeCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);


     const caseStudies = [
    {
      id: 1,
      image: "https://www.digitalnawab.com/assets/img/1621677546443.webp",
      title: "E-commerce Platform Revolution",
      description: "Transformed a traditional retail business into a thriving digital marketplace with cutting-edge technology and user-centric design.",
      tags: ["E-commerce", "UI/UX", "Mobile App"]
    },
    {
      id: 2,
      image: "https://www.digitalnawab.com/assets/img/1621677603887.webp",
      title: "Complete Brand Transformation",
      description: "Reimagined a startup's entire brand identity from logo to digital presence, creating a cohesive and memorable brand experience.",
      tags: ["Branding", "Logo Design", "Web Design"]
    },
    {
      id: 3,
      image: "https://www.digitalnawab.com/assets/img/1621677684961.webp",
      title: "Digital Marketing Success",
      description: "Developed a comprehensive digital marketing strategy that elevated online presence and drove unprecedented growth across all channels.",
      tags: ["Digital Marketing", "SEO", "Social Media"]
    }
  ];

  return (
    
    <>
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 pt-[90px]">
        {/* Animated Gradient Background Layers */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-blue-500/10 to-transparent animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-bl from-pink-400/20 via-rose-500/10 to-transparent animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/20 to-pink-500/10 animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />

        {/* Floating Background Elements */}
        {floatingElements.map((elem, index) => {
          const IconComponent = elem.icon;
          return (
            <div
              key={index}
              className={`absolute animate-float opacity-30 text-white ${elem.size}`}
              style={{
                left: elem.x,
                top: elem.y,
                animationDelay: elem.delay,
              }}
            >
              <IconComponent className="w-full h-full drop-shadow-lg" />
            </div>
          );
        })}

        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-40 h-40 border-2 border-white/10 rounded-full animate-spin-slow" />
        <div className="absolute top-32 right-32 w-24 h-24 border border-pink-400/20 rounded-full animate-pulse" />
        <div
          className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/20 rounded-2xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-r from-pink-500/20 to-purple-500/10 transform rotate-45 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 right-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />

        {/* Mesh Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/30 rounded-full blur-3xl animate-float"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />

        {/* Main Content */}
        <div className="relative z-20 h-full flex items-center justify-center max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-4xl">
            {/* Top Badge */}
            <div
              className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-full border border-white/20 mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-white font-medium">
                🔥 Limited Time Mega Sale
              </span>
              <Sparkles className="w-5 h-5 text-pink-400 animate-bounce" />
            </div>

            {/* Main Heading */}
            <h1
              className={`text-3xl md:text-6xl font-black leading-tight mb-6 transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <span className="block text-white drop-shadow-2xl">Discover</span>
              <span className="block bg-gradient-to-r from-pink-400 via-purple-400  to-pink-400 bg-clip-text text-transparent animate-gradient-shift bg-300% drop-shadow-2xl">
                Amazing Deals
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-1000 ease-out ${
                isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent animate-bounce">
                UP TO 70% OFF
              </span>
            </div>

            {/* Description */}
            <p
              className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              Explore premium quality products at unbeatable prices. Don`t miss
              out on our biggest sale of the year!
            </p>

            {/* Action Buttons */}
            <div
              className={`flex flex-col md:flex-row gap-6 justify-center items-center transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <button className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6 animate-bounce" />
                  Shop Now
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>

              <button className="px-10 py-5 border-2 border-white/30 text-white text-xl font-bold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:shadow-xl transition-all duration-300 hover:scale-105">
                Browse Categories
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-900/50 to-transparent" />

        {/* Custom CSS */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            25% {
              transform: translateY(-10px) rotate(5deg);
            }
            50% {
              transform: translateY(-20px) rotate(0deg);
            }
            75% {
              transform: translateY(-10px) rotate(-5deg);
            }
          }

          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @keyframes gradient-shift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }

          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }

          .animate-gradient-shift {
            animation: gradient-shift 3s ease infinite;
          }

          .bg-300% {
            background-size: 300% 300%;
          }
        `}</style>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              What is{" "}
              <span className="text-[#7D2492]">Ecommerce Marketing</span>{" "}
              Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ecommerce marketing is important for more than just online
              merchants and eCommerce marketers. It is intended for businesses
              with physical locations as well as an online presence. 56 percent
              of firms that use eCommerce digital marketing also have a physical
              location where they offer their products and services.
            </p>
          </motion.div>

          {/* Highlighted Info Cards */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 text-[#7D2492] rounded-full">
                  <Store size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-gray-900">
                    56% of firms
                  </span>{" "}
                  that use eCommerce digital marketing also have a{" "}
                  <span className="font-semibold">physical store</span> to offer
                  their products and services.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 text-[#7D2492] rounded-full">
                  <Globe size={28} />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ecommerce marketing allows businesses to{" "}
                  <span className="font-semibold">
                    expand into multiple locations
                  </span>
                  , reach a wider customer base, and boost revenue.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-12 p-6 bg-purple-50 border-l-4 border-[#7D2492] rounded-xl text-center"
          >
            <p className="text-gray-800 text-lg leading-relaxed flex items-center justify-center gap-2">
              <TrendingUp className="text-[#7D2492]" size={24} />
              Success depends on an{" "}
              <span className="font-semibold">
                effective ecommerce strategy
              </span>{" "}
              that scales with your business.
            </p>
          </motion.div>
        </div>
      </section>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 p-12 mb-12">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                What Digital Nawab
                <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                  Ecommerce Marketing Agency
                </span>
                <span className="text-white">Do?</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto rounded-full"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>

          {/* First Content Card */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl border border-slate-700/50 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    A Digital Nawab eCommerce agency is a group that works with your company to handle 
                    complicated challenges and assist you to accomplish your objectives. This is frequently 
                    accomplished by Digital Nawab through the smart use of creative, technology, and marketing services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-2xl p-8 backdrop-blur-sm border border-emerald-700/30">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Full-Service Approach</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-400 mb-2">Strategy</h3>
                      <p className="text-gray-300">Comprehensive planning and strategic direction</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-purple-400 mb-2">Creative</h3>
                      <p className="text-gray-300">Innovative design and creative solutions</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-400 mb-2">Marketing</h3>
                      <p className="text-gray-300">Data-driven marketing campaigns</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-cyan-400 mb-2">Technology</h3>
                      <p className="text-gray-300">Cutting-edge tech implementation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                <p className="text-gray-300 leading-relaxed text-center">
                  Because Digital Nawab operates differently, we`ll offer our method and viewpoint on dealing with customers. 
                  Our company operates on a <span className="text-emerald-400 font-semibold">full-service approach</span>. 
                  This implies that we provide services in strategy, creative, marketing, and technology all under one roof. 
                  Inbound marketing is used to get new people to your website and to build engaging website design and 
                  technology to help them convert.
                </p>
              </div>
            </div>
          </div>

          {/* Final Section */}
          <div className="bg-gradient-to-br from-violet-900/50 to-purple-900/50 rounded-2xl p-8 backdrop-blur-sm border border-violet-700/30">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-violet-400 mb-4">Industry Leadership</h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A successful eCommerce marketing agency is on top of industry trends, processes, and software to help you flourish. 
                  A competent Digital Nawab eCommerce agency will exhibit a strong grasp of where eCommerce is heading, 
                  whether you`re seeking help with <span className="text-violet-400 font-semibold">SEO tactics</span>, 
                  <span className="text-purple-400 font-semibold"> site design</span>, or 
                  <span className="text-pink-400 font-semibold"> lead generation</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started with Digital Nawab
            </button>
          </div>
        </div>
      </div>


      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Ecommerce Marketing Strategy
          </motion.h2>
          <motion.p
            className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our eCommerce marketing is the process of directing traffic to your
            business, converting that traffic into purchases, and making your
            brand visible to the general public. Our eCommerce marketing
            concepts are dynamic; as the industry and audiences change, so must
            your approach to ensure that you always get the highest ROI rates.
          </motion.p>
          <motion.p
            className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Choosing the appropriate approach and adapting it to produce the
            desired outcomes is half the fight won.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-[#7D2492] mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Our Ecommerce Marketing Services
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {/* SEO */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-start hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Search className="w-12 h-12 text-[#7D2492] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Search Engine Optimization (SEO)</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Getting more traffic is often at the top of every business owner`s thoughts. SEO increases organic (free, natural) traffic from search engines such as Google, Bing, and Yahoo. The goal is to have your product pages appear in the top 10 organic search results. There are, of course, many more pages to explore.
              </p>
            </motion.div>

            {/* SMM */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-start hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Share2 className="w-12 h-12 text-[#7D2492] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Social Media Marketing (SMM)</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Social media marketing is a crucial avenue for business growth. 75% of consumers admit to buying something after seeing it on social media, and 90% use it to help make purchasing decisions. A reasonable budget ensures your efforts generate the conversions and sales you desire.
              </p>
            </motion.div>

            {/* PPC */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-start hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <MousePointerClick className="w-12 h-12 text-[#7D2492] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Pay-per-Click Advertising (PPC)</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                PPC for eCommerce is an online advertising method that promotes your store and items on search engines, social media, and websites. You only pay when someone clicks on your ad, targeting ready-to-buy customers to drive instant traffic and sales.
              </p>
            </motion.div>

            {/* Email Marketing */}
            <motion.div
              className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-start hover:shadow-2xl transition duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Mail className="w-12 h-12 text-[#7D2492] mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Email Marketing</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Ecommerce email marketing uses email to promote your store`s items to existing or potential customers. It helps increase user engagement, client loyalty, share important information, advertise deals, and ultimately boost sales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Marketplace
              </span>
              <br />
              <span className="text-white">Advertising</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-red-500 mx-auto rounded-full mb-8"></div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-2xl p-8 backdrop-blur-sm border border-orange-500/20 text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-4xl md:text-5xl font-bold text-amber-400">190</p>
                  <p className="text-xl text-amber-300">searches per second</p>
                </div>
              </div>
              <p className="text-2xl text-white font-semibold">
                Consumers carry <span className="text-amber-400">190 searches per second</span> on Amazon
              </p>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            
            {/* Content Side */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Multiple Revenue Streams</h2>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  <span className="text-blue-400 font-semibold">Amazon</span> and other marketplaces are great sites to sell for 
                  <span className="text-green-400 font-semibold"> extra income streams</span>. They often come with huge potential to increase your 
                  <span className="text-purple-400 font-semibold"> organic rankings</span>, 
                  <span className="text-cyan-400 font-semibold"> retargeting viewers</span> and leverage their 
                  <span className="text-pink-400 font-semibold"> algorithms and lookalike modeling tools</span> to find new openings of production.
                </p>

                {/* Benefits List */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">Increase organic rankings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Advanced retargeting capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">AI-powered lookalike modeling</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">Algorithm optimization</span>
                  </div>
                </div>
              </div>

              {/* ROI Optimization Card */}
              <div className="bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-2xl p-6 backdrop-blur-sm border border-emerald-500/30">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-400">Smart ROI Optimization</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Making sure you`re only selling when you have products in stock reduces wasted ad spend, 
                  made possible by <span className="text-emerald-400 font-semibold">ROI Hunt organization tools</span>.
                </p>
              </div>
            </div>

            {/* Image Side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://www.roihunt.in/wp-content/uploads/2020/09/desktop-and-phone.jpg-1-1-1.webp"
                  alt="Desktop and mobile marketplace advertising interface"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 shadow-xl backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">24/7</p>
                  <p className="text-sm text-blue-100">Monitoring</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-4 shadow-xl backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">ROI</p>
                  <p className="text-sm text-emerald-100">Optimized</p>
                </div>
              </div>
            </div>
          </div>

        
          {/* Bottom Features */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth Tracking</h3>
              <p className="text-gray-400 text-sm">Monitor your marketplace performance in real-time</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cost Efficiency</h3>
              <p className="text-gray-400 text-sm">Reduce wasted ad spend with smart inventory management</p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Optimization</h3>
              <p className="text-gray-400 text-sm">Leverage machine learning for better targeting</p>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Tools We Use
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We leverage the most powerful and cutting-edge tools in the industry to deliver 
              exceptional results for our clients. Our carefully curated toolkit ensures maximum efficiency and success.
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-8"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredTools.map((tool, index) => (
              <div
                key={tool.name}
                className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Tool Icon & Category */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {tool.icon}
                    </div>
                    <span className={`px-3 py-1 bg-gradient-to-r ${tool.color} text-white text-xs font-semibold rounded-full opacity-80`}>
                      {tool.category}
                    </span>
                  </div>

                  {/* Tool Name */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                    {tool.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700">
                    {tool.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-gray-200">
                    <button className="text-sm font-semibold text-blue-600 hover:text-purple-600 flex items-center group/btn">
                      Learn More
                      <svg className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${tool.color} rounded-2xl opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-12 text-white text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Powerful Tools, Proven Results
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-yellow-300">50+</p>
                <p className="text-blue-100">Premium Tools</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-green-300">99%</p>
                <p className="text-blue-100">Uptime Rate</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-pink-300">24/7</p>
                <p className="text-blue-100">Monitoring</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-cyan-300">∞</p>
                <p className="text-blue-100">Possibilities</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Leverage These 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Powerful Tools</span>?
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our expert team put these industry-leading tools to work for your business. 
              Start your digital transformation today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Started Now
              </button>
              
              <button className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all duration-300 bg-white hover:bg-blue-50">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
          <style jsx>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translateY(30px);
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
              `}
          </style>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
  
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl mb-8">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Social Media
              </span>
              <br />
              <span className="text-white">Outreach</span>
            </h1>
            
            <div className="w-40 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          {/* Stats Section */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Instagram Stats */}
              <div className="bg-gradient-to-br from-pink-900/40 to-purple-900/40 rounded-3xl p-8 backdrop-blur-sm border border-pink-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-pink-400">Instagram</h2>
                    <p className="text-pink-300">Daily Engagement</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">30</p>
                    <p className="text-pink-300 text-sm">Minutes per day</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">75%</p>
                    <p className="text-pink-300 text-sm">Make investment choices</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-pink-500/10 rounded-xl border border-pink-500/20">
                  <p className="text-pink-200 text-sm leading-relaxed">
                    Instagram users consume an average of <span className="text-pink-400 font-semibold">30 mins per day</span> on the platform, 
                    and <span className="text-pink-400 font-semibold">75% of IG users</span> report getting investment choices based on something they saw on the app.
                  </p>
                </div>
              </div>

              {/* Facebook Stats */}
              <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-3xl p-8 backdrop-blur-sm border border-blue-500/20">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-blue-400">Facebook</h2>
                    <p className="text-blue-300">Daily Usage</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">40</p>
                    <p className="text-blue-300 text-sm">Minutes per day</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">30%</p>
                    <p className="text-blue-300 text-sm">Investment influenced</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <p className="text-blue-200 text-sm leading-relaxed">
                    Associated with <span className="text-blue-400 font-semibold">40 mins on Facebook</span>, 
                    yet minimizing FB <span className="text-blue-400 font-semibold">30%</span> influence on investment decisions 
                    compared to Instagram dominance.
                  </p>
                </div>
              </div>
            </div>
          </div>

         
          {/* Solutions Grid */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Strategic Solutions</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/30">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">Advanced Planning Tools</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sophisticated planning frameworks that break down platform silos and provide unified campaign strategies.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-2xl p-6 backdrop-blur-sm border border-blue-500/30">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-3">Comprehensive Testing</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Rigorous A/B testing methodologies that uncover true incrementality across social media platforms.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/50 to-teal-900/50 rounded-2xl p-6 backdrop-blur-sm border border-emerald-500/30">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-3">Silo-Breaking Analytics</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cross-platform attribution models that provide clear insights into true campaign performance.
                </p>
              </div>
            </div>
          </div>

        
        </div>
      </div>

       <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Actions speak louder than words. Discover how we`ve transformed businesses with our innovative digital solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium">
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {study.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}

export default Ecommerce;

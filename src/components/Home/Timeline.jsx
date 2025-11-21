"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { BackgroundBeams } from "@/components/ui/background-beams";
import axios from "axios";
import { 
  Sparkles, 
  Target, 
  Palette, 
  Code2, 
  TrendingUp,
  Megaphone,
  PenTool,
  Smartphone,
  Globe,
  Mail,
  BarChart3,
  Rocket,
  ArrowRight,
  ChevronRight
} from "lucide-react";

export function TimelineDemo() {
  const [services, setServices] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Fetch services on component mount
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://dashboard.digitalnawab.com/api/get_service",
          headers: {},
        };

        const response = await axios.request(config);
        console.log(response.data);
        setServices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, []);

  const data3 = [
    {
      title: "Digital Marketing Services",
      icon: <Megaphone className="w-12 h-12" />,
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      description: "We offer full-stack digital marketing solutions designed to increase website traffic, generate high-quality leads, improve brand visibility, and boost your ROI. From SEO services to email automation and social media campaigns, we've got everything to grow your business online.",
      subservices: [
        {
          name: "Social Media Marketing",
          image: "/assets/images/services/1.webp",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          name: "SEO & Analytics",
          image: "/assets/images/services/2.webp",
          icon: <BarChart3 className="w-6 h-6" />
        },
        {
          name: "Email Automation",
          image: "/assets/images/services/3.webp",
          icon: <Mail className="w-6 h-6" />
        },
        {
          name: "Strategy & Planning",
          image: "/assets/images/services/4.webp",
          icon: <Target className="w-6 h-6" />
        }
      ],
      content: (
        <div>
          <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
            We offer full-stack digital marketing solutions designed to increase
            website traffic, generate high-quality leads, improve brand
            visibility, and boost your ROI. From SEO services to email
            automation and social media campaigns, we’ve got everything to grow
            your business online.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/images/services/1.webp"
                alt="Social Media Ads"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Social Media Marketing Campaigns
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/2.webp"
                alt="SEO Analytics"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                SEO Services & Analytics Dashboard
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/3.webp"
                alt="Email Marketing"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Email Marketing Automation
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/4.webp"
                alt="Marketing Strategy"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Marketing Strategy & Planning
              </h3>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Creative Design & Branding",
      icon: <Palette className="w-12 h-12" />,
      gradient: "from-pink-600 via-rose-600 to-orange-600",
      description: "We offer a full range of graphic design and branding services to help your business stand out. From stunning logo designs and intuitive UI/UX designs to high-impact video content and compelling ad creatives, we bring your brand vision to life with creativity and strategy.",
      subservices: [
        {
          name: "Logo & Branding",
          image: "/assets/images/services/8.webp",
          icon: <Sparkles className="w-6 h-6" />
        },
        {
          name: "UI/UX Design",
          image: "/assets/images/services/7.webp",
          icon: <PenTool className="w-6 h-6" />
        },
        {
          name: "Campaign Design",
          image: "/assets/images/services/5.webp",
          icon: <Target className="w-6 h-6" />
        },
        {
          name: "Ad Creatives",
          image: "/assets/images/services/6.webp",
          icon: <Palette className="w-6 h-6" />
        }
      ],
      content: (
        <div>
          <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
            We offer a full range of graphic design and branding services to
            help your business stand out. From stunning logo designs and
            intuitive UI/UX designs to high-impact video content and compelling
            ad creatives, we bring your brand vision to life with creativity and
            strategy.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/assets/images/services/8.webp"
                alt="Branding Design"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Logo & Branding Design Services
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/7.webp"
                alt="UI/UX Design"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Website & Mobile UI/UX Design
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/5.webp"
                alt="Video Production"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Ad Creatives & Campaign Design
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/6.webp"
                alt="Ad Creatives"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <p className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Ad Creatives Design
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Development Services",
      icon: <Code2 className="w-12 h-12" />,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      description: "We offer comprehensive custom software development services, including responsive websites, mobile applications, ReactJS development, and scalable cloud solutions. Our development team builds secure, high-performance digital products tailored to your business needs.",
      subservices: [
        {
          name: "Website Development",
          image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          icon: <Globe className="w-6 h-6" />
        },
        {
          name: "Mobile Apps",
          image: "/assets/images/services/mobile.png",
          icon: <Smartphone className="w-6 h-6" />
        },
        {
          name: "ReactJS Development",
          image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop",
          icon: <Code2 className="w-6 h-6" />
        },
        {
          name: "Cloud Solutions",
          image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop",
          icon: <Rocket className="w-6 h-6" />
        }
      ],
      content: (
        <div>
          <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
            We offer comprehensive custom software development services,
            including responsive websites, mobile applications, ReactJS
            development, and scalable cloud solutions. Our development team
            builds secure, high-performance digital products tailored to your
            business needs.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Website Development"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Custom Website Development
              </h3>
            </div>
            <div className="relative">
              <img
                src="/assets/images/services/mobile.png"
                alt="Mobile App Development"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Mobile App Development
              </h3>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=500&auto=format&fit=crop"
                alt="ReactJS Development"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                ReactJS Development
              </h3>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop"
                alt="Cloud Services"
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                Cloud Solutions
              </h3>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const data2 = services.map((service) => ({
    title: service.name,
    content: (
      <div>
        <p className="mb-4 text-xl custom text-neutral-800 dark:text-neutral-200">
          {service.description}
        </p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {service.subservices.map((subservice) => (
            <div key={subservice.id} className="relative">
              <img
                src={subservice.image}
                alt={subservice.name}
                className="h-40 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
              />
              <h3 className="mt-2 text-center text-lg custom-bold text-neutral-800 dark:text-neutral-200">
                {subservice.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    ),
  }));
  return (
    <div className="relative w-full bg-black py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <BackgroundBeams />
      </div>
      <Spotlight className="top-10 left-0 md:left-60 md:top-20" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Our Services</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              Comprehensive Digital Solutions
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Transform your business with our cutting-edge services designed to drive growth and innovation
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {data3.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {activeCategory === index && (
                <motion.div
                  layoutId="activeCategory"
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-xl`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {React.cloneElement(category.icon, { className: "w-5 h-5" })}
                {category.title}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Category Header Card */}
            <motion.div 
              className="relative overflow-hidden rounded-2xl p-8 mb-12 border border-gray-800"
              style={{
                background: "linear-gradient(135deg, rgba(17, 24, 39, 0.8) 0%, rgba(31, 41, 55, 0.4) 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-10" 
                   style={{ backgroundImage: `linear-gradient(135deg, ${data3[activeCategory].gradient.split(' ').slice(1).join(' ')})` }} 
              />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`p-4 rounded-2xl bg-gradient-to-br ${data3[activeCategory].gradient}`}
                >
                  {React.cloneElement(data3[activeCategory].icon, { className: "w-12 h-12 text-white" })}
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {data3[activeCategory].title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {data3[activeCategory].description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Services Grid with Animated Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {data3[activeCategory].subservices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-900/50 border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Image Container */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${data3[activeCategory].gradient} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                      
                      {/* Icon Overlay */}
                      <motion.div 
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: hoveredCard === index ? 1 : 0,
                          opacity: hoveredCard === index ? 1 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="p-4 rounded-full bg-white/20 backdrop-blur-md">
                          {React.cloneElement(service.icon, { className: "w-8 h-8 text-white" })}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {service.name}
                      </h4>
                      
                      {/* Arrow Icon */}
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ 
                          x: hoveredCard === index ? 0 : -10,
                          opacity: hoveredCard === index ? 1 : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center text-purple-400 text-sm font-medium"
                      >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </motion.div>
                    </div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
                      }}
                      animate={{
                        x: hoveredCard === index ? ["-100%", "200%"] : "-100%",
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        
        
      </div>
    </div>
  );
}

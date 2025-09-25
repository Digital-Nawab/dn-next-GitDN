import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  UserCheck,
  Bot,
  BarChart3,
  Clock,
  Users,
  Smartphone,
  Zap,
  CheckCircle,
  ArrowRight,
  Globe,
  Shield,
  TrendingUp,
  Target,
  MessageCircle,
  Send,
  Star,
  PlayCircle,
} from "lucide-react";
import ContactPopup from "../ContactPopup";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingVariants = {
  animate: {
    y: [-8, 8, -8],
    rotate: [0, 2, -2, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const WhatsAppMarketingSection = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const benefitsRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Enhanced features with more comprehensive data
  const features = [
    {
      icon: <MessageSquare className="h-10 w-10 text-green-500" />,
      title: "Advanced Bulk Messaging",
      description:
        "Send personalized messages to thousands of customers simultaneously with advanced scheduling, contact segmentation, and delivery tracking. Our platform ensures 99.5% delivery rates with intelligent retry mechanisms.",
      badge: "High Volume",
      gradient: "from-green-500 to-emerald-600",
      stats: ["10M+ Messages/Day", "99.5% Delivery", "24/7 Support"],
      features: [
        "Smart Scheduling",
        "Contact Segmentation",
        "Delivery Analytics",
        "Template Management",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: <Bot className="h-10 w-10 text-blue-500" />,
      title: "AI-Powered Chatbots",
      description:
        "Deploy intelligent chatbots that handle customer queries 24/7 with natural language processing. Create conversational flows that guide customers through purchases, support tickets, and engagement campaigns.",
      badge: "AI-Driven",
      gradient: "from-blue-500 to-cyan-600",
      stats: ["85% Query Resolution", "24/7 Availability", "Multi-Language"],
      features: [
        "Natural Language Processing",
        "Smart Routing",
        "Intent Recognition",
        "Learning Algorithms",
      ],
      image:
        "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: <UserCheck className="h-10 w-10 text-purple-500" />,
      title: "Hyper-Personalization Engine",
      description:
        "Create deeply personalized experiences using customer data, behavior patterns, and preferences. Dynamic content insertion, personalized product recommendations, and tailored messaging that drives 3x higher engagement.",
      badge: "Personalized",
      gradient: "from-purple-500 to-pink-600",
      stats: ["3x Higher Engagement", "Custom Templates", "Dynamic Content"],
      features: [
        "Behavioral Targeting",
        "Dynamic Content",
        "A/B Testing",
        "Customer Journey Mapping",
      ],
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-orange-500" />,
      title: "Advanced Analytics Suite",
      description:
        "Comprehensive analytics dashboard with real-time insights, conversion tracking, engagement metrics, and ROI analysis. Track every aspect of your WhatsApp marketing campaigns with detailed reporting and actionable insights.",
      badge: "Data-Driven",
      gradient: "from-orange-500 to-red-600",
      stats: ["Real-time Analytics", "Custom Reports", "ROI Tracking"],
      features: [
        "Campaign Analytics",
        "User Behavior Tracking",
        "Conversion Funnels",
        "Performance Optimization",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: <Globe className="h-10 w-10 text-teal-500" />,
      title: "Multi-Channel Integration",
      description:
        "Seamlessly integrate WhatsApp with your existing CRM, e-commerce platforms, and marketing tools. Sync customer data across channels and create unified customer experiences with automated workflows.",
      badge: "Integrated",
      gradient: "from-teal-500 to-green-600",
      stats: ["50+ Integrations", "Real-time Sync", "Unified Dashboard"],
      features: [
        "CRM Integration",
        "E-commerce Sync",
        "API Connectivity",
        "Workflow Automation",
      ],
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
    },
    {
      icon: <Shield className="h-10 w-10 text-indigo-500" />,
      title: "Enterprise Security & Compliance",
      description:
        "Bank-grade security with end-to-end encryption, GDPR compliance, and advanced privacy controls. Ensure your customer data is protected with enterprise-level security measures and compliance certifications.",
      badge: "Secure",
      gradient: "from-indigo-500 to-purple-600",
      stats: ["256-bit Encryption", "GDPR Compliant", "SOC 2 Certified"],
      features: [
        "End-to-End Encryption",
        "Privacy Controls",
        "Audit Trails",
        "Compliance Reporting",
      ],
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop&crop=center",
    },
  ];

  const stats = [
    {
      icon: Users,
      value: "2B+",
      label: "Active WhatsApp Users",
      color: "text-green-500",
    },
    {
      icon: MessageCircle,
      value: "100B+",
      label: "Messages Sent Daily",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Open Rate",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      value: "90s",
      label: "Average Response Time",
      color: "text-orange-500",
    },
  ];

  const benefits = [
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Higher Engagement Rates",
      description:
        "WhatsApp messages have 98% open rates compared to 20% for emails, ensuring your message reaches your audience.",
      metric: "98% Open Rate",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Instant Communication",
      description:
        "Real-time messaging capabilities allow for immediate customer support and rapid response to inquiries.",
      metric: "< 5min Response",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Global Reach",
      description:
        "Connect with customers worldwide through WhatsApp's massive user base of over 2 billion active users.",
      metric: "180+ Countries",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-teal-500" />,
      title: "Cost-Effective",
      description:
        "Reduce marketing costs significantly compared to traditional channels while maintaining high engagement.",
      metric: "70% Cost Reduction",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden min-h-screen"
    >
      {/* Animated Background Elements */}
      <div
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full filter blur-3xl" />
        <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Hero Section */}
        <div
          className="text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div
            className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 border border-green-500/30 flex-wrap justify-center"
            variants={cardVariants}
          >
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap">
              WhatsApp Business Solutions
            </span>
            <Badge
              variant="secondary"
              className="ml-2 bg-green-500 text-white text-xs"
            >
              2B+ Users
            </Badge>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 text-white leading-tight px-4 sm:px-0"
            variants={cardVariants}
          >
            Transform Your Business with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-teal-400 block sm:inline">
              WhatsApp Marketing
            </span>
          </h2>

          <p
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4 sm:px-0"
            variants={cardVariants}
          >
            Leverage the world's most popular messaging platform to connect with
            your customers, automate support, and drive sales through
            intelligent, personalized communication strategies that deliver
            exceptional results.
          </p>
        </div>

        {/* Benefits Section */}
        <div
          ref={benefitsRef}
          className="mb-16 sm:mb-20 px-4 sm:px-0"
          initial="hidden"
          animate={benefitsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                variants={cardVariants}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 bg-gray-800/50 border border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm"
                whilehover={{ scale: 1.02 }}
              >
                <div className="flex-shrink-0 self-start sm:self-center">
                  <div className="p-3 sm:p-4 bg-gray-700 rounded-xl sm:rounded-2xl">
                    {React.cloneElement(benefit.icon, {
                      className: "h-6 w-6 sm:h-8 sm:w-8",
                    })}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                    {benefit.description}
                  </p>
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-xs sm:text-sm">
                    {benefit.metric}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 mx-4 sm:mx-0"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-0">
            Ready to Transform Your Customer Communication?
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0">
            Join thousands of businesses already using WhatsApp to drive
            engagement, increase sales, and build stronger customer
            relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
            <ContactPopup
              buttonText=" Start Your Campaign"
              buttonClassName="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            />
            {/* <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full border-2 border-green-500 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppMarketingSection;

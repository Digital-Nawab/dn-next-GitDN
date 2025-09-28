"use client"; // if using Next.js App Router

import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeroHighlight } from "@/components/ui/hero-highlight";

const AuditForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    website_url: "",
    email: "",
    current_traffic: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("website_url", formData.website_url);
      data.append("email", formData.email);
      data.append("current_traffic", formData.current_traffic);
      data.append("message", formData.message);
      data.append("button", "Analyze site");

      const res = await axios.post(
        "https://dashboard.digitalnawab.com/api/post_seoform",
        data,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );

      setResponse(res.data);
    } catch (error) {
      console.error(error);
      setResponse({ error: "Something went wrong!" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    setTimeout(() => {
      setResponse(null);
    }, 2000);
  },[response])

  return (
    <div>
      <HeroHighlight
        containerClassName={
          "bg-gradient-to-r  from-[rgba(5,5,5,1)] via-[#142b26] to-black "
        }
      >
        <div className="max-w-7xl mx-auto">
          <div className=" py-12 grid lg:grid-cols-2 gap-4 lg:gap-12 px-4 sm:px-6  lg:px-8">
            <div className="hidden lg:flex items-center justify-center">
              <img
                src="/assets/images/audit.png"
                className="w-full rounded-2xl"
                alt=""
              />
            </div>
            <div className=" mx-auto flex flex-col justify-center ">
              <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">
                Free SEO Audit Form
              </h2>
              <p className="text-lg text-white text-center mt-2 mb-8">
                Get a FREE SEO Audit – See What’s Holding Your Website Back.
              </p>

              {/* ✅ wired up submit + inputs */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Business Name"
                    className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]"
                  />
                </div>

                <div>
                  <input
                    type="url"
                    name="website_url"
                    value={formData.website_url}
                    onChange={handleChange}
                    placeholder="Website URL"
                    className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]"
                  />
                </div>

                <div>
                  <select
                    name="current_traffic"
                    value={formData.current_traffic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66]"
                  >
                    <option value="" disabled>
                      Current Traffic
                    </option>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="SEO Goals (e.g. 'More Traffic', 'Better Ranking')"
                    className="w-full px-4 py-3 rounded-lg bg-[#2A4A42] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D4FF66] resize-none h-24"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D4FF66] text-black font-semibold py-3 rounded-lg hover:bg-[#C0E55A] transition"
                  >
                    {loading ? "Submitting..." : "Analyze My Site"}
                  </button>
                </div>
              </form>

              {response && (
                <div className="mt-4 text-green-500 bg-white/10 p-4 rounded-lg">
                  <pre>{response.message}</pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default AuditForm;

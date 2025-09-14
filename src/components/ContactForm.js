import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Demo only)");
    setFormData({ email: "", phone: "", location: "" });
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12">
      {/* Left: Contact Info */}
      <div className="flex-1 space-y-6 flex flex-col justify-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
          Contact Info
        </h3>
        <div className="space-y-4 text-gray-700 text-lg">
          <div className="flex items-center space-x-3">
            <span className="text-blue-600 text-2xl">📍</span>
            <span>123 Builder Street, Mumbai, India</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-600 text-2xl">📞</span>
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-blue-600 text-2xl">📧</span>
            <span>contact@xyzbuilders.com</span>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 space-y-4 flex flex-col justify-center"
      >
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-5 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 shadow-lg hover:shadow-xl transition transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

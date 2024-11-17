import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:nooraharish143@gmail.com" className="text-gray-600 hover:text-purple-600">
                  nooraharish143@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+919177850987" className="text-gray-600 hover:text-purple-600">
                  +91 9177850987
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">Tirupathi, A.P - 516101</p>
              </div>
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
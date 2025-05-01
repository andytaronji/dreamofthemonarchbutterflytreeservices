'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Set loading state
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Sending your message...'
      });
      
      // Send form data to API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Success
        setFormStatus({
          submitted: true,
          success: true,
          message: data.message || 'Thank you for your message! We will get back to you soon.'
        });
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        // Error
        setFormStatus({
          submitted: true,
          success: false,
          message: data.error || 'Something went wrong. Please try again later.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-monarch-green">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1588495752527-77d65c21f7cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Contact us background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team for professional tree care services or to request a free quote.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-monarch-green mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-monarch-yellow/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-monarch-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-monarch-dark">Phone</h3>
                    <p className="text-gray-700">678-898-1156</p>
                    <p className="text-sm text-gray-500 mt-1">Available Monday-Friday, 8am-6pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-monarch-yellow/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-monarch-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-monarch-dark">Email</h3>
                    <p className="text-gray-700">hernandezanallely2@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond as quickly as possible</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-monarch-yellow/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-monarch-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-monarch-dark">Service Area</h3>
                    <p className="text-gray-700">Greater Atlanta Area</p>
                    <p className="text-sm text-gray-500 mt-1">Serving residential and commercial properties</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-monarch-yellow/20 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-monarch-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-monarch-dark">Hours of Operation</h3>
                    <p className="text-gray-700">
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-gray-500 mt-1">24/7 emergency services available</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-xl font-bold text-monarch-green mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.facebook.com/people/Dream-Of-The-Monarch-Butterfly-Tree-Service/61552768919122/" target="_blank" rel="noopener noreferrer" className="bg-monarch-yellow/20 p-3 rounded-full text-monarch-orange hover:bg-monarch-yellow/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/dreamofthemonarchbutterfly/" target="_blank" rel="noopener noreferrer" className="bg-monarch-yellow/20 p-3 rounded-full text-monarch-orange hover:bg-monarch-yellow/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="https://www.google.com/maps/place/Dream+Of+The+Monarch+Butterfly+Tree+Services+LLC/@34.0449836,-84.3401891,12z/data=!4m6!3m5!1s0x21487aa2ba3562f1:0x15845caf9885f313!8m2!3d34.0449836!4d-84.3401891!16s%2Fg%2F11l5r4c95q?sa=X&ved=2ahUKEwi42JrQ1-eCAxVTSjABHTiBBtYQ_BJ6BAhGEAA&hl=en&entry=tts" target="_blank" rel="noopener noreferrer" className="bg-monarch-yellow/20 p-3 rounded-full text-monarch-orange hover:bg-monarch-yellow/30 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z" fillRule="evenodd" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-monarch-green mb-6">Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-monarch-green focus:border-monarch-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-monarch-green focus:border-monarch-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-monarch-green focus:border-monarch-green"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-monarch-green focus:border-monarch-green"
                  >
                    <option value="">Select a service</option>
                    <option value="Tree Pruning">Tree Pruning & Trimming</option>
                    <option value="Tree Removal">Tree Removal</option>
                    <option value="Stump Grinding">Stump Grinding & Removal</option>
                    <option value="Emergency Services">Emergency Tree Services</option>
                    <option value="Tree Health">Tree Health Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-monarch-green focus:border-monarch-green"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-3 px-6 text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-monarch-green mb-4">Our Service Areas</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We proudly serve the following areas with professional tree services for both residential and commercial properties:
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Roswell</span>
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Johns Creek</span>
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Alpharetta</span>
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Marietta</span>
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Sandy Springs</span>
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Smyrna</span>
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Atlanta</span>
              <span className="bg-monarch-green/10 text-monarch-green px-3 py-1 rounded-full text-sm font-medium">Cumming</span>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212270.7411321579!2d-84.56068880457461!3d33.767633772513695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5045d6993098d%3A0x66fede2f990b630b!2sAtlanta%2C%20GA!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call Section */}
      <section className="py-12 bg-monarch-orange text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">24/7 Emergency Tree Services</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Fallen trees or dangerous limbs? We offer round-the-clock emergency services.
          </p>
          <a href="tel:678-898-1156" className="inline-block bg-white text-monarch-orange font-bold py-3 px-8 rounded-md text-xl hover:bg-gray-100 transition-colors">
            Call 678-898-1156
          </a>
        </div>
      </section>
    </main>
  );
}

'use client';

import Image from 'next/image';
import { useState } from 'react';

// Define the testimonial type
type Testimonial = {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  image?: string;
};

// Sample testimonials
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "Buckhead, Atlanta",
    service: "Tree Removal",
    rating: 5,
    text: "The team at Dream of the Monarch Butterfly Tree Services did an amazing job removing a large oak tree that was dangerously close to our house. They were professional, efficient, and left our yard cleaner than when they arrived. Highly recommend!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Decatur, GA",
    service: "Tree Pruning",
    rating: 5,
    text: "I've been using Dream of the Monarch for regular tree maintenance for over a year now. Their attention to detail and knowledge about tree health is impressive. My trees have never looked better!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "David Thompson",
    location: "Marietta, GA",
    service: "Emergency Services",
    rating: 5,
    text: "After a severe storm, we had a tree fall on our driveway. Dream of the Monarch responded within hours and had everything cleared away by the end of the day. Their emergency response was incredible.",
    image: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    id: 4,
    name: "Jennifer Martinez",
    location: "Sandy Springs, GA",
    service: "Stump Grinding",
    rating: 4,
    text: "Great service removing several old stumps from our property. The team was punctual and did a thorough job. The only reason for 4 stars instead of 5 is that it took a bit longer than initially estimated, but the quality of work was excellent.",
    image: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 5,
    name: "Robert Wilson",
    location: "Alpharetta, GA",
    service: "Tree Health Consultation",
    rating: 5,
    text: "The arborist who came to assess our trees was incredibly knowledgeable. He identified issues we weren't even aware of and provided a comprehensive care plan. Our trees are now thriving thanks to their expert advice.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    id: 6,
    name: "Emily Davis",
    location: "Inman Park, Atlanta",
    service: "Tree Pruning",
    rating: 5,
    text: "Dream of the Monarch did an exceptional job pruning the historic trees on our property. They understood the importance of preserving their character while ensuring safety and health. True professionals!",
    image: "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    id: 7,
    name: "Thomas Brown",
    location: "Dunwoody, GA",
    service: "Tree Removal",
    rating: 5,
    text: "We had multiple trees that needed removal after they became diseased. The team was careful around our landscaping and structures, and their cleanup was immaculate. Would definitely use them again.",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    id: 8,
    name: "Lisa Anderson",
    location: "Roswell, GA",
    service: "Emergency Services",
    rating: 5,
    text: "When a tree fell on our fence during a storm, Dream of the Monarch came out the same day. They were professional, efficient, and reasonably priced, especially considering it was an emergency call.",
    image: "https://randomuser.me/api/portraits/women/28.jpg"
  }
];

// Service categories for filtering
const services = ["All Services", "Tree Removal", "Tree Pruning", "Stump Grinding", "Emergency Services", "Tree Health Consultation"];

export default function TestimonialsContent() {
  const [activeService, setActiveService] = useState("All Services");

  // Filter testimonials based on active service
  const filteredTestimonials = activeService === "All Services" 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.service === activeService);

  // Generate star rating display
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-monarch-green">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Testimonials background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customer Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Don't just take our word for it. See what our satisfied customers have to say about our services.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Service Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setActiveService(service)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeService === service
                    ? "bg-monarch-green text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {testimonial.image && (
                    <div className="mr-4">
                      <div className="h-14 w-14 rounded-full overflow-hidden relative">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-monarch-dark">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-monarch-yellow/20 text-monarch-orange text-xs px-2 py-1 rounded-full mb-2">
                    {testimonial.service}
                  </span>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No testimonials found for this service.</p>
            </div>
          )}
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-monarch-dark mb-6">Had a Great Experience?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            We appreciate your feedback! If you've used our services, please consider leaving a review.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              <svg className="h-5 w-5 text-[#4285F4]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Review on Google
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              <svg className="h-5 w-5 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Review on Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-monarch-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-monarch-dark mb-6">Ready to Experience Our Service?</h2>
          <p className="text-xl text-monarch-dark/80 mb-8 max-w-3xl mx-auto">
            Join our satisfied customers by contacting us today for a free consultation and quote.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}

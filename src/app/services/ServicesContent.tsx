'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ServicesContent() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-monarch-green">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Tree services background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Tree Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We provide comprehensive tree care solutions with a focus on health, safety, and aesthetics.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {/* Service 1: Tree Pruning */}
            <div id="pruning" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939112/IMG_3543_qaqtoq.heic"
                    alt="Tree Pruning"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-monarch-green mb-4">Tree Pruning & Trimming</h2>
                  <p className="text-gray-700 mb-4">
                    Our professional pruning services improve tree structure, health, and appearance while ensuring safety. We follow industry best practices to:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Remove dead or diseased branches to prevent decay
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Thin crowns to improve air circulation and reduce wind resistance
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Shape trees for aesthetic appeal and structural integrity
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Clear branches from structures, utility lines, and walkways
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Get a Pruning Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2: Tree Removal */}
            <div id="removal" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-64 md:h-full">
                  <Image
                    src="https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939142/IMG_2928_fyekz2.heic"
                    alt="Tree Removal"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-monarch-green mb-4">Tree Removal</h2>
                  <p className="text-gray-700 mb-4">
                    When a tree needs to be removed due to disease, damage, or development needs, our team provides safe and efficient removal services. Our comprehensive approach includes:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Thorough assessment and strategic planning before removal
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Specialized equipment and techniques for safe removal
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Minimal impact to surrounding landscape and structures
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Complete cleanup and debris removal
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Request Removal Service
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3: Stump Grinding */}
            <div id="stump-grinding" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="https://res.cloudinary.com/di4phdven/image/upload/q_auto/v1745941605/Armadale_Castle_-_tree_stump_z4lqcz.jpg"
                    alt="Stump Grinding"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-monarch-green mb-4">Stump Grinding & Removal</h2>
                  <p className="text-gray-700 mb-4">
                    Tree stumps can be unsightly, take up valuable space, and even attract pests. Our stump grinding services provide:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Complete removal of visible stumps below ground level
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Elimination of tripping hazards and eyesores
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Prevention of new sprout growth from remaining roots
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Site preparation for new landscaping or construction
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Get Stump Removal Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 4: Emergency Services */}
            <div id="emergency" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-1 md:order-2 relative h-64 md:h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1517660029921-0cbea2f15f8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Emergency Tree Services"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="order-2 md:order-1">
                  <h2 className="text-3xl font-bold text-monarch-green mb-4">Emergency Tree Services</h2>
                  <p className="text-gray-700 mb-4">
                    Storms, high winds, and other emergencies can create hazardous tree situations that require immediate attention. Our emergency services include:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      24/7 response to tree emergencies
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Removal of fallen trees and limbs from structures
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Stabilization of damaged trees when possible
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Coordination with insurance companies for claims
                    </li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="btn-primary">
                      Contact for Emergency
                    </Link>
                    <a href="tel:(678) 888-1156" className="btn-secondary">
                      Call (678) 888-1156
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5: Tree Health Consultation */}
            <div id="consultation" className="scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 md:h-full">
                  <Image
                    src="https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939113/IMG_5405_w2nrdy.heic"
                    alt="Tree Health Consultation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-monarch-green mb-4">Tree Health Consultation</h2>
                  <p className="text-gray-700 mb-4">
                    Preventative care is the best way to maintain healthy, beautiful trees. Our consultation services provide:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Expert assessment of tree health and structural integrity
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Identification of diseases, pests, and nutritional deficiencies
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Customized treatment plans and maintenance schedules
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-monarch-orange mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Recommendations for species selection and placement
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-monarch-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-monarch-dark mb-6">Ready to Care for Your Trees?</h2>
          <p className="text-xl text-monarch-dark/80 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote on any of our professional tree services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3">
              Request a Quote
            </Link>
            <a href="tel:(678) 888-1156" className="btn-secondary text-lg px-8 py-3">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

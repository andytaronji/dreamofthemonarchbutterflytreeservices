import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Professional tree services in Greater Atlanta area including Roswell, Johns Creek, and Alpharetta"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-monarch-dark/50"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            CRAFTING URBAN CANOPIES:<br />ONE TREE AT A TIME!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl">
            Professional arborist services for healthy, beautiful trees that enhance your property and the environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/services" className="btn-secondary">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-monarch-dark mb-4">Our Expert Tree Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive tree care solutions to keep your landscape healthy, safe, and beautiful.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-monarch-offwhite rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939112/IMG_3543_qaqtoq.heic"
                  alt="Professional tree pruning services in Atlanta and Roswell area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-monarch-green mb-2">Tree Pruning & Trimming</h3>
                <p className="text-gray-600 mb-4">
                  Expert pruning to improve tree health, appearance, and safety while promoting proper growth patterns.
                </p>
                <Link href="/services#pruning" className="text-monarch-orange font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-monarch-offwhite rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="https://res.cloudinary.com/di4phdven/image/upload/f_jpg,q_auto/v1745939142/IMG_2928_fyekz2.heic"
                  alt="Expert tree removal services in Johns Creek and Alpharetta area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-monarch-green mb-2">Tree Removal</h3>
                <p className="text-gray-600 mb-4">
                  Safe and efficient removal of dead, diseased, or unwanted trees with minimal impact to surrounding areas.
                </p>
                <Link href="/services#removal" className="text-monarch-orange font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-monarch-offwhite rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 relative">
                <Image
                  src="https://res.cloudinary.com/di4phdven/image/upload/q_auto/v1745941605/Armadale_Castle_-_tree_stump_z4lqcz.jpg"
                  alt="Stump grinding and removal services in Marietta and Sandy Springs area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-monarch-green mb-2">Stump Grinding & Removal</h3>
                <p className="text-gray-600 mb-4">
                  Complete elimination of tree stumps to reclaim your yard space and prevent pest infestations.
                </p>
                <Link href="/services#stump-grinding" className="text-monarch-orange font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-monarch-green text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg max-w-3xl mx-auto opacity-90">
              We take pride in our work and the satisfaction of our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-monarch-yellow">
                  ★★★★★
                </div>
              </div>
              <p className="italic mb-4">
                "The team at Dream of the Monarch Butterfly Tree Services did an amazing job pruning our large oak trees. They were professional, efficient, and left our yard cleaner than when they arrived!"
              </p>
              <p className="font-semibold">- Sarah Johnson, Homeowner</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-monarch-yellow">
                  ★★★★★
                </div>
              </div>
              <p className="italic mb-4">
                "We had several dangerous trees that needed removal after a storm. Their crew came quickly, worked safely, and handled everything with expertise. Highly recommend!"
              </p>
              <p className="font-semibold">- Michael Rodriguez, Property Manager</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="text-monarch-yellow">
                  ★★★★★
                </div>
              </div>
              <p className="italic mb-4">
                "I've used many tree services over the years, but none compare to the care and attention to detail that this team provides. They truly understand trees and how to care for them properly."
              </p>
              <p className="font-semibold">- Jennifer Williams, Landscape Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-monarch-dark mb-4">Our Service Areas</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We proudly provide expert tree care services throughout the Greater Atlanta Metro Area, including:
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Roswell</h3>
            </div>
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Johns Creek</h3>
            </div>
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Alpharetta</h3>
            </div>
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Marietta</h3>
            </div>
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Sandy Springs</h3>
            </div>
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Smyrna</h3>
            </div>
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Atlanta</h3>
            </div>
            <div className="bg-monarch-green/5 p-4 rounded-lg hover:bg-monarch-green/10 transition-colors">
              <h3 className="text-xl font-semibold text-monarch-green">Cumming</h3>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't see your area? <Link href="/contact" className="text-monarch-orange hover:underline">Contact us</Link> to check if we service your location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-monarch-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about our tree services in the Greater Atlanta area.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-monarch-offwhite p-6 rounded-lg">
              <h3 className="text-xl font-bold text-monarch-green mb-2">Do you provide emergency tree services in Roswell and Johns Creek?</h3>
              <p className="text-gray-700">
                Yes, we offer 24/7 emergency tree services in Roswell, Johns Creek, and all surrounding areas. Our team can quickly respond to fallen trees, dangerous limbs, and storm damage.
              </p>
            </div>
            
            <div className="bg-monarch-offwhite p-6 rounded-lg">
              <h3 className="text-xl font-bold text-monarch-green mb-2">How much does tree removal cost in Alpharetta?</h3>
              <p className="text-gray-700">
                Tree removal costs in Alpharetta vary based on size, location, and complexity. We provide free on-site estimates to give you an accurate price for your specific situation.
              </p>
            </div>
            
            <div className="bg-monarch-offwhite p-6 rounded-lg">
              <h3 className="text-xl font-bold text-monarch-green mb-2">Are you licensed and insured to work in Marietta and Sandy Springs?</h3>
              <p className="text-gray-700">
                Yes, we are fully licensed and insured to provide tree services in Marietta, Sandy Springs, and throughout the Greater Atlanta area, giving you peace of mind for any project.
              </p>
            </div>
            
            <div className="bg-monarch-offwhite p-6 rounded-lg">
              <h3 className="text-xl font-bold text-monarch-green mb-2">How soon can you start tree pruning in Smyrna or Atlanta?</h3>
              <p className="text-gray-700">
                Our typical response time for tree pruning in Smyrna, Atlanta, and nearby areas is within 1-2 weeks, though this may vary based on seasonal demand and our current schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-monarch-yellow">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-monarch-dark mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-xl text-monarch-dark/80 mb-8 max-w-3xl mx-auto">
            Contact us today for a free consultation and quote on your tree service needs.
          </p>
          <Link href="/contact" className="btn-primary text-lg px-8 py-3">
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}

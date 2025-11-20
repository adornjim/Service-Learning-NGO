import React from 'react';
import { Users, Heart, Award, Target, TrendingUp, MapPin } from 'lucide-react';

const ImpactPage: React.FC = () => {
  const impactStats = [
    { icon: Users, number: '5,000+', label: 'Lives Impacted', description: 'Direct beneficiaries across all programs' },
    { icon: Heart, number: '30+', label: 'Communities Served', description: 'Across Bangalore and surrounding areas' },
    { icon: Award, number: '50+', label: 'Programs Completed', description: 'Successfully executed initiatives' },
    { icon: Target, number: '85%', label: 'Success Rate', description: 'Of participants achieving goals' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Women Empowerment Program Graduate',
      image: 'https://images.pexels.com/photos/8471906/pexels-photo-8471906.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'The skills training program changed my life. I now run my own tailoring business and support my family independently. Thank you for believing in me.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Youth Education Support Recipient',
      image: 'https://images.pexels.com/photos/8471844/pexels-photo-8471844.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Without the scholarship support, I would never have been able to complete my engineering degree. Today, I have a good job and can give back to my community.',
    },
    {
      name: 'Lakshmi Devi',
      role: 'Community Leader',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      quote: 'Voice of Nation Foundation has transformed our entire community. From providing meals to our children to helping women start businesses, they have been our pillar of support.',
    },
  ];

  const impactAreas = [
    {
      title: 'Food Security',
      description: 'Providing nutritious meals and establishing sustainable food systems',
      stats: ['500+ meals served weekly', '15 community kitchens established', '25 partner shelters'],
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Education & Skills',
      description: 'Empowering through education and vocational training',
      stats: ['300+ students supported', '200+ women trained', '80% job placement rate'],
      image: 'https://images.pexels.com/photos/8471996/pexels-photo-8471996.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      title: 'Health & Wellness',
      description: 'Promoting physical and mental health in communities',
      stats: ['150+ counseling sessions', '20 health camps', '100+ medical consultations'],
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Impact
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Since 2020, we've impacted 5,000+ lives in 30+ communities around Bangalore
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Impact by Numbers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our work speaks through the lives we've touched and the communities we've transformed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-800 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Areas of Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach addresses multiple aspects of community development.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <ul className="space-y-2">
                    {area.stats.map((stat, statIndex) => (
                      <li key={statIndex} className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-orange-600" />
                        <span className="text-sm text-gray-700">{stat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Change</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from the people whose lives have been transformed through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery of Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visual stories from our field visits, events, and community programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/6646924/pexels-photo-6646924.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/6994845/pexels-photo-6994845.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/8471885/pexels-photo-8471885.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/6646978/pexels-photo-6646978.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
              'https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
            ].map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={image}
                  alt={`Impact gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Part of Our Impact Story
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join us in creating more success stories and transforming more lives in our communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/get-involved"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Involved Today
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
import React from 'react';
import { 
  Users, 
  Heart, 
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const GetInvolvedPage: React.FC = () => {
  const navigate = useNavigate();
  const ways = [
    {
      icon: Users,
      title: 'Volunteer With Us',
      description: 'From event planning to on-ground help—there\'s a role for everyone.',
      details: [
        'Weekend food distribution drives',
        'Teaching and mentoring youth',
        'Administrative and organizational support',
        'Event coordination and management',
        'Fundraising and awareness campaigns'
      ],
      color: 'bg-blue-500',
      cta: 'Become a Volunteer'
    },
    {
      icon: Heart,
      title: 'Donate',
      description: 'Your contribution fuels change. Every rupee counts.',
      details: [
        'Monthly meal programs: ₹500/month',
        'Student scholarship fund: ₹2000/child',
        'Skills training workshop: ₹1500/person',
        'Emergency relief support: ₹1000/family',
        'General operations: Any amount'
      ],
      color: 'bg-orange-500',
      cta: 'Make a Donation'
    }
  ];

  const volunteerRoles = [
    {
      title: 'Field Volunteer',
      time: '4-6 hours/week',
      description: 'Direct community engagement and program implementation',
      requirements: ['Available on weekends', 'Basic local language skills', 'Compassionate attitude']
    },
    {
      title: 'Skills Trainer',
      time: '2-3 hours/week',
      description: 'Teach vocational skills or conduct workshops',
      requirements: ['Expertise in specific skill', 'Teaching/training experience', 'Regular availability']
    },
    {
      title: 'Administrative Support',
      time: '3-4 hours/week',
      description: 'Help with documentation, social media, and operations',
      requirements: ['Computer skills', 'Remote work capability', 'Detail-oriented']
    },
    {
      title: 'Event Coordinator',
      time: 'Project-based',
      description: 'Organize fundraising events and awareness campaigns',
      requirements: ['Event management skills', 'Network of contacts', 'Creative thinking']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/6646978/pexels-photo-6646978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get Involved
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            There are many ways you can contribute to creating positive change in our communities
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How You Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the way that best fits your schedule, skills, and passion for making a difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ways.map((way, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`rounded-full w-16 h-16 flex items-center justify-center ${way.color}`}>
                      <way.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{way.title}</h3>
                      <p className="text-gray-600">{way.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {way.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {way.title === 'Volunteer With Us' ? (
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe-woL0zXCInXnF8xmL9ZXUJcotEt_w254Y-BRZqlD6SJuBPQ/viewform?usp=dialog"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full ${way.color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2`}
                    >
                      <span>{way.cta}</span>
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => navigate('/donation')}
                      className={`w-full ${way.color} text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2`}
                    >
                      <span>{way.cta}</span>
                      <ArrowRight className="h-5 w-5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect volunteer role that matches your skills and availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{role.title}</h3>
                  <div className="flex items-center space-x-2 text-orange-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{role.time}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{role.description}</p>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {role.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact of Involvement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your Impact
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  When you get involved with Voice of Nation Foundation, you become part of a movement that's creating real, lasting change in communities across Bangalore.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
                    <div className="text-gray-600">Active Volunteers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-teal-600 mb-2">95%</div>
                    <div className="text-gray-600">Volunteer Satisfaction</div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our volunteers often tell us that giving back has enriched their own lives as much as it has helped others. Join our community of changemakers today.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/6646924/pexels-photo-6646924.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Volunteers in action"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/8471885/pexels-photo-8471885.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                alt="Community impact"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get in touch with you about opportunities that match your interests.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Interest *
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">Select your interest</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="donate">Making a donation</option>
                    <option value="partner">Partnership/Sponsorship</option>
                    <option value="fundraiser">Starting a fundraiser</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-medium text-gray-700 mb-2">
                  Availability (for volunteers)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Weekends', 'Weekday evenings', 'Flexible', 'Project-based'].map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Tell us more about your interests, skills, or how you'd like to help..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            We're here to help you find the perfect way to get involved. Reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@voiceofnation.org"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Email Us
            </a>
            <a
              href="tel:+919876543210"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolvedPage;
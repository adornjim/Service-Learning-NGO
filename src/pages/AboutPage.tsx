import React from 'react';
import { Heart, Target, Users, Shield, Eye, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every situation with empathy and understanding, putting human dignity at the center of our work.',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We believe in creating opportunities for everyone, regardless of their background or circumstances.',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our operations and relationships.',
    },
    {
      icon: Lightbulb,
      title: 'Empowerment',
      description: 'We focus on building sustainable solutions that help communities become self-reliant and thriving.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We maintain open communication about our work, impact, and use of resources with all stakeholders.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/6646971/pexels-photo-6646971.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Our Foundation
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Dedicated to creating positive change in the lives of those who need it most
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-orange-100 rounded-full p-3">
                  <Target className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is to improve the well-being of the underprivileged sections of Bangalore through relief initiatives, empowerment programs, and by spreading courage and positivity.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We work tirelessly to address immediate needs while building long-term solutions that create sustainable change in communities across the city.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-teal-100 rounded-full p-3">
                  <Eye className="h-8 w-8 text-teal-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                A united and equitable society where every individual has the opportunity to thrive with dignity and hope.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We envision communities where poverty, inequality, and discrimination are replaced by prosperity, justice, and mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020, Voice of Nation Foundation emerged from a simple but powerful belief: that every person deserves a chance to live with dignity and hope.
                </p>
                <p>
                  Our journey began with a small group of passionate individuals who witnessed the growing inequality in Bangalore. They saw families struggling to put food on the table, children missing out on education, and women lacking opportunities for economic independence.
                </p>
                <p>
                  What started as weekend food distribution drives has grown into a comprehensive organization that addresses multiple aspects of community development. Today, we work across 30+ communities, touching thousands of lives through our various programs.
                </p>
                <p>
                  Our approach is rooted in understanding that sustainable change requires more than temporary relief—it requires empowerment, education, and building systems that support long-term growth.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Foundation team at work"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/6646978/pexels-photo-6646978.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
                alt="Community outreach"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every action we take in service of our communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{value.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since our founding, we've grown from a small group of volunteers to a dedicated team working across multiple programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/6646919/pexels-photo-6646919.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
                title: "Community Outreach",
                description: "Regular visits to underserved communities to understand their needs and provide immediate assistance."
              },
              {
                image: "https://images.pexels.com/photos/8471906/pexels-photo-8471906.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
                title: "Skills Development",
                description: "Training programs that equip individuals with practical skills for sustainable livelihoods."
              },
              {
                image: "https://images.pexels.com/photos/6646924/pexels-photo-6646924.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
                title: "Youth Mentorship",
                description: "Guiding young minds through education support and career development programs."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
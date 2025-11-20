import React from 'react';
import { 
  Utensils, 
  GraduationCap, 
  Users, 
  Heart, 
  AlertTriangle, 
  HandHeart,
  BookOpen,
  Briefcase
} from 'lucide-react';

const ProgramsPage: React.FC = () => {
  const programs = [
    {
      icon: Utensils,
      title: 'Food & Nutrition Drives',
      description: 'Providing nutritious meals to slum and shelter homes.',
      longDescription: 'Our food and nutrition program ensures that no one in our communities goes hungry. We organize regular meal distributions, establish community kitchens, and provide nutritional education to families.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: ['500+ meals served weekly', '15 community kitchens', '25 partner shelters'],
      color: 'orange'
    },
    {
      icon: Users,
      title: 'Women Empowerment Workshops',
      description: 'Skill development and self-help training for marginalized women.',
      longDescription: 'We empower women through comprehensive skill development programs, financial literacy training, and support for starting small businesses. Our goal is to create economic independence and social empowerment.',
      image: 'https://images.pexels.com/photos/8471996/pexels-photo-8471996.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: ['200+ women trained', '50+ micro-enterprises started', '12 self-help groups'],
      color: 'teal'
    },
    {
      icon: GraduationCap,
      title: 'Youth Education Support',
      description: 'Scholarships, mentorship, and school supplies for students.',
      longDescription: 'Education is the foundation of progress. We provide scholarships, school supplies, tutoring support, and mentorship programs to ensure that financial constraints don\'t limit a child\'s potential.',
      image: 'https://images.pexels.com/photos/8471844/pexels-photo-8471844.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: ['300+ students supported', '50 scholarships awarded', '10 tutoring centers'],
      color: 'blue'
    },
    {
      icon: Heart,
      title: 'Mental Health Awareness',
      description: 'Workshops and counseling for emotional wellness.',
      longDescription: 'Mental health is just as important as physical health. We conduct awareness sessions, provide counseling services, and create support groups to address mental health challenges in our communities.',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: ['150+ counseling sessions', '20 awareness workshops', '8 support groups'],
      color: 'green'
    },
    {
      icon: AlertTriangle,
      title: 'Disaster & Emergency Relief',
      description: 'Quick-response support in times of natural and man-made crises.',
      longDescription: 'When disaster strikes, we\'re ready to respond. Our emergency relief program provides immediate assistance including shelter, food, medical aid, and rehabilitation support to affected communities.',
      image: 'https://images.pexels.com/photos/6994845/pexels-photo-6994845.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: ['24/7 emergency response', '5 relief camps', '1000+ people aided'],
      color: 'red'
    },
    {
      icon: Briefcase,
      title: 'Skill Development & Employment',
      description: 'Vocational training and job placement assistance.',
      longDescription: 'We bridge the gap between unemployment and opportunity through vocational training programs, job fairs, and partnerships with local businesses to create sustainable employment opportunities.',
      image: 'https://images.pexels.com/photos/8471885/pexels-photo-8471885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      stats: ['80% job placement rate', '15 skill courses', '100+ employed'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      teal: 'bg-teal-100 text-teal-600 border-teal-200',
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      green: 'bg-green-100 text-green-600 border-green-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200'
    };
    return colors[color as keyof typeof colors] || colors.orange;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop")'
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Comprehensive initiatives designed to address root causes and create sustainable change
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are designed to address immediate needs while building long-term solutions for sustainable community development.
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`rounded-full w-16 h-16 flex items-center justify-center ${getColorClasses(program.color)}`}>
                      <program.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {program.longDescription}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <h4 className="text-lg font-semibold text-gray-900">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {program.stats.map((stat, statIndex) => (
                        <li key={statIndex} className="flex items-center space-x-3">
                          <HandHeart className="h-5 w-5 text-orange-600 flex-shrink-0" />
                          <span className="text-gray-700">{stat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="rounded-lg shadow-xl w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Impact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated approach ensures that each program complements the others, creating a comprehensive support system for communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, number: '1,200+', label: 'Direct Beneficiaries' },
              { icon: BookOpen, number: '50+', label: 'Programs Completed' },
              { icon: Heart, number: '30+', label: 'Communities Reached' },
              { icon: GraduationCap, number: '85%', label: 'Success Rate' }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want to Support Our Programs?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Your contribution can help us expand these programs and reach even more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/get-involved"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Support Our Work
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
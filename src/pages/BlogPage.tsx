import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const BlogPage: React.FC = () => {
  const featuredPost = {
    title: 'How a Weekend Food Drive Brought Smiles to 200+ Families',
    excerpt: 'Last weekend, our volunteers came together for one of our largest food distribution drives yet. Here\'s how we reached 200+ families across 5 communities and the heartwarming stories we encountered along the way.',
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    author: 'Priya Sharma',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Community Impact'
  };

  const blogPosts = [
    {
      title: 'Volunteer Diaries: My Experience Teaching in a Slum School',
      excerpt: 'A personal account from one of our long-term volunteers about the transformative experience of teaching children in underserved communities.',
      image: 'https://images.pexels.com/photos/8471844/pexels-photo-8471844.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Rajesh Kumar',
      date: 'March 12, 2024',
      readTime: '4 min read',
      category: 'Volunteer Stories'
    },
    {
      title: 'How You Can Start Helping with Just 1 Hour a Week',
      excerpt: 'Discover simple yet impactful ways you can contribute to our mission, even with a busy schedule. Small actions can create big changes.',
      image: 'https://images.pexels.com/photos/6646924/pexels-photo-6646924.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Meera Patel',
      date: 'March 10, 2024',
      readTime: '3 min read',
      category: 'Getting Involved'
    },
    {
      title: 'Women Empowerment Success Story: From Training to Business Owner',
      excerpt: 'Meet Lakshmi, who transformed her life through our skills development program and now runs a successful tailoring business.',
      image: 'https://images.pexels.com/photos/8471996/pexels-photo-8471996.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Sunita Rao',
      date: 'March 8, 2024',
      readTime: '6 min read',
      category: 'Success Stories'
    },
    {
      title: 'Mental Health Awareness: Breaking Stigma in Rural Communities',
      excerpt: 'Our recent mental health workshops have helped communities understand and address mental wellness. Here\'s what we learned.',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Dr. Amit Singh',
      date: 'March 5, 2024',
      readTime: '7 min read',
      category: 'Health & Wellness'
    },
    {
      title: 'Building Sustainable Food Systems in Urban Slums',
      excerpt: 'Learn about our innovative approach to addressing food security through community kitchens and urban farming initiatives.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Anand Krishnan',
      date: 'March 1, 2024',
      readTime: '5 min read',
      category: 'Programs'
    },
    {
      title: 'Youth Leadership Program: Empowering the Next Generation',
      excerpt: 'Our youth leadership program is creating young changemakers who are driving positive change in their own communities.',
      image: 'https://images.pexels.com/photos/8471885/pexels-photo-8471885.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      author: 'Kavya Nair',
      date: 'February 28, 2024',
      readTime: '4 min read',
      category: 'Youth Development'
    }
  ];

  const categories = [
    'All',
    'Community Impact',
    'Volunteer Stories',
    'Success Stories',
    'Programs',
    'Health & Wellness',
    'Getting Involved',
    'Youth Development'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            News & Updates
          </h1>
          <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
            Stories, insights, and updates from our work in the field
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Story</h2>
          </div>

          <article className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <button className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 self-start">
                  Read Full Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === 'All'
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-700 border border-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest news, volunteer stories, and impact reports from the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                      <Tag className="h-3 w-3" />
                      <span>{post.category}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 font-medium text-sm flex items-center space-x-1 transition-colors duration-200">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Load More Stories
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest stories, updates, and ways to get involved.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
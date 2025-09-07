

'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Facebook, Twitter, Youtube, Play, ChevronLeft, ChevronRight, BookOpen, Award, Users, FileText } from 'lucide-react';

interface Testimonial {
  name: string;
  type: string;
  text: string;
  image: string;
}

const Portfolio: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  const testimonials: Testimonial[] = [
    {
      name: "Dr. Sarah Johnson",
      type: "CONFERENCE COLLEAGUE, IEEE 2023",
      text: "Dr. Marimuthu's research on deep learning applications in medical diagnosis is groundbreaking. His innovative approach to combining computational intelligence with healthcare systems has opened new avenues for automated disease detection.",
      image: "/image/img1.jpg"
    },
    {
      name: "Prof. Rajesh Kumar",
      type: "RESEARCH COLLABORATOR, NIT 2023",
      text: "Working with Dr. Marimuthu on bio-computational models has been incredibly rewarding. His expertise in data mining and machine learning, combined with his dedication to practical applications, makes him an exceptional researcher.",
      image: "/image/img1.jpg"
    }
  ];

  const nextTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = (): void => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">Dr. T. Marimuthu</h1>
                <p className="text-sm text-gray-600 font-medium">Computer Science & Engineering</p>
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex gap-8">
              {['About Me', 'Education', 'Teaching', 'Research', 'Achievement', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'education', 'teaching', 'research', 'achievement', 'contact'][index])}
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3">
              {[Mail, Phone].map((Icon, index) => (
                <Icon key={index} className="w-5 h-5 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200" />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-col lg:flex-row gap-12">
            <div className="flex-1 text-center lg:text-left lg:pr-12">
              <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  Dr. Marimuthu
                </span>
              </h2>
              <p className="text-xl text-gray-700 font-medium mb-4">
                Assistant Professor & Researcher in Computer Science –
              </p>
              <p className="text-lg text-gray-600">
                Specializing in Bio-computational Models, Machine Learning, and Deep Learning Applications
              </p>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/image/img1.jpg" 
                  alt="Dr. T. Marimuthu"
                  className="relative w-96 h-96 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl transform group-hover:scale-105 transition duration-500"></div>
              <img 
                src="/image/img2.png" 
                alt="Research Lab"
                className="relative w-full h-96 object-cover rounded-2xl shadow-2xl z-10"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  About{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h3>
                <p className="text-xl text-gray-700 font-medium mb-6">
                  Research-driven innovation in Computer Science –
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm an Assistant Professor at Kalasalingam Academy of Research and Education with over 16 years of teaching experience and a strong research background in bio-computational models and machine learning applications.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Areas of Expertise:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['Machine Learning', 'Deep Learning', 'Bio-computational Models', 'Data Mining', 'IoT Systems', 'Medical AI'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition duration-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                My research focuses on developing innovative bio-computational models for mining gene sequences, with special emphasis on dengue virus analysis. I've published extensively in high-impact journals and conferences, contributing to the advancement of computational biology and artificial intelligence applications in healthcare.
              </p>

              <div className="flex gap-4">
                 <a 
                   href="/image/pd.pdf"  // path to your PDF in public/
                  target="_blank"     // opens in new tab
                   rel="noopener noreferrer"
                 >
              <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               View Resume
              </button>
               </a>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Educational Journey</h3>
            <p className="text-xl text-gray-600">Academic Qualifications & Professional Development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                year: "2017",
                title: "Ph.D. Computer Applications",
                description: "Highly Commended Thesis on bio-computational model for mining dengue gene sequences. Manonmaniam Sundaranar University.",
                label: "01 \\ DOCTORATE"
              },
              {
                year: "2016",
                title: "State Eligibility Test (SET)",
                description: "Qualified SET in Computer Science & Applications with 220/300 marks. Mother Teresa Women's University.",
                label: "02 \\ QUALIFICATION"
              },
              {
                year: "2009",
                title: "M.Phil. Computer Science",
                description: "First Class with Distinction (CGPA: 8.38) from PRIST University. Dissertation on Distributed Association Rule Mining.",
                label: "03 \\ RESEARCH"
              },
              {
                year: "2008",
                title: "M.C.A. Gold Medalist",
                description: "Achieved Gold Medal with 88.10% from Ayya Nadar Janaki Ammal College, affiliated to Madurai Kamaraj University.",
                label: "04 \\ EXCELLENCE"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="text-8xl font-bold bg-gradient-to-br from-blue-200 to-blue-300 bg-clip-text text-transparent mb-6 group-hover:from-blue-300 group-hover:to-blue-400 transition duration-500">
                  {item.year}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="py-20 bg-gradient-to-br from-emerald-50 to-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Teaching Experience</h3>
            <p className="text-xl text-gray-600">16+ Years of Academic Excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Position */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">KARE</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Current Position
                    </span>
                    <span className="text-gray-500 text-sm">2023 - Present</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    Assistant Professor & Deputy Director
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Kalasalingam Academy of Research and Education</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Leading computer science education and research initiatives while serving as Deputy Director for Centre for Distance and Online Education.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Computer Science', 'Research Supervision', 'Online Education', 'Academic Leadership'].map((subject, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Experience */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-green-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">ANJAC</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Previous Role
                    </span>
                    <span className="text-gray-500 text-sm">2008 - 2023</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition duration-300">
                    Assistant Professor & Lecturer
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">Ayya Nadar Janaki Ammal College & Jairam College</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Extensive teaching experience in computer applications, data structures, and research methodologies with significant contributions to curriculum development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['MCA Programs', 'Data Mining', 'Research Guidance', 'Industry Training'].map((subject, index) => (
                      <span key={index} className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Research Training */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">ISRO</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Project Training
                    </span>
                    <span className="text-gray-500 text-sm">2007 - 2008</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition duration-300">
                    Project Trainee
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">ISRO Satellite Centre, Bangalore</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Specialized training in Integrated Software for Spacecraft Thermal Analysis (ISSTA) Development Lab, working with Java and Cache DB technologies.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Spacecraft Software', 'Java Development', 'Thermal Analysis', 'System Integration'].map((subject, index) => (
                      <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Activities */}
            <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition duration-500">
                  <span className="text-white font-bold text-sm">ACM</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                      Professional Body
                    </span>
                    <span className="text-gray-500 text-sm">Ongoing</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition duration-300">
                    Faculty Coordinator & Reviewer
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-2">ACM Student Chapter & International Journals</p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Leading ACM student activities, reviewing for prestigious journals, and conducting professional development programs across various institutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['ACM Chapter', 'Journal Reviewing', 'NPTEL Coordination', 'Guest Lectures'].map((subject, index) => (
                      <span key={index} className="bg-orange-50 text-orange-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="mt-16 bg-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400"></div>
            <div className="text-center">
              <h4 className="text-3xl font-bold text-gray-900 mb-6">Teaching Philosophy</h4>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                "I believe in bridging the gap between theoretical computer science concepts and their practical applications in solving real-world problems. My approach emphasizes hands-on learning through research projects, encouraging students to explore emerging technologies like AI, ML, and IoT while maintaining strong fundamentals in computer science principles."
              </p>
              <div className="mt-8 flex justify-center gap-8 text-center">
                <div className="group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition duration-300">500+</div>
                  <p className="text-gray-600 font-medium">Students Mentored</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition duration-300">21</div>
                  <p className="text-gray-600 font-medium">Research Publications</p>
                </div>
                <div className="group">
                  <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition duration-300">16+</div>
                  <p className="text-gray-600 font-medium">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Projects */}
      <section id="research" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Research Contributions</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge research in bio-computational models, machine learning, and healthcare AI applications.
            </p>
          </div>
          
          {/* Bio-computational Model Research */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src="/image/img4.png" 
                  alt="Bio-computational Research"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-12">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">01 / ONGOING RESEARCH</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">Bio-computational Model for Dengue Gene Analysis</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Developed innovative computational models for mining dengue gene sequences using association rule mining and context-free grammars. This research has practical implications for disease prediction and treatment.
                </p>
                <div className="space-y-3">
                  {['Patent Filed (5466/CHE/2015)', 'UGC Minor Research Project (₹1,60,000)', 'Multiple Journal Publications'].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group/skill">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover/skill:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Deep Learning Applications */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden group hover:shadow-blue-200/50 transition duration-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 order-2 lg:order-1">
                <p className="text-sm text-gray-500 mb-2 font-semibold tracking-wide">02 / RECENT PUBLICATIONS</p>
                <h4 className="text-3xl font-bold text-gray-900 mb-6">AI-Powered Healthcare Solutions</h4>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Recent work focuses on deep learning applications for medical diagnosis, including skin cancer detection, cardiac arrest prediction, and automated lesion detection in mammography using advanced neural networks.
                </p>
                <div className="space-y-3">
                  {['SCI Q1 Journal Publications', 'IEEE Conference Papers', 'Healthcare AI Applications'].map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 group/skill">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full group-hover/skill:scale-125 transition duration-300"></div>
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden order-1 lg:order-2">
                <img 
                  src="/image/img3.png" 
                  alt="AI Healthcare"
                  className="w-full h-96 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievement" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Recognition & Awards</h3>
            <p className="text-xl text-gray-600">Testimonials from colleagues and collaborators</p>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-blue-50 group"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-blue-50 group"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-blue-600" />
              </button>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="flex items-start gap-8 flex-col sm:flex-row">
                <div className="relative group mx-auto sm:mx-0">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="relative w-20 h-20 rounded-full object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-6 font-semibold">
                    {testimonials[currentTestimonial].type}
                  </p>
                  <div className="relative">
                    <div className="text-8xl text-blue-200 font-serif absolute -top-4 -left-4">"</div>
                    <p className="text-gray-600 italic leading-relaxed text-lg relative z-10 pl-8">
                      {testimonials[currentTestimonial].text}
                    </p>
                    <div className="text-8xl text-blue-200 font-serif absolute -bottom-8 right-0">"</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Achievements Grid */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Gold Medalist",
                  description: "M.C.A. with 88.10% marks",
                  color: "from-yellow-400 to-yellow-600"
                },
                {
                  icon: FileText,
                  title: "Patent Filed",
                  description: "Bio-computational model innovation",
                  color: "from-blue-400 to-blue-600"
                },
                {
                  icon: BookOpen,
                  title: "21+ Publications",
                  description: "SCI journals & IEEE conferences",
                  color: "from-emerald-400 to-emerald-600"
                },
                {
                  icon: Users,
                  title: "UGC Grant",
                  description: "₹1,60,000 minor research project",
                  color: "from-purple-400 to-purple-600"
                }
              ].map((achievement, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg`}>
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                    {achievement.title}
                  </h5>
                  <p className="text-gray-600 font-medium">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <p className="text-xl text-gray-700">Get in touch for research collaborations and academic discussions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Mail,
                label: "EMAIL –",
                value: "mastersvksmca@gmail.com",
                href: "mailto:mastersvksmca@gmail.com"
              },
              {
                icon: Phone,
                label: "MOBILE –",
                value: "+91 9442666425",
                href: "tel:+919442666425"
              },
              {
                icon: BookOpen,
                label: "INSTITUTION –",
                value: "Kalasalingam Academy of Research and Education",
                href: "#"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition duration-500 hover:-translate-y-2 block"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition duration-500 shadow-lg">
                  <contact.icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">
                  {contact.label}
                </p>
                <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition duration-300">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          {/* Address Information */}
          <div className="mt-16 bg-white rounded-3xl p-12 shadow-2xl text-center">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Office Address</h4>
            <div className="space-y-2 text-gray-600">
              <p className="font-semibold">School of Computing</p>
              <p>Kalasalingam Academy of Research and Education</p>
              <p>Anand Nagar, Krishnankoil – 626 126</p>
              <p>Tamil Nadu, India</p>
            </div>
            <div className="mt-8 space-y-2 text-gray-600">
              <p className="font-semibold">Residential Address</p>
              <p>Door No: 871, Nehru Road</p>
              <p>Parasakthi Colony, Sivakasi – 626123</p>
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8 flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center rounded-lg shadow-lg">
                <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Dr. T. Marimuthu</h4>
                <p className="text-sm text-gray-600">Computer Science & Engineering</p>
              </div>
            </div>
            
            <div className="flex gap-4">
               {[Mail, Phone, Linkedin].map((Icon, index) => (
    Icon === Linkedin ? (
      <a
        key={index}
        href="https://www.linkedin.com/in/dr-t-marimuthu-cse-4a9284281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition duration-300 cursor-pointer group"
      >
             <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition duration-300" />
                   </a>
                ) : (
                <div
                key={index}
                className="w-12 h-12 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition duration-300 cursor-pointer group"
                >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition duration-300" />
            </div>
          )
          ))}

            </div>
          </div>
          
          <div className="flex justify-between items-center text-sm text-gray-500 pt-8 border-t border-gray-200">
            <span>© 2024 Dr. T. Marimuthu. All rights reserved.</span>
            <span>Research • Innovation • Excellence</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
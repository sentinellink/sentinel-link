import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Sentinel Link | Penetration Testing & Vulnerability Assessment</title>
        <meta name="description" content="Comprehensive Penetration Testing and Vulnerability Assessment services for businesses across various sectors." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Sentinel Link" className="w-10 h-10 mr-2" />
            <span className="font-bold text-xl">Sentinel Link</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#objectives" className="hover:text-blue-400 transition">Objectives</a>
            <a href="#benefits" className="hover:text-blue-400 transition">Benefits</a>
            <a href="#why-us" className="hover:text-blue-400 transition">Why Us</a>
            <a href="https://sentinellink.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">Blog</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`}>
          <div className="flex flex-col space-y-3">
            <a href="#services" className="hover:text-blue-400 transition py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#objectives" className="hover:text-blue-400 transition py-2" onClick={() => setIsMenuOpen(false)}>Objectives</a>
            <a href="#benefits" className="hover:text-blue-400 transition py-2" onClick={() => setIsMenuOpen(false)}>Benefits</a>
            <a href="#why-us" className="hover:text-blue-400 transition py-2" onClick={() => setIsMenuOpen(false)}>Why Us</a>
            <a href="https://sentinellink.substack.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition py-2">Blog</a>
            <a href="#contact" className="hover:text-blue-400 transition py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Securing Your Digital Frontier
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Comprehensive Penetration Testing and Vulnerability Assessment services tailored to meet the security needs of businesses across various sectors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#investment" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition text-center"
                >
                  Request Security Assessment
                </a>
                <a href="#services" className="border border-blue-500 text-blue-400 hover:bg-blue-900/30 font-medium py-3 px-6 rounded-lg transition text-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
              <div className="relative bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-blue-400 font-bold text-2xl">100%</div>
                    <div className="text-gray-400">Security Coverage</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-blue-400 font-bold text-2xl">24/7</div>
                    <div className="text-gray-400">Monitoring</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-blue-400 font-bold text-2xl">3-6</div>
                    <div className="text-gray-400">Week Engagement</div>
                  </div>
                  <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-blue-400 font-bold text-2xl">A-Z</div>
                    <div className="text-gray-400">Security Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Penetration Testing</h3>
              <p className="text-gray-400">
                Simulate real-world cyber attacks to identify vulnerabilities in your systems before malicious actors can exploit them. Our experts use the same techniques as attackers to find weaknesses in your defenses.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-400">
                Comprehensive evaluation of your IT infrastructure, applications, and networks to identify security weaknesses. We provide detailed analysis and prioritized recommendations to strengthen your security posture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section id="objectives" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Objectives</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-sm font-bold">1</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Assess Security Posture</h3>
                <p className="text-gray-400">
                  Evaluate the security of your IT infrastructure, applications, and networks to understand your current defensive capabilities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-sm font-bold">2</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Identify Vulnerabilities</h3>
                <p className="text-gray-400">
                  Discover security weaknesses that could be exploited by malicious actors to compromise your systems.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-sm font-bold">3</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Simulate Real-World Attacks</h3>
                <p className="text-gray-400">
                  Test your security measures against realistic attack scenarios to evaluate their effectiveness against actual threats.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-sm font-bold">4</span>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold mb-2">Provide Mitigation Roadmap</h3>
                <p className="text-gray-400">
                  Deliver a detailed plan to address identified risks and enhance your overall security posture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Proactive Security</h3>
              <p className="text-gray-400">
                Identify and fix security weaknesses before they can be exploited by attackers, preventing potential breaches.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-gray-400">
                Meet regulatory requirements for security assessments, ensuring your business remains compliant with industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Enhanced Trust</h3>
              <p className="text-gray-400">
                Build customer and partner trust by demonstrating your commitment to cybersecurity and protecting sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Cutting-Edge Tools and Methodologies</h3>
                <p className="text-gray-400 mb-6">
                  We leverage the latest security tools and proven methodologies to provide a thorough and actionable analysis of your security landscape. Our team stays updated with the latest threats and defense techniques to ensure your organization is protected against emerging vulnerabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">Advanced Penetration Testing</span>
                  <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">Vulnerability Scanning</span>
                  <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">Risk Assessment</span>
                  <span className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm">Security Auditing</span>
                </div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2">Our Timeline</h4>
                  <p className="text-gray-400">Our typical engagement spans <span className="text-blue-400 font-bold">3-6 weeks</span>, depending on the scope of work and complexity of your systems.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Planning and Scoping</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Security Testing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Analysis and Reporting</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Remediation Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Investment</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8 md:p-12 max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Tailored Pricing for Your Security Needs</h3>
              <p className="text-gray-400">
                Our services are priced based on the scope of the assessment and the size of your environment. A detailed pricing breakdown will be provided upon finalizing the project scope.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
                <div className="text-blue-400 font-bold text-2xl mb-2">Basic</div>
                <div className="text-gray-400 mb-4">For small businesses</div>
                <div className="text-gray-500 text-sm">Starting from</div>
                <div className="text-2xl font-bold mt-1">$5,000</div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-blue-500 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">Popular</div>
                <div className="text-blue-400 font-bold text-2xl mb-2">Professional</div>
                <div className="text-gray-400 mb-4">For medium businesses</div>
                <div className="text-gray-500 text-sm">Starting from</div>
                <div className="text-2xl font-bold mt-1">$12,000</div>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 text-center">
                <div className="text-blue-400 font-bold text-2xl mb-2">Enterprise</div>
                <div className="text-gray-400 mb-4">For large organizations</div>
                <div className="text-gray-500 text-sm">Starting from</div>
                <div className="text-2xl font-bold mt-1">$25,000</div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://calendly.com/stillbigjosh/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition inline-block"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Engineers Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Our founding engineers have served notable companies, bringing extensive experience and expertise to protect your business.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex items-center justify-center h-32">
              <span className="font-bold text-lg">Flutterwave</span>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex items-center justify-center h-32">
              <span className="font-bold text-lg">PiggyVest</span>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex items-center justify-center h-32">
              <span className="font-bold text-lg">Paga</span>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex items-center justify-center h-32">
              <span className="font-bold text-lg">Bet9ja</span>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 flex items-center justify-center h-32">
              <span className="font-bold text-lg">+ Others</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              For further inquiries or to schedule a consultation, please reach out to us through our social channels or book a security assessment.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8 md:p-12">
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
                <a 
                  href="https://x.com/SentinelLinkHQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 rounded-lg p-4 transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                  <span>Follow us on X</span>
                </a>
                
                <a 
                  href="https://instagram.com/SentinelLink" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700 rounded-lg p-4 transition"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                  <span>Follow us on Instagram</span>
                </a>
              </div>
              
              <div className="text-center">
                <a 
                  href="#investment"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition inline-block"
                >
                  Request Security Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <img src="/logo.png" alt="Sentinel Link" className="w-10 h-10 mr-2" />
              <span className="font-bold text-xl">Sentinel Link</span>
            </div>
            <div className="text-gray-500 text-sm text-center">
              © {new Date().getFullYear()} Sentinel Link. All rights reserved.<br />
              Business Registration: 1856748
            </div>
            <div className="flex space-x-4 mt-6 md:mt-0">
              <a href="https://x.com/SentinelLinkHQ" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://instagram.com/SentinelLink" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

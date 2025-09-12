import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Blog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('articles');
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle navigation to home page sections
  const navigateToHomeSection = (sectionId) => {
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
    closeMenu();
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Sentinel Link | Security Resources</title>
        <meta name="description" content="Security articles, checklists, and resources from Sentinel Link cybersecurity experts." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 sticky top-0 bg-gray-900/90 backdrop-blur-sm z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Sentinel Link" className="w-10 h-10 mr-2" />
            <span className="font-bold text-xl">Sentinel Link</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => navigateToHomeSection('')} 
              className="hover:text-blue-400 transition"
            >
              Home
            </button>
            <button 
              onClick={() => navigateToHomeSection('services')} 
              className="hover:text-blue-400 transition"
            >
              Services
            </button>
            <button 
              onClick={() => navigateToHomeSection('objectives')} 
              className="hover:text-blue-400 transition"
            >
              Objectives
            </button>
            <button 
              onClick={() => navigateToHomeSection('benefits')} 
              className="hover:text-blue-400 transition"
            >
              Benefits
            </button>
            <button 
              onClick={() => navigateToHomeSection('why-us')} 
              className="hover:text-blue-400 transition"
            >
              Why Us
            </button>
            <button 
              onClick={() => navigateToHomeSection('investment')} 
              className="hover:text-blue-400 transition"
            >
              Pricing
            </button>
            <button 
              onClick={() => navigateToHomeSection('contact')} 
              className="hover:text-blue-400 transition"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4 pb-4`} aria-label="Mobile navigation">
          <div className="flex flex-col space-y-3">
            <button 
              onClick={() => navigateToHomeSection('')} 
              className="hover:text-blue-400 transition py-2 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => navigateToHomeSection('services')} 
              className="hover:text-blue-400 transition py-2 text-left"
            >
              Services
            </button>
            <button 
              onClick={() => navigateToHomeSection('objectives')} 
              className="hover:text-blue-400 transition py-2 text-left"
            >
              Objectives
            </button>
            <button 
              onClick={() => navigateToHomeSection('benefits')} 
              className="hover:text-blue-400 transition py-2 text-left"
            >
              Benefits
            </button>
            <button 
              onClick={() => navigateToHomeSection('why-us')} 
              className="hover:text-blue-400 transition py-2 text-left"
            >
              Why Us
            </button>
            <button 
              onClick={() => navigateToHomeSection('investment')} 
              className="hover:text-blue-400 transition py-2 text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => navigateToHomeSection('contact')} 
              className="hover:text-blue-400 transition py-2 text-left"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Security Resources
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Expert insights, checklists, and resources to help you strengthen your security posture
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#articles" 
              className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === 'articles' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('articles');
                document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Security Articles
            </a>
            <a 
              href="#checklists" 
              className={`px-6 py-3 rounded-lg font-medium transition ${activeTab === 'checklists' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
              onClick={(e) => {
                e.preventDefault();
                setActiveTab('checklists');
                document.getElementById('checklists').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Security Checklists
            </a>
          </div>
        </div>
      </section>

      {/* Security Articles Section */}
      <section id="articles" className="py-20 px-6 bg-gray-800/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Articles</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              In-depth analysis of current threats, vulnerabilities, and defense strategies
            </p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8">
            <div className="substack-post-embed">
              <p lang="en">The Chatbot Trap: How a Simple GitHub Hack Unleashed Chaos on Salesforce Users by Sentinel Link</p>
              <p></p>
              <a data-post-link href="https://sentinellink.substack.com/p/the-chatbot-trap-how-a-simple-github">Read on Substack</a>
            </div>
            <script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://sentinellink.substack.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Security Checklists Section */}
      <section id="checklists" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Checklists</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Practical checklists to help you implement essential security measures
            </p>
          </div>
          
          <div className="space-y-8">
            {/* First Note */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8">
              <div className="substack-post-embed">
                <p lang="en"></p>
                <p> - Sentinel Link</p>
                <a data-comment-link href="https://substack.com/@sentinellink/note/c-154955547">Read on Substack</a>
              </div>
              <script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>
            </div>
            
            {/* Second Note */}
            <div className="bg-gray-900/50 rounded-xl border border-gray-700 p-8">
              <div className="substack-post-embed">
                <p lang="en"></p>
                <p> - Sentinel Link</p>
                <a data-comment-link href="https://substack.com/profile/13194942-sentinel-link/note/c-155199891">Read on Substack</a>
              </div>
              <script async src="https://substack.com/embedjs/embed.js" charset="utf-8"></script>
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
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-green-400 text-sm">This site is secured by Sentinel Link</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
                <span>SSL Encrypted</span>
                <span>•</span>
                <span>Daily Security Scans</span>
                <span>•</span>
                <span>GDPR Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

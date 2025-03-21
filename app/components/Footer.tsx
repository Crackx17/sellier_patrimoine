
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="#" className="inline-block mb-6">
              <span className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Essence
              </span>
            </a>
            <p className="text-foreground/70 mb-6 max-w-xs">
              Elevating digital experiences through thoughtful design and meticulous attention to detail.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={`Visit our ${social}`}
                >
                  <i className={`ri-${social}-fill`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Features', 'About', 'Contact', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'Tutorials', 'Support', 'FAQ', 'Community'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Subscribe</h3>
            <p className="text-foreground/70 mb-4">
              Stay updated with our latest features and releases.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-l-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Essence. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

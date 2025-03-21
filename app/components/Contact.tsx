
import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import CustomButton from './ui/CustomButton';
import FadeIn from './animations/FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="inline-flex items-center px-3 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
              Get in Touch
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Let's start a conversation
            </h2>
            <p className="text-lg text-foreground/70">
              Have questions or want to learn more? We're here to help you get started.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <FadeIn delay={100} className="col-span-1 lg:col-span-2">
              <div className="bg-background rounded-2xl p-8 shadow-sm border border-border/50">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="name">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <CustomButton className="w-full sm:w-auto" icon={<Send className="h-4 w-4" />}>
                    Send Message
                  </CustomButton>
                </form>
              </div>
            </FadeIn>
            
            <FadeIn delay={300} className="col-span-1">
              <div className="bg-background rounded-2xl p-8 h-full shadow-sm border border-border/50">
                <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Email</h4>
                      <p className="text-foreground">contact@essence.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Office</h4>
                      <p className="text-foreground">123 Design Avenue, Creative District, 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Phone</h4>
                      <p className="text-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['twitter', 'instagram', 'linkedin', 'github'].map((social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-white transition-all duration-200"
                        aria-label={`Visit our ${social}`}
                      >
                        <i className={`ri-${social}-fill`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

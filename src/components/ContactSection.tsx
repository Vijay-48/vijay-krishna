import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    console.log('Form submitted:', formData);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '305ff8ba-966c-42f5-b9b7-b6486ba47038',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          botcheck: false
        }),
      });

      const result = await response.json();
      
      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log(response);
        toast({
          title: "Error",
          description: result.message || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "Error",
        description: "Something went wrong! Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white border-t border-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Ready to collaborate on innovative AI solutions? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    📧
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Email</h4>
                    <p className="text-gray-300">nameisvijju001@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    📱
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Phone</h4>
                    <p className="text-gray-300">+91 7993115215</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Location</h4>
                    <p className="text-gray-300">Hyderabad, Telangana</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/Vijay-48"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all duration-300 hover:shadow-lg"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/vijay-krishna-rachamalla-7baa07307/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-cyan-300">Send a Message</h3>
                
                <div className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={4}
                      className="bg-gray-800/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 border-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-500">
            © 2024 Vijay Krishna Rachamalla. Built with passion for AI and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
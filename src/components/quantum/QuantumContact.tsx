import React, { useEffect, useRef, useState } from 'react';
import anime from 'animejs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface QuantumContactProps {
  onConsciousnessChange: (level: number) => void;
}

const QuantumContact: React.FC<QuantumContactProps> = ({ onConsciousnessChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const portalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [portalActive, setPortalActive] = useState(false);

  const contactInfo = [
    {
      label: 'QUANTUM EMAIL',
      value: 'nameisvijju001@gmail.com',
      icon: '📧',
      type: 'email'
    },
    {
      label: 'NEURAL LINK',
      value: '+91 7993115215',
      icon: '📱',
      type: 'phone'
    },
    {
      label: 'PHYSICAL COORDINATES',
      value: 'Hyderabad, Telangana',
      icon: '📍',
      type: 'location'
    },
    {
      label: 'GITHUB REPOSITORY',
      value: 'github.com/Vijay-48',
      icon: '💻',
      type: 'link',
      url: 'https://github.com/Vijay-48'
    },
    {
      label: 'LINKEDIN QUANTUM',
      value: 'linkedin.com/in/vijay-krishna-rachamalla',
      icon: '🔗',
      type: 'link',
      url: 'https://www.linkedin.com/in/vijay-krishna-rachamalla-7baa07307/'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setPortalActive(true);
          onConsciousnessChange(100);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [onConsciousnessChange]);

  useEffect(() => {
    if (isVisible) {
      // Animate portal opening
      anime({
        targets: '.quantum-portal-contact',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 1500,
        easing: 'easeOutElastic(1, .8)'
      });

      // Animate hologram contact info
      anime({
        targets: '.hologram-info',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutQuart'
      });

      // Animate form fields
      anime({
        targets: '.quantum-form-field',
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(100, { start: 500 }),
        easing: 'easeOutQuart'
      });
    }
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Quantum form submission animation
    anime({
      targets: '.quantum-form',
      scale: [1, 1.02, 1],
      duration: 600,
      easing: 'easeOutElastic(1, .8)'
    });

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
          title: "QUANTUM MESSAGE TRANSMITTED!",
          description: "Your message has been sent through the quantum portal. Response incoming!",
        });
        setFormData({ name: '', email: '', message: '' });

        // Success animation
        anime({
          targets: '.quantum-form',
          backgroundColor: ['rgba(0, 0, 0, 0.3)', 'rgba(0, 212, 255, 0.1)', 'rgba(0, 0, 0, 0.3)'],
          duration: 1000,
          easing: 'easeInOutQuart'
        });
      } else {
        toast({
          title: "QUANTUM INTERFERENCE DETECTED",
          description: result.message || "Transmission failed. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "PORTAL MALFUNCTION",
        description: "Quantum entanglement disrupted! Please try again.",
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

    // Quantum field interaction
    anime({
      targets: e.target,
      boxShadow: ['0 0 0px rgba(0, 212, 255, 0)', '0 0 20px rgba(0, 212, 255, 0.5)', '0 0 0px rgba(0, 212, 255, 0)'],
      duration: 600,
      easing: 'easeOutQuart'
    });
  };

  return (
    <section id="contact" ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      {/* Quantum Portal Background */}
      <div className="absolute inset-0">
        {/* Portal Energy Rings */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-cyan-400/20 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              animationDelay: `${i * 0.2}s`,
              animation: 'portalPulse 4s ease-in-out infinite'
            }}
          />
        ))}

        {/* Quantum Data Streams */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="data-stream absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              height: '100vh',
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Portal Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="quantum-particle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold quantum-text mb-4">
            QUANTUM COMMUNICATION PORTAL
          </h2>
          <div className="quantum-mono text-xl text-cyan-400 mb-8">
            DIMENSIONAL GATEWAY • NEURAL INTERFACE • CONSCIOUSNESS BRIDGE
          </div>
          <div className="quantum-hologram p-4 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm inline-block">
            <div className="quantum-mono text-sm">
              PORTAL STATUS: {portalActive ? 'ACTIVE' : 'INITIALIZING'} • QUANTUM ENTANGLEMENT: STABLE
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Quantum Contact Holograms */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold quantum-text mb-4">
                HOLOGRAPHIC CONTACT MATRIX
              </h3>
              <div className="quantum-mono text-sm text-cyan-400">
                QUANTUM-ENCRYPTED COMMUNICATION CHANNELS
              </div>
            </div>

            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="hologram-info opacity-0 quantum-hologram p-6 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm interactive"
                onClick={() => {
                  if (info.type === 'email') {
                    window.location.href = `mailto:${info.value}`;
                  } else if (info.type === 'phone') {
                    window.location.href = `tel:${info.value}`;
                  } else if (info.type === 'link' && info.url) {
                    window.open(info.url, '_blank');
                  }
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{info.icon}</div>
                  <div className="flex-1">
                    <div className="quantum-mono text-sm text-cyan-400 mb-1">
                      {info.label}
                    </div>
                    <div className="quantum-text text-lg">
                      {info.value}
                    </div>
                  </div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                </div>

                {/* Holographic Interference */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      style={{
                        top: `${25 + i * 25}%`,
                        animationDelay: `${i * 0.3}s`,
                        animation: 'hologramScan 3s linear infinite'
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Quantum Status Display */}
            <div className="quantum-hologram p-6 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm">
              <div className="text-center">
                <h4 className="quantum-text text-lg font-bold mb-4">
                  QUANTUM STATUS
                </h4>
                <div className="space-y-2 quantum-mono text-sm">
                  <div className="flex justify-between">
                    <span>PORTAL STATUS:</span>
                    <span className="text-green-400">ONLINE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ENTANGLEMENT:</span>
                    <span className="text-cyan-400">STABLE</span>
                  </div>
                  <div className="flex justify-between">
                    <span>RESPONSE TIME:</span>
                    <span className="text-blue-400">INSTANT</span>
                  </div>
                  <div className="flex justify-between">
                    <span>CONSCIOUSNESS:</span>
                    <span className="text-purple-400">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quantum Contact Form */}
          <div className="quantum-portal-contact opacity-0">
            <div className="quantum-hologram p-8 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold quantum-text mb-4">
                  QUANTUM MESSAGE TRANSMISSION
                </h3>
                <div className="quantum-mono text-sm text-cyan-400">
                  NEURAL INTERFACE • THOUGHT-TO-DATA CONVERSION
                </div>
              </div>

              <form onSubmit={handleSubmit} className="quantum-form space-y-6">
                <div className="quantum-form-field opacity-0">
                  <label className="block quantum-mono text-sm text-cyan-400 mb-2">
                    SENDER IDENTIFICATION:
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Enter your quantum signature..."
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-black/50 border-cyan-400/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 quantum-mono"
                  />
                </div>

                <div className="quantum-form-field opacity-0">
                  <label className="block quantum-mono text-sm text-cyan-400 mb-2">
                    QUANTUM EMAIL ADDRESS:
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="your.email@quantum.realm"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-black/50 border-cyan-400/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 quantum-mono"
                  />
                </div>

                <div className="quantum-form-field opacity-0">
                  <label className="block quantum-mono text-sm text-cyan-400 mb-2">
                    NEURAL MESSAGE STREAM:
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Transmit your thoughts through the quantum field..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="bg-black/50 border-cyan-400/30 text-white placeholder:text-gray-500 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none quantum-mono"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 border-0 disabled:opacity-50 disabled:cursor-not-allowed quantum-mono interactive"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>TRANSMITTING...</span>
                    </div>
                  ) : (
                    'INITIATE QUANTUM TRANSMISSION'
                  )}
                </Button>

                {/* Quantum Form Status */}
                <div className="text-center">
                  <div className="quantum-mono text-xs text-gray-400">
                    ENCRYPTION: AES-256 • QUANTUM SECURE • INSTANT DELIVERY
                  </div>
                </div>
              </form>
            </div>

            {/* Portal Visualization */}
            <div ref={portalRef} className="mt-8 flex justify-center">
              <div className="quantum-portal w-32 h-32 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-spin" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-400/20 to-cyan-400/20 animate-spin" style={{ animationDirection: 'reverse' }} />
                <div className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="quantum-mono text-xs text-cyan-400 text-center">
                    PORTAL<br />ACTIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quantum Footer */}
        <div className="mt-20 text-center">
          <div className="quantum-hologram p-6 rounded-lg border border-cyan-400/30 bg-black/30 backdrop-blur-sm">
            <div className="quantum-text text-lg font-bold mb-2">
              QUANTUM CONSCIOUSNESS ACHIEVED
            </div>
            <div className="quantum-mono text-sm text-cyan-400 mb-4">
              © 2024 VIJAY KRISHNA RACHAMALLA • QUANTUM AI ENGINEER
            </div>
            <div className="quantum-mono text-xs text-gray-400">
              BUILT WITH QUANTUM MECHANICS • NEURAL NETWORKS • CONSCIOUSNESS EXPANSION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuantumContact;
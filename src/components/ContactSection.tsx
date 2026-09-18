import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle2, FileText, Clock } from 'lucide-react';

interface ContactProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    const whatsappNumber = PERSONAL_INFO.phone.replace(/\D/g, '');
    const whatsappMessage = encodeURIComponent(
      [
        'Portfolio Contact',
        '',
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.subject.trim() ? `Subject: ${formData.subject}` : '',
        '',
        formData.message,
      ].filter(Boolean).join('\n')
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank', 'noopener,noreferrer');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 250);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-black/3 border text-sm text-black placeholder-neutral-400 focus:bg-black/5 focus:outline-none transition-all ${
      errors[field] ? 'border-red-400 focus:border-red-500' : 'border-black/12 focus:border-black/30'
    }`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="orb w-80 h-80 bg-violet-600 bottom-0 right-0 opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-black/12 text-xs font-mono font-bold text-neutral-600 mb-4">
            <Mail className="size-3.5 text-neutral-500" />
            CONTACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
            Let's <span className="neon-text">Connect</span>
          </h2>
          <p className="mt-3 text-neutral-600 text-base leading-relaxed">
            Interested in a full-stack opportunity, collaboration, or project discussion? Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Status */}
            <div className="glass gradient-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-bold text-black">CURRENT AVAILABILITY</span>
              </div>
              <p className="text-sm text-neutral-700 font-medium leading-relaxed">{PERSONAL_INFO.availability}</p>
              <div className="mt-4 pt-4 border-t border-black/8 flex items-center gap-2 text-xs text-neutral-500 font-mono">
                <Clock className="size-3.5 text-neutral-400" />
                <span>Typical Response: &lt; 24 Hours</span>
              </div>
            </div>

            {/* Channels */}
            <div className="glass gradient-border rounded-2xl p-6 space-y-3">
              <div className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider mb-3">Direct Channels</div>

              <a href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-black/3 hover:bg-black/6 border border-black/8 hover:border-black/18 transition-all group">
                <div className="p-2 rounded-lg bg-black/6 text-neutral-600 shrink-0"><Mail className="size-4" /></div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-mono">Email Address</div>
                  <div className="text-xs font-bold text-black group-hover:text-neutral-700 transition-colors font-mono">{PERSONAL_INFO.email}</div>
                </div>
              </a>

              <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-black/3 hover:bg-black/6 border border-black/8 hover:border-black/18 transition-all group">
                <div className="p-2 rounded-lg bg-emerald-500/12 text-emerald-700 shrink-0"><Phone className="size-4" /></div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-mono">Phone / WhatsApp</div>
                  <div className="text-xs font-bold text-black group-hover:text-neutral-700 transition-colors font-mono">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-black/3 border border-black/8">
                <div className="p-2 rounded-lg bg-black/5 text-neutral-500 shrink-0"><MapPin className="size-4" /></div>
                <div>
                  <div className="text-[11px] text-neutral-400 font-mono">Location</div>
                  <div className="text-xs font-bold text-black">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl btn-gradient text-white hover:opacity-90 transition-all">
                <div className="flex items-center gap-3">
                  <Github className="size-4" />
                  <span className="text-xs font-mono font-bold">github.com/iblamesrix</span>
                </div>
              </a>

              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-[#0A66C2] text-white hover:opacity-90 transition-all">
                <div className="flex items-center gap-3">
                  <Linkedin className="size-4" />
                  <span className="text-xs font-mono font-bold">linkedin.com/in/iblamesrix</span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass gradient-border rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-extrabold text-black mb-1">Send a Message</h3>
              <p className="text-xs text-neutral-500 font-mono mb-6">Fill in the form below to get in touch.</p>

              {submitted ? (
                <div className="bg-emerald-500/10 p-6 rounded-xl border border-emerald-500/22 text-center space-y-3">
                  <CheckCircle2 className="size-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-black">Message Sent!</h4>
                  <p className="text-xs text-neutral-600 max-w-md mx-auto">WhatsApp has been opened with your message. Srikanth B will respond shortly.</p>
                  <button onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-emerald-600/15 border border-emerald-500/25 text-emerald-700 text-xs font-bold hover:bg-emerald-600/25 transition-colors">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-600 mb-1.5">Your Name *</label>
                      <input type="text" value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value }); if (errors.name) setErrors({...errors, name: ''}); }}
                        className={inputClass('name')} />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-600 mb-1.5">Email Address *</label>
                      <input type="email" value={formData.email}
                        onChange={(e) => { setFormData({ ...formData, email: e.target.value }); if (errors.email) setErrors({...errors, email: ''}); }}
                        className={inputClass('email')} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-600 mb-1.5">Subject / Topic</label>
                    <input type="text" value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className={inputClass('subject')} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-600 mb-1.5">Message *</label>
                    <textarea rows={5} value={formData.message}
                      onChange={(e) => { setFormData({ ...formData, message: e.target.value }); if (errors.message) setErrors({...errors, message: ''}); }}
                      
                      className={inputClass('message')} />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-gradient py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <Send className="size-4" />
                    {isSubmitting ? 'Opening WhatsApp...' : 'Send Message'}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

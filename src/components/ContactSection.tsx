import React, { useState } from 'react';
import { CheckCircle, Mail, MessageCircle, Send, Share2, Sparkles, UserCheck } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Simulate sending delay
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-white overflow-hidden">
      {/* Background soft blurs */}
      <div className="absolute top-10 left-1/3 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-[#5B3A82] bg-purple-50 border border-purple-200/70 mb-4">
            <MessageCircle className="w-4 h-4 text-[#E96B8A]" />
            <span>Say Hello</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#292238] tracking-tight">
            Let&apos;s Connect
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#292238]/75">
            Have something to say? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: 3 Colorful Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Card 1: Email */}
            <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-100/80 shadow-[0_4px_20px_rgba(91,58,130,0.04)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#5B3A82] shadow-xs flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5B3A82]">Email Correspondence</span>
                <h4 className="font-display font-bold text-lg text-[#292238] mt-0.5">Send a Direct Note</h4>
                <p className="text-xs sm:text-sm text-[#292238]/75 mt-1 leading-relaxed">
                  Open for academic collaborations, entrance study discussions, or warm greetings.
                </p>
                <div className="mt-2.5 inline-block text-xs font-semibold text-[#5B3A82] hover:text-[#E96B8A] transition-colors">
                  priya.aspirant@portfolio.np
                </div>
              </div>
            </div>

            {/* Card 2: Social */}
            <div className="p-6 rounded-3xl bg-pink-50/70 border border-pink-100/80 shadow-[0_4px_20px_rgba(233,107,138,0.04)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#E96B8A] shadow-xs flex items-center justify-center shrink-0">
                <Share2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E96B8A]">Social & Lifestyle</span>
                <h4 className="font-display font-bold text-lg text-[#292238] mt-0.5">Follow The Journey</h4>
                <p className="text-xs sm:text-sm text-[#292238]/75 mt-1 leading-relaxed">
                  Catch glimpses of daily study sessions, artistic styling, and cultural moments.
                </p>
                <div className="mt-2.5 inline-block text-xs font-semibold text-[#E96B8A] hover:text-[#5B3A82] transition-colors">
                  @priyakumari.jha
                </div>
              </div>
            </div>

            {/* Card 3: Professional / Academic Network */}
            <div className="p-6 rounded-3xl bg-teal-50/70 border border-teal-100/80 shadow-[0_4px_20px_rgba(85,183,173,0.04)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#55B7AD] shadow-xs flex items-center justify-center shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#55B7AD]">Professional Network</span>
                <h4 className="font-display font-bold text-lg text-[#292238] mt-0.5">LinkedIn & Future Medical Career</h4>
                <p className="text-xs sm:text-sm text-[#292238]/75 mt-1 leading-relaxed">
                  Connecting with healthcare mentors, medical students, and inspiring peers in Nepal.
                </p>
                <div className="mt-2.5 inline-block text-xs font-semibold text-[#55B7AD] hover:text-[#5B3A82] transition-colors">
                  linkedin.com/in/priya-kumari-jha
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Input Form inside Rounded White Card */}
          <div className="lg:col-span-7">
            <div
              id="contact-form-card"
              className="bg-[#FFF9F5] rounded-[32px] p-8 sm:p-10 border border-purple-100/80 shadow-[0_12px_40px_rgba(91,58,130,0.08)] relative"
            >
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E96B8A]">Direct Inquiry</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#292238] mt-1">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-[#292238]/70 mt-1">
                  Leave your thoughts or questions, and I will get back to you promptly.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-teal-200 shadow-sm animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-[#55B7AD] mx-auto flex items-center justify-center text-3xl mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-[#292238]">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-sm text-[#292238]/75 mt-2 max-w-sm mx-auto">
                    Thank you for reaching out. Your encouragement means a lot to Priya on her medical journey!
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#5B3A82] to-[#E96B8A]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#292238] mb-2"
                    >
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-purple-100 text-sm text-[#292238] placeholder-[#292238]/40 focus:outline-hidden focus:ring-2 focus:ring-[#E96B8A] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold uppercase tracking-wider text-[#292238] mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. aarav@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-purple-100 text-sm text-[#292238] placeholder-[#292238]/40 focus:outline-hidden focus:ring-2 focus:ring-[#E96B8A] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-[#292238] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Write your note, question, or encouragement..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-purple-100 text-sm text-[#292238] placeholder-[#292238]/40 focus:outline-hidden focus:ring-2 focus:ring-[#E96B8A] focus:border-transparent transition-all shadow-xs"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-full text-base font-bold text-white bg-gradient-to-r from-[#5B3A82] via-[#85459B] to-[#E96B8A] shadow-[0_8px_25px_rgba(233,107,138,0.35)] hover:shadow-[0_12px_30px_rgba(233,107,138,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75"
                  >
                    {isSending ? (
                      <>
                        <Sparkles className="w-5 h-5 animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

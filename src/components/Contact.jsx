import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, ArrowLeft, Check, Home, Building2, ChefHat, BedDouble, Briefcase, Box, MoreHorizontal, Send, Sparkles } from 'lucide-react';

const projectTypes = [
  { label: 'Residential', icon: Home, desc: 'Homes & Apartments' },
  { label: 'Commercial', icon: Building2, desc: 'Offices & Retail' },
  { label: 'Kitchen', icon: ChefHat, desc: 'Modern Kitchens' },
  { label: 'Bedroom', icon: BedDouble, desc: 'Luxurious Bedrooms' },
  { label: 'Office', icon: Briefcase, desc: 'Workspaces' },
  { label: '3D Visualization', icon: Box, desc: 'Full 3D Renders' },
  { label: 'Other', icon: MoreHorizontal, desc: 'Custom Projects' },
];

const steps = [
  { num: 1, label: 'PROJECT TYPE' },
  { num: 2, label: 'YOUR DETAILS' },
  { num: 3, label: 'YOUR VISION' },
];

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [direction, setDirection] = useState(1);
  const formRef = useRef(null);

  const validate = (step) => {
    const errs = {};
    if (step === 1 && !formData.projectType) errs.projectType = 'Please select a project type';
    if (step === 2) {
      if (!formData.name.trim()) errs.name = 'Name is required';
      if (!formData.email.trim()) errs.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email address';
    }
    if (step === 3 && !formData.message.trim()) errs.message = 'Tell us about your project';
    return errs;
  };

  const handleNext = () => {
    const errs = validate(currentStep);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(3);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setStatus('success');
      setTimeout(() => {
        setStatus(null);
        setCurrentStep(1);
        setFormData({ name: '', email: '', phone: '', projectType: '', budget: '', message: '' });
      }, 5000);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
  };

  return (
    <section id="contact" className="contact-creative-section">
      {/* Architectural Grid Background */}
      <div className="contact-arch-grid">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`v-${i}`}
            className="contact-grid-line contact-grid-line-v"
            style={{ left: `${(i + 1) * (100 / 7)}%` }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`h-${i}`}
            className="contact-grid-line contact-grid-line-h"
            style={{ top: `${(i + 1) * 20}%` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {/* Corner accents */}
        <div className="contact-corner contact-corner-tl" />
        <div className="contact-corner contact-corner-tr" />
        <div className="contact-corner contact-corner-bl" />
        <div className="contact-corner contact-corner-br" />
      </div>

      {/* Ambient light glow */}
      <div className="contact-ambient-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="contact-creative-layout">
          {/* Left Side — Info */}
          <motion.div
            className="contact-info-side"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              CONTACT US
            </motion.span>

            <div style={{ margin: '1.5rem 0 2rem' }}>
              {["LET'S CREATE", 'SOMETHING', 'BEAUTIFUL.'].map((line, i) => (
                <div key={i} style={{ overflow: 'hidden' }}>
                  <motion.div
                    className="heading-xl"
                    initial={{ y: '120%' }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.p
              className="text-body"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ maxWidth: '380px', marginBottom: '2.5rem' }}
            >
              Every great space starts with a conversation. Share your vision, and we&apos;ll bring it to life in stunning 3D.
            </motion.p>

            {/* Contact details */}
            <motion.div
              className="contact-details-list"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a href="tel:+919876543210" className="contact-detail-item" data-cursor="CALL">
                <span className="contact-detail-icon">
                  <Phone size={15} />
                </span>
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:hello@spacecraft3d.com" className="contact-detail-item" data-cursor="MAIL">
                <span className="contact-detail-icon">
                  <Mail size={15} />
                </span>
                <span>hello@spacecraft3d.com</span>
              </a>
              <span className="contact-detail-item">
                <span className="contact-detail-icon">
                  <MapPin size={15} />
                </span>
                <span>Mumbai, India</span>
              </span>

              <div className="contact-social-row">
                <a href="#" className="contact-social-link" data-cursor="OPEN">Instagram</a>
                <span className="contact-social-dot" />
                <a href="#" className="contact-social-link" data-cursor="OPEN">LinkedIn</a>
                <span className="contact-social-dot" />
                <a href="#" className="contact-social-link" data-cursor="OPEN">Behance</a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side — Form Card */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Glowing border effect */}
            <div className="contact-card-glow" />

            {/* Step Indicator */}
            <div className="contact-step-indicator">
              {steps.map((step, i) => (
                <div key={step.num} className="contact-step-wrapper">
                  <motion.div
                    className={`contact-step-dot ${currentStep >= step.num ? 'active' : ''} ${currentStep === step.num ? 'current' : ''}`}
                    animate={{
                      scale: currentStep === step.num ? 1 : 0.85,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {currentStep > step.num ? (
                      <Check size={12} strokeWidth={3} />
                    ) : (
                      <span>{step.num}</span>
                    )}
                  </motion.div>
                  <span className={`contact-step-label ${currentStep >= step.num ? 'active' : ''}`}>
                    {step.label}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="contact-step-connector">
                      <motion.div
                        className="contact-step-connector-fill"
                        animate={{ scaleX: currentStep > step.num ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Success Overlay */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="contact-success-overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="contact-success-circle"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  >
                    <Check size={32} strokeWidth={2.5} />
                  </motion.div>
                  <motion.h3
                    className="heading-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{ marginTop: '1.5rem' }}
                  >
                    Message Sent!
                  </motion.h3>
                  <motion.p
                    className="text-body"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    style={{ marginTop: '0.75rem', textAlign: 'center' }}
                  >
                    We&apos;ll get back to you within 24 hours.
                  </motion.p>
                  <motion.div
                    className="contact-success-sparkles"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="contact-sparkle"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1.2, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          delay: 0.3 + i * 0.15,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                        style={{
                          '--sparkle-angle': `${i * 60}deg`,
                          '--sparkle-distance': `${60 + (i % 3) * 20}px`,
                        }}
                      >
                        <Sparkles size={10} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form Steps */}
            <form ref={formRef} onSubmit={handleSubmit} style={{ position: 'relative', minHeight: '360px' }}>
              <AnimatePresence mode="wait" custom={direction}>
                {/* Step 1 — Project Type */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="contact-step-content"
                  >
                    <h3 className="contact-step-title">
                      What type of project do you have in mind?
                    </h3>
                    <p className="contact-step-subtitle">
                      Select the category that best describes your project
                    </p>

                    <div className="contact-project-grid">
                      {projectTypes.map((type, i) => {
                        const Icon = type.icon;
                        const isSelected = formData.projectType === type.label;
                        return (
                          <motion.button
                            key={type.label}
                            type="button"
                            className={`contact-project-card ${isSelected ? 'selected' : ''}`}
                            onClick={() => handleChange('projectType', type.label)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            whileHover={{ y: -4 }}
                            whileTap={{ scale: 0.97 }}
                            data-cursor="SELECT"
                          >
                            <div className="contact-project-card-icon">
                              <Icon size={20} strokeWidth={1.5} />
                            </div>
                            <span className="contact-project-card-label">{type.label}</span>
                            <span className="contact-project-card-desc">{type.desc}</span>
                            {isSelected && (
                              <motion.div
                                className="contact-project-card-check"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                              >
                                <Check size={10} strokeWidth={3} />
                              </motion.div>
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                    {errors.projectType && (
                      <motion.span
                        className="form-error"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: 'block', marginTop: '0.75rem', color: '#e74c3c' }}
                      >
                        {errors.projectType}
                      </motion.span>
                    )}
                  </motion.div>
                )}

                {/* Step 2 — Details */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="contact-step-content"
                  >
                    <h3 className="contact-step-title">Tell us about yourself</h3>
                    <p className="contact-step-subtitle">
                      So we know who to get back to
                    </p>

                    <div className="contact-fields-stack">
                      <div className="contact-field-group">
                        <label className="contact-field-label">Your Name *</label>
                        <div className="contact-field-wrapper">
                          <input
                            type="text"
                            className="contact-field-input"
                            placeholder="e.g. Arjun Sharma"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                          />
                          <div className="contact-field-line" />
                          <div className="contact-field-glow" />
                        </div>
                        {errors.name && (
                          <motion.span
                            className="form-error"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ color: '#e74c3c' }}
                          >
                            {errors.name}
                          </motion.span>
                        )}
                      </div>

                      <div className="contact-field-group">
                        <label className="contact-field-label">Email Address *</label>
                        <div className="contact-field-wrapper">
                          <input
                            type="email"
                            className="contact-field-input"
                            placeholder="hello@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                          />
                          <div className="contact-field-line" />
                          <div className="contact-field-glow" />
                        </div>
                        {errors.email && (
                          <motion.span
                            className="form-error"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ color: '#e74c3c' }}
                          >
                            {errors.email}
                          </motion.span>
                        )}
                      </div>

                      <div className="contact-field-group">
                        <label className="contact-field-label">Phone Number</label>
                        <div className="contact-field-wrapper">
                          <input
                            type="tel"
                            className="contact-field-input"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                          />
                          <div className="contact-field-line" />
                          <div className="contact-field-glow" />
                        </div>
                      </div>

                      <div className="contact-field-group">
                        <label className="contact-field-label">Estimated Budget</label>
                        <div className="contact-budget-chips">
                          {['₹1L - 3L', '₹3L - 5L', '₹5L - 10L', '₹10L+', 'Flexible'].map((b) => (
                            <button
                              key={b}
                              type="button"
                              className={`contact-budget-chip ${formData.budget === b ? 'selected' : ''}`}
                              onClick={() => handleChange('budget', b)}
                              data-cursor="SELECT"
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 — Vision */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="contact-step-content"
                  >
                    <h3 className="contact-step-title">Share your vision</h3>
                    <p className="contact-step-subtitle">
                      Tell us about your dream space — the more details, the better we can serve you
                    </p>

                    <div className="contact-fields-stack">
                      {/* Summary Chips */}
                      <div className="contact-summary-row">
                        {formData.projectType && (
                          <motion.span
                            className="contact-summary-chip"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                          >
                            {formData.projectType}
                          </motion.span>
                        )}
                        {formData.budget && (
                          <motion.span
                            className="contact-summary-chip"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {formData.budget}
                          </motion.span>
                        )}
                        {formData.name && (
                          <motion.span
                            className="contact-summary-chip"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {formData.name}
                          </motion.span>
                        )}
                      </div>

                      <div className="contact-field-group" style={{ flex: 1 }}>
                        <label className="contact-field-label">Project Description *</label>
                        <div className="contact-field-wrapper">
                          <textarea
                            className="contact-field-textarea"
                            placeholder="Describe your ideal space — style preferences, materials, colors, timeline, inspiration images..."
                            value={formData.message}
                            onChange={(e) => handleChange('message', e.target.value)}
                          />
                          <div className="contact-field-line" />
                          <div className="contact-field-glow" />
                        </div>
                        {errors.message && (
                          <motion.span
                            className="form-error"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            style={{ color: '#e74c3c' }}
                          >
                            {errors.message}
                          </motion.span>
                        )}
                        <span className="contact-char-count">
                          {formData.message.length} / 1000
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              {status !== 'success' && (
                <div className="contact-nav-buttons">
                  {currentStep > 1 && (
                    <motion.button
                      type="button"
                      className="contact-btn-back"
                      onClick={handleBack}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      data-cursor="BACK"
                      whileHover={{ x: -3 }}
                    >
                      <ArrowLeft size={16} />
                      <span>BACK</span>
                    </motion.button>
                  )}
                  <div style={{ flex: 1 }} />
                  {currentStep < 3 ? (
                    <motion.button
                      type="button"
                      className="contact-btn-next"
                      onClick={handleNext}
                      data-cursor="NEXT"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span>CONTINUE</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  ) : (
                    <motion.button
                      type="submit"
                      className="contact-btn-submit"
                      data-cursor="SEND"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Send size={16} />
                      <span>SEND MESSAGE</span>
                    </motion.button>
                  )}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

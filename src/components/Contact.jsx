import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionHeading from './SectionHeading';

const projectTypes = [
  'Residential',
  'Commercial',
  'Kitchen',
  'Bedroom',
  'Office',
  '3D Visualization',
  'Other',
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.message.trim()) errs.message = 'Please tell us about your project';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus(null), 3000);
    }
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--color-black-primary)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* Left Side - Dark */}
        <div style={{
          background: 'var(--color-black-deep)',
          padding: 'clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 4rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <SectionHeading
            eyebrow="CONTACT"
            heading={'LET\'S CREATE\nSOMETHING\nBEAUTIFUL.'}
          />

          <motion.p
            className="text-body"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ maxWidth: '400px', marginBottom: '3rem' }}
          >
            Have a project in mind? We&apos;d love to hear about it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <a href="tel:+919876543210" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Phone size={16} />
              +91 98765 43210
            </a>
            <a href="mailto:hello@spacecraft3d.com" className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Mail size={16} />
              hello@spacecraft3d.com
            </a>
            <span className="footer-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <MapPin size={16} />
              Mumbai, India
            </span>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem' }}>
              <a href="#" className="footer-link" data-cursor="OPEN">Instagram</a>
              <a href="#" className="footer-link" data-cursor="OPEN">LinkedIn</a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div style={{
          background: 'var(--color-warm-white)',
          padding: 'clamp(3rem, 6vw, 6rem) clamp(1.25rem, 4vw, 4rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--color-gray-soft)' }}>Your Name</label>
              <input
                className="form-input"
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--color-gray-soft)' }}>Email Address</label>
              <input
                className="form-input"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--color-gray-soft)' }}>Phone Number</label>
              <input
                className="form-input"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--color-gray-soft)' }}>Project Type</label>
              <select
                className="form-select"
                value={formData.projectType}
                onChange={(e) => handleChange('projectType', e.target.value)}
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" style={{ color: 'var(--color-gray-soft)' }}>Tell Us About Your Project</label>
              <textarea
                className="form-textarea"
                placeholder="Describe your project, requirements, timeline..."
                value={formData.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn-dark" data-cursor="SEND" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
              SEND MESSAGE
              <span className="btn-arrow">→</span>
            </button>

            {/* Status Messages */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'rgba(46, 125, 50, 0.1)',
                    border: '1px solid rgba(46, 125, 50, 0.3)',
                    color: '#2e7d32',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                  }}
                >
                  Thank you! We&apos;ll be in touch soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: 'rgba(192, 57, 43, 0.1)',
                    border: '1px solid rgba(192, 57, 43, 0.3)',
                    color: '#c0392b',
                    fontSize: '0.85rem',
                    textAlign: 'center',
                  }}
                >
                  Please fix the errors above and try again.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>

    </section>
  );
};

export default Contact;

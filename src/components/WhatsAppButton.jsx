import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';

const WHATSAPP_NUMBER = '917982981104';
const DEFAULT_MESSAGE = encodeURIComponent('Hello Black Grid Interiors, I would like to inquire about a project.');

const OfficialWhatsAppIcon = ({ size = 26, color = "currentColor", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'block' }}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.333 5.002L2 22l5.143-1.331a9.96 9.96 0 004.869 1.258h.004c5.507 0 9.99-4.478 9.99-9.985 0-2.667-1.039-5.176-2.927-7.062A9.927 9.927 0 0012.012 2zm5.827 14.195c-.244.686-1.42 1.312-1.986 1.396-.508.075-1.15.107-1.856-.117-.428-.136-.977-.318-1.68-.621-2.956-1.277-4.887-4.253-5.035-4.449-.147-.197-1.203-1.603-1.203-3.054 0-1.45.753-2.164 1.021-2.46.269-.297.587-.37.784-.37.196 0 .392.001.564.01.18.008.423-.069.663.506.245.589.837 2.038.91 2.186.074.148.123.322.025.518-.098.196-.147.318-.295.49-.147.172-.31.385-.442.516-.147.147-.301.307-.129.602.172.296.764 1.261 1.638 2.04 1.124 1.002 2.072 1.312 2.366 1.46.295.147.467.123.639-.074.172-.197.737-.859.933-1.154.196-.296.393-.246.688-.137.295.109 1.864.879 2.159 1.026.295.148.491.222.564.345.074.123.074.712-.17 1.398z" />
  </svg>
);

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleOpenWhatsApp = (msg) => {
    const message = msg ? encodeURIComponent(msg) : DEFAULT_MESSAGE;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (customMsg.trim()) {
      handleOpenWhatsApp(customMsg);
      setCustomMsg('');
    } else {
      handleOpenWhatsApp();
    }
  };

  return (
    <div className="whatsapp-widget-root">
      {/* Floating Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="whatsapp-popup-card"
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="whatsapp-card-header">
              <div className="whatsapp-avatar">
                <OfficialWhatsAppIcon size={22} color="#ffffff" />
                <span className="whatsapp-online-dot" />
              </div>
              <div className="whatsapp-header-text">
                <h4>Black Grid Interiors</h4>
                <p>Typically replies in a few minutes</p>
              </div>
              <button
                type="button"
                className="whatsapp-close-btn"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat popup"
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="whatsapp-card-body">
              <div className="whatsapp-chat-bubble">
                <p>👋 Hello! Welcome to <strong>Black Grid Interiors</strong>.</p>
                <p>How can we assist you with your 3D visualization or interior design project today?</p>
                <span className="whatsapp-chat-time">Just now</span>
              </div>
            </div>

            {/* Quick Action / Input */}
            <form onSubmit={handleFormSubmit} className="whatsapp-card-footer">
              <input
                type="text"
                className="whatsapp-input"
                placeholder="Type your message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
              />
              <button type="submit" className="whatsapp-send-btn" aria-label="Send via WhatsApp">
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <motion.button
        type="button"
        className="whatsapp-floating-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat on WhatsApp"
        data-cursor="CHAT"
      >
        <span className="whatsapp-pulse-ring" />
        {isOpen ? (
          <X size={24} />
        ) : (
          <OfficialWhatsAppIcon size={28} color="#ffffff" />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;

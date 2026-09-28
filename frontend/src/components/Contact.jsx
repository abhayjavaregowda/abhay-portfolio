import { motion } from "framer-motion";
import { useState } from "react";
import PortfolioContent from "../data/PortfolioContent";
import "../styles/Contact.css";

const EmailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const LocationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

export default function Contact() {
  const { contact } = PortfolioContent;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("Please complete your name, email, and message.");
      return;
    }

    const email = contact.info.find((item) => item.icon === "email")?.value;
    const subject = `Portfolio contact from ${formData.name.trim()}`;
    const body = `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\n${formData.message.trim()}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app is opening with your message ready to send.");
  };

  const iconFor = (icon) => (icon === "email" ? <EmailIcon /> : <LocationIcon />);

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="contact-header">
          <span className="section-tag">{contact.tag}</span>
          <h2 className="section-title">{contact.title} <span className="highlight">{contact.titleHighlight}</span></h2>
          <p className="section-subtitle">{contact.description}</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="contact-info">
            {contact.info.map((item) => {
              const content = <><span className="info-icon">{iconFor(item.icon)}</span><div><h4>{item.title}</h4><p>{item.value}</p></div></>;
              return item.href ? <a className="info-item contact-info-link" href={item.href} key={item.title}>{content}</a> : <div className="info-item" key={item.title}>{content}</div>;
            })}

            <div className="social-links">
              <h4>Connect with me</h4>
              <div className="social-grid">
                {contact.social.map((social) => (
                  <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-link" whileHover={{ scale: 1.1, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
                    <img src={social.icon} alt={social.name} className="social-icon" width="24" height="24" />
                    <span className="social-name">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder={contact.form.namePlaceholder} required autoComplete="name" /></div>
            <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder={contact.form.emailPlaceholder} required autoComplete="email" /></div>
            <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder={contact.form.messagePlaceholder} rows="5" required /></div>
            {status && <div className="status-message info">{status}</div>}
            <button type="submit" className="submit-btn"><SendIcon />{contact.form.submitText}<span className="btn-glow-effect" /></button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

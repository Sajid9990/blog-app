import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Get in Touch</h1>
        <p style={styles.subtext}>We’d love to hear from you. Reach out anytime!</p>
        <div style={styles.infoSection}>
          <div style={styles.infoItem}>
            <span style={styles.label}>📧 Email:</span>
            <span style={styles.value}>contact@mazingbytes.com</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>📞 Phone:</span>
            <span style={styles.value}>+1 (555) 123-4567</span>
          </div>
          <div style={styles.infoItem}>
            <span style={styles.label}>📍 Address:</span>
            <span style={styles.value}>123 Tech Street, Innovation City, CA 90001</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: 'linear-gradient(135deg, #f0f4ff, #e1ecff)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Segoe UI", sans-serif',
  },
  card: {
    background: '#fff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  subtext: {
    color: '#666',
    marginBottom: '30px',
    fontSize: '1rem',
  },
  infoSection: {
    textAlign: 'left',
  },
  infoItem: {
    marginBottom: '20px',
  },
  label: {
    fontWeight: '600',
    fontSize: '1.1rem',
    display: 'inline-block',
    width: '100px',
    color: '#444',
  },
  value: {
    fontSize: '1.1rem',
    color: '#000',
  },
};

export default ContactUs;

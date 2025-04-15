import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Privacy Policy</h1>
        <p style={styles.subheading}>
          Your privacy is important to us. This policy explains how we collect and use your personal data.
        </p>

        <section style={styles.section}>
          <h2 style={styles.title}>1. Information We Collect</h2>
          <p style={styles.text}>
            We may collect personal information such as your name, email address, and browsing activity. This information helps us improve your experience and tailor content to your needs.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>2. How We Use Your Information</h2>
          <p style={styles.text}>
            We use your information to provide personalized content, improve our services, and communicate with you regarding updates, newsletters, or offers.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>3. Sharing of Information</h2>
          <p style={styles.text}>
            We do not sell or rent your personal information. We may share your information with trusted third parties who help us manage our website and services. These partners are committed to protecting your privacy.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>4. Data Security</h2>
          <p style={styles.text}>
            We employ various security measures to protect your data. While no method is 100% secure, we take steps to prevent unauthorized access to your personal information.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>5. Changes to This Policy</h2>
          <p style={styles.text}>
            We may update this Privacy Policy from time to time. Any changes will be posted here with an updated revision date. Please review this page periodically to stay informed.
          </p>
        </section>

        <p style={styles.updatedText}><em>Last updated: April 15, 2025</em></p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: 'linear-gradient(to right, #f9f9f9, #e1e7ff)',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Segoe UI", sans-serif',
  },
  card: {
    background: '#ffffff',
    padding: '40px',
    borderRadius: '20px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    textAlign: 'center',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px',
    textAlign: 'center',
  },
  section: {
    marginBottom: '30px',
  },
  title: {
    fontSize: '1.6rem',
    color: '#444',
    marginBottom: '15px',
    borderBottom: '2px solid #f0f0f0',
    paddingBottom: '5px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.7',
    textAlign: 'left',
  },
  updatedText: {
    textAlign: 'center',
    color: '#999',
    fontStyle: 'italic',
    marginTop: '20px',
  },
};

export default PrivacyPolicy;

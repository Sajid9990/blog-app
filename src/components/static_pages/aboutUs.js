import React from 'react';

const AboutUs = () => {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.heading}>About MazingBytes</h1>
        <p style={styles.subheading}>
          Empowering ideas through clean code and creative design.
        </p>

        <section style={styles.section}>
          <h2 style={styles.title}>💡 Who We Are</h2>
          <p style={styles.text}>
            MazingBytes is a passionate team of developers, designers, and thinkers committed to crafting meaningful digital experiences.
            We’re all about creativity, clarity, and clean code.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>🎯 Our Mission</h2>
          <p style={styles.text}>
            To simplify technology and empower users through elegant, user-friendly solutions. We combine design thinking
            with tech expertise to bring your ideas to life.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.title}>🚀 What We Do</h2>
          <ul style={styles.list}>
            <li>✔️ Web & App Development</li>
            <li>✔️ UI/UX Design</li>
            <li>✔️ Custom Software Solutions</li>
            <li>✔️ Tech Consultation & Mentorship</li>
          </ul>
        </section>

        <p style={styles.footerText}><em>Driven by innovation. Powered by passion.</em></p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    background: 'linear-gradient(to right, #fdfbfb, #ebedee)',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Segoe UI", sans-serif',
  },
  card: {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '50px',
    maxWidth: '850px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.8rem',
    color: '#222',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '40px',
  },
  section: {
    marginBottom: '30px',
    textAlign: 'left',
  },
  title: {
    fontSize: '1.6rem',
    color: '#333',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.05rem',
    color: '#555',
    lineHeight: '1.7',
  },
  list: {
    fontSize: '1.05rem',
    color: '#444',
    lineHeight: '1.8',
    paddingLeft: '20px',
    textAlign: 'left',
  },
  footerText: {
    marginTop: '40px',
    color: '#888',
    fontStyle: 'italic',
    fontSize: '1rem',
  },
};

export default AboutUs;

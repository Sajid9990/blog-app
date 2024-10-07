import React, { useEffect } from 'react';

const createParticles = () => {
  const container = document.getElementById('particles-container');

  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * -100}vh`;
    particle.style.animationDuration = `${Math.random() * 5 + 5}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(particle);
  }
};

const ParticleBackground = () => {
  useEffect(() => {
    createParticles();
  }, []);

  return <div id="particles-container"></div>;
};

export default ParticleBackground;

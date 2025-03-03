import React from 'react';
import '../styles/Features.css';

function Features() {
  const features = [
    {
      title: 'Intelligent Element Detection',
      description: 'Automatically identifies and selects the best selectors for elements, making tests more robust.',
      icon: '🔍'
    },
    {
      title: 'Cross-Browser Testing',
      description: 'Generate tests that work across Chrome, Firefox, Safari, and Edge with Playwright integration.',
      icon: '🌐'
    },
    {
      title: 'Flutter Web Support',
      description: 'Special support for Flutter web applications with custom element detection.',
      icon: '📱'
    },
    {
      title: 'CI/CD Integration',
      description: 'Seamlessly integrate generated tests into your CI/CD pipeline for automated testing.',
      icon: '🔄'
    },
    {
      title: 'Test Recording',
      description: 'Record user interactions and automatically convert them to test code.',
      icon: '📹'
    },
    {
      title: 'Code Generation',
      description: 'Generate clean, maintainable Playwright test code with best practices.',
      icon: '💻'
    }
  ];

  return (
    <section className="features" id="features">
      <h1>Features</h1>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features; 
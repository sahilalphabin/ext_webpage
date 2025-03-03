import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'Kriti Verma',
      text: "I'm extremely impressed with TestGenX. It seamlessly integrates into VS Code and provides an efficient, hassle-free way to generate tests. My productivity has definitely seen an uptick since I started using it",
      rating: 5,

    },
    {
      name: 'Sandeep Prusty',
      text: "Absolutely love how TestGenX simplifies my testing process. Its speed and precision have made a huge difference in my productivity.",
      rating: 5,
    },
    // Add all other testimonials from the user's request here
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          {i < rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials" id="testimonials">
      <h1>User Reviews</h1>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div className={`testimonial-card`} key={index}>
              <div className="testimonial-author">{testimonial.name}</div>
              <div className="rating">{renderStars(testimonial.rating)}</div>
            <div className="testimonial-content">
              <p>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials; 
import React from 'react';

function StepCard({ number, title, description, icon, isActive, onClick ,details}) {
  return (
    <div 
      className={`step-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="step-icon">{icon}</div>
      {number < 6 && (
        <div className="timeline-connector"></div>
      )}
      <div className="step-content">
        <h3>Step {number}: {title}</h3>
        <p>{description}</p>
        <div 
          className="step-details"
          style={{ display: isActive ? 'block' : 'none' }}
        >
          <div dangerouslySetInnerHTML={{ __html: details }} />
        </div>
      </div>
      <div className="dropdown-icon">
        <i className={`fas fa-chevron-${isActive ? 'up' : 'down'}`}></i>
      </div>
    </div>
  );
}

export default React.memo(StepCard); 
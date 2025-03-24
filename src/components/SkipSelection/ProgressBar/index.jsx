import React from 'react';
import './index.css';

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <ProgressStep 
          icon={<LocationIcon />}
          label="Postcode"
          status="completed"
        />
        <ProgressLine completed />
        <ProgressStep 
          icon={<WasteIcon />}
          label="Waste Type"
          status="completed"
        />
        <ProgressLine completed />
        <ProgressStep 
          icon={<SkipIcon />}
          label="Select Skip"
          status="active"
        />
        <ProgressLine />
        <ProgressStep 
          icon={<PermitIcon />}
          label="Permit Check"
          status="pending"
        />
        <ProgressLine />
        <ProgressStep 
          icon={<CalendarIcon />}
          label="Choose Date"
          status="pending"
        />
        <ProgressLine />
        <ProgressStep 
          icon={<PaymentIcon />}
          label="Payment"
          status="pending"
        />
      </div>
    </div>
  );
};

const ProgressStep = ({ icon, label, status }) => (
  <div className={`progress-step ${status}`}>
    <div className="step-icon">
      {icon}
    </div>
    <span className="step-label">{label}</span>
  </div>
);

const ProgressLine = ({ completed }) => (
  <div className={`progress-line ${completed ? 'completed' : ''}`}></div>
);

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const WasteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const SkipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 8h11v7H1z"></path>
    <path d="M12 8h6l4 4v3h-2.5M6 15h6.5"/>
    <circle cx="5" cy="18" r="2"></circle>
    <circle cx="17" cy="18" r="2"></circle>
    <path d="M8 4h3v4H8z"></path>
  </svg>
);

const PermitIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const PaymentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

export default ProgressBar;
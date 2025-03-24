import React, { memo } from 'react';
import { useSkipContext } from '../../../context/SkipContext';
import { calculateTotalPrice } from '../../../utils/calculations';
import { formatDate } from '../../../utils/formatters';
import { getSkipDescription, getSkipFeatures } from '../../../constants/skipFeatures';
import './index.css';

const SkipCard = ({ skip }) => {
  const { selectedSkip, handleSkipSelect } = useSkipContext();
  const isSelected = selectedSkip?.id === skip.id;
  
  const totalPrice = calculateTotalPrice(skip);
  const vatAmount = (skip.price_before_vat * (skip.vat / 100)).toFixed(2);
  
  const selectSkip = (e) => {
    e.stopPropagation();
    handleSkipSelect(skip);
  };

  return (
    <div 
      className={`skip-card ${isSelected ? 'selected' : ''}`}
      onClick={() => handleSkipSelect(skip)}
    >
      <div className="skip-card-inner">
        <PricingSection 
          skip={skip}
          totalPrice={totalPrice}
          vatAmount={vatAmount}
          onSelect={selectSkip}
        />
        <InfoSection 
          skip={skip}
          features={getSkipFeatures(skip)}
          description={getSkipDescription(skip.size)}
          lastUpdated={formatDate(skip.updated_at)}
        />
      </div>
    </div>
  );
};

const PricingSection = ({ skip, totalPrice, vatAmount, onSelect }) => (
  <div className="skip-pricing">
    <div className="price-container">
      <p className="hire-period">{skip.hire_period_days} days hire period</p>
      <div className="price-display">
        <span className="price-amount">£{totalPrice}</span>
      </div>
      <div className="price-breakdown">
        <p>Price before VAT: £{skip.price_before_vat}</p>
        <p>VAT ({skip.vat}%): £{vatAmount}</p>
      </div>
    </div>
    <div className="action-container">
      <button
        className="select-button"
        onClick={onSelect}
      >
        Select This Skip
      </button>
      <p className="invoice-note">
        Invoices available for easy company reimbursement
      </p>
    </div>
  </div>
);

const InfoSection = ({ skip, features, description, lastUpdated }) => (
  <div className="skip-info">
    <div className="skip-header">
      <h2>{skip.size} Yard Skip</h2>
      {!skip.allowed_on_road && (
        <div className="private-property-badge">
          <span className="warning-icon">⚠</span>
          Private Property Only
        </div>
      )}
    </div>
    <p className="skip-description">{description}</p>
    <h3 className="features-title">What's included</h3>
    <div className="features-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-item">
          <span className="check-icon">✓</span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
    <div className="skip-updated">
      <p>Last updated: {lastUpdated}</p>
    </div>
  </div>
);

export default memo(SkipCard);
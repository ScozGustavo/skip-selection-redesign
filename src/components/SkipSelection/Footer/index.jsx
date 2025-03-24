import React from 'react';
import { useSkipContext } from '../../../context/SkipContext';
import { calculateTotalPrice } from '../../../utils/calculations';
import './index.css';

const Footer = () => {
  const { selectedSkip, handleResetSelection, handleContinue } = useSkipContext();
  
  if (!selectedSkip) return null;
  
  const totalPrice = calculateTotalPrice(selectedSkip);
  
  return (
    <div className="selection-footer">
      <div className="selection-details">
        <div className="selection-size">{selectedSkip.size}Y</div>
        <div className="selection-price">
          <span className="currency">£</span>
          <span className="currency">{totalPrice}</span>
        </div>
      </div>
      <div className="selection-actions">
        <button className="back-button" onClick={handleResetSelection}>
          Back
        </button>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Footer;
import React from 'react';
import { useSkips } from '../../../hooks/useSkips';
import ProgressBar from '../ProgressBar';
import SkipCard from '../SkipCard';
import Footer from '../Footer';
import './index.css';

const SkipSelectionPage = () => {
  const { skips, loading, error } = useSkips();
  
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div className="skip-selection-container">
      <ProgressBar />
      <Header postcode={skips[0]?.postcode} />
      <div className="skip-grid">
        {skips.map(skip => (
          <SkipCard key={skip.id} skip={skip} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
  </div>
);

const ErrorMessage = ({ message }) => (
  <div className="error-message">{message}</div>
);

const Header = ({ postcode }) => (
  <div className="header">
    <h1>Choose Your Skip Size</h1>
    <p>Select the skip size that best suits your needs for {postcode || "your area"}</p>
  </div>
);

export default SkipSelectionPage;
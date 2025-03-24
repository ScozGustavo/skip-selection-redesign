import React from 'react';
import { SkipProvider } from '../../context/SkipContext';
import SkipSelectionPage from './SkipSelectionPage/SkipSelectionPage';
import './index.css';

const SkipSelectionContainer = () => {
  return (
    <SkipProvider>
      <SkipSelectionPage />
    </SkipProvider>
  );
};

export default SkipSelectionContainer;
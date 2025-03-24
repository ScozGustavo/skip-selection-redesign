import React, { createContext, useState, useContext } from 'react';

const SkipContext = createContext();

export const SkipProvider = ({ children }) => {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleSkipSelect = (skip) => {
    setSelectedSkip(skip);
    console.log(`Skip selected: ${skip.size} Yards, ID: ${skip.id}`);
  };

  const handleResetSelection = () => {
    setSelectedSkip(null);
  };

  const handleContinue = () => {
    console.log('Continuing to next step with skip:', selectedSkip);
  };

  return (
    <SkipContext.Provider 
      value={{
        selectedSkip,
        handleSkipSelect,
        handleResetSelection,
        handleContinue
      }}
    >
      {children}
    </SkipContext.Provider>
  );
};

export const useSkipContext = () => useContext(SkipContext);
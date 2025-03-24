export const calculateTotalPrice = (skip) => {
    const vatAmount = skip.price_before_vat * (skip.vat / 100);
    return Math.round(skip.price_before_vat + vatAmount);
  };
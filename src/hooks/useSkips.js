import { useState, useEffect, useCallback } from 'react';

export const useSkips = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSkips = useCallback(async () => {
    try {
      const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setSkips(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching skips:', error);
      setError('Failed to load skip data. Please try again later.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSkips();
  }, [fetchSkips]);

  const refetch = useCallback(() => {
    setLoading(true);
    setError(null);
    fetchSkips();
  }, [fetchSkips]);

  return { skips, loading, error, refetch };
};

export default useSkips;
// src/hooks/useDebounce.js
import { useState, useEffect } from 'react';

/**
 * Custom hook to debounce a value.
 * @param {*} value The value to debounce.
 * @param {number} delay The delay in milliseconds.
 * @returns {*} The debounced value.
 */
function useDebounce(value, delay) {
  // State to store debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timeout to update the debounced value after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function:
    // This will be called if the value changes before the timeout fires,
    // or if the component unmounts. This clears the previous timer.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run the effect if value or delay changes

  return debouncedValue;
}

export default useDebounce;
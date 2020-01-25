import { useEffect } from 'react';

const useOnClickOutside = (ref, handler) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      handler(); // if click was outside element
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOnClickOutside;

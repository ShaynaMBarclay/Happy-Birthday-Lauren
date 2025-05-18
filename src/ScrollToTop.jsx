import { useEffect } from 'react';

function ScrollToTop({ trigger }) {
  useEffect(() => {
    // This ensures scroll-to-top works on mobile too
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); 
  }, [trigger]);

  return null;
}

export default ScrollToTop;

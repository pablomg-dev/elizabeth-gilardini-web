import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const targetPosition = targetElement.offsetTop - 20;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    const handleHomeAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="/#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        
        if (href && href.startsWith('/#')) {
          const targetId = href.substring(2);
          
          if (window.location.pathname === '/') {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              const targetPosition = targetElement.offsetTop - 20;
              
              window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
              });
            }
          } else {
            window.location.href = href;
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    document.addEventListener('click', handleHomeAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.removeEventListener('click', handleHomeAnchorClick);
    };
  }, []);

  return null;
}

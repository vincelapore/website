'use client';

import { useEffect, useState } from 'react';

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none !important;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          className={`absolute w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div
          className={`absolute w-8 h-8 border-2 border-white rounded-full transition-transform duration-300 ${
            isHovering ? 'scale-150' : 'scale-100'
          }`}
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </>
  );
} 
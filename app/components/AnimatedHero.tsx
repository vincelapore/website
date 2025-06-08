'use client';

import { useEffect } from 'react';

export default function AnimatedHero() {
  useEffect(() => {
    // Add any client-side initialization if needed
  }, []);

  return (
    <div className="relative">
      <h1 className="text-6xl font-['Young_Serif'] font-bold tracking-tight hover:text-[#E8DCCA] transition-colors animate-fade-in">
        <span className="inline-block animate-slide-up">Vince</span>{" "}
        <span className="inline-block animate-slide-up [animation-delay:200ms]">Lapore</span>
      </h1>
      <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#E8DCCA] transform scale-x-0 animate-expand-line origin-left"></div>

      <style jsx>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes expand-line {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-expand-line {
          animation: expand-line 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
} 
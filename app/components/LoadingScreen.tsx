"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [fade, setFade] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubtitle(true), 600);
    const timer2 = setTimeout(() => setFade(true), 1600);
    const timer3 = setTimeout(() => onFinish(), 2100);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${fade ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <h1 className="text-[clamp(3rem,12vw,8rem)] font-extrabold tracking-tight uppercase font-sans text-black animate-fade-in">
        VINCE LAPORE
      </h1>
      <span className={`block mt-4 text-2xl md:text-3xl font-semibold tracking-wide uppercase text-gray-700 transition-opacity duration-700 ${showSubtitle ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        style={{letterSpacing: '0.1em'}}>
        TECH CREATIVE
      </span>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
} 
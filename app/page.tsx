'use client';
import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Link from "next/link";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFinishLoading = () => {
    setLoading(false);
    setTimeout(() => setShowContent(true), 50);
  };

  if (loading) {
    return <LoadingScreen onFinish={handleFinishLoading} />;
  }
  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start px-6 md:px-12 pt-8 pb-2 text-xs uppercase tracking-widest gap-4 md:gap-0">
        <div className="space-y-1">
          <div>TECH CREATIVE<br />BASED IN THE DIGITAL WORLD</div>
          <div className="mt-4">BUILDING IDEAS AT THE INTERSECTION OF TECHNOLOGY & CREATIVITY</div>
        </div>
        <div className="flex flex-col items-end gap-2 w-full md:w-auto">
          <div className="flex flex-row justify-between w-full md:w-auto items-center">
            {/* Dark Mode Toggle */}
            <button
              aria-label="Toggle dark mode"
              className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setDarkMode((d) => !d)}
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
            {/* Hamburger Menu */}
            <button
              className="ml-4 md:hidden p-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
            </button>
            {/* Desktop Nav */}
            <nav className="ml-8 hidden md:flex flex-row flex-wrap gap-2 md:gap-4">
              <Link href="/" className="font-bold text-black dark:text-white">HOME</Link>
              <Link href="/work" className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">WORK</Link>
              <Link href="/gallery" className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">GALLERY</Link>
              <Link href="/about" className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">ABOUT</Link>
            </nav>
          </div>
          {/* Mobile Nav */}
          {menuOpen && (
            <nav className="flex flex-col gap-2 mt-2 md:hidden animate-fade-in">
              <Link href="/" className="font-bold text-black dark:text-white" onClick={() => setMenuOpen(false)}>HOME</Link>
              <Link href="/work" className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>WORK</Link>
              <Link href="/gallery" className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>GALLERY</Link>
              <Link href="/about" className="text-gray-400 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>ABOUT</Link>
            </nav>
          )}
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-wrap items-stretch justify-between px-6 md:px-12 pb-12 pt-4 gap-8">
        <div className="flex-1 min-w-[220px] md:min-w-[320px] flex flex-col justify-between">
          <h1 className="text-[clamp(2.5rem,10vw,10rem)] font-extrabold uppercase leading-none tracking-tight" style={{fontFamily: 'Oswald, Impact, Anton, Arial Black, sans-serif'}}>Vince<br />Lapore</h1>
          <p className="mt-6 text-lg md:text-2xl font-semibold tracking-wide uppercase text-gray-700 dark:text-gray-300">Tech Creative</p>
        </div>
        <div className="flex flex-col gap-8 min-w-[220px] md:min-w-[320px] max-w-[420px]">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Creative Tech 1" className="rounded-lg object-cover w-full aspect-square" />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Creative Tech 2" className="rounded-lg object-cover w-full aspect-square" />
        </div>
      </div>
    </div>
  );
}

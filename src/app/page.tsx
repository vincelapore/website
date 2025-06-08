import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4">Welcome to Vince Lapore's Website</h1>
      <p className="text-xl mb-8">Actor, Singer, Philosopher, and Developer</p>
      <nav className="flex gap-4">
        <Link href="/about" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">About Me</Link>
        <Link href="/work" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Work</Link>
        <Link href="/play" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Play</Link>
        <Link href="/resume" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Resume</Link>
        <Link href="/contact" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700">Contact</Link>
      </nav>
    </div>
  );
} 
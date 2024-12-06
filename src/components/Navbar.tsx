"use client";

import Image from 'next/image';
import Logo from '@/../public/favicon.ico';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/10 border-b border-white/10 shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-8 p-4">
        {/* Logo on the Left */}
        <div className="flex items-center font-bold text-xl text-gray-100">
          <Image src={Logo} width={40} height={40} alt="Logo" />
          <Link href="/">FOSSUOK</Link>
        </div>

        {/* GitHub Logo and Hamburger Menu */}
        <div className="flex items-center space-x-6">
          {/* Links for Larger Screens */}
          <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-100">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition">
              Blog
            </Link>
            <Link href="/event" className="hover:text-blue-600 transition">
              Events
            </Link>
          </div>

          {/* Button - Hidden on Mobile */}
          <div className="hidden md:block">
            <Button msg="Subscribe" />
          </div>

          {/* GitHub Logo - Always Visible */}
          <a
            href="https://github.com/fossuok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 hover:text-blue-600 transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.799 8.205 11.387.6.111.82-.261.82-.579v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.239 1.839 1.239 1.07 1.834 2.807 1.305 3.492.998.108-.775.42-1.305.762-1.604-2.666-.306-5.466-1.333-5.466-5.931 0-1.309.468-2.381 1.236-3.222-.124-.303-.536-1.525.117-3.176 0 0 1.008-.323 3.3 1.23.96-.267 1.989-.4 3.012-.405 1.023.005 2.052.138 3.012.405 2.29-1.553 3.297-1.23 3.297-1.23.654 1.651.242 2.873.118 3.176.768.841 1.235 1.913 1.235 3.222 0 4.61-2.803 5.622-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .321.22.694.825.577C20.565 21.798 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-100 hover:text-blue-600 transition"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Breadcrumb Menu for Small Screens */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/50 backdrop-blur-md border-t border-white/10 px-8 py-4">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-900">
            <Link href="/" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/blog" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/event" className="hover:text-blue-600 transition" onClick={() => setMenuOpen(false)}>
              Events
            </Link>
          </nav>
        </div>
      )}
    </nav>
  );
}

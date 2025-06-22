'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import React, { useState } from 'react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { menuItems } from "@/app/data/data";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <header className="mb-8 flex items-center justify-between">
        {/* TODO: fix styling*/}
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10 w-full">
      <div className="flex flex-col justify-center">
        <Link href="/" className="font-medium text-black dark:text-white">
          Bianca Tovalin-Mangual
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.25}
        >
          Tech enjoyer
        </TextEffect>
      </div>
      {/* Desktop Menu */}
    <div className="flex items-center">
      <ul className="hidden md:flex space-x-6">
        {menuItems.map(item => (
            <li key={item.text}>
              <Link href={item.url} className="text-foreground hover:text-foreground-accent transition-colors">
                {item.text}
              </Link>
            </li>
        ))}
          <li>
              <a
                  href="/tovalin-mangual_bianca_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-foreground-accent transition-colors"
              >
                  Resume
              </a>
          </li>
          <ThemeSwitch />
      </ul>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                    ) : (
                        <HiBars3 className="h-6 w-6" aria-hidden="true" />
                    )}
                    <span className="sr-only">Toggle navigation</span>
                </button>
            </div>
        </div>
        </nav>

    </header>
  )
}

export default Header;

'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import React from 'react';
import { ThemeSwitch } from '@/components/ui/theme-switch';
import { menuItems } from "@/app/data/data";

const Header: React.FC = () => {

    return (
        // TODO: make top text and menu items aligned with the other sections
        <header className="w-full bg-white dark:bg-transparent transition-colors duration-300">
            <div className="max-w-3xl mx-auto px-5 mb-8">
                <nav className="flex justify-between items-center py-2 md:py-10 w-full">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
                        <div className="flex flex-col">
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
                        <ul className="flex flex-row flex-wrap items-center space-x-6 mt-4 md:mt-0">
                            {menuItems.map(item => (
                                <li key={item.text}>
                                    <Link
                                        href={item.url}
                                        className="text-foreground hover:text-foreground-accent transition-colors text-sm"
                                    >
                                        <TextEffect
                                            as="span"
                                            preset="fade"
                                            per="char"
                                            className="inline text-zinc-600 dark:text-zinc-500"
                                            delay={0.5}
                                        >
                                            {item.text}
                                        </TextEffect>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={"/tovalin-mangual_bianca_resume.pdf"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-foreground hover:text-foreground-accent transition-colors text-sm"
                                >
                                    <TextEffect
                                        as="span"
                                        preset="fade"
                                        per="char"
                                        className="inline text-zinc-600 dark:text-zinc-500"
                                        delay={0.5}
                                    >
                                        Resume
                                    </TextEffect>
                                </a>
                            </li>
                            <ThemeSwitch />
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;

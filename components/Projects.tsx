'use client'
import React, { useState } from 'react'
import { PROJECTS } from '@/app/data/projects'
import {XIcon} from "lucide-react";
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContainer,
    MorphingDialogContent,
    MorphingDialogClose,
} from '@/components/ui/morphing-dialog'
import {Magnetic} from "@/components/ui/magnetic";

const categories = ['swe', 'data', 'creative'] as const

function ProjectVideo({ src }: { src: string }) {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3,
            }}
        >
            <MorphingDialogTrigger>
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    className="aspect-video w-full cursor-zoom-in rounded-xl"
                />
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                    <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
                    />
                </MorphingDialogContent>
                <MorphingDialogClose
                    className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                    variants={{
                        initial: { opacity: 0 },
                        animate: {
                            opacity: 1,
                            transition: { delay: 0.3, duration: 0.1 },
                        },
                        exit: { opacity: 0, transition: { duration: 0 } },
                    }}
                >
                    <XIcon className="h-5 w-5 text-zinc-500" />
                </MorphingDialogClose>
            </MorphingDialogContainer>
        </MorphingDialog>
    )
}

function MagneticSocialLink({
    children,
    link,
    target,
    rel,
}: {
    children: React.ReactNode
    link: string
    target?: string
    rel?: string
}) {
    return (
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
                {children}
        </Magnetic>
    )
}

export default function Projects() {
    const [selected, setSelected] = useState<typeof categories[number]>('swe')
    const filtered = PROJECTS.filter(p => p.category === selected)

    return (
        <div>
            {/* Tabs for filtering */}
            <div className="flex justify-center gap-2 mb-6">
                {categories.map(cat => (
                    <MagneticSocialLink key={cat} link="#">
                    <button
                        key={cat}
                        onClick={() => setSelected(cat)}
                        className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                            selected === cat
                                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                                : 'bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                        }`}
                        type="button"
                    >
                        {cat.toUpperCase()}
                    </button>
                    </MagneticSocialLink>
                ))}
            </div>
            {/* Filtered projects */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {filtered.map((project) => (
                    <div key={project.name} className="space-y-2">
                        <div className="relative rounded-2xl bg-zinc-50/40 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50">
                            <img
                                src={project.coverImg}
                                alt={project.name}
                                className="aspect-video w-full rounded-xl object-cover"
                            />
                        </div>
                        <div className="px-1">
                            <a
                                className="font-base group relative inline-block font-[450] text-zinc-900 dark:text-zinc-50"
                                href={project.link}
                                target="_blank"
                            >
                                {project.name}
                                <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-zinc-900 dark:bg-zinc-50 transition-all duration-200 group-hover:max-w-full"></span>
                            </a>
                            <p className="text-base text-zinc-600 dark:text-zinc-400">
                                {project.description}
                                <br/>
                                languages: {project.languages}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

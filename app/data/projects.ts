type Project = {
    name: string
    description: string
    languages?: string
    tech?: string
    link?: string
    video?: string
    coverImg?: string
    id: string
    category: 'swe' | 'data' | 'creative'
}

export const PROJECTS: Project[] = [
    {
        name: 'jucie!',
        description:
            'Random facts about random fruits',
        languages: 'js, html, css',
        link: 'https://github.com/bianca-tm/jucie',
        coverImg:
            '/coverImg1.jpg',
        id: 'project1',
        category: 'swe',
    },
    {
        name: 'tile game',
        description:
            '9 and 16 tile puzzle game.',
        languages: 'js, html, css',
        link: 'https://github.com/bianca-tm/tile-game',
        coverImg:
            '/coverImg2.jpg',
        id: 'project2',
        category: 'swe',
    },
    // {
    //     name: 'swe placeholder 3',
    //     description:
    //         'description of swe placeholder 3',
    //     // link: 'https://pro.motion-primitives.com/',
    //     // video:
    //     //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    //     id: 'project3',
    //     category: 'swe',
    // },
    // {
    //     name: 'swe placeholder 4',
    //     description:
    //         'description of swe placeholder 4',
    //     id: 'project4',
    //     category: 'swe',
    // },
    {
        name: 'ember',
        description: 'quantifying online sales data to identify top-selling products within a speciifc region.',
        tech: 'Python, SQL, Tableau',
        coverImg:
            '/coverImg3.jpg',
        id: 'project5',
        category: 'data',
    },
    {
        name: 'polar',
        description: 'data pipeline with monitoring that delivers real-time analytics on reliable datasets.',
        tech: 'AWS, Airflow, Snowflake',
        coverImg:
            '/coverImg4.jpg',
        id: 'project6',
        category: 'data',
    },
    // {
    //     name: 'data placeholder 3',
    //     description: 'description of data placeholder 3',
    //     id: 'project7',
    //     category: 'data',
    // },
    // {
    //     name: 'data placeholder 4',
    //     description: 'description of data placeholder 4',
    //     id: 'project8',
    //     category: 'data',
    // },
    {
        name: 'creative placeholder',
        description: 'description of creative placeholder 1',
        coverImg:
            '/coverImg5.jpg',
        id: 'project9',
        category: 'creative',
    },
    {
        name: 'creative placeholder 2',
        description: 'description of creative placeholder 2',
        coverImg:
            '/coverImg6.jpg',
        id: 'project10',
        category: 'creative',
    },
    // {
    //     name: 'creative placeholder 3',
    //     description: 'description of creative placeholder 3',
    //     id: 'project11',
    //     category: 'creative',
    // },
    // {
    //     name: 'creative placeholder 4',
    //     description: 'description of creative placeholder 4',
    //     id: 'project12',
    //     category: 'creative',
    // },
]
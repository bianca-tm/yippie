type WorkExperience = {
    company: string
    title: string
    start: string
    end: string
    id: string
    details: string[]
}

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        company: 'Wisteria Software',
        title: 'Software Engineer',
        start: '2025',
        end: 'Present',
        id: 'work1',
        details: [
            'Growing, expanding, and learning.'
        ],
    },
    {
        company: 'Capital One',
        title: 'Software Engineer',
        start: '2023',
        end: '2025',
        id: 'work2',
        details: [
            'Spearheaded UI/UX enhancements for the e-sign page, refining design, navigation, and functionality to improve user experience and contract completion rates.',
            'Designed and implemented automated testing strategies, streamlining code validation and reducing manual testing demands, leading to improved efficiency in product releases.',
            'Modernized the outdated hard-pull page by aligning its flow with current auto-refinance processes, introducing updated styling, optimized verbiage, and interactive elements to enhance user clarity and decision-making.',
            'Engineered and maintained RESTful APIs and backend applications, optimizing system architecture and functionality to support business operations.',
            'Collaborated with cross-functional teams using agile methodologies, ensuring seamless integration of new features and continuous product improvements.',
        ],
    },
    {
        company: 'SynsorMed',
        title: 'Data Analyst',
        start: '2022',
        end: '2023',
        id: 'work3',
        details: [
            'Performed ETL processes weekly for multiple departments, identifying trends and correlations that optimized business processes.',
            'Designed and maintained client-facing dashboards and visualizations that facilitating data-driven decision-making.',
            'Collaborated with cross-functional teams',
            'Orchestrated automation solutions that reduced manual workload by 20%, saving 5+ hours weekly.',
            'Partnered with department heads to align technical capabilities with strategic business goals and customer requirements.',
            'Streamlined data delivery processes, reducing turnaround time by 15% while improving accuracy and client satisfaction.'
        ],
    },
    {
        company: 'D&V Consttruction',
        title: 'Project Engineer',
        start: '2018',
        end: '2022',
        id: 'work4',
        details: [
            'Conducted quality assurance and quality control checks on subcontractors’ work across multiple residential job sites, ensuring compliance of the project specifications and ensuring correct safety standards.',
            'Coordinated material deliveries, verifying accuracy against project timelines, and client specification to prevent delays.',
            'Identified and resolved material availability issues, by collaborating with suppliers and clients to propose suitable alternatives, ensuring project continuity and client satisfaction.',
            'Managed project documentation, including contracts, change orders, and RFIs, ensuring all records were accurate and up-to-date.',
            'Managed daily communication with subcontractors and clients, supporting smooth on-site operations and addressing / resolving project-related concerns in a timely manner.',
            'Assisted in the development of project schedules and budgets, contributing to the successful completion of projects within scope and timeline.',
        ],
    },
]
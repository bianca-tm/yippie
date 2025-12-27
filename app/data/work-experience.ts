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
        company: 'Holder Construction',
        title: 'Engineer',
        start: '2025',
        end: 'Present',
        id: 'work1',
        details: [
            'Building Data centers.'
        ],
    },
    {
        company: 'Wisteria Software',
        title: 'Software Engineer',
        start: '2025',
        end: 'Present',
        id: 'work2',
        details: [
            'Growing, expanding, and learning.'
        ],
    },
    {
        company: 'Capital One',
        title: 'Software Engineer',
        start: '2023',
        end: '2025',
        id: 'work3',
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
        id: 'work4',
        details: [
            'Performed ETL processes weekly for multiple departments, identifying trends and correlations that optimized business processes.',
            'Designed and maintained client-facing dashboards and visualizations that facilitating data-driven decision-making.',
            'Collaborated with cross-functional teams',
            'Orchestrated automation solutions that reduced manual workload by 20%, saving 5+ hours weekly.',
            'Partnered with department heads to align technical capabilities with strategic business goals and customer requirements.',
            'Streamlined data delivery processes, reducing turnaround time by 15% while improving accuracy and client satisfaction.'
        ],
    }
]
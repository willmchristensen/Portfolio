export const items = [
    'Home',
    'About',
    'Skills',
    'Services',
    'Portfolio',
    'Contact'
];
export const locations = [
    '#home',
    '#about',
    '#skills',
    '#services',
    '#portfolio',
    '#contact'
]
export const icons = [
    <i class="fas fa-home"></i>,
    <i class="fas fa-id-card"></i>,
    <i class="fas fa-sliders-h"></i>,
    <i class="fas fa-project-diagram"></i>,
    <i class="fas fa-code-branch"></i>,
    <i class="fas fa-address-book"></i>
];
export const services = [
    {
        icon: <i class="fas fa-laptop-code"></i>,
        title: 'Frontend Developer',
        bullets:[
            'I develop user-friendly website interfaces.',
            'I ensure websites work well on all devices. ',
            'I focus on optimizing webpage performance.',
            'I create visually appealing and responsive web designs.'
        ],
    },
    {
        icon: <i class="fas fa-database"></i>,
        title: 'Backend Developer',
        bullets: [
            'I manage server-side logic for data processing and secure communication.',
            'I handle databases, ensuring efficient data storage and retrieval.',
            'I develop and maintain APIs for frontend-server interactions.',
            'I focus on security, implementing user authentication and data protection.'
        ]
    }
]

export const projects = [
    {
        title:'ShareBnb',
        description:'This Airbnb clone facilitates user-generated listings and reviewsfor accommodations.',
        link: 'https://sharebnb-wpig.onrender.com/',
        image: '/willmchristensen/assets/sharebnb-splash.png'
    },
    {
        title:'Mu',
        description:'This Resident Advisor clone facilitates user-generated events and postsregarding the electronic music industry.',
        link:'https://mu-zfwi.onrender.com/',
        image: '/willmchristensen/assets/mu-splash.png'
    },
    {
        title:'Query',
        description:'This Quora clone facilitates user-generated questions, answers, and replies for spaces.',
        link: 'https://query-bhy5.onrender.com/',
        image: '/willmchristensen/assets/query-splash.png'
    }
]
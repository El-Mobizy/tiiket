import imgUrl1 from './assets/duckies_1.png';
import imgUrl2 from './assets/duckies_2.jpg';
import imgUrl3 from './assets/duckies_3.jpg';
import imgUrl4 from './assets/duckies_4.jpg';
import imgUrl5 from './assets/duckies_5.jpg';
import { FiCheckSquare } from 'react-icons/fi';

export const RUBBER_DUCKY = {
    id: '1234',
    name: 'Rubber Ducky Debugging Buddy',
    description:
        'Never code alone when you\'ve got this rubber ducky on your desk!',
    features: [
        'Always listens to you',
        'Never judges you',
        'Helps you become the best coder you can be',
        'Floats',
    ],
    images: [
        {
            url: imgUrl1,
            title: 'The most loyal & helpful coworker you will ever have',
            alt: 'sitting on a laptop keyboard',
        },
        {
            url: imgUrl2,
            title: 'No matter how big the bug, ducky is there for you',
            alt: 'sitting next to another ducky, both facing the camera',
        },
        {
            url: imgUrl3,
            alt: 'sitting next to another ducky, both in profile facing left',
        },
        {
            url: imgUrl4,
            alt: 'swimming in different directions on a blue surface',
        },
        {
            url: imgUrl5,
            alt: 'sitting in profile facing another ducky sitting facing the camera',
        },
    ],
    reviews: [
        { rating: 5, text: 'So impressed!', date: new Date(2023, 6, 13).valueOf() },
        { rating: 5, date: new Date(2023, 4, 10).valueOf() },
        {
            rating: 4,
            text: 'Pretty good duck. I just wish it came with sunglasses.',
            date: new Date(2023, 1, 1).valueOf(),
        },
        {
            rating: 1,
            text: 'Useless. Did not fix my bug :(',
            date: new Date(2022, 12, 15).valueOf(),
        },
        { rating: 4, date: new Date(2022, 11, 11).valueOf() },
        {
            rating: 3,
            text: 'Meh, ok I guess',
            date: new Date(2022, 10, 30).valueOf(),
        },
    ],
    price: 29.95,
    sizes: ['S', 'M', 'L', 'XL'],
};

export const SCROOGE = {
    name: 'Scrooge McDuck',
};

export const sideNavItems = [
    {
        text: 'Tickets',
        href: '/',
        icon: 'FiCheckSquare',
        canHoldBadge: true,

    },
    {
        text: 'Projects',
        href: '/',
        icon: 'FiGrid',
        canHoldBadge: false,

    }, {
        text: 'Teams',
        href: '/',
        icon: 'FiUsers',
        canHoldBadge: false,

    },
];


export const progressData = [
    { color: '#fbbf24', progress: '60' },
    { color: 'white', progress: '95' },
    { color: '#22c55e', progress: '40' },
];

export const statusData = [
    { color: '#fbbf24', label: 'Pending' },
    { color: 'white', label: 'Open' },
    { color: '#22c55e', label: 'Closed' },
];

export const team_avatars = [
    {
        userLetter: 'B',
        avaterFullname: 'Badred',
        avatarImage: null,
    }, {
        userLetter: 'R',
        avaterFullname: 'Radji',
        avatarImage:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        userLetter: 'J',
        avaterFullname: 'Jude',
        avatarImage:
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },

    {
        userLetter: 'F',
        avaterFullname: 'Franck',
        avatarImage:
            'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
];

export const dashboardProjects = [
    {
        id: 1, projectTitle: 'Aws beginner training',
        teamMembers: [],
        notificationCount: 3,
    }, {
        id: 2, projectTitle: 'Jumia Ecommerce mobile',
        teamMembers: [],
        notificationCount: 3,
    }, {
        id: 3, projectTitle: 'Flutter beginner training',
        teamMembers: [],
        notificationCount: 3,
    }, {
        id: 4, projectTitle: 'Flutter beginner training',
        teamMembers: [],
        notificationCount: 3,
    }, {
        id: 5, projectTitle: 'Flutter beginner training',
        teamMembers: [],
        notificationCount: 3,
    }, {
        id: 6, projectTitle: 'Flutter beginner training',
        teamMembers: [],
        notificationCount: 3,
    },
];
export const sideNavItems = [
    {
        text: 'Open Tickets',
        href: '/',
        icon: 'FiInbox',
        canHoldBadge: true,
        notificationCount: 4,

    }, {
        text: 'New Tickets',
        href: '/',
        icon: 'FiAlertOctagon',
        canHoldBadge: true,
        notificationCount: 3,

    }, {
        text: 'Closed Tickets',
        href: '/',
        icon: 'FiCheckSquare',
        canHoldBadge: true,
        notificationCount: 0,

    },
    {
        text: 'Projects',
        href: '/',
        icon: 'FiGrid',
        canHoldBadge: false,
        notificationCount: 0,

    }, {
        text: 'My Tasks',
        href: '/',
        icon: 'FiList',
        canHoldBadge: false,
        notificationCount: 0,

    }, {
        text: 'Teams',
        href: '/',
        icon: 'FiUsers',
        canHoldBadge: false,
        notificationCount: 0,

    },
];


export const progressData = [
    { color: '#fbbf24', progress: '60' },
    { color: 'white', progress: '95' },
    { color: '#22c55e', progress: '40' },
];

export const statusData = [
    { color: '#fbbf24', label: 'Unsolved' },
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
    { id: 1, projectTitle: 'Aws beginner training', teamMembers: [], notificationCount: 3 },
    { id: 2, projectTitle: 'Jumia Ecommerce mobile', teamMembers: [], notificationCount: 3 },
    { id: 3, projectTitle: 'React Native Crash Course', teamMembers: [], notificationCount: 3 },
    { id: 4, projectTitle: 'Flutter Crash Course', teamMembers: [], notificationCount: 3 },
    { id: 5, projectTitle: 'MapReducer Crash Course', teamMembers: [], notificationCount: 3 },
    { id: 6, projectTitle: 'Intro to Big Data', teamMembers: [], notificationCount: 3 },
    { id: 7, projectTitle: 'Ruby Crash Course', teamMembers: [], notificationCount: 3 },
    { id: 8, projectTitle: 'React Native Crash Course', teamMembers: [], notificationCount: 3 },
    { id: 9, projectTitle: 'Jenkin CI/CD', teamMembers: [], notificationCount: 4 },
    { id: 10, projectTitle: 'Backend Development', teamMembers: [], notificationCount: 2 },
    { id: 11, projectTitle: 'UI/UX Redesign', teamMembers: [], notificationCount: 3 },
    { id: 12, projectTitle: 'Database Optimization', teamMembers: [], notificationCount: 3 },
    { id: 13, projectTitle: 'Machine Learning Implementation', teamMembers: [], notificationCount: 3 },

];

export const userTickeOptions = [
    {
        text: 'View all tickets',
        value: 'ALL',
    },
    {
        text: 'View open tickets',
        value: 'OPEN',
    },
    {
        text: 'View closed tickets',
        value: 'CLOSED',
    },
];

export const newTickeOptions = [
    {
        text: 'View all tickets',
        value: 'ALL',
    },
    {
        text: 'View personal project tickets',
        value: 'PERSONAL',
    },
    {
        text: 'View invited project tickets',
        value: 'INVITED',
    },
];

export const newTicketTableData = [
    {
        // reference: 'REF1',
        date: '2024-04-10',
        subject: 'Issue with login page',
        project: 'Project A',
        projectType: 'PERSONAL',
    },
    {
        // reference: 'REF2',
        date: '2024-04-11',
        subject: 'Bug in payment processing',
        project: 'Project B',
        projectType: 'INVITED',
    },
    {
        // reference: 'REF3',
        date: '2024-04-12',
        subject: 'Feature request: Dark mode',
        project: 'Project C',
        projectType: 'PERSONAL',
    },
];
export const userTicketTableData = [
    {
        reference: 'REF1234',
        date: '2023-07-15',
        subject: 'Product Inquiry',
        status: 'Open',
        lastUpdate: '2023-07-16',
        project: 'Project X',
    },
    {
        reference: 'REF5678',
        date: '2023-08-02',
        subject: 'Technical Support Request',
        status: 'Closed',
        lastUpdate: '2023-08-05',
        project: 'Project Y',
    },
    {
        reference: 'REF91011',
        date: '2023-09-19',
        subject: 'Billing Issue',
        status: 'Open',
        lastUpdate: '2023-09-21',
        project: 'Project Z',
    },
    {
        reference: 'REF121314',
        date: '2023-10-07',
        subject: 'Service Request',
        status: 'Closed',
        lastUpdate: '2023-10-10',
        project: 'Project A',
    },
    {
        reference: 'REF151617',
        date: '2023-11-12',
        subject: 'Complaint',
        status: 'Open',
        lastUpdate: '2023-11-14',
        project: 'Project B',
    },
    {
        reference: 'REF181920',
        date: '2023-12-05',
        subject: 'Order Status Inquiry',
        status: 'Closed',
        lastUpdate: '2023-12-07',
        project: 'Project C',
    },
    {
        reference: 'REF212223',
        date: '2024-01-08',
        subject: 'Feedback',
        status: 'Open',
        lastUpdate: '2024-01-09',
        project: 'Project D',
    },
    {
        reference: 'REF242526',
        date: '2024-02-17',
        subject: 'Request for Quotation',
        status: 'Closed',
        lastUpdate: '2024-02-20',
        project: 'Project E',
    },
    {
        reference: 'REF272829',
        date: '2024-03-22',
        subject: 'Account Activation',
        status: 'Open',
        lastUpdate: '2024-03-25',
        project: 'Project F',
    },
    {
        reference: 'REF303132',
        date: '2024-04-29',
        subject: 'Maintenance Request',
        status: 'Closed',
        lastUpdate: '2024-05-02',
        project: 'Project G',
    },

];


export const teamMembersOptions = [
    {
        label: 'John Alvin',
        value: 'a2e6f3c8-9b45-4c0e-a3e2-4bfeb7d6e906',
    },
    {
        label: 'Alice Johnson',
        value: 'b3d9a1e7-6c85-4f21-bd82-7ca2d8ef458f',
    },
    {
        label: 'Michael Smith',
        value: 'c1f8d4b2-3e79-48f6-82a9-3a7c9e0d15d2',
    },
    {
        label: 'Emily Wilson',
        value: 'd0e7c6a9-2b54-491d-8f0d-6e39a8c7b3af',
    },
    {
        label: 'David Brown',
        value: 'e9f4c7b3-5a96-468e-ae32-9d28f6c5a1db',
    },
    {
        label: 'Sophia Taylor',
        value: 'f8e3b9c5-4d67-45a2-8e19-cb6d7a9e3f20',
    },
];
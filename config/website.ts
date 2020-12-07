const config: Config = {
    routes: {
        home: {
            name: 'Home',
            path: '/',
        },
        about: {
            name: 'About Me',
            path: '/about-me',
        },
        blogs: {
            name: 'Blogs',
            path: '/blogs',
            submenu: [
                {
                    name: 'Tuesday Tips',
                    path: '/tuesday-tips',
                },
                {
                    name: 'You, Me, and the Trees',
                    path: '/you-me-and-the-trees',
                },
            ],
        },
        workWithMe: {
            name: 'Work With Me',
            path: '/work-with-me',
            submenu: [
                {
                    name: 'Reiki',
                    path: '/tuesday-tips',
                },
                {
                    name: 'Classes and Workshops',
                    path: '/you-me-and-the-trees',
                },
            ],
        },
        products: {
            name: 'Products',
            path:
                'https://wholisticbeautyboutique.com/collections/sale-products',
            external: true,
        },
    },
    socials: {
        instagram: 'instagram',
        facebook: 'facebook',
        discord: 'discord',
    },
};

export default config;

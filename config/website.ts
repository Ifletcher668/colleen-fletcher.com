const config: Config = {
    pageLinks: {
        home: {
            name: 'Home',
            route: {
                url: '/',
                isExternalLink: false,
                data: null,
            },
            meta: {
                seo: {
                    description: 'Home Page',
                },
            },
        },
        about: {
            name: 'About Me',
            route: {
                url: '/about-me',
                isExternalLink: false,
                data: null,
            },
            meta: {
                seo: {
                    description: 'About Page',
                },
            },
        },
        blogs: {
            name: 'Blogs',
            route: {
                url: '/blogs',
                isExternalLink: false,
                // TODO: Still hardcoded
                data: [
                    {
                        name: 'Tuesday Tips',
                        path: '/tuesday-tips',
                        data: [
                            {
                                name: 'TT Best Read 1',
                                path: '/reiki-1',
                                data: null,
                            },
                            {
                                name: 'TT Best Read 2',
                                path: '/reiki-2',
                                data: null,
                            },
                            {
                                name: 'TT Best Read 3',
                                path: '/reiki-2',
                                data: null,
                            },
                            {
                                name: 'TT Best Read 4',
                                path: '/reiki-2',
                                data: null,
                            },
                            {
                                name: 'TT Best Read 5',
                                path: '/reiki-2',
                                data: null,
                            },
                        ],
                    },
                    {
                        name: 'You, Me, and the Trees',
                        path: '/you-me-and-the-trees',
                        data: [
                            {
                                name: 'YM&tT Best Read 1',
                                path: '/reiki-1',
                                data: null,
                            },
                            {
                                name: 'YM&tT Best Read 2',
                                path: '/reiki-2',
                                data: null,
                            },
                            {
                                name: 'YM&tT Best Read 3',
                                path: '/reiki-2',
                                data: null,
                            },
                            {
                                name: 'YM&tT Best Read 4',
                                path: '/reiki-2',
                                data: null,
                            },
                            {
                                name: 'YM&tT Best Read 5',
                                path: '/reiki-2',
                                data: null,
                            },
                        ],
                    },
                ],
            },
            meta: {
                seo: {
                    description: 'Blogs Page',
                },
            },
        },
        workWithMe: {
            name: 'Work With Me',
            route: {
                url: '/work-with-me',
                isExternalLink: false,
                // TODO: Still hardcoded
                data: [
                    {
                        name: 'Reiki',
                        path: '/reiki',
                        data: [
                            {
                                name: 'Reiki 1',
                                path: '/reiki-1',
                                data: null,
                            },
                            {
                                name: 'Reiki 2',
                                path: '/reiki-2',
                                data: null,
                            },
                        ],
                    },
                    {
                        name: 'Classes and Workshops',
                        path: '/you-me-and-the-trees',
                        data: [
                            {
                                name: 'Learn to Take Care of Your Skin',
                                path: '/skin',
                                data: null,
                            },
                            {
                                name: 'A New You',
                                path: '/skin',
                                data: null,
                            },
                            {
                                name: 'The Great Outdoors',
                                path: '/skin',
                                data: null,
                            },
                            {
                                name:
                                    'Testing The Length of these to See When it needs to be cut off',
                                path: '/skin',
                                data: null,
                            },
                            {
                                name:
                                    'Do I need to Limit How Many of These She Can Have at One Time?',
                                path: '/skin',
                                data: null,
                            },
                            {
                                name: 'Eh, One More Just to See',
                                path: '/skin',
                                data: null,
                            },
                        ],
                    },
                ],
            },
            meta: {
                seo: {
                    description: 'Blogs Page',
                },
            },
        },
        products: {
            name: 'Products',
            route: {
                url:
                    'https://wholisticbeautyboutique.com/collections/sale-products',
                isExternalLink: true,
                data: null,
            },
            meta: {
                seo: {
                    description: 'Products',
                },
            },
        },
    },
    socials: {
        instagram: 'instagram',
        facebook: 'facebook',
        discord: 'discord',
        pinterest: 'pinterest',
    },
};

export default config;

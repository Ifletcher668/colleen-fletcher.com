const config: Config = {
    pages: {
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
                        data: {
                            sentence: 'testing submenu length is too long?',
                        },
                    },
                    {
                        name: 'You, Me, and the Trees',
                        path: '/you-me-and-the-trees',
                        data: {
                            sentence: 'testing submenu length is too long?',
                        },
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
                        path: '/tuesday-tips',
                        data: {
                            sentence: 'testing submenu length is too long?',
                        },
                    },
                    {
                        name: 'Classes and Workshops',
                        path: '/you-me-and-the-trees',
                        data: {
                            sentence: 'testing submenu length is too long?',
                        },
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
    },
};

export default config;

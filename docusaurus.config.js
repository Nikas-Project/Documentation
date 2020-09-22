module.exports = {
    title: "نیکاس",
    tagline: "مستندات نیکاس",
    url: "https://nikasproject.ir",
    baseUrl: "/",
    onBrokenLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "formgir",
    projectName: "documentation",
    themeConfig: {
        colorMode: {
            defaultMode: "light",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/dracula"),
        },
        navbar: {
            title: "مستندات نیکاس",
            logo: {
                alt: "Logo",
                src: "img/Logo.jpg",
            },
            items: [
                {
                    href: "https://github.com/Nikas-Project",
                    label: "گیت هاب",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            logo: {
                alt: "Nikas ©",
                src: "img/logo-footer.png",
            },
            copyright: `.:: Designed For Better World - Nikas © ::.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    routeBasePath: "/",
                    editUrl:
                        "https://github.com/Nikas-Project/Documentation/tree/master/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/Nikas-Project/Documentation/tree/master/blog/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
                sitemap: {
                    cacheTime: 600 * 1000,
                    changefreq: "weekly",
                    priority: 0.5,
                },
            },
        ],
    ],
    plugins: ["docusaurus-plugin-sass"],
};

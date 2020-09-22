module.exports = {
    title: "فرم گیر",
    tagline: "مستندات فرم گیر",
    url: "https://formg.ir",
    baseUrl: "/",
    onBrokenLinks: "throw",
    favicon: "img/favicon.ico",
    organizationName: "formgir",
    projectName: "documentation",
    themeConfig: {
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        prism: {
            theme: require("prism-react-renderer/themes/github"),
            darkTheme: require("prism-react-renderer/themes/dracula"),
        },
        navbar: {
            title: "مستندات فرم گیر",
            logo: {
                alt: "Logo",
                src: "img/logo.png",
            },
            items: [
                {
                    href: "http://gsm.ir",
                    label: "حساب کاربری",
                    position: "right",
                },
                {
                    href: "http://gsm.ir",
                    label: "گیت هاب",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            logo: {
                alt: "Arash Hatami",
                src: "img/logo-footer.png",
            },
            copyright: `.:: Designed For Better World ::.`,
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
                        "https://github.com/Formgir/Documentation/tree/master/",
                },
                blog: {
                    showReadingTime: true,
                    editUrl:
                        "https://github.com/Formgir/Documentation/tree/master/blog/",
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

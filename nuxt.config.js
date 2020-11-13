import colors from 'vuetify/es5/util/colors';

export default {
    // Target (https://go.nuxtjs.dev/config-target)
    target: 'static',

    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        titleTemplate: '%s - NuxtJS Project',
        title: 'NuxtJS Starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
            { name: 'theme-color', content: '#ffffff' },
        ],
        link: [{ rel: 'apple-touch-icon', size: '57x57', href: '/favicon/apple-icon-57x57.png' }],
        link: [{ rel: 'apple-touch-icon', size: '60x60', href: '/favicon/apple-icon-60x60.png' }],
        link: [{ rel: 'apple-touch-icon', size: '72x72', href: '/favicon/apple-icon-72x72.png' }],
        link: [{ rel: 'apple-touch-icon', size: '76x76', href: '/favicon/apple-icon-76x76.png' }],
        link: [{ rel: 'apple-touch-icon', size: '114x114', href: '/favicon/apple-icon-114x114.png' }],
        link: [{ rel: 'apple-touch-icon', size: '120x120', href: '/favicon/apple-icon-120x120.png' }],
        link: [{ rel: 'apple-touch-icon', size: '144x144', href: '/favicon/apple-icon-144x144.png' }],
        link: [{ rel: 'apple-touch-icon', size: '152x152', href: '/favicon/apple-icon-152x152.png' }],
        link: [{ rel: 'apple-touch-icon', size: '180x180', href: '/favicon/apple-icon-180x180.png' }],
        link: [{ rel: 'icon', type: 'image/png', size: '192x192', href: '/favicon/android-icon-192x192.png' }],
        link: [{ rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon/favicon-32x32.png' }],
        link: [{ rel: 'icon', type: 'image/png', size: '96x96', href: '/favicon/favicon-96x96.png' }],
        link: [{ rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon/favicon-16x16.png' }],
        link: [{ rel: 'manifest', href: '/favicon/manifest.json' }],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: ['~/assets/scss/styles.scss'],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/dotenv',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
        'nuxt-i18n',
    ],

    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
    vuetify: {
        treeShake: true,
        customVariables: ['~/assets/scss/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},

    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                dir: 'ltr',
            },
        ],
        defaultLocale: 'en',
        noPrefixDefaultLocale: true,
        vueI18n: {
            fallbackLocale: 'en',
            messages: {
                en: require('./locales/en-US.json'),
            },
        },
    },

    dotenv: {
        /* module options */
    },
};

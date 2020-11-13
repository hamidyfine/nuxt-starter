<template>
    <v-app>
        <v-app-bar fixed app>
            <v-toolbar-title v-text="title" />
        </v-app-bar>

        <v-main>
            <nuxt />
        </v-main>

        <v-footer app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        name: 'DefaultLayout',
        data() {
            return {
                title: 'Vuetify.js',
            };
        },
    };
</script>

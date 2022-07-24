<template>

    <!-- Site Loader -->

    <!-- Notification Toasts -->
    <Loading/>
    <!-- <Toasts /> -->

    <!-- Show Dashboard App -->
    <MainApp v-if="this.$store.getters.auth.authenticated == true" />

    <!-- Show Authentication APP -->
    <AuthApp v-if="this.$store.getters.auth.authenticated != true" />

</template>

<script>

    // Import apps
    import Toasts from './views/components/Toasts.vue';
    import Loading from './views/components/Loading.vue';
    import AuthApp from './views/Auth/Master.vue';
    import MainApp from './views/layout/Master.vue';

    export default {
        name: 'App',
        data() {
           
            return {
                
            };
        },
        components: {
            Loading,
            AuthApp,
            MainApp,
            // Toasts
        },
        created() {
            //  console.log(this.$store.getters.authenticated)
        },
    }
</script>
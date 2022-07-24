<template>
        <div class="wrapper">
                <Header />
                <Sidebar />
                <div  class="content-wrapper">
                    <router-view></router-view>
                </div>

                
                <Footer />
        
        </div>
</template>


<script>

// Import Layout
    import Header from './common/Header';
    import Footer from './common/Footer';
    import Sidebar from './common/Sidebar';

    export default {

        components: {
            Header,
            Footer,
            Sidebar
        },
        data() {
            return {
            };
        },
        mounted() {
            console.log( "main app" );
        },
    };
</script>
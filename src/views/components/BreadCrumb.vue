<template>

    <div class="breadcrum">
        <ul>
            <li v-if="link1">
                <span v-if="link1.url">
                    <router-link :to="link1.url"> {{ link1.title }} </router-link>
                </span>
                <span v-else>
                    <span> {{ link1.title }} </span>
                </span>
            </li>

            <!-- Show arrow -->
            <li v-if="link2">
                <img src="assets/images/breadcrum_arrow.png" alt="" />
            </li>
            
            <li v-if="link2">
                <span v-if="link2.url">
                    <router-link :to="link2.url"> {{ link2.title }} </router-link>
                </span>
                <span v-else>
                    <span> {{ link2.title }} </span>
                </span>
            </li>

            <!-- Show arrow -->
            <li v-if="link3">
                <img src="assets/images/breadcrum_arrow.png" alt="" />
            </li>

            <li v-if="link3">
                <span v-if="link3.url">
                    <router-link :to="link3.url"> {{ link3.title }} </router-link>
                </span>
                <span v-else>
                    <span> {{ link3.title }} </span>
                </span>
            </li>
            
        </ul>
    </div>

</template>

<script>

export default 
{
    props: {
        link1: { type: Object },
        link2: { type: Object },
        link3: { type: Object },
    },
    data() {
        return {
           
        };
    },
    watch: {
        // pagination: function() 
        // {
        //     this.setButtons();
        // }
    },
    methods:
    {
        
    },
    mounted() {
        // console.log( "Crum", this.link1 );
    },
};
</script>
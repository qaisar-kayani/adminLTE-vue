<template>

    <div class="fixed_block" v-if="this.$store.getters.getToasts">
        <div 
            v-for="(toast, index) in this.$store.getters.getToasts" :key="index"
            :class="'toast_block ' + toast.type + ' right_btm'" :id="'mytoast-'+index">
            
            <div class="icon">
                <img v-if="toast.type == 'success'" src="assets/images/sucess-icon.png" alt="">
                <img v-else-if="toast.type == 'warning'" src="assets/images/error_whtite-icon" alt="">
                <img v-else-if="toast.type == 'error'" src="assets/images/errror_whtite-icon.png" alt="">
                <img v-else-if="toast.type == 'info'" src="assets/images/errror_whtite-icon.png" alt="">
            </div>
            
            <div class="txt">

                <span v-if="toast.type == 'success'"> Success! </span>
                <span v-else-if="toast.type == 'warning'"> Warning! </span>
                <span v-else-if="toast.type == 'error'"> Error! </span>
                <span v-else-if="toast.type == 'info'"> Info! </span>
                
                <strong> {{ toast.message }} </strong>
            </div>
            
        </div>
    </div>

</template>


<script>

export default {

    data() {
        return {
            
        };
    },
    mounted() {
        
    },
};
</script>
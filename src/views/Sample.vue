<template>
    <div>

    </div>
</template>


<script>

export default 
{
    data() 
    {
        return {
            currentComponent: "CompletedTransactions",
            action: "fetchPaymentLinkTransactions"
        };
    },
    methods: {
        async getFilteredData()
        {
            await this.$store.dispatch("fetchTransactions", {});
        },
    },
    mounted() 
    {
        
    },
    created()
    {
        this.resetFilters();
        this.getFilteredData();
    },
};
</script>
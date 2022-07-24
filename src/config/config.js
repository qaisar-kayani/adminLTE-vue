export const config = 
{
    data() {
        return {};
    },
    
    mounted() {},

    methods: 
    {
        getConfig(property) 
        {
            if(property == "PER_PAGE")
            {
                return process.env.VUE_APP_PER_PAGE ?? 10;
            }
            else if(property == "TABLE_ROWS")
            {
                return [ 10, 25, 50, 100, 200 ];
            }
            else if(property == "TOAST_TIME_OUT")
            {
                return process.env.TOAST_TIME_OUT ?? 2000;
            }
        },

        
    },
};
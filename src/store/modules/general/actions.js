import { request } from "@/mixins/request";

export default 
{
    async locading(context, payload) 
    {
        context.commit("setIsLoading", payload);
       
    },
};
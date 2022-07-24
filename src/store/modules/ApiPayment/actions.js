import { request } from "@/mixins/request";

export default 
{
    async fetchApiPayments(context, payload) 
    {
        const body = { ...context.getters.getFilters ,...payload };
        return await request.methods
            .makeRequest("POST", "api/v1/get-api-payments", body)
            .then(data => {
                context.commit("setApiPayments", data.data);
            });
    }
};

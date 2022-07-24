import { request } from "@/mixins/request";


export default 
{
    async fetchDashboardOverview(context, payload)
    {
        const body = { ...context.getters.getFilters ,...payload };
        return await request.methods.makeRequest("POST", "api/v1/get-dashboard-overview", body)
        .then(data => {
            context.commit("setDashboardOverview", data.data);
        });
    }
};
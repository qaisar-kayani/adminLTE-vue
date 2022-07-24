import { request } from "@/mixins/request";
export default
{
    async generateReport(context, payload) 
    {
        const body = { ...context.getters.getFilters ,...payload };
        return await request.methods.makeRequest("POST", "/api/v1/generate-report", body)
            .then(data => {
                if(data?.data?.data == null)
                {
                    context.dispatch("createToast", { type: "error", "message": "Report generation failed from server!" });
                }
                else
                {
                    window.open(data?.data?.url);
                }
                return data.data;
            });
    },

};
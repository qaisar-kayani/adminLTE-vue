import { request } from "@/mixins/request";

export default 
{
    async fetchMerchantAppSettings(context, payload)
    {
        return await request.methods.makeRequest("POST", "api/v1/get-merchant-app-settings", payload,false)
        .then(data => {
            context.commit("setMerchantAppSettings", data.data);
        });
    },
};
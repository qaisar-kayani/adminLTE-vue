import { request } from "@/mixins/request";


export default 
{
    async fetchWallets(context, payload)
    {
       return await request.methods.makeRequest("POST", "api/v1/get-wallet-list", payload)
        .then(data => {
            context.commit("setWallets", { ...data?.data });
            context.commit("setCurrentWallet", data?.data?.[0] ?? null );
            context.commit("setCurrentCurrency", data?.data?.[0]?.currency ?? null );
            return data;
        });
    },
    changeCurrentWallet(context, walletId)
    {
        for (var index in context.getters.getWallets) 
        {
            if( context.getters.getWallets[index].id == walletId )
                context.commit("setCurrentWallet", context.getters.getWallets[index] ?? null );

        }
    },
    async fetchDashboardFeatures(context, payload)
    {
       return await request.methods.makeRequest("POST", "api/v1/get-dashboard-feature-list", payload)
        .then(data => {
            context.commit("setDashboardFeatures", data?.data ?? {} );
        });
    },
    
};
export default 
{
    getIsLoading(state)
    {
        return state.isLoading;
    },
    getLastFetch(state)
    {
        return state.lastFetch;
    },
    getStores(state) 
    {
        return state.stores;
    },
    getAllowedCurrencies(state) 
    {
        return state.allowedCurrencies;
    },
    getAllowedPaymentMethods(state) 
    {
        return state.allowedPaymentMethods;
    },
};
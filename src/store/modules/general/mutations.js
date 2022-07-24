export default 
{
    setIsLoading(state, value) {
        state.isLoading = value;
    },
    setLastFetch(state, value) {
        state.lastFetch = value;
    },
    setStores(state, payload) 
    {
        state.stores = payload;
    },
    setAllowedCurrencies(state, payload) 
    {
        state.allowedCurrencies = payload;
    },
    setAllowedPaymentMethods(state, payload) 
    {
        state.allowedPaymentMethods = payload;
    },
};

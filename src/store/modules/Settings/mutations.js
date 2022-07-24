export default 
{
    setMerchantAppSettings(state, payload)
    {
        state.apiCredentials = payload?.[0];
    },
};

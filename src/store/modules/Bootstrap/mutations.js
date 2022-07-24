export default 
{
    setWallets(state, payload)
    {
        state.wallets = payload;
    },
    setCurrentWallet(state, payload)
    {
        state.currentWallet = payload;
    },
    setCurrentCurrency(state, payload)
    {
        state.currentCurrency = payload;
    },
    setDashboardFeatures(state, payload)
    {
        state.dashboardFeatures = payload;
    },
};
export default 
{
    getWallets(state)
    {
        return state.wallets;
    },
    getCurrentWallet(state)
    {
        return state.currentWallet;
    },
    getCurrentCurrency(state)
    {
        return state.currentCurrency;
    },
    getDashboardFeatures(state)
    {
        return state.dashboardFeatures;
    },
};
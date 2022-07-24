export default 
{
    setDashboardOverview(state, payload)
    {
        state.stats = payload?.stats;
        state.otherData = payload?.otherData;
    },
};
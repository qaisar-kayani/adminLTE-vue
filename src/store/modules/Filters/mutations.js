export default 
{
    setFilters(state, payload)
    {
        state.filters = {
            ...state.filters,
            ...payload,
        };
    },
    resetFilters(state, payload)
    {
        state.filters = {
            page: 1,
            perPage: process.env.VUE_APP_PER_PAGE ?? 10,
            search: null,
            ...payload,
        };
    },
};

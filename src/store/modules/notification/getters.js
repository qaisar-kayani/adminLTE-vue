export default 
{
    getNotifications(state)
    {
        return state.notifications.data
    },
    getNotificationsList(state)
    {
        return state.notifications
    },
    getTotalNotifications(state)
    {
        return state.totalNotifications
    },
    getToasts(state)
    {
        return state.toasts;
    }
};
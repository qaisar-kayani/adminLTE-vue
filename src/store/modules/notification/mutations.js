import { useToast } from "vue-toastification";
const toast = useToast();

// Use it!

export default 
{
    setNotifications(state, payload)
    {
        state.notifications = payload;
        state.totalNotifications = payload.data.length;
    },
    setToast(state, payload)
    {   
        // console.log(payload)
        if(payload.type=='success') {

            toast(`${payload.message}`);
        } else if(payload.type =='error') {
            toast.error(payload.message)
        }
        state.toasts.push(payload);
    },
    removeToast(state, id)
    {
        state.toasts = state.toasts.filter( (toast) => {
            if(toast.id != id)
                return toast;
        });
    }
};
import { request } from "@/mixins/request";


export default 
{
    async fetchNotifications(context, payload)
    {
        return await request.methods.makeRequest("POST", "api/v1/notifications", payload,false)
        .then(data => {
            
            if(data.code==200)
            {
                context.commit("setNotifications", { ...data.data }); 
            }
            return data
        });
    },
    createToast(context, payload)
    {   
        var toastId = Math.floor(Math.random() * 999999);
        context.commit("setToast", {...payload, id: toastId});
        setTimeout( () => {
            context.commit("removeToast", toastId);
        }, 2000);
    }
};
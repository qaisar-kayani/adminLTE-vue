import axios from "@/config/apiRequest.js";
import store from "../store";
import router from "../router";
import { globalHelpers } from "./globalHelpers";

export const request = 
{
    data() {
        return {};
    },
    
    mounted() {},

    methods: 
    {
        async makeRequest(requestType = "POST", url, data = {}, loader = true, showToast = false) 
        {
            // Trigger loading
            if(loader) globalHelpers.methods.setIsLoading(loader);

            let request = null;
            let response = {};
            switch (requestType) 
            {   
                case "GET":
                    request = axios.get(url, data);
                    break;
                case "POST":
                    request = axios.post(url, data);
                    break;
                case "PUT":
                    request = axios.put(url, data)
                    break
                case "DELETE":
                    request = axios.delete(url,data)
                    break
                default:
                    request = axios.post(url, data);
            }

            await request
            .then((resp) =>
            {     
                if(showToast)
                {
                    globalHelpers.methods.setToast(globalHelpers.methods.setUpToast(resp));
                }
                if( resp.status == 401 )
                {
                    store.commit("logout", false);
                    router.push({ name: "Login" });
                    response = { data:{ data: null, paginationData: null }, status: 0 };
                }
                else if( resp.status == 400 )
                {
                    response = { data:{ data: null, paginationData: null }, status: 1 };
                }
                else if( resp.status == 404 )
                {
                    response = { data:{ data: null, paginationData: null }, status: 1 };
                }
                else
                {
                    response = { ...resp.data, status: 1 };
                }
                response.code =resp.status
                
            })
            .catch((error) => 
            {
                if( error.response.status == 401 )
                {
                    store.commit("logout", false);
                    router.push({ name: "login" });
                }
                if(showToast) {
                    globalHelpers.methods.setToast(globalHelpers.methods.setUpToast(error.response));
                }
                response = { data:{ data: null, paginationData: null }, status: 0 };
            })
            .finally(() => 
            {
                globalHelpers.methods.setIsLoading(false);
            });
            return response;
        },
    },
};

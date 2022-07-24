import axios from "axios";

const defaultOptions = {
    baseURL: process.env.VUE_APP_APP_URL,
    headers: {
        // "Access-Control-Allow-Origin": "*",
        // "Content-Type": "application/json",
    },
};

const MAX_REQUESTS_COUNT = 1;
const INTERVAL_MS = 10;
let PENDING_REQUESTS = 0;

const instance = axios.create(defaultOptions);

// Request interceptor
instance.interceptors.request.use(
    function(config) 
    {
        return new Promise((resolve, reject) => {
            
            let interval = setInterval(() => 
            {
                if(PENDING_REQUESTS < MAX_REQUESTS_COUNT ) 
                {
                    PENDING_REQUESTS++
                    clearInterval(interval);

                    // Before request sent
                    // Inject in body

                    // Update accessToken in localStorage
                    if (localStorage.getItem("accessToken")) {
                        config.headers.Authorization =`Bearer `+ localStorage.getItem("accessToken");
                    }

                    resolve(config)
                }
            }, INTERVAL_MS)
        });
        
    },
    function(error) {
        // Do something with request error

        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    function(response) 
    {
        // Update accessToken in localStorage
        if (response.data.data.token) {
            localStorage.setItem("accessToken", response.data.data.token);
        }
        PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
        return response;
    },
    function(error) 
    {
        PENDING_REQUESTS = Math.max(0, PENDING_REQUESTS - 1);
        return Promise.reject(error);
    }
);

export default instance;

const Dotenv = require("dotenv-webpack");
module.exports = {
    configureWebpack: {
        plugins: [new Dotenv()],
    },
    devServer: {
        proxy: process.env.VUE_APP_API_URL,
    },
    
    
    
};
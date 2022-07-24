import { request } from "@/mixins/request";

export default 
{
	setAuthenticated(context, payload) 
    {
		context.commit("setAuthenticated", { payload });
	},
    
	async loginUser(context, payload) 
    {
		return await request.methods.makeRequest("POST", "api/login", payload, true, true)
			.then((data) => {
				if (data.code == 200) {
					context.commit("loginUser", { ...data });
				}
				return data;
			});
	},
    
	logout(context, payload) 
    {
		context.commit("logout", { ...context, ...payload });
		localStorage.removeItem('accessToken')
	},

	authenticated(context, payload) 
    {
		context.commit("authenticated", { ...context, ...payload });
	}
};

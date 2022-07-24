import store from "../store";
import moment from "moment";

export const globalHelpers = 
{
    data() {
        return {};
    },
    
    mounted() {},

    methods: 
    {
        // axios loading
        setIsLoading(value) 
        {
            store.commit("setIsLoading", value);
        },
        setToast(toast)
        {
            store.dispatch("createToast", toast);
        },
        setUpToast(data)
        {   
            var type = null;
            if(data.status == 200)
                type = "success";
            else if(data.status == 401)
                type = "error";
            else if(data.status == 400)
                type = "error";
            else
                type = "error";
            
            return {
                type: type,
                message: data.data.message
            };
        },
        
        // Global filters
        resetFilters(filters = {})
        {
            store.commit("resetFilters", filters);
        },
        async setFilter(key, value, action = false)
        {
            this.$store.commit("setFilters", { [key]: value } );
            if(action)
                await this.$store.dispatch(action, {});
        },

        // Date-time formatter
        vpDate(date, format = "DD-MM-YYYY")
        {
            return moment(date).format(format);
        },
        vpNum(number, fix = 2)
        {
            return new Intl.NumberFormat().format(Number(number).toFixed(fix));
        },
        _setObject(object, key, value =  null)
        {
            object[key] = value;
            return new Proxy(object, {});
        },
		copyText(Text) 
        {
			const el = document.createElement("textarea");
			el.value = Text;
			el.setAttribute("readonly", "");
			el.style.position = "absolute";
			el.style.left = "-9999px";
			document.body.appendChild(el);
			el.select();
			document.execCommand("copy");
			document.body.removeChild(el);
            
            store.dispatch("createToast", {
                type: "success",
                message: "Text copied to clipboard!"
            });
		},
        vpTransactionTypes(forRole="merchant")
        {
            if(forRole == "merchant")
            {
                return [
                    { id: 2, name: "Withdrawal" },
                    { id: 5, name: "Settlement" },
                    { id: 6, name: "Refund" },
                    { id: 8, name: "Payment Link" },
                    { id: 9, name: "API Payment" },
                    { id: 11, name: "Adjustment" },
                ];
            }
        },
        vpEcho(text, limit=100)
        {
            var suffix = "";
            if(text?.length > limit)
                suffix = "...";

            return text?.substring(0, limit)+suffix;
        },
        vpTransactionStatus()
        {
            return [
                { id: 0, name: "Failed" },
                { id: 1, name: "Completed" },
                { id: 2, name: "Pending" },
            ];
        },
        vpPaymentLinkStatus(status)
        {
            if(status == 0)
                return "Deactive";
            else if(status == 1)
                return "Active";
            else if(status == 2)
                return "Paused";
            else if(status == 3)
                return "Suspended";
            else
                return "Invalid";
        },
        vpReportTypes()
        {
            return [
                { name: "Transactions", type: "transaction" },
                { name: "Payment Links", type: "payment_links" },
                { name: "Refunds", type: "refunds" },
                { name: "Settlements", type: "settlements" },
            ];
        },

        // Validation helpers
        _vClass(validator, field)
        {
            if(validator?.[field]?.$errors?.length > 0)
            {
                return "is-invalid";
            }
            return "";
        },
        _vError(validator, field)
        {
            if(validator?.[field]?.$errors?.length > 0)
            {
                return true;
            }
            return false;
        },
        _vErrorMessage(validator, field)
        {
            if(validator?.[field]?.$errors?.length > 0)
            {
                return validator[field].$errors[0].$message;
            }
            return "";
        }
    },
};

import Pagination from "@/views/components/Pagination";
import DateRange from "@/views/components/DateRange";
import Filters from "@/views/components/Filters";
import BreadCrumb from "@/views/components/BreadCrumb";
import Toasts from "@/views/components/Toasts";

export const registerComponents = (app) => 
{
    app.component('Pagination', Pagination);
    app.component('BreadCrumb', BreadCrumb);
    app.component('DateRange', DateRange);
    app.component('Filters', Filters);
    app.component('Toasts', Toasts);
};
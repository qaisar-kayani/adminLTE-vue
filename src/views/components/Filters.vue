<template>

    <div class="title_block">
        <div class="right_block">
            
            <!-- Search Bar -->
            <div class="search_bar marg-right" v-if="showSearch">
                <input class="search-input" 
                    @keyup.enter="this.setFilter('search', $event.target.value, action)" 
                    placeholder="search" 
                />
            </div>
            
            <!-- Dropdown Filters -->
            <div class="filters marg-right" v-if="showFilters">
                <a href="javascript:void(0)" class="drop_down-link">
                    <span>
                        <img src="assets/images/filter-icon.png" alt="" />
                        Filters
                    </span>
                </a>
            </div>
            
            <!-- Show no of rows -->
            <div class="show_entries marg-right" v-if="showTableRows">
                <strong>Show entries</strong>
                <select id="" class="drop_down-link select-field" @change="setFilter('perPage', $event.target.value, action)">
                    <option 
                        v-for="(rows, index) in this.getConfig('TABLE_ROWS')" 
                        :key="index" :value="rows">
                        {{ rows }}
                    </option>
                </select>       
            </div>

            <!-- Exports -->
            <div class="export" v-if="showExports">
                <a href="javascript:void(0)" class="drop_down-link">Export </a>
                <div class="drop_down_content expor-detail">

                    <a href="#" @click.prevent="generateReport('pdf')" class="link">
                        <img src="assets/images/export_pdf.png" alt="" /><span>Export to PDF</span>
                    </a>

                    <a href="#" @click.prevent="generateReport('excel')" class="link">
                        <img src="assets/images/export_sheets.png" alt="" /><span>Export to Excel</span>
                    </a>
                    <div class="arrow-up"></div>

                </div>
            </div>

        </div>
    </div>

    <!-- Default Slot -->
    <slot></slot>

</template>

<script>

export default 
{
    props: 
    {
        action: { default: true },
        showSearch: { default: true },
        showFilters: { default: true },
        showTableRows: { default: true },
        showExports: { default: true },
        export: { default: {} }
    },
    created() {
    },
    data() {
       
        return {
           
        };
    },
    watch: {
        // pagination: function() 
        // {
        //     this.setButtons();
        // }
    },
    methods:
    {
        generateReport(type)
        {
            this.$store.dispatch("generateReport", {
                ...this.export,
                exportAs: type,
            });
        }
    },
    mounted() {
        // console.log( "Slot mounted" );
    },
};
</script>
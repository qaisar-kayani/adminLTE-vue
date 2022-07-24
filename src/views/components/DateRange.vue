<template>

    <li class="w-3 marg-right">
        <div class="fields">
            
            <v-date-picker v-model="startDate" mode="date">
                <template v-slot="{ inputValue, inputEvents }">

                    <div class="field">
                        <label class="label">Date Range</label>
                        <input
                            :value="inputValue"
                            v-on="inputEvents"
                            placeholder="10/06/2022, 05:59PM"
                            class="input-field calendar-field"
                        />
                    </div>
                    
                </template>
            </v-date-picker>
            
            <div class="middle">to</div>

            <v-date-picker v-model="endDate" mode="date">
                <template v-slot="{ inputValue, inputEvents }">

                    <div class="field">
                        <div class="clear">
                            <a href="#" @click.prevent="()=>{startDate = null, endDate = null}">Clear</a>
                        </div>
                        <input
                            :value="inputValue"
                            v-on="inputEvents"
                            placeholder="10/06/2022, 05:59PM"
                            class="input-field calendar-field"
                        />
                    </div>
                    
                </template>
            </v-date-picker>
            
        </div>
    </li>

</template>

<script>

export default 
{
    props: [
        "action",
    ],
    data() {
        return {
            startDate: null,
            endDate: null
        };
    },
    watch: 
    {
        startDate: function (newValue) 
        {
            this.setFilter("startDate", newValue);
            if(newValue !== null && this.endDate != null)
            {
                this.getRangeDate();
            }
        },
        endDate: function (newValue) 
        {
            this.setFilter("endDate", newValue);
            if(newValue !== null && this.startDate != null)
            {
                this.getRangeDate();
            }
        }
    },
    methods:
    {
        getRangeDate()
        {
            this.$store.dispatch(this.action, {});
        }
    },
    mounted() {
        // console.log( "Slot mounted" );
    },
};
</script>
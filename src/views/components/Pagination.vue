<template>
    <div class="showing_result" v-if="pagination">
        <div class="data">
            <p>Showing {{ pagination.perPage }} on page {{ pagination.currentPage }} of total {{ pagination.total }}</p>
            <a href="#" class="back next" v-if="prev">
                <img src="assets/images/left_arrow.png" @click.prevent="paginate(this.pagination.currentPage-1)" alt=""/>
            </a>
            <a href="#" class="next" v-if="next">
                <img src="assets/images/right_arrow.png" @click.prevent="paginate(this.pagination.currentPage+1)" alt=""/>
            </a>
        </div>
    </div>
</template>

<script>

export default 
{
    props: [
        "pagination",
        "fetchAction",
    ],
    data() {
        return {
            next: false,
            prev: false,
           
        };
    },
    watch: {
        pagination: function() 
        {
            this.setButtons();
        }
    },
    methods:
    {
        paginate(page)
        {   
            this.$store.dispatch(this.fetchAction, {
                page: page,
            });
            this.setButtons();
        },
        setButtons()
        {
            if(this.pagination)
            {
                // Next
                if( (this.pagination.currentPage * this.pagination.perPage) < this.pagination.total )
                {
                    this.next = true;
                }
                else
                {
                    this.next = false;
                }

                // Previous
                if( this.pagination.currentPage == 1 )
                {
                    this.prev = false;
                }
                else
                {
                    this.prev = true;
                }
            }
        }
    },
    mounted() {
        // console.log( "Pagination mounted!" );
        this.setButtons();
    },
};
</script>
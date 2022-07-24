<template lang="">
<section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Service</h1>
          </div>
          <div class="col-sm-6">
            <router-link :to="{name:'Service Add'}"  class="btn btn-sm btn-success float-right mr-5"><i class="fas fa-plus"></i></router-link>
          </div>
          {{this.$store.getters.getIsLoading}}
        </div>
      </div><!-- /.container-fluid -->
    </section>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">
                Service Mangement
              </h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
              <table id="example2" class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Status</th>
                    <th>Timestamp</th>
                    <th>Upadated at</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr v-for="(item,index) in result" :key="index">
                    <td>{{item.name}}</td>
                    <td>{{item.slug}}</td>
                    <td>{{(item.status)?'Active':'In-active'}}</td>
                    <td>{{item.created_at}}</td>
                    <td>{{item.updated_at}}</td>
                    <td>
                      <router-link :to="{name:'Service Edit',params:{id:item.id}}" class="btn btn-info btn-sm">
                        <i class="fas fa-pencil-alt"></i>Edit
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { request } from "@/mixins/request";
export default {
    data() {
        return {
            result:[]
        }
    },
    created() {
        this.getResult()
    },
    methods: {
        getResult(page=1) {
          request.methods.makeRequest("GET", "api/eservice/list")
            .then(res => {
                console.log(res)
                if (res.code === 200) {
                    this.result =  res.data
                }
            });
        }
    },
};
</script>

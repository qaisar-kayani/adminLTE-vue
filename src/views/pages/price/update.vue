<template lang="">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>{{pageTitle}} </h1>
        </div>
        <div class="col-sm-6">
          <router-link
            :to="{ name: 'price' }"
            class="btn btn-sm btn-success float-right mr-5"
            ><i class="fas fa-arrow-left"></i
          ></router-link>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
  <section class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Edit {{pageTitle}}</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form ref="formData" @submit.prevent="addRecord()">
              <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputEmail1"> Name</label>
                          <input
                            type="text"
                            class="form-control"
                            v-model="form.name"
                            placeholder="Enter Service"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Service </label>
                          <select class="form-control" v-model="form.e_services_id">
                           <option v-for="(item, index) in serviceList" :key="index"  :value="item.id">{{item.name}}</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label for="exampleInputEmail1">Price</label>
                          <input
                            type="number"
                            class="form-control"
                            v-model="form.price"
                            placeholder="Enter Service"
                          />
                        </div>
                      </div>
                </div>
              </div>
              <!-- /.card-body -->

              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Submit</button>
              </div>
            </form>
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
      pageTitle: "Price",
      form: {
        name: '',
        price: 0,
        e_services_id: ''
      },
      serviceList: {}
    };
  },
  created() {
    this.getServiceList()
    this.getResult()
  },
  methods: {
    getResult() {
      request.methods.makeRequest("GET", `api/pricelist/list/${this.$route.params.id}`)
        .then(res => {
          if (res.code === 200) {
            this.form =  res.data[0]
            }
        });
    },
    addRecord() {
      request.methods.makeRequest("PUT", `api/pricelist/update/${this.$route.params.id}`,this.form,false,true).then((res) => {
        if (res.code === 200) {
           this.$router.push({name:'price'})
        }
      });
    },
    getServiceList(page=1) {
          request.methods.makeRequest("GET", "api/eservice/list")
            .then(res => {
                console.log(res)
                if (res.code === 200) {
                    this.serviceList =  res.data
                    if(this.serviceList) {
                      this.form.e_services_id = this.serviceList[0].id
                    }
                }
            });
        }
  },
};
</script>

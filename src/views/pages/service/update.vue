<template lang="">
  <section class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1>Service</h1>
        </div>
        <div class="col-sm-6">
          <router-link
            :to="{ name: 'Service' }"
            class="btn btn-sm btn-success float-right mr-5"
            ><i class="fas fa-arrow-left"></i
          ></router-link>
        </div>
      </div>
    </div>
    <!-- /.container-fluid -->
  </section>
  <section class="content" >
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Add Service</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form ref="formData" @submit.prevent="addRecord()">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                      <label for="exampleInputEmail1">Service Name</label>
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
                        <label for="exampleInputEmail1">Email </label>
                        <input
                          type="email"
                          class="form-control"
                          v-model="form.email_to"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                        <label for="exampleInputEmail1">Whats App</label>
                        <input
                          type="text"
                          class="form-control"
                          v-model="form.whatsapp_to"
                          placeholder="Enter Whats App numer"
                        />
                      </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Sub Service</label>
                  <i class="fas fa-plus-circle btn-success ml-2 btn-sm"
                        @click="add()"
                        v-show="form.e_service_fields?.length ===0 "
                      ></i>
                </div>
                <div
                  class="row"
                  v-for="(input, k) in form.e_service_fields"
                  :key="k"
                >
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for=""> Service Field</label>

                      <input
                        required
                        type="text"
                        v-model="input.name"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="">Sub Service Name</label>
                      <select v-model="input.type" class="form-control">
                        <option value="text">Text</option>
                        <option value="radio">Radio</option>
                        <option value="checkbox">Checkbox</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="form-group">
                      <label for="">Required</label>
                      <select v-model="input.is_required" class="form-control">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-2" style="margin-top: 35px">
                    <span>
                      <i
                        class="fas fa-minus-circle btn-danger btn-sm"
                        @click="remove(k)"
                        v-show="k || (!k && form.e_service_fields.length )"
                      ></i>
                      <i
                        class="fas fa-plus-circle btn-success ml-2 btn-sm"
                        @click="add(k)"
                        v-show="k == form.e_service_fields.length - 1"
                      ></i>
                    </span>
                  </div>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Sub Service</label>
                  <i class="fas fa-plus-circle btn-success ml-2 btn-sm"
                        @click="addSubservice(0)"
                        v-show="form.sub_services?.length ===0 "
                      ></i>
                </div>
                <div
                  class="row"
                  v-for="(input, k) in form.sub_services"
                  :key="k"
                >
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label for="">Sub Service Name</label>

                      <input
                        required
                        type="text"
                        v-model="input.name"
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="form-group">
                      <label for="">Required</label>
                      <select v-model="input.status" class="form-control">
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-2" style="margin-top: 35px">
                    <span>
                      <i
                        class="fas fa-minus-circle btn-danger btn-sm"
                        @click="removeSubService(k)"
                        v-show="k || (!k && form.sub_services.length )"
                      ></i>
                      <i
                        class="fas fa-plus-circle btn-success ml-2 btn-sm"
                        @click="addSubservice(k)"
                        v-show="k == form.sub_services.length - 1"
                      ></i>
                    </span>
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
      //form: {
        // name: "",
        // status: 1,
        // e_service_fields: [
        //   {
        //     name: "",
        //     type: "text",
        //     is_required: 1,
        //   },
        // ],
        // sub_services:[]
     // },
     form:{}
    };
  },
  created() {
    this.getResult()
  },
  methods: {
    getResult() {
      request.methods.makeRequest("GET", `api/eservice/list/${this.$route.params.id}`)
        .then(res => {
          if (res.code === 200) {
            this.form =  res.data[0]
            }
        });
    },
    add() {
      this.form.e_service_fields.push({
        name: "",
        type: "text",
        is_required: 1,
      });
    },

    removeSubService(index) {
      this.form.sub_services.splice(index, 1);
    },
    addSubservice() {
      this.form.sub_services.push({
        name: "",
        status:1
      });
    },

    remove(index) {
      this.form.e_service_fields.splice(index, 1);
    },
    addRecord() {
      request.methods.makeRequest("PUT", "api/eservice/update/"+this.$route.params.id,this.form,false,true).then((res) => {
        if (res.code === 200) {
           this.$router.push({name:'Service'})
        }
      });
    }
  },
};
</script>

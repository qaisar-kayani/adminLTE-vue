<template>
  <div class="hold-transition login-page">
    <div class="login-box">
      <div class="login-logo">
        <a href=""><b>Admin</b>LTE</a>
      </div>
      <!-- /.login-logo -->
      <div class="card">
        <div class="card-body login-card-body">
          <p class="login-box-msg">Sign in to start your session</p>

          <form @submit.prevent="loginUser">
            <div class="input-group mb-3">
              <input
                placeholder="Enter your email ID"
                v-model="_validator.login.email.$model"
                :class="'form-control ' + _vClass(_validator.login, 'email')"
              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input
                type="password"
                v-model="_validator.login.password.$model"
                placeholder="Enter your password"
                :class="'form-control ' + _vClass(_validator.login, 'password')"

              />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <!-- /.social-auth-links -->

          <!-- <p class="mb-1">
        <a href="forgot-password.html">I forgot my password</a>
      </p>
      <p class="mb-0">
        <a href="register.html" class="text-center">Register a new membership</a>
      </p> -->
        </div>
        <!-- /.login-card-body -->
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  data() {
    return {
      auth: {},
      fullPage: true,
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    loginUser() {
      this._validator.$validate();
      if (!this._validator.$error) {
        let data = {
          email: this.login.email,
          password: this.login.password,
        };
        // send to store
        this.$store.dispatch("loginUser", data).then((res) => {
          if (res.code == 200) {
            this.$router.push({name:'home'})
          } else  {
            this.$router.push({name:'Login'});
          }
        });
      }
    },
  },
  setup() {
    return { _validator: useVuelidate() };
  },
  validations() {
    return {
      login: {
        email: {
          required,
          email,
        },
        password: {
          required,
          minLength: minLength(6),
        },
      },
    };
  },
};
</script>

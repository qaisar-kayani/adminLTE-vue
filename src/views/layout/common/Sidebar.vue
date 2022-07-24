<template>
 <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <!-- <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div> -->

      <!-- SidebarSearch Form -->
      <!-- <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div> -->

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          
          <li class="nav-item">
            <router-link  active-class="active" class="nav-link" :to="{name:'home'}">
                <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Deshobard
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  active-class="active" class="nav-link" :to="{name:'price'}">
                <i class="nav-icon fas  fa-money-bill-alt"></i>
              <p>
                Price
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link  active-class="active" class="nav-link" :to="{name:'Service'}">
                <i class="nav-icon fas fa-server"></i>
              <p>
                Service
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <a  class="nav-link" @click="logout()">
                <i class="fas fa-sign-out-alt"></i>
              <p>
                Logout
              </p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
<script>
export default {
    data() 
    {

    },
    methods:
    {
        logout() {
            this.$store.dispatch("logout");
            this.$router.push({name:'Login'});
        }
    },
    created() {
        
    },
    async mounted()
    {  
        
    }

};
</script>

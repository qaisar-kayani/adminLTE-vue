<template>
    <div class="main_content">
        <div class="inner_block">
            
            <div class="profile-detail">
            
                <div class="icon"> <img src="assets/images/Account-lg.png" alt=""></div>

                <div class="text">
                    <div class="name">
                        {{ this.$store.getters.auth?.user?.name }}
                        <a class="edit">
                            <img src="assets/images/edit-icon.png" alt="">
                            <div class="hide">Edit Profile</div>
                        </a>
                    </div>

                    <div class="acc_no">A/c No.1000971123456789</div>
                    <div class="verified"><img src="assets/images/green-tick.png" alt="">KYC Verified
                    <div class="logged">
                        <img src="assets/images/location-icon.png" alt="">Logged in from Dubai</div>
                    </div>
                </div>
            
            
            </div>
            
            <div class="tabs_block pd-lft-0">
                <div class="tab">
                    <button data-tab="completed" class="tablinks active" > 
                        Account <span class="resp_hide">Settings</span>
                    </button>

                    <button data-tab="pending" class="tablinks"  >
                        Security <span class="resp_hide"> Settings</span>
                    </button>

                    <button data-tab="info" class="tablinks" >
                        VaultsPay  <span class="resp_hide"> Info</span>
                    </button>
                </div>
                <hr>
                
            </div>
            
            <div class="main_table_block">
            
                <div id="completed" class="tabcontent" style="display: block">
                    <div class="setting_detail lg-card">
                    
                        <ul class="three_col-box">
                            
                            <li class="small-card">
                                <router-link to="/settings/api-key">
                                    <img src="assets/images/api-icon.png" alt="">
                                    <span>Api Keys</span>	
                                </router-link>
                            </li>	
                                
                            <li class="small-card">
                                <a >
                                    <img src="assets/images/kfc-icon.png" alt="">
                                    <span>KYC Details</span>	
                                </a>
                                </li>
                                
                            <li class="small-card">
                                <router-link to="/settings/wallets">
                                    <img src="assets/images/your_wallet-icon.png" alt="">
                                    <span>Your Wallets</span>	
                                </router-link>
                            </li>	
                                
                            <li class="small-card">
                                <a >
                                    <img src="assets/images/wallet_card-icon.png" alt="">
                                    <span>Cards</span>	
                                </a>
                            </li>
                                
                                <li class="small-card">
                                <a @click="myClickEvent">
                                    <img src="assets/images/notification_setting-icon.png" alt="">
                                    <span>Notification settings</span>	
                                </a>
                            </li>
                            
                        </ul>
                    
                    </div>
                    
                </div>
                
                <div id="pending" class="tabcontent" >
                    <div class="setting_detail lg-card">
                    
                        <ul class="three_col-box">
                        
                            <li class="small-card">
                                <a >
                                    <img src="assets/images/your_device-icon.png" alt="">
                                    <span>Your devices</span>	
                                </a>
                            </li>
                                
                            <li class="small-card">
                                <router-link to="/settings/change-passcode">
                                    <img src="assets/images/change_passcode-icon.png" alt="">
                                    <span>Change Passcode</span>	
                                </router-link>
                            </li>	
                                
                            <li class="small-card">
                                <router-link to="/settings/change-password">
                                    <img src="assets/images/change_password.png" alt="">
                                    <span>Change Password</span>	
                                </router-link>
                            </li>
                                
                            <li class="small-card">
                                <a >
                                    <img src="assets/images/account_activity-icon.png" alt="">
                                    <span>Account Activity</span>	
                                </a>
                            </li>
                            
                        </ul>
                    
                    </div>
                    
                </div>
                
                <div id="info" class="tabcontent" >
                    <div class="setting_detail lg-card">
                    
                        <ul class="three_col-box">
                            
                            <li class="small-card">
                                <a href="https://vaultspay.com/contact-us" target="_blank">
                                    <img src="assets/images/contact_us-icon.png" alt="">
                                    <span>Contact Us</span>	
                                </a>
                            </li>	
                                
                            <li class="small-card">
                                <a href="https://vaultspay.com/about-us" target="_blank">
                                    <img src="assets/images/about_us-icon.png" alt="">
                                    <span>About Us</span>	
                                </a>
                            </li>
                            
                            <li class="small-card">
                                <a href="https://vaultspay.com/privacy-policy" target="_blank">
                                    <img src="assets/images/privacy_policy-icon.png" alt="">
                                    <span>Privacy Policy</span>	
                                </a>
                            </li>
                            
                        </ul>
                    
                    </div>
                    
                </div>
            
            </div>

        </div>
            
    </div>
</template>


<script>

export default 
{
    data() 
    {
        return {
            auth: false,
        };
    },
    methods: {
        async getFilteredData()
        {
            await this.$store.dispatch("fetchTransactions", {});
            
        },
        myClickEvent:function (e) { console.log(e); }
       
    },
    mounted() 
    {   
        let activetab=document.getElementsByClassName("tablinks");
        var i = activetab.length;
        while (i--)
        activetab[i].addEventListener('click',function (event) 
        {      
            event.preventDefault();
            
            var i, tabcontent, tablinks,order;
            order=$(this).data('tab')
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(order).style.display = "block";
            event.currentTarget.className += " active";
        });
    },
    created()
    {
        this.resetFilters();
        this.getFilteredData();
        //  
         window.addEventListener('load',(event) => {
        //    window.config.tablinks()
        })
        
       
    },
};
</script>
<template>
    <div class="container">
      <div v-for="admins in adminfields" v-bind:key="admins._id">
          <div v-if="admins.email == user.data.email">
        <div class="separator mt-5 mb-5">Admin Panel</div>
        <div v-for="(option,index) in options" v-bind:key="index" class="section mb-5 card">
           <img :src="option.image" class="mt-4 mb-4 optionimage">
          <div class="card-footer">
               <router-link :to="option.path" style="text-decoration:none"><h4 class="text-center pt-2">{{option.name}}</h4>  </router-link>
             </div>
         </div>  
          </div></div>    

           <div v-for="admins in adminfields" :key="admins._id">
          <div v-if="admins.email == 'admin@comicbooks.com'">
        <div  class="section mb-5 card">
           <img src="https://image.flaticon.com/icons/svg/1966/1966970.svg" class="mt-4 mb-4 optionimage">
          <div class="card-footer">
               <router-link to="/admin" style="text-decoration:none"><h4 class="text-center pt-2">Admins</h4>  </router-link>
             </div>
         </div>  
          </div></div>      
</div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from 'axios';
export default {
  name: 'Adminpanel',
  data () {
    return {
      options: [
        {name: "Rezervimet", image:"https://image.flaticon.com/icons/svg/1889/1889979.svg", path:"rezervimet"},
        {name: "Mesazhet",image:"https://image.flaticon.com/icons/svg/129/129517.svg",path:"messages"},
        {name: "Shto librin",image:"https://image.flaticon.com/icons/svg/2232/2232688.svg", path:"dashboard"},
        {name: "Kategoritë",image:"https://image.flaticon.com/icons/svg/1141/1141913.svg", path:"category"},
        {name: "Posta",image:"https://image.flaticon.com/icons/svg/745/745024.svg", path:"posta"},
        {name: "Thëniet",image:"https://image.flaticon.com/icons/svg/402/402330.svg", path:"quotes"},
      ],
        adminfields:{},
     
    }
  }, 
    created() {
    axios.get(`http://localhost:4000/admin`)
    
    .then(response => {
      this.adminfields = response.data.filter(x => x.email == this.user.data.email)
    })
    .catch(e => {
      this.errors.push(e)
    })
   
     },
   
      computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
}
</script>
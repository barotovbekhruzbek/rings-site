<template>
 <Navbar  @openSearchBar="isSearchActive = true"/>
  <Search  
  :isActive="isSearchActive"
  @closeSearch="isSearchActive = false"/>
 

<router-view />
</template>


  <script>    
   
  import Navbar from './layouts/Navbar.vue'
  import Search from './layouts/Search-bar.vue'
  export default {
    components: {
      Navbar,
      Search
    },

    data() {
      return {
        isSearchActive: false,
      }
    },
  }
  </script>

<style lang="scss">    
 
@import './assets/styles/main.scss';
</style>

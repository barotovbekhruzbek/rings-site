<template>
 <Navbar  @openSearchBar="isSearchActive = true"/>
  <Search  
  :isActive="isSearchActive"
  @closeSearch="isSearchActive = false"/>
 

<router-view />
  <Footor />
</template>


  <script>    
  import Footor from './layouts/Footor.vue'   
  import Navbar from './layouts/Navbar.vue'
  import Search from './layouts/Search-bar.vue'
  export default {
    components: {
      Navbar,
      Search,
      Footor
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

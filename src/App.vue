<template>
  <Search 
  :isActive="isSearchbarActive"
  @closeSearch ="isSearchbarActive = false"
  />
  <Navbar @openSearchBar="isSearchbarActive = true" 
    
  />

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
        isSearchbarActive: false,
      }
    },
  }
  </script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>

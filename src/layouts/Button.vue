<template>
    <button class="site-btn" :class="{ light: isLight }">
       <slot />
    </button>
</template>


<script>
export default {
    props: {
        isLight: {
            type: Boolean,
            default: () => false
        }
    }
}
</script>


<style lang="scss">
  @import '../assets/styles/components/_mixins.scss'; 
  @import '../assets/styles/components/_vars.scss'; 

  .site-btn{
      font-size: 18px;
      font-weight: 500;
      padding: 15px 35px;
      color: $white;
      background: $dark;
      border: 1px solid $white;
      text-transform: uppercase;
      // Media
      @include md{
        font-size: 14px;
        padding: 10px 30px;
      }


      &.light{
        background: $white;
        color: $dark;
        border-color: $dark;
      }
  }

</style>
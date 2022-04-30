<template>
    <section class="main-section">
        <div class="content">
            <h1 class="main-title">Долго, дорого, богато!</h1>
             <Btn1 class="site-btn" :class="{ light: isLight }"> каталог изделий </Btn1>
             <slot />
        </div>
        <Brands />
    </section>
    <!--     -->
</template>

<script>
import Btn1 from '../../../layouts/Button.vue'
import Brands from '../../Home/components/Brands.vue'
import Brand from '../../Home/components/Brands.vue'

export default {
  components: { Brands },
    comments:{
        Btn1,
        Brand
    }
}
</script>

<style lang="scss">
    @import '@/assets/styles/pages/Home/Main-section.scss';
    

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
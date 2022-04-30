<template>
  <div class="brands">
      <div class="container">
          <div class="brand" v-for="brand in brands" :key="brand.img">
              <img :src="brand.img" alt="">
          </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            brands: [
                {
                    img:require('../../../assets/images/logos/partner.png')
                },
                  {
                    img:require('../../../assets/images/logos/partner.png')
                },
                  {
                    img:require('../../../assets/images/logos/partner.png')
                },
                  {
                    img:require('../../../assets/images/logos/partner.png')
                },
                  {
                    img:require('../../../assets/images/logos/partner.png')
                }
            ]
        }
    },
}
</script>

<style lang="scss">
     @import '../assets/styles/components/_vars.scss';
    @import '../assets/styles/components/_mixins.scss';
    .brands{
     padding: 30px 0;
      border-top: 1px solid $white;  
      .container{
          display: flex;

          .brand{
             width: 190px; 
             padding: 0 15px;
             border-right: 1px solid $white;

             &:last-child{
                 border: none;
                 
             }

             img{

             }
          }
      }
    }
</style>
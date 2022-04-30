<template>
  <div class="brands">
      <div class="container">
          <div class="brand" v-for="brand in brands" :key="brand.img">
              <img :src="brand.img" alt="logo">
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
     @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';
    .brands{
        width: 100%;
     padding: 30px 0;
      border-top: 1px solid $white;  
      .container{
          display: flex;
        //  Media
        @include md{
            flex-wrap: wrap;
            justify-content: center;
            gap:10px 0;
        }

          .brand{
             width: 190px; 
             padding: 0 15px;
             border-right: 1px solid $white;
             @include sm{
                 width: 30%;
                 border: none;
             }

             &:last-child{
                 border: none;
                 
             }

             img{
                width: 100%;
             }
          }
      }
    }
</style>
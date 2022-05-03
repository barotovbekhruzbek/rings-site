<template>
  <div class="site-title">
      <h3 class="subtitle"> {{ sub }}</h3>
      <h2 class="title"> {{ title }} </h2>


  </div>

</template>

<script>

export default {
    props: {
        sub:String,
        title:String
    }

}
</script>



<style lang="scss">
    @import '../assets/styles/components/_vars.scss';
    @import '../assets/styles/components/_mixins.scss';


        .site-title{
            width: 100%;
            text-align: center;

            .subtitle{
                font-size: 21px;
                font-weight: 400;
                margin-bottom: 15px;
                
            }
            .title{
                font-size: 30px;
                font-family: 'Noto' ,;
            }

        }
</style>
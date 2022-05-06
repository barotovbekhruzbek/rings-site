<template>
  <div class="blog-card" :style="{backgroundImage : `url(${image})`}">
      <h3 class="title"> {{ title }} </h3>
  </div>
</template>

<script>
export default {
    props: {
        image: String,
        title:String
    }
}
</script>

<style lang="scss">
      @import '../assets/styles/components/_mixins.scss'; 
      @import '../assets/styles/components/_vars.scss'; 

    .blog-card{
        width: 350px;
        height: 370px;
        padding: 35px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-color: #f3f3f3;
        position: relative;
        cursor: pointer;

        // Media

        @include xl{
            width: 290px;
            height: 310px;
        }

        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 100%;
            background:linear-gradient(180deg, rgba(180,180,180,0) 0%, #333 100%);
        }

        .title{
            max-width: 210px;
            text-align: center;
            font-size: 21px;
            line-height: 30px;
            color: $white;
            font-weight: 400;
            position: relative;
            z-index: 3;
        }

    }
</style>
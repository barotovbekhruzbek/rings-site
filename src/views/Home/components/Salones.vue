<template>
  <section class="salons">
      <div class="container">
          <Title  :sub="subtitle"  :title="title" />
          <p class="text"> {{ text }} </p> 

          <Button :isLight="true"> {{ btn_text }} </Button>

      </div>
  </section>
</template>

<script>
import Title from '../../../layouts/Title.vue'
import Button from '@/layouts/Button.vue'

export default {
    components: {
        Title,
        Button
    },
    data() {
        return {
            subtitle: 'Не знаете, что выбрать?',
            title: 'Посетите наши салоны в Москве',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.',
            btn_text: 'наши салоны'
        }
    },

    computed : {
        changeText () {
            return this.btn_text.toUpperCase()
        }
    }
}
</script>

<style lang="scss">
  @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';

    .salons{
        background: url('../../../assets/images/layout/sec-bg.jpg') no-repeat ;
        padding: 100px 0;
        text-align: center;
        color: $white;
        // Media
        padding: 50px 0;
        .text{
            line-height: 25px;
            max-width: 730px;
            margin:45px auto 60px;
        }

    }
</style>
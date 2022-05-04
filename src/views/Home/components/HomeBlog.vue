<template>
  <section class="home-blog">
      <div class="container">
          <Title  :sub="subtitle"  :title="title" />
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
                    subtitle: 'Полезные статьи',
            title: 'Лучшие советы по подбору дорогих подарков',
            text: ''
        }
    },
}
</script>

<style lang="scss">
    @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';

        .home-blog{
            padding: 120px 0;

            // Media
            @include md {
                
            }
        }
</style>
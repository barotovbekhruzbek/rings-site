<template>
  <section class="home-blog">
      <div class="container">
          <Title  :sub="subtitle"  :title="title" />
          <div class="wrapper">
            <BlogCard  
            v-for="post in cutBlogArray"
            :key="post.id"
            :title="post.title" 
            @click="$router.push({name : 'BlogPost', params : post.id})"
            :image="post.img" 
            
            />
           
          </div>
          <Button @click="$router.push( {name:'Blog'})"> {{ btn_name }} </Button>
        
      </div>
  </section>
</template>

<script>
import Title from '../../../layouts/Title.vue'
import Button from '@/layouts/Button.vue'
import BlogCard from '@/layouts/BlogCard.vue'
import Blogpost from '../../../blog_posts.js'
import blog_posts from '../../../blog_posts.js'
export default {
   components: {
        Title,
        Button,
        BlogCard,
        Blogpost
    },

    data() {
        return {
            subtitle: 'Полезные статьи',
            title: 'Лучшие советы по подбору дорогих подарков',
            btn_name: 'читать наш блог',
            blog_array: Blogpost,
             
        }
    },

    computed: {
        cutBlogArray() {
         
            return  this.blog_array.splice(this.getRandom,3)
          
        },
        getRandom () {
            // return Math.floor((Math.random() * this.blog_array.length)-3)
              return() => Math.floor(Math.random()*(maxL - min)+ min)
                 const maxL = blog_posts.length -3;
            const min = 0
        }
    }
}
</script>

<style lang="scss">
    @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';

        .home-blog{
            padding: 120px 0;
            text-align: center;

            // Media
            @include md {
                
            }
            .wrapper{
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                padding:60px 0;

                // Media
                @include lg{
                    justify-content: center;
                    gap: 30px;
                }

                @include md{
                    padding: 30px 0;
                }
            }
        }
</style>
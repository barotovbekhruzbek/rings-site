<template>
    <section class="blogs">
        <div class="block">
               <Title :title="title" :sub="subtitle" />
        </div>
        <div class="container wrapper">
            
            <BlogCard 
            v-for="post in posts"
            :key="post.id"
            :title="post.title"
            :desc="post.text"
            :image="post.img"
             @click="$router.push({name : 'BlogPost', params : post.id})"
            
            />

        </div>
    </section>
</template>

<script>
import Title from '@/layouts/Title.vue'
import BlogCard from '@/layouts/BlogCard.vue'
import BlogPost from '@/blog_posts.js'

export default {
    components: {
        Title,
        BlogCard
    },
    data() {
        return {
            title: 'JEMELLERY BLOG',
            subtitle: 'Articles by Australian designer Simone Walsh',
            posts: BlogPost

        }
    },
}
</script>

<style lang="scss">
  @import '../../assets/styles/components/_vars.scss';
    @import '../../assets/styles/components/_mixins.scss';


    .blogs{
        .block{
       padding: 200px 0 ;
        background: url(https://cdn.shopify.com/s/files/1/2376/1461/collections/Engagement_Rings_Collection_2048x_991ce7a5-3b76-4ff0-ac1d-7da1259a7686.jpg?v=1519159733);
        background-repeat: no-repeat;
        background-size: cover;
        background: center;
       
        color: $white;
        position: relative;

        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba($black, $alpha: 0.4);
        }

     
        }
           .wrapper{
            display: flex;
            justify-content: space-between;
            gap: 30px 0;
            flex-wrap: wrap;
            margin: 100px auto;

            // media
            @include lg{
                margin:50px 0;
                justify-content: center;
                gap: 25px;
            }
        }
        
    }
</style>
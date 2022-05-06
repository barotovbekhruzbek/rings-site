<template>
 
 <div>
    <div class="search-bar" :class="{ active: isActive }" >
        <div class="block">
            <i class="fas fa-search"></i>
            <input 
            @input="getQuery"
            v-model="params"
            type="text" 
            placeholder="Search..." 
            
            >
        </div>
        <div class="close-btn" @click="$emit('closeSearch')">
            <i class="fas fa-times"></i>
        </div>
    </div>

    <!-- poisk start -->
            <div class="resilts_list" :class="{ active: isActive && showList }" >
                <template v-if="getRequest.length">
                 <div
                    class="item" 
                    v-for="i in getRequest" 
                    :key="i.id"
                    @click="goToThePost(i.id)"
                   >
                      <img :src="i.img" :alt="i.title">
                      <p>{{ i.title }}</p>
                   </div>
                </template>

                <div class="item" v-else>
                  <p>Topilmadi</p>
                </div>
            </div>
    <!-- poisk end -->

</div>

</template>


<script>
import blog from "../blog_posts.js"

export default {
  props: {
      isActive: {
          type: Boolean,
          default: () => false
      }
  },
  data(){
    return {
      posts: blog,
      params: '',
      showList: false,
    }
  },
  methods: {
    getQuery(){
      if(this.params.length === 0){
        this.showList = false;
      }else{ this.showList = true; }
    },
    goToThePost(id){
     this.$router.push({name: 'Post', params: {postId: id} })
     this.$emit('closeSearchBar')
     this.showList = false;
    }

  },
  computed: {
    getRequest(){
      const inner = this.params.toLowerCase()
      return this.posts.filter( item => item.title.toLowerCase().includes(inner))
    }
  }
}
</script>


<style lang="scss">
@import '../assets/styles/components/_vars.scss';
@import '../assets/styles/components/_mixins.scss';


.resilts_list{
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    display: none;
    background: #edededef; 
    max-height: 340px;
    overflow-y: scroll;
    border-radius: 3px;
    z-index: 99999999999999999999999;

    &::-webkit-scrollbar{
      display: none;
    }

    &.active{
      display: block;
      
      
    }
    
    .item{
      width: 100%;
      border-bottom: 1px solid rgb(150, 150, 150);
      padding: 10px 15px;
      display: flex;
      align-items: center;
      overflow: hidden;
      cursor: pointer;

      img{
        width: 50px;
        height: 50px;
        object-fit: cover;
        margin-right: 15px;
      }

      &:last-child{
        border-bottom: none;
      }
    }

}



.search-bar{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($black, $alpha: 0.9);
    z-index: 999999;
    transform: translateY(-100%);
    transition: 0.5s;

    &.active{
       transform: translateY(0%); 
    }


    .block{
        width: 100%;
        max-width: 500px;
        background: $white;
        padding: 10px 20px;
        border-radius: 50px;
        display: flex;
        align-items: center;
        i{
            color: $dark;
            font-size: 20px;
        }
        input{
            width: 100%;
            font-size: 18px;
            color: $dark;
            border: none;
            background: none;
            padding-left: 15px;
        }
    }

    .close-btn{
        margin-left: 30px;
        color: rgba($white, $alpha: 0.7);
        font-size: 25px;
        cursor: pointer;

        &:hover{
            color: rgba($white, $alpha: 1);
            transition: 0.6s cubic-bezier(.5,.06,.9,1.37);
            transform: rotate(270deg);
        }
    }
}    
</style>
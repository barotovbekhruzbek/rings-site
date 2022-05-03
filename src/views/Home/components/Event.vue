<template>
    
    <section class="event">
        <div class="container">
            <Title :sub="subtitle" :title="title" />

            <div class="btns-wrapper">
            <button 
            v-for="(item, idx) in collection"
            :key="item.id"
            class="btn"
            :class="{active : activeBtn ===idx}"
            @click="activeBtn = idx"
            >
                <span>
                 {{ item.ctg_name.text }}\
                 </span>
            </button>
            </div>
            <div class="card-wrapper">
                <div
                 class="card"
                 v-for="item in collection[activeBtn].data"
                 :key="item.product_id"
                 >


                    <img :src="item.img" :alt="item.title">
                    <h3 class="title"> {{ item.title  }} </h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Title from '../../../layouts/Title.vue'
import Collection from '../../../collaction.js'
export default {
        components: {
            Title,
            Collection
        },
        data() {
            return {
                activeBtn : 0,
                subtitle:  'К мероприятиям',
                title: 'Настоящая красота здесь!',
                collection: Collection
            }
        },
}
</script>

<style lang="scss">
    @import '../../../assets/styles/pages/Home/Event-section.scss'
</style>
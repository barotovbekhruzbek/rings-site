<template>
        <div class="home-model">
            <div class="modal-card">
                <img :src="item.img" alt="" class="image">
                <div class="content">
                    <h3 class="title"> {{ item.title }} </h3>
                    <p class="desc"> {{ item.desc }} </p>

                    <button class="btn" @click="$emit('action')">Закрыть</button>
                </div>
            </div>
        </div>

</template>

<script>
import Collection from '../../../collaction.js'
export default {
    props: {
        item: Object
    },


}
</script>

<style lang="scss">
    @import '../../../assets/styles/components/_vars.scss';
    @import '../../../assets/styles/components/_mixins.scss';

    .home-model{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba($black, $alpha: 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;

        .modal-card{
            background-color:$white;
            width: 40%;
            height: 80vh;

            .image{
               width: 100%;
               height: 400px;
                object-fit: cover;
            }

            .content{
                width: 100%;
                padding: 30px;

                .title{
                    font-size: 30px;
                    margin: 15px 0;
                    text-transform: uppercase;
                }

                .btn{
                    padding: 15px 30px;
                    background: $dark;
                    border-radius: 10px;
                    color: $white;
                    font-weight: 500;
                    margin-top: 30px;
                }
            }


        }

    }
</style>
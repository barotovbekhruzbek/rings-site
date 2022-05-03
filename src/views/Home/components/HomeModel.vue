<template>
        <div class="home-model">
            <div class="modal-card">
                <img src="" alt="" class="image">
                <div class="content">
                    <h3 class="title"></h3>
                    <p class="desc"></p>

                    <button class="btn">Закрыть</button>
                </div>
            </div>
        </div>

</template>

<script>
export default {

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
                padding: 30PX;

                .title{
                    font-size: 30px;
                    margin: 15px 0;
                }

                .btn{
                    padding: 15px 30px;
                    background: $dark;
                    border-radius: 10px;
                    color: $white;
                }
            }


        }

    }
</style>
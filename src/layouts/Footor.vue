<template>
    <div class="part2">
        <div class="container">
            <div class="block2">
                <h3>Полезные ссылки</h3>
                <ul>
                    <li><a href="#">Доставка</a></li>
                    <li><a href="#">Оплата </a></li>
                    <li><a href="#">Акции</a></li>
                </ul>
                <p>Политика конфиденциальности</p>
            </div>

            <!-- 2 -->
             <div class="block2">
                <h3>оплата</h3>
           
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>

                <div>
                        <i class="fa-brands fa-cc-visa"></i> 
                <i class="fa-brands fa-cc-mastercard"></i>
                </div>
            </div>
    <!-- 3 -->
                  <div class="block2">
                <h3>контакты</h3>
           
              <ul>
               <li><a href="#"><span>    <i class="fa-solid fa-phone"></i> </span> 8 (812) 234-56-55</a></li>
              <li><span>    <i class="fa-solid fa-phone"></i> </span><a href="#">8 (812) 234-56-55</a></li>
                <li><span>    <i class="fa-solid fa-envelope"></i> </span><a href="#">ojjo@ojjo.ru</a></li>
              </ul>
            </div>
            
                  <div class="block2">
                <h3>социальные сети</h3>
           
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p> 
                <div>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                   <a href="#"> <i class="fa-brands fa-telegram"></i></a>
                   <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
           @import '../assets/styles/components/_mixins.scss'; 
      @import '../assets/styles/components/_vars.scss'; 

      .part2{
          width: 100%;
          height: 390px;
          .container{
              display: flex;
              justify-content: space-between ;
              @include xl{
                  justify-content: center;
                  flex-wrap: wrap;
                  gap: 20px;
              }
              .block2{
                  padding-top: 80px;
                  div{
                      padding-top: 25px;
                      i{
                          width: 45px;
                            height: 30px;

                      }
                  }
                  h3{
                      font-size: 18px;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        color: $dark;
                        padding-bottom: 10px;
                        border-bottom: 1px solid #000;


                  }
                  ul{
                      li{
                          &:first-child{
                              padding-top: 30px;
                          }
                          padding-top: 15px;
                          a{
                              color: $dark;
                              font-size: 18px;
                          }
                          span{
                              padding-right: 20px;
                          }
                      }
                  }
                  p{
                      padding-top: 15px;
                      font-size: 14px;
                      width: 255px;
                  }
              }
          }
      }



</style>
<template>
  <div class="AboutPopup" @click.self="closePopup">
    <swiper class="swiper" :options="swiperOption" >
      <swiper-slide v-for="(item, i) in imglist" :key="i">
        <div class="swiperBox">
          <img :src="`img/paint/${item}`"/>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template> 

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  props:['imglist'],
  components:{
    Swiper,
    SwiperSlide,
  },
    data(){
        return{
          swiperOption: {
            slidesPerView: 1,
            // 设置分页器
            pagination: {
              el: '.swiper-pagination',
              type:'fraction',
              clickable: true,
              dynamicBullets: true,
              bulletActiveClass: 'bullet-active',
              // clickableClass : 'aboutProfile',
            },
            // 设置前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
          // 设置自动轮播
          // autoplay: {
          //   delay: 5000 // 5秒切换一次
          // },
          // 设置轮播可循环
          // loop: true
        } 
        }
    },
    methods:{
      closePopup(){
        this.$emit('closePopup',false);
      }
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";
.AboutPopup{
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: rgba($color: #000000, $alpha: .7);
  z-index: 10;
  .swiper{
    width:1000px;
    max-width: 90%;
    position: relative;
    border: #fff 2px solid;
    box-shadow: 0 0 20px rgba(44, 44, 44, 0.7);
    height: 90vh;
    z-index: 10;
    background: repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.2), 
    rgba(0, 0, 0, 0.2) .6px, 
    rgba(0, 0, 0, 0.7) .8px,
     rgba(0, 0, 0, 0.7) 20px);
    .swiper-pagination{
      width: 60px;
      margin: auto;
      right: 0;
      bottom: 0;
      padding: 10px 0;
      background: #000;
      color: #fff;
    }
    .swiper-button-prev,.swiper-button-next{
      width: 40px;
      height: 40px;
      background: #000;
      color: #fff;
    &.swiper-button-prev{
      left:0;
    }
    &.swiper-button-next{
      right: 0;
    }
    &:after, &:after{
      font-size: 20px;
    }
    &:hover{
      background: #fff;
      color: #ffb200;
      transform: translateY(2px);
    }
  }
  }
  .swiperBox{
    position: relative;
    width: 100%;
    &:before {
    content: "";
      padding-top: 85%;
      content: "";
      display: block;
    }
    img{
      max-width: 100%;
      max-height: 100%;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      position: absolute;
    }
  }
}
</style>

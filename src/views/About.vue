<template>
  <div class="about">
    <div class="kv">
      <ul>
        <li class="profile">
          <div class="top">
            <p>A<span>N</span></p>
            <div class="title">{{title[nowTitle]}}.</div>
          </div>
          <div class="second">
            <ul>
              <li>1990'</li>
              <li>Frontend Developer</li>
              <li>UI/UX</li>
            </ul>
          </div>
          <swiper 
            ref="swiper"
            :options="swiperOption"
            @slideChange="onSlideChange"
            class="swiper">
          <swiper-slide><AboutProfile/></swiper-slide>
          <swiper-slide><AboutWork/></swiper-slide>
          <swiper-slide><AboutPaint @openPopup="openPopup"/></swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        </li>
        <li class="work">
          <AboutProfileBox/>
        </li>
      </ul>
    </div>
    <AboutPopup v-if="openAboutPopup" :imglist='openAboutPopup' @closePopup="openPopup"/>
  </div>
</template>
<script>
import AboutPopup from "@/components/AboutPopup";
import AboutPaint from "@/components/AboutPaint";
import AboutWork from "@/components/AboutWork";
import AboutProfile from "@/components/AboutProfile";
import AboutProfileBox from "@/components/AboutProfileBox";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
  
export default {
  components:{
    AboutPopup,
    AboutPaint,
    AboutProfile,
    Swiper,
    SwiperSlide,
    AboutProfileBox,
    AboutWork
  },
    data(){
      return{
        openAboutPopup:false,
        title:['ABOUT AN CHEN','ＷＯＲＫ','DESIGN'],
        nowTitle:0,
        swiperOption: {
          mousewheel: true,
          parallax : true,
          effect : 'fade',
          fadeEffect: {
            crossFade: true,
          },
          slidesPerView: 1,
          // 设置分页器
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            // bulletActiveClass: 'bullet-active',
            clickableClass : 'aboutProfile',
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
      openPopup(list){
        console.log('lll',list);
        this.openAboutPopup=list
      },
      onSlideChange () {
        console.log(this.$refs.swiper.swiperInstance.activeIndex);
      }
    },
    mounted(){

    }
}
</script>
<style lang="scss">
@import "@/scss/rwd.scss";
.swiper-button-prev,.swiper-button-next{
  color: #000;
  transition: .3s;
  &.swiper-button-prev{
    left:-5px;
  }
  &.swiper-button-next{
    right: 0;
  }
  &:after, &:after{
    font-size: 30px;
  }
  &:hover{
    color: rgb(255, 136, 0);
  }
  &.swiper-button-disabled, &.swiper-button-disabled{
    opacity: 0;
  }
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-pagination-bullet{
  cursor: pointer;
  &:hover{
    opacity: 1;
    background: #535353;
  }
}
.swiper-pagination-bullet-active {
  background: #ff9900;
}
@keyframes typing {
  from {
    width: 0
  }
}
@keyframes blink {
  50% {
    border-color: transparent
  }
}
@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.about{
    color: #000;
    opacity: .9; 
    background-image: linear-gradient(to bottom right,#ffcc3f,#6dc3e2,#70b9a8,#ec8bb0,#6dc3e2);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .kv{
      position: relative;
      transition: all .3s;
      width: 100%;
      max-width: 1200px;
      margin: auto;
      padding:30px 20px;
      overflow: hidden;
      background: url('../assets/bga.png') #fff repeat;
      box-shadow: 0 0 20px rgba(#000, .1);
      @include pad(){
        height:100vh;
        border-radius:0;
        width: 100%;
        overflow-y: scroll;
      }
      .typing {
        font-size: 20px;
        width: 300px;
        padding-left: 30px;
        animation: typing 3s steps(27), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
      }
      > ul{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 1;
        > li{
          position: relative;
          width:62%;
          &:first-child{
            &::before{
              content: '';
              position: absolute;
              height: 100%;
              margin: auto;
              width: 1px;
              right: -10px;
              top:0;
              bottom: 0;
              background: #000
            }
          }
          &:last-child{
            width: 37%;
            @include pad(){
              margin-top: 10px;
              width: 100%;
            }
          }
          @include pad(){
            width: 100%;
            &::before{
              display: none;
            }
          }
            &.profile{
              margin-right: 1%;
            .second{
              border-top:solid 2px #000;
              border-bottom:solid 2px #000;
              padding: 2.5px 0;
              width: 90%;
              margin:15px auto 0;
              > ul{
                display: flex;
                align-items: center;
                justify-content: center;
                border-top:solid 1px #000;
                border-bottom:solid 1px #000;
                > li{
                  width: 33%;
                  text-align: center;
                  font: 600 15px/1 serif;
                  padding: 10px 0;
                }
              }
            }
            .top{
              display: flex;
              align-items: center;
              margin: auto;
              width: 90%;
              @include pad(){
                padding-right:0;
                width: 90%;
              }
              > p{
                color: #fff;
                height: 45px;
                width: 55px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #000;
                border-radius: 5px;
                &,*{
                  font: italic 900 35px serif;
                }
                span{
                  font-size: 15px;
                  padding-bottom: 11px;
                }
              }
              .title{
                width: 100%;
                font: 900 50px/1 serif;
                text-align: center;
                @include mobile(){
                   font-size: 25px; 
                }
              }
            }

          }
        }
      }
    }
}
</style>
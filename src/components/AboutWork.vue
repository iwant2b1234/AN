<template>
    <div class="aboutWork">
        <div class="profileBox">
            <h2>
                Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.
                <small>"任何你寫的程式，超過 6 個月不去看它，當你再度開啓時，看起來都像是別人寫的" - Eagleson's law -</small>
            </h2>
            <ul>
                <li v-for="(item, i) in workarr" :key="i">
                    <router-link :to="item.link" :class="[`workBok`,item.icon]">
                        <small>{{i+1}}</small>
                        <div class="imge">
                            <icon :name="item.icon"/>
                        </div>
                        <div class="text">
                            <h1 :data-text="item.en">{{item.en}}</h1>
                            <p>
                                {{item.ch}}
                                <span>{{item.f}}</span>
                            </p>
                            <samp>{{item.r}}</samp>
                        </div>
                    </router-link >
                </li>
            </ul> 
        </div>
    </div>
</template> 

<script>
export default {
    data(){
        return{
            workarr:[
                { icon: "drag", ch: "表格拖移", en: "TABLE DRAG",link:'/table',
                f:"JS | VUE | RWD | Draggable",r:'表格拖移及許多功能的後台介面。'  },
                { icon: "huaban", ch: "響應滾動圖", en: "SLIDESHOW",link:'/banner',f:"JS | VUE | RWD",
                r:'手刻無使用套件。' },
                { icon: "jingziqi", ch: "圈圈叉叉", en: "OOXX",link:'/ooxx',f:"JS | VUE" ,
                r:'就是ooxx。'},
                { icon: "chatroom", ch: "聊天室", en: "CHAT ROOM",link:'/chatroom' ,f:"JS | VUE | RWD",
                r:'無意義對話、更換背景及發獎金等功能。'},
            ],

        }
    },
    computed:{
       
    },
    methods:{

    }
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0)
  }
  100% {
    opacity: 1;
    transform: none
  }
}
@keyframes flipInY {
  0% {
    transition-timing-function: ease-in;
  }
  40% {
    transition-timing-function: ease-in
  }
  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 1
  }
  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -80deg)
  }
  100% {
    transform: perspective(400px)
  }
}
@keyframes lightSpeedIn {
  0% {
    opacity: 1
  }
  60% {
    transform: skewX(20deg);
    opacity: 1
  }
  80% {
    transform: skewX(-5deg);
    opacity: 1
  }
  100% {
    transform: none;
    opacity: 1
  }
}
@keyframes slideInRight {
  0% {
    transform: translate3d(100%, 0, 0);
    visibility: visible
  }
  100% {
    transform: translate3d(0, 0, 0)
  }
}
@keyframes noise-anim-2 {
  0% {
    clip: rect(5px, 9999px, 21px, 0);
  }
  5% {
    clip: rect(38px, 9999px, 11px, 0);
  }
  10% {
    clip: rect(37px, 9999px, 18px, 0);
  }
  15.0% {
    clip: rect(11px, 9999px, 38px, 0);
  }
  20% {
    clip: rect(24px, 9999px, 13px, 0);
  }
  25% {
    clip: rect(37px, 9999px, 25px, 0);
  }
  30.0% {
    clip: rect(28px, 9999px, 40px, 0);
  }
  35% {
    clip: rect(14px, 9999px, 33px, 0);
  }
  40% {
    clip: rect(35px, 9999px, 3px, 0);
  }
  45% {
    clip: rect(23px, 9999px, 19px, 0);
  }
  50% {
    clip: rect(7px, 9999px, 18px, 0);
  }
  55.0% {
    clip: rect(18px, 9999px, 15px, 0);
  }
  60.0% {
    clip: rect(14px, 9999px, 31px, 0);
  }
  65% {
    clip: rect(29px, 9999px, 4px, 0);
  }
  70% {
    clip: rect(12px, 9999px, 2px, 0);
  }
  75% {
    clip: rect(3px, 9999px, 38px, 0);
  }
  80% {
    clip: rect(24px, 9999px, 39px, 0);
  }
  85.0% {
    clip: rect(34px, 9999px, 12px, 0);
  }
  90% {
    clip: rect(15px, 9999px, 11px, 0);
  }
  95% {
    clip: rect(10px, 9999px, 14px, 0);
  }
  100% {
    clip: rect(38px, 9999px, 21px, 0);
  }
}
@keyframes noise-anim {
  0% {
    clip: rect(23px, 9999px, 17px, 0);
  }
  5% {
    clip: rect(34px, 9999px, 24px, 0);
  }
  10% {
    clip: rect(34px, 9999px, 9px, 0);
  }
  15.0% {
    clip: rect(20px, 9999px, 22px, 0);
  }
  20% {
    clip: rect(5px, 9999px, 18px, 0);
  }
  25% {
    clip: rect(15px, 9999px, 35px, 0);
  }
  30.0% {
    clip: rect(26px, 9999px, 36px, 0);
  }
  35% {
    clip: rect(26px, 9999px, 33px, 0);
  }
  40% {
    clip: rect(26px, 9999px, 5px, 0);
  }
  45% {
    clip: rect(13px, 9999px, 28px, 0);
  }
  50% {
    clip: rect(29px, 9999px, 38px, 0);
  }
  55.0% {
    clip: rect(30px, 9999px, 13px, 0);
  }
  60.0% {
    clip: rect(7px, 9999px, 36px, 0);
  }
  65% {
    clip: rect(28px, 9999px, 14px, 0);
  }
  70% {
    clip: rect(15px, 9999px, 16px, 0);
  }
  75% {
    clip: rect(8px, 9999px, 8px, 0);
  }
  80% {
    clip: rect(39px, 9999px, 2px, 0);
  }
  85.0% {
    clip: rect(20px, 9999px, 18px, 0);
  }
  90% {
    clip: rect(27px, 9999px, 8px, 0);
  }
  95% {
    clip: rect(33px, 9999px, 14px, 0);
  }
  100% {
    clip: rect(23px, 9999px, 25px, 0);
  }
}
.aboutWork {
    width: 100%;
    padding: 20px 0 40px;
    position: relative;
    display: flex;
    justify-content: center;
    ul{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        li{
            padding:5px 2px;
            .workBok{
                display: flex;
                cursor: pointer;
                border: #000 4px solid;
                padding: 5px;
                position: relative;
                transition: .3s;
                color: #000;
                &:hover{
                    transform: scale(.95);
                    border-color: #ffb200;
                    &::before {
                        border-color: transparent #ffb200 transparent transparent ;
                    }
                    h1::before{
                        animation: noise-anim-2 2s infinite linear alternate-reverse;
                    }
                    h1::after{
                        animation: noise-anim 2s infinite linear alternate-reverse;
                    }
                    &.drag{
                        .imge i{
                            animation:lightSpeedIn 1s ease-out both infinite;
                        }
                    }
                    &.huaban{
                        .imge i{
                            animation:slideInRight 1s  both infinite;
                        }
                    }
                    &.jingziqi{
                        .imge i{
                            animation:flipInY 1s  both infinite;
                        }
                    }
                    &.chatroom{
                        .imge i{
                            animation:fadeInDown 1s  both infinite;
                        }
                    }
                }
                small{
                    position: absolute;
                    font:italic 900 20px/1 monospace;
                    right: 0;
                    top: 3px;
                    z-index: 2;
                    color: #fff;
                    width: 25px;
                    text-align: center;
                }
                &::before {
                    transition: .3s;
                    content: '';
                    display: block;
                    position: absolute;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 0 40px 50px 0;
                    border-color: transparent #000 transparent transparent ;
                    right: -1px;
                    top: -1px;
                }
                .imge{
                    overflow: hidden;
                    width: 35%;
                    background: #000;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding:10px;
                    background: linear-gradient(135deg, #000000, transparent), repeating-linear-gradient(45deg, #000 1px, transparent 1px, transparent -3px, #000 4px, #000 5px);
                    @include mobile(){
                        padding:0;
                    }
                    i{
                        font-size:400%;
                        font-weight: 900;
                        line-height: 100%; 
                        text-shadow: 0 0 5px #000;
                    }
                }
                .text{
                    width: 65%;
                    padding:0 10px;
                    font-size: 12px;
                    font-weight: 900;
                }
                h1{
                    font:italic 900 300%/1 monospace;
                    text-shadow: -2px -1px 0 #ffb200;
                    padding-bottom: 3px;
                    position: relative;
                    &:before {
                        content: attr(data-text);
                        position: absolute;
                        left: -2px;
                        text-shadow: 1px 0 blue;
                        top: 0;
                        color: #ffb200;
                        overflow: hidden;
                        clip: rect(0, 900px, 0, 0);
                    }
                    &:after {
                        content: attr(data-text);
                        position: absolute;
                        left: 2px;
                        text-shadow: -1px 0 red;
                        top: 0;
                        color: #000;
                        overflow: hidden;
                        clip: rect(0, 900px, 0, 0);
                    }
                }
                p{
                    border-top: 3px #000 double;
                    padding: 10px 0 5px;

                }
                samp{
                    padding:3px 0 5px;
                    display: block;
                    font-weight:initial;
                }
                span{
                    float: right;
                }
            }
            &:nth-child(1){
                width: 100%;
            }
            &:nth-child(2){
                width: 62%;
            }
            &:nth-child(3){
                width: 38%;
            }
            &:nth-child(4){
                width: 70%;
            }
            @include mobile(){
                width: 100% !important; 
                .workBok{
                    display: block;
                    .imge, .text{
                        width: 100%;
                    }  
                }
            }
        }

    }
    .profileBox{
        position: relative;
        z-index: 2;
        width: 90%;
        h2{
            color: #111;
            padding-bottom: 10px;
            text-align: justify;
            // word-break: break-all;
            @include mobile(){
                text-align: initial;
            }
            &,*{
                font:italic 900 35px/1 serif;
                @include mobile(){
                    font-size: 26px;
                }
            }
            small{
                font-size: 13px;
                display: block;
                text-align: right;
                margin: 10px 0;
                @include mobile(){
                    text-align: center;
                }
            }
            span{
                color: rgb(255, 136, 0);
            }
        }
    }
}
</style>

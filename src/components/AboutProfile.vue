<template>
    <div class="aboutProfile">
        <div class="profileBox">
            <h2>
                <!-- A <span>Good Programmer</span>  is someone who always looks both ways before crossing a one-way street.
                <small>“ 一個好的工程師是那種過單行道馬路都要左顧右盼的人 ” - Doug Linder -</small> -->
                If debugging is the process of removing software bugs,<span> programming must be the process of putting them in.</span>
                <small>“ 如果除錯是消除軟體 bug 的過程，那寫程式一定是把它們放進去的過程 ” - Edsger Dijkstra -</small> 
            </h2>
            <ul class="bottominfo">
                <li>
                    <p>
                    <span>2017</span>年底從只會切版的網頁設計轉職成前端工程師，在這三年多學習到模組化管理、前端框架應用、與PM共同討論專案內容、如何跟後端工程師配合串接API、拎聽QA回饋進行改善，和團隊一起從錯誤中學習，合作完成高品質、低錯誤的作品。
                    </p>
                    <p>
                        參與過許多從零開始的專案，其中包括功能型網站、大型管理後台、聊天室、小遊戲、活動網頁等，每當完成一個新的功能都能獲得滿滿成就感。
                    </p>
                    <!-- <p>因有設計的背景，可獨自完成網頁形象、畫面呈現及UI/UX部分。</p> -->
                </li>
                <li>
                </li>
            </ul>
            <ul class="year">
                <li v-for="(item, i) in yrararr" :key="i">
                    <span v-if="i==0">{{item}}</span>
                    <p v-else>
                        <strong :style="`font-size: ${item.w}px;`">{{item.y}}
                        <sub v-if="item.w">year</sub>
                        </strong>
                        <small>{{item.n}}</small>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template> 

<script>
export default {
    data(){
        return{
            yrararr:[
                'EDUCATION & SENIORITY',
                {y:3,n:"DEVELOPER",w:40},
                {y:5,n:"UI/UX",w:40},
                {y:2,n:"DESIGN",w:40},
                {y:"復興商工",n:"HIGH SCHOOL"},
                {y:"文化大學",n:"UNIVERSITY"},
            ],
        }
    },
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";
.aboutProfile {
    width: 100%;
    padding: 20px 0 40px;
    position: relative;
    display: flex;
    justify-content: center;
    .year{
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li{
            position: relative;
            width: 20%;
            text-align: center;
            padding: 0 20px;
            @include mobile(){
                width: 50%; 
            }
            *{font: 900 15px cursive;}
            p:hover{
                strong{
                    color: #ff7300;
                }
            }
            strong{
                transition: 0.3s;   
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                font-size: 15px;
                position: relative;
                sub{
                    position: absolute;
                    font-size: 12px;
                    top: 0;
                    right: 10px;
                }
            }
            small{
                border-bottom: 1px solid #000;
                border-top: 1px solid #000;
                font-size: 12px;
                display: block;
            }
            &:first-child{
                margin-bottom: 20px;
                width: 100%;
                &::before,&::after{
                    position: absolute;
                    content: '';
                    width:33%;
                    height: 2px;
                    top: 0;
                    margin: auto;
                    bottom: 0;
                    border-bottom: 1px solid #000;
                    border-top: 3px solid #000;
                    padding-bottom: 1px;
                    @include mobile(){
                        width:15%; 
                    }
                }
                &::before{
                    right: 0;
                }
                &::after{
                    left: 0;
                }
            }
        }
    }
    .profileBox{
        position: relative;
        z-index: 2;
        width: 90%;
        .bottominfo{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            @include mobile(){
                align-items: center;
                flex-direction: column-reverse;
            }
            li{
                width: 69%;
                text-align: justify;
                @include mobile(){
                    width:100%; 
                }
                &:last-child{
                    width: 27%;
                    border: solid 2px #000;
                    margin:0 1.5% 0 2.5%;
                    filter: grayscale(95%);
                    transition: 0.3s;
                    position: relative;
                    @include mobile(){
                        width:180px;
                        height: 180px; 
                        margin-bottom: 20px;
                    }
                    &::after{
                        position: absolute;
                        content: '';
                        width: 100%;
                        height: 100%;
                        background: #000;
                        z-index: 1;
                        transform: translate(10px,10px);
                        transition: 0.3s;
                    }
                    &::before{
                        position: absolute;
                        content: '';
                        width: 100%;
                        height: 100%;
                        background: url('../assets/w.jpg') left top no-repeat;
                        background-size: 120% 100%;
                        z-index: 2;
                        border-color: #ffae00;
                    }
                    &:hover{
                        filter: grayscale(0); 
                        border-color: #ffae00;
                        &::before{
                            background-size: 125% 105%;
                        }
                        &::after{
                            transform: translate(0,0)
                        }
                    }
                }
            }
        }
        h2{
            color: #111;
            padding-bottom: 10px;
            text-align: justify;
            // word-break: break-all;
            @include mobile(){
                text-align: initial;
            }
            &,*{
                font:italic 900 40px/1 cursive;
                @include mobile(){
                    font-size: 26px;
                }
            }
            small{
                font-size: 13px;
                display: block;
                text-align: right;
                margin: 15px 0;
                font-family: serif;
                @include mobile(){
                    text-align: center;
                }
            }
            span{
                text-shadow: 2px 2px 0 #ffb200;
            }
        }
        p{
            line-height: 2;
            font-size: 14px;
            padding-bottom: 10px;
            span{
                font-size:400%; /*首字大小*/
                float: left; /*首字下沉*/
                padding-right: 2%; /*與右邊間隔*/
                font-weight: 900; /*粗體字*/
                line-height: 100%; 
                font-family: fantasy;
                // text-shadow: 2px 2px 0 rgb(255, 136, 0);
            }
        }
    }
}
</style>

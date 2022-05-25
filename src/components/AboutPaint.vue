<template>
    <div class="aboutPaint">
        <div class="profileBox">
                <!-- All programmers are playwrights and all computers are lousy actors. 
                <small>"所有的工程師都是編劇，所有的電腦都是爛演員" - Anonymous Hack Actor -</small> -->
            <h2>
                There are two ways to write error-free programs; only the third one works. 
                <small>"有兩種方法能寫出沒有錯誤的程式；但只有第三種好用" - Alan J. Perlis -</small>
            </h2>
            <ul>
                <li v-for="(item, i) in paintrr" :key="i">
                  <h1>{{item.t}}</h1>
                  <ol class="list">
                      <li v-for="(list, i) in item.list" :key="i+`list`" @click="goPage(item.t,list.u)">
                        <h3>{{list.n}}</h3>
                        <p>{{list.t}}</p>
                      </li>
                  </ol>
                </li>
            </ul> 
        </div>
    </div>
</template> 

<script>
export default {
    data(){
        return{
            paintrr:[
                { t:'WEB',list: [
                    {n:'文化部影視局',u:'https://www.bamid.gov.tw/',t:'40%Design & Layout'},
                    {n:'三哥肉乾',u:'http://www.thbro.com.tw/index.php',t:'Design & Layout'},
                    {n:'中國信託活動網頁',u:'https://www.ctbcbank.com/html/NB2016102005/index.html',t:'Design'},
                    {n:'中租活動網頁',u:'http://www.chailease.dc.com.tw/201606event/',t:'Design & Layout'},
                    {n:'官網',u:'http://www.evervictory-it.com/',t:'Design'},
                    {n:'官網',u:'https://www.i-create.com.tw/',t:'Design & Layout'},
                    ]
                },
                { t:'APP',list: [
                    {n:'搬家通(下架)',u:['m.png','m2.png','m3.png'],t:'Design & UI/UX'},
                    ]
                },
                { t:'OTHER',list: [
                    {n:'UI/UX',u:['01.png','02.jpg','03.png','04.png','05.png'],t:'photoshop'},
                    // {n:'插畫',u:['m.png','m2.png','m3.png'],t:'procreate'},
                    {n:'手繪',u:['1.jpg'],t:'watercolor'},
                    {n:'漫畫',u:['v1.jpg','v2.jpg','v3.jpg'],t:'procreate'},
                    ]
                },
            ],

        }
    },
    computed:{
       
    },
    methods:{
        goPage(t,u){
            // window.location.href = u
            if(t=='WEB'){
                window.open(u)
            }else{
                console.log(false);
                this.$emit('openPopup',u)
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";
@import url('https://fonts.googleapis.com/css?family=Rakkas');
.aboutPaint {
    width: 100%;
    padding: 20px 0 40px;
    position: relative;
    display: flex;
    justify-content: center;
    ul{
        >li{
            padding-bottom: 15px;
            h1{
                font:italic 900 35px/1 'Rakkas';
                position: relative;
                text-shadow:8px 0 0 #fff;
                &::before{
                    position: absolute;
                    content: '';
                    width:88%;
                    height: 2px;
                    top: 0;
                    margin: auto;
                    bottom: 0;
                    z-index: -1;
                    border-bottom: 5px dotted #000;
                    @include mobile(){
                        width:65%; 
                    }
                }
                &::before{
                    right: 0;
                }
            }
            .list{
                display: flex;
                flex-wrap: wrap;
                li{
                    border: 2px solid #000;
                    padding:5px;
                    cursor: pointer;
                    margin: 2px;
                    position: relative;
                    min-width: 153px;
                    // background: radial-gradient(circle at center, #777 1px, rgba(255, 255, 255, 0.005) 1px, rgba(255, 255, 255, 0.005) 20px) 0px 0px/20px 20px, radial-gradient(circle at center, #777 1px, rgba(255, 255, 255, 0.005) 1px, rgba(255, 255, 255, 0.005) 20px) 10px 10px/20px 20px;
                    background: repeating-linear-gradient(-45deg, rgba(0, 0, 0,.2), rgba(0, 0, 0,.3) .6px, rgba(0, 0, 0, 0.001) .8px, rgba(0, 0, 0, 0.001) 20px);
                    @include mobile(){
                        width: 48.7%;
                        min-width: auto;
                    }
                    &::before {  
                        content: " ";
                        display: block;
                        position: absolute;
                        top: 0; right: 0; bottom: 0; left: 0;
                        background:#ffb200;
                        z-index: -1;
                        transition: transform .3s ease;
                        transform: scaleX(0);
                        transform-origin: bottom right;
                    }
                    &:hover{
                        &::before {
                            transform: scaleX(1);
                            transform-origin: bottom left;
                        }
                        p{
                            background: #000;
                            color: #fff;
                        }
                    }
                    h3{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: auto;
                        color: #000;
                        // writing-mode: vertical-lr;
                        font:900 15px/1 serif;
                        margin-bottom: 5px;
                    }
                    p{
                        color: #000;
                        text-transform: uppercase;
                        padding: 5px ;
                        font: 100 12px/1 'Rakkas';
                        text-align: center;
                        border-top: 1px solid #000;
                        border-bottom: 1px solid #000;
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

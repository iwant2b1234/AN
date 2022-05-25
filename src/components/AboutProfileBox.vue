<template>
    <div class="AboutProfileBox">
        <div class="aboutBox">
            <h1>
               #Comments from former companies!
            </h1>
            <div class="boxinfo">
                <!-- <p>在一起重頭學起的人裡面，你學得最好，基本上有要求的功能都寫得出來。</p>
                <p>你較缺少的是整個架構建築的能力，跟有時急於求快而沒有太細部地去思考，寫出來的code閱讀性就會比較差一些。</p>
                <p>另外就是一些對js底層的了解，語法會用，可是不知道完整的用法(這其實很多人都是這樣，我有時也是)。</p>
                <p>還有一些網路溝通時的理論不了解，像是ajax是如何運作的等等，這部分的東西我自己也很多不懂，就邊寫邊繼續理解。</p>
                <p>然後寫法有時候太特殊的時候，可以試試自己重看一次時會不會不易看懂來判斷，或者再多想一種解法跟主管討論，看哪種方法比較被接受，寫程式時其實大家都是平等的，只是想法不同，沒有帶多的上下級概念，不要怕問跟討論！</p> -->
                <p>剛開始我們合作的時候，就被你快如閃電的切版速度與能力所驚艷到，每次分派工作，你獨有的美感總可以達到超出預期的畫面呈現，還有一些需求上的特效功能總能想到與我不同的做法讓案子可以更順利的進行下去。</p>
                <p>學習JS時，雖然會因為程式的邏輯不如CSS來的直觀而挫折，可是你依然不放棄的繼續學習下去！在後來的工作中遇到困難時會用自己的做法來嘗試，作法雖然不是最好的，但這起碼是你對於遇到困難時所想出的解決辦法，並且在理解到更好的做法時願意去進行修改與實踐。
                </p>
                <p>
                    合作專案時從不會吝嗇於發揮自己的特長來幫助團隊完成目標，對於某些項目有興趣時會積極的主動站出來承接，也懂得理解自己的不足之處用時間去進行補強與進修。
                </p>
                <p>
                    你是一個切版與UI/UX可以做到預期之上的能力，程式方面可以解決大部分的問題，並且懂得自我精進的人！
                </p>
            </div>
            <span>
               前公司 前端組長 - <strong>Mr.Wang</strong>
            </span>
        </div>
        <ul class="ware">
            <span :style="`transform: translateX(${active}px);`"></span>
            <li v-for="(item, i) in icon" :key="i" :id="item"
            :class="[{'active':nowIcon==i},{[icon[nowIcon]]:nowIcon==i}]" @click="getIcon(i)">
                <font-awesome-icon :icon="item" />
            </li>
            <li id="lastli">
                <div v-if="nowIcon==2" class="item">
                    <!-- <a href = "mailto: iwant2b1234@gmail.com">mail</a> -->
                    <li v-for="(item, i) in heartarr" :key="i+'codearr'">{{item}}</li>
                </div>
                <ul v-if="nowIcon==0" class="item">
                    <!-- <font-awesome-icon  :icon="['fab', 'vuejs']"/> -->
                    <li v-for="(item, i) in codearr" :key="i+'codearr'">{{item}}</li>
                </ul>
                <ul v-if="nowIcon==1" class="item">
                    <li v-for="(item, i) in penarr" :key="i+'penarr'">{{item}}</li>
                </ul>
            </li>
        </ul>
        <!-- v-on:mousemove="updateCoordinates" -->
        <div class="hire">
            <h2>How satisfied are you?</h2>
            <div id="hirebg" >
                <div :class="['svg',{'end':end}]" ref="svg" :style="`transform: translate(${hireX-50}px,0);`"
                    @mousedown="dragover"
                    @touches="dragover"
                    @touchend="dragend"
                    @touchmove="touchmove"
                    >
                    <font-awesome-icon :icon="face"/>
                     
                    <div v-if="showMsg" class="msg">{{msg}}</div>
                </div>
            </div>
        </div>
        <small>Copyright © 2022 An Chen :)</small>
    </div>
</template> 

<script>
export default {
    data(){
        return{
            showMsg:false,
            end:false,
            flag:false,
            hireX:0,
            xPos: 0,
            hirewidth:0,
            heartarr:["Dog","Latte","Google翻譯","Youtube","Music","Kpop","Netflix","Hot Pot"],
            penarr:["Photoshop","Illustrator","Lightroom","手繪"],
            codearr:["Vue", "CSS3＆SCSS", "JavaScript", "Ajax" ,"Webpack","Npm＆Yarn" , "Git" ,"Egret"],
            lastli:0,
            liwidth:0,
            nowIcon:0,
            icon:['code','pen-nib','heart'],
        }
    },
    computed:{
        msg(){
            let width = this.hirewidth/3
            if(this.hireX>width*2){
                return 'LOVE YOU'
            }else if(this.hireX<width){
                return 'WHY?'
            }else{
                return 'OKAY'
            }
        },
        face(){
            let width = this.hirewidth/3
            if(this.hireX>width*2){
                return 'face-smile'
            }else if(this.hireX<width){
                return 'face-frown'
            }else{
                return 'face-meh'
            }
        },
        active(){
            switch (this.nowIcon) {
                case 0:
                    return 0
                case 1:
                    return this.liwidth    
                default:
                    return this.lastli
            }
        }
    },
    methods:{
        getIcon(v){
            this.nowIcon=v
        },
        updateCoordinates(e){
            if(!this.flag){
                return
            }
            this.xPos = e.layerX;
            // console.log(e.layerX);
            if(e.layerX < 30){
                this.hireX = 60
            }
            else if(e.layerX > this.hirewidth-30){
                this.hireX = this.hirewidth
            }
            else{
                this.hireX = e.layerX+30
            }
        },
        touchmove(e){
            
            if(!this.flag){
                return
            }
            this.xPos = e.touches[0].clientX;
            if(e.touches[0].clientX < 30){
                this.hireX = 60
            }
            else if(e.touches[0].clientX > this.hirewidth-50){
                this.hireX = this.hirewidth
            }
            else{
                this.hireX = e.touches[0].clientX
            }
        },
        dragover(){
            // console.log('over');
            this.flag = true
            this.end = false
            const items = document.querySelector('.svg');
            items.addEventListener("mousemove", this.updateCoordinates);
            items.addEventListener("mouseleave", this.dragend);
            items.addEventListener("mouseup", this.dragend);
        },
        dragend(){
            // console.log('dragend');
            this.flag = false
            this.end = true
            this.showMsg = true
            setTimeout(() => {
                this.showMsg = false
            }, 1000);
            const items = document.querySelector('.svg');
            items.removeEventListener("mousemove", this.updateCoordinates);
            items.removeEventListener("mouseup", this.dragend);
            items.removeEventListener("mouseleave", this.dragend);
        },
    },
    beforeDestroy() {
        // const items = document.querySelector('.svg');
        // items.removeEventListener("touchmove", this.touchmove);
        // items.removeEventListener("touchstart", this.dragover);
        // items.removeEventListener("touchend", this.dragend);
    },
    mounted(){
        // this.$nextTick(function () {
        // })
        
        const items = document.querySelector('.svg');
        items.addEventListener("touchmove", this.touchmove);
        items.addEventListener("touchstart", this.dragover);
        items.addEventListener("touchend", this.dragend);

        this.hirewidth = document.getElementById('hirebg').getBoundingClientRect().width;
        this.hireX = this.hirewidth/2+20

        this.liwidth = document.getElementById('heart').getBoundingClientRect().width;
        let lastli = document.getElementById('lastli').getBoundingClientRect().width;
        let gap = lastli-(this.liwidth*3)
        this.lastli = (this.liwidth*2)+gap
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 50%, 0)
  }
  100% {
    opacity: 1;
    transform: none
  }
}
.AboutProfileBox{
    width: 90%;
    margin: auto;
    small{
        margin: 20px auto 0;
        display: block;
        text-align: center; 
        font:italic 900 12px system-ui;
    }
    .hire{
        .msg{
            text-align: center;
            position: absolute;
            bottom: 38px;
            font:italic 900 12px system-ui;
            background: #fff;
            border: #000 2px solid;
            border-radius: 5px;
            padding:5px 10px;
            animation: fadeInUp 1s both;
            &::before {
                z-index: 2;
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 10px 0 10px;
                border-color:#fff transparent  transparent transparent ;
                transition: all .3s;
                bottom: -9px;
                right: 0;
                left: 0;
                margin: auto;
            }
            &::after {
                z-index: 1;
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 12px 12px 0 12px;
                border-color:#000 transparent  transparent transparent ;
                transition: all .3s;
                bottom: -12px;
                right: 0;
                left: 0;
                margin: auto;
            }
        }
        h2{
            font: 900 30px/1.7 serif;
        }
        #hirebg{
            border: #000 2px solid;
            padding: 10px;
            margin-bottom: 10px;
            position: relative;
            &::before{
                border-radius: 10px;
                content: '';
                position: absolute;
                height: 5px;
                margin: auto;
                width:87%;
                right: 0;
                left: 0;
                top:0;
                bottom: 0;
                background: #000
            }
            .svg{
                cursor: move;
                background: #fff;
                width: 20px;
                height: 20px;
                position: relative;
                font-size: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                &.end{
                    svg{
                        color: rgb(255, 136, 0);
                    }
                }
            }
        }
    }
}
.ware{
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto 0;
    border: #000 2px solid;
    flex-wrap: wrap;
    position: relative;
    @include pad(){
        margin-bottom: 20px;
    }
    > span{
        position: absolute;
        width: 33.333333%;
        top: 0;
        height: 35px;
        z-index: -1;
        animation-delay: -0.2s;
        transform: translateX(0);
        background: #000;
        transition: transform .3s ease;
        transform-origin: bottom right;
    }
    >li{
        width: 33%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        cursor: pointer;
        color: #000;
        height:35px;
        transition: .2s;
        &:hover{
           font-size: 20px;
           color:  rgb(255, 136, 0);
        }
        &.active{
            color:#fff;
            font-size: 20px;
        }
        &:last-child{
            background: #000;
            opacity: 1;
            cursor: inherit;
            width: 100%;
            min-height: 65px;
            height: auto;
            color: #fff;
            font-size: 12px;
            padding:6px 5px 5px;
            font-size: 0;
            a{
                color: #fff;
                border-radius: 30px;
                background: rgb(85, 14, 29);
                padding: 5px 10px;
                margin:3px;
                font-size: 12px;
                &:hover{
                    background: rgb(124, 3, 29);
                }
            }
            .item{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
               >li{
                    border-radius: 10px;
                    background: #333;
                    padding: 5px 10px;
                    margin:3px;
                    font-size: 12px;
                    transition: .3s;
                    &:hover{
                        background: rgb(85, 54, 14);
                    }
               }
            }
        }
    }
}
.aboutBox {
    position: relative;
    border: #000 solid 2px;
    transition: 0.3s;
    &:hover{
        border-color: rgb(255, 136, 0);
        h1{
            background:  rgb(255, 136, 0);
        }
        strong{
            color: rgb(255, 136, 0);
        }
    }
    h1{
        font:italic 900 32px/1.2 system-ui;
        // text-align: justify;
        background: #000;
        color: #fff;
        padding:5px 10px;
        text-transform: uppercase;
        transition: 0.3s;
    }
    span{
        display: block;
        text-align: right;
        line-height: 15px;
        font-size: 12px;
        padding: 10px 0;
        margin: 0 10px;
        border-top: 1px solid #333;
        strong{
            font: italic 900 13px/1 fantasy;
        }
    }
    .boxinfo{
        padding: 10px;
        font-size: 13px;
        line-height: 20px;
        p{
            padding-bottom: 8px;
            color: #222;
        }
    }
}
</style>

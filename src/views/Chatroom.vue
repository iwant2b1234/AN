<template>
  <div class="chatroom" @click.self="menu = false">
    <div class="talk">
        <h3>
            <p>
                <img src="img/mo.gif"/>
                Mr.Money  🐶
            </p>
            <icon name="drag" @click.native="menu = !menu" :class="{'actv':menu}"/>
            <TalkMenu v-if="menu" :nowBg="nowBg" @selectBg="selectBg"/>
        </h3>
        <div :class="['bottom',`bg-${nowBg}`]" @click="menu = false">
            <div class="info" ref="block" :style="`height: calc( 100% - ${height}px );`">
                <TalkBox v-for="(item, i) in talk" :key="i" :talkText="item" :userFlag="userFlag" :userIndex="userIndex"/>
            </div>
            <icon v-if="goDown" class="goDown" name="Arrow-down" @click.native="$refs.block.scrollTop = scrollTop"/>
            <TalkFtBox v-if="iconBox" @selectIcon="selectIcon"/>
            <TalkFt :textIcon="textIcon" @send="send" @openBox="openBox" @selectIcon="selectIcon"/>
        </div>
    </div>
  </div>
</template> 

<script>
import TalkBox from "@/components/TalkBox.vue";
import TalkFtBox from "@/components/TalkFtBox.vue";
import TalkMenu from "@/components/TalkMenu.vue";
import TalkFt from "@/components/TalkFt.vue";
export default {
    components: {
        TalkBox,
        TalkMenu,
        TalkFtBox,
        TalkFt
    },
    data(){
        return {
            height:60,
            textIcon:'',
            nowBg:0,
            nowTime:'',
            scrollTop:0,
            goDown:false,
            iconBox:false,
            talk:[],
            userIndex:0,
            userFlag:false,
            menu:false,
            moneyTalkList:[ "Holle！我是錢先生🐶<br>口頭禪是汪汪汪，你叫什麼名字～",
                            "好怪的名字😐",
                            "我喜歡吃🍖🍖，你勒",
                            "<img src='img/line.gif' class='line'/>",
                            "......",
                            "喔 我要去洗澡了👋👋👋"]
        
        }
    },
    watch:{
        iconBox(val){
            if(val){
                this.height = 170
            }else{
                this.height = 60
            }
        }
    },
    methods: {
        selectIcon(val){
            this.textIcon = val
        },
        openBox(val){
            if(val){
                this.iconBox = !this.iconBox
            }else{
                this.iconBox = false
            }
        },
        scrollbottom(){
            let body = this.$refs.block
            if(body.offsetHeight < body.scrollHeight){
                this.scrollTop = body.scrollHeight - body.clientHeight
                body.scrollTop = this.scrollTop
            }
        },
        send(val){
            if(!this.userFlag){
                this.userIndex++
            }
            this.talk.push(val)
            this.$nextTick(function () {
                this.scrollbottom()
            })
            this.moneyTalk()
        },
        selectBg(i){
            this.nowBg = i
        },
        moneyTalk(){
            if(this.userIndex > 5||this.userFlag){
                return
            }
            this.userFlag = true
            let nowTime = new Date()
            let hr = nowTime.getHours();
            let ms = nowTime.getMinutes();
            this.nowTime = `${hr}:${ms<10?`0${ms}`:ms}`
            let fistTalk = { content:this.moneyTalkList[this.userIndex], time:this.nowTime, id:this.userIndex }
            if(this.userIndex==1){
                fistTalk.content = `${this.talk[1].content}? ` + fistTalk.content
            }
            this.talk.push(fistTalk)
            setTimeout(() => {
                this.userFlag = false
                this.scrollbottom()
            }, 1000);
        }
    },
    mounted(){
        this.moneyTalk()
        let body = this.$refs.block
        let that = this
        body.addEventListener('scroll',function(){
            if((body.scrollTop + 1) < body.scrollHeight - body.clientHeight){
                that.goDown = true
            }else{
                that.goDown = false
            }
            // console.log(body.scrollTop,body.scrollHeight - body.clientHeight)
        })
    }
}
</script>

<style lang="scss">
$light: #fdfbfb;
$med: #ea6982;
$med1: #fe9a8b;
$med2: #f9748f;
$dark: #874da2;
$dark1:#c43a30;

.chatroom {
    background-image: linear-gradient(to right, $dark 0%, $dark1 49%, $med1 100%);
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    .talk{
        width: 90%;
        margin: auto;
        border-radius: 10px;
        overflow: hidden;
        max-width: 430px;
        background: #fff;
        height: 90vh;
        img{
            width: 30px;
            height: 30px;
            overflow: hidden;
            border-radius: 50px;
            margin-right: 10px;
            &.line {
                width: 160px;
                height: auto;
                margin: 0;
            }
        }
        h3{
            background: #fff;
            display: flex;
            align-items: center;
            height: 50px;
            padding: 0 20px;
            justify-content: space-between;
            color: #6d6a7e;
            position: relative;
            box-shadow: 1px 1px 5px rgba(0 ,0 ,0 ,.1);
            z-index: 2;
            p{
                display: flex;
                align-items: center;
            }
            i{
                font-size: 12px;
                cursor: pointer;
                &:hover, &.actv{
                    color: rgb(224, 191, 2);
                    transition: all .3s;
                }
            }
        }
        .info{
            height: calc( 100% - 60px );
            padding: 10px;
            overflow-y: scroll;
            // box-shadow: 0 0 5px rgba($color: #000, $alpha: .1) inset;
        }
        .bottom{
            height: calc( 100% - 50px );
            background: #eee;
            position: relative;
            overflow: hidden;
            .goDown{
                transition: all .3s;
                position: absolute;
                background: rgba($color: #000, $alpha: .4);
                cursor: pointer;
                color: #fff;
                width: 30px;
                height: 30px;
                line-height: 30px;
                border-radius: 50px;
                bottom: 65px;
                right: 5px;
            }
            &.bg-1{
                background-image: url('../assets/bg1.jpeg');
                background-size: cover;
                .content{
                    background:#9e6d37;
                    color: #fff;
                    &::before{
                        border-color: #9e6d37 transparent transparent transparent;
                    }
                    .load {
                        background: #fff;
                    }
                }
            }
            &.bg-2{
                background-image: url('../assets/bg2.jpeg');
                background-size: cover;
                span, span small{
                    color: #fff;
                }
            }
            &.bg-3{
                background-image: url('../assets/bg3.jpeg');
                background-size: cover;
                .content{
                    background:#f9f797;
                    color: #544225;
                    &::before{
                        border-color: #f9f797 transparent transparent transparent;
                    }
                    .load {
                        background: rgb(176, 197, 136);
                    }
                }
            }
        }
    }
}
</style>

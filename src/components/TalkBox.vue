<template>
    <div :class="['talkBox',{user:talkText.user},{'hb':talkText.hb}]">
            <img src="img/mo.gif" v-if="!talkText.user"/>
            <div class="content" v-if="!talkText.user && userIndex == talkText.id && userFlag">
                <div v-for="(item, i) in 3" :key="i" class="load"></div>
            </div>
            <div :class="['content',{'img':talkText.content.indexOf('img')>-1}]" v-else>
                <template v-if="talkText.hb">
                    <h1>{{hbType[talkText.now]}}</h1>
                    <h2><strong>NT＄</strong>{{talkText.money}}</h2>
                    <p v-if="talkText.content.length>0" v-html="talkText.content"></p>
                    <button @click="openHBdetailed">查看紅包</button>
                </template>
                <p v-else v-html="talkText.content"></p>
                <span><small v-if="talkText.user&&read">已讀</small><br>{{talkText.time}}</span>
            </div>
    </div>
</template> 

<script>
export default {
    props:['talkText','userFlag',"userIndex",'moneyTalkListlength'],
    data(){
        return{
            hbType:['福','賀','祝'],
            read:false
        }
    },
    methods:{
        openHBdetailed(){
            this.$emit('openHBdetailed',this.talkText)
        }
    },
    mounted(){
        if(this.userIndex>this.moneyTalkListlength){
            this.read = false
        }else{
            setTimeout(() => {
                this.read = true
            }, 300);
        }
    },
  
}
</script>

<style scoped lang="scss">
.load {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin:0 5px 5px 0;
    border-radius: 15px;
    background: #dbdbdb;
    animation: loadingC 0.7s 0.1s linear infinite;
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.3s;
    }
}
@keyframes loadingC {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 10px);
    }
    100% {
        transform: translate(0, 0);
    }
}

.talkBox {
    display: flex;
    text-align: left;
    padding: 5px 0;
    .content {
        background:#fff;
        border-radius:0 20px 20px 20px;
        position: relative;
        padding: 10px 15px;
        max-width: 190px;
        word-break:break-word;
        margin-top: 10px;
        line-height: 20px;
        font-size: 14px;
        // box-shadow: 0 0 5px rgba($color: #000, $alpha:.05);
        &.img {
            background: transparent !important;
            box-shadow: none;
            &::before {
                display: none;
            }
        }
        span{
            position: absolute;
            font-size: 12px;
            color: #777;
            right: -35px;
            bottom: 0;
        }
    }
    &.user{
        align-items: center;
        justify-content: flex-end;
        .content{
            border-radius: 20px 0 20px 20px;
            margin-top:0;
            background: #74d0c8 !important;
            color: #fff !important;
            span{
                left: -35px;
                right: initial;
                line-height: 15px;
                bottom: 2px;
                small{
                    color: #838383;
                    display: block;
                    height: 0;
                    text-align: right;
                }
            }
        }
    }
    
@keyframes slideLeft {
	0% {
		transform: translateX(150%);
	}
	50%{
		transform: translateX(-8%);
	}
	65%{
		transform: translateX(4%);
	}
	80%{
		transform: translateX(-4%);
	}
	95%{
		transform: translateX(2%);
	}			
	100% {
		transform: translateX(0%);
	}
}

    &.hb{
        .content{
            text-align: center;
            background: rgb(201, 36, 36) !important;
            width: 150px;
            border-radius: 10px;
            padding: 10px 0 0;
            position: relative;
            animation: slideLeft 1s ease-in-out;
            &::before{
                z-index: 1;
                content: '';
                width: 0;
                height: 0;
                position: absolute;
                top:0;
                right:5px;
                margin: auto;
                border-style: solid;
                border-width: 50px 70px 0 70px;
                border-color: #a11c1c transparent transparent transparent;
            }
        }
        h2{
            padding: 5px 0;
            text-shadow: 1px 1px 5px rgba($color: #000, $alpha: .5s);
            font: italic 900 30px monospace;
            strong{
                font-size: 15px;
            }
        }
        p{
            margin-bottom: 10px;
        }
        h1{
            font:900 22px serif;
            display: flex;
            justify-content: center;
            align-items: center;
            width:50px;
            height:50px;
            border-radius: 100px;
            margin: auto;
            text-shadow: 1px 1px 0 rgba($color: #fff, $alpha: .9s);
            box-shadow: 1px 1px 5px rgba($color: #000, $alpha: .5s);
            background: #ffae00;
            color: rgb(0, 0, 0);
            border: 3px solid rgb(255, 255, 255);
            z-index: 2;
            position: relative;
        }
        button{
            background: transparent;
            border-radius: 0;
            border-top: rgba($color: #fff, $alpha: .3) solid 1px;
            width: 100%;
            font-size: 12px;
            padding:5px 0;
        }
    }
}
</style>

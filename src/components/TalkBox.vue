<template>
    <div :class="['talkBox',{user:talkText.user}]">
        <img src="img/mo.gif" v-if="!talkText.user"/>
        <div class="content" v-if="!talkText.user && userIndex == talkText.id && userFlag">
            <div v-for="(item, i) in 3" :key="i" class="load"></div>
        </div>
        <div :class="['content',{'img':talkText.id == 3}]" v-else>
            <p v-html="talkText.content"></p>
            <span><small v-if="talkText.user&&read">已讀</small><br>{{talkText.time}}</span>
        </div>
    </div>
</template> 

<script>
export default {
    props:['talkText','userFlag',"userIndex"],
    data(){
        return{
            read:false
        }
    },
    mounted(){
        if(this.userIndex>5){
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
        border-radius: 20px;
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
        &::before{
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            left: 0;
            top: 0;
            border-style: solid;
            border-width: 20px 20px 0 0;
            border-color: #fff transparent transparent transparent;
        }
    }
    &.user{
        align-items: center;
        justify-content: flex-end;
        .content{
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
            &::before{
                left: initial;
                right: 0;
                border-width: 0 20px 20px 0;
                border-color: transparent #74d0c8 transparent transparent !important;
            }
        }
    }
}
</style>

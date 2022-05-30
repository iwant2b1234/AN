<template>
    <div class="TalkFtHB" @click.self="closeHB">
        <ul class="sendMoney">
            <span @click="closeHB">x</span>
            <li class="h2">
                <h2>NT$</h2><input type="number" v-model="money" min="1" max="999999"/>
            </li>
            <li>
                <input type="text" v-model="text" placeholder="輸入15字內祝福的話＾_＾" maxlength="15"/>
            </li>
            <li>
                <h1>紅包樣式</h1>
                <ol>
                    <li v-for="(item, i) in hb" :key="i" :class="{'now':now==i}" @click="selectIcon(i)">
                        {{item}}</li>
                </ol>
            </li>
            <li :class="['send',{'sendOK':money>0}]" @click="sendHB">
                發送
            </li>
        </ul>    
    </div>
</template> 

<script>
export default {
    data(){
        return {
            hb:['福','賀','祝'],
            now:0,
            text:'',
            money:0
        }
    },
    methods:{
        sendHB(){
            let nowTime = new Date()
            let hr = nowTime.getHours();
            let ms = nowTime.getMinutes();
            let data={
                content: this.text,
                time: `${hr}:${ms<10?`0${ms}`:ms}`,
                user: true,
                now:this.now,
                hb:true,
                money:this.money
            }
            this.$emit('send',data)
            this.$emit('closeHB',false)
        },
        closeHB(){
            this.$emit('closeHB',false)
        },
        selectIcon(i){
            this.now=i
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";
.TalkFtHB{
    position: absolute;
    background: rgba($color: #000000, $alpha: .6);
    width: 100%;
    height: 100%;
    z-index: 9;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .sendMoney{
        width: 90%;
        background: #fff;
        border-radius:15px; 
        text-align: left;
        overflow: hidden;
        position: relative;
        > li{
            padding:25px 30px;
        }
        span{
            position: absolute;
            right: 15px;
            top: 10px;
            font-size: 20px;
            cursor: pointer;
        }
        .send{
            background: #999;
            color: #fff;
            text-align: center;
            padding: 20px;
            margin-top: 20px;
            font-weight: 900;
            &.sendOK{
                background: #ffae00;
                cursor: pointer;
            }
        }
        .h2{
            display: flex;
            justify-content: center;
            margin-top: 20px;
            align-items: center;
            h2{
                font:900 40px monospace;
                width: 20%;
            }
            input{
                font:900 40px monospace;
                margin-left: 10px;
                width: 80%;
            }
        }
        input{
            font-size: 15px;
            width: 100%;
            border: 0;
            border-bottom: 1px solid #dbdbdb;
        }
        ol{
            display: flex;
            margin-top: 15px;
            justify-content: space-between;
            align-items: center;
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                width:65px;
                height:65px;
                border-radius: 100px;
                text-align: center;
                color: #777;
                font:900 25px/1 serif;
                cursor: pointer;
                border: 1px solid #eee;
                transition: .3s;
                &:hover{
                    color: #000;
                }
                &.now{
                    border-color: #af1f37;
                    background:  #af1f37;
                    transition: .3s;
                    color:#fff;
                }
                &:nth-child(1){

                }
            }
        }
    }
}
</style>

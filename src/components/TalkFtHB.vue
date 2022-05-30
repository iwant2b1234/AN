<template>
    <div class="TalkFtHB" @click.self="closeHB">
        <ul class="sendMoney" v-if="!HBdetailed">
            <span @click="closeHB">x</span>
            <li class="h2">
                <h2>NT$</h2><input type="number" v-model="money" min="1" max="99999"/>
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
        <div class="HB" v-else>
            <span @click="closeHB">x</span>
            <h2><strong>NT＄</strong>{{HBdetailed.money}}</h2>
            <h1>{{hb[HBdetailed.now]}}</h1>
            <p>{{HBdetailed.content}}<br><small>送給 Ｍr.Money 🐶 的紅包</small> </p>
            <div class="before"></div>
            <div class="after"></div>
        </div> 
    </div>
</template> 

<script>
export default {
    props:['HBdetailed'],
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
.HB{
    background: #fff;
    position: relative;
    width: 280px;
    height: 250px;
    border-radius: 10px;
    padding: 20px;
    span{
        position: absolute;
        right: 15px;
        top: 10px;
        font-size: 20px;
        cursor: pointer;
    }
    &:before{
        z-index: -1;
        content: '';
        position: absolute;
        width: 300px;
        height: 100px;
        background: #000000;
        border-radius: 100%;
        left: -10px;
        bottom: 25%;
    }
    .before{
        z-index: 1;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 200px 0 0 300px;
        border-color: transparent transparent transparent #c71d1d;
        left: -10px;
        bottom: -35%;
    }
    .after{
        z-index: 1;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 200px 300px;
        border-color: transparent transparent #da2b2b transparent;
        right: -10px;
        bottom: -35%;
    }
    h2{
        padding: 8% 0;
        font: italic 900 60px monospace;
        color: #da2b2b;
        strong{
            font-size: 20px;
            color: #000;
        }
    }
    p{
        margin: auto;
        small{
            border-top: rgba($color: rgb(209, 209, 209), $alpha: .3) solid 1px;
            font-size: 12px;
            color: rgb(148, 148, 148);display: block;
            padding-top: 10px;
            margin-top: 10px;
        }
    }
    h1{
        position: absolute;
        font:900 40px serif;
        display: flex;
        justify-content: center;
        align-items: center;
        width:70px;
        height:70px;
        border-radius: 100px;
        margin: auto;
        text-shadow: 1px 1px 0 rgba($color: #fff, $alpha: .9s);
        box-shadow: 1px 1px 5px rgba($color: #000, $alpha: .5s);
        background: #ffae00;
        color: rgb(0, 0, 0);
        border: 3px solid rgb(255, 255, 255);
        z-index: 2;
        bottom: -5%;
        left: 0;
        right: 0;
    }
}
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
                    border-color: #d31919;
                    background: #d31919;
                    color: rgb(255, 255, 255);
                    transition: .3s;
                }
            }
        }
    }
}
</style>

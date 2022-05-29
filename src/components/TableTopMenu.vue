<template>
    <div class="tableTopMenu">
        <icon class="moblieMenu" name="drag" @click.native="opneMenu" />
        <ul class="left">
            <li v-for="(item, m) in menu" :key="m"
            :class="{'active':nowType==item}"
            @click="getMenu(item)">
                {{item}}
            </li>
            <span :style="menuStyle"></span>
        </ul>
        <ul class="right">
            <li v-for="(item, i) in set" :key="i" :class="item.icon"
                @click="getSet(item.id)">
                <icon v-if="item.icon!='account'" :name="item.icon"/>
                <img v-else src="img/mo.gif"/>
                <template v-if="item.name">
                    <p class="name">{{item.name}}
                        <span>RD</span>
                    </p>
                </template>
                <div class="list" v-if="i==2">
                    <p>GroupAdmin</p>
                    <p>Seting</p>
                    <p>LogOut</p>
                </div>
            </li>
        </ul>
        <div v-if="shwoNotice" class="notice" @click.self="shwoNotice = false">
            <ol>
                <div class="icons sun-shower">
                    <div class="cloud"></div>
                    <div class="sun">
                        <div class="rays"></div>
                    </div>
                    <div class="rain"></div>
                </div>
                <h1>{{getTime}}
                    <p>{{week}}</p>
                </h1>
                <li v-for="(item, n) in notice" :key="n" 
                    @click="getPoint(item.type,n)" :class="{'point':item.type}">
                    <icon :name="`${item.type==1?'o4':'o2'}`"/>
                    <h2>{{item.id}}. {{item.title}}</h2>
                    <p>{{item.content}}</p>
                    <span>{{item.time}}</span>
                </li>
            </ol>
        </div>
    </div>
</template>
<script>
import icon from './icon.vue'
export default {
  components: { icon },
    data(){
        return{
            interval:undefined,
            week:undefined,
            getTime:0,
            shwoNotice:false,
            nowTypeWidth:0,
            nowType:'Apps',
            menu:['Apps','UI/UX'],
            set:[
                {id:'volume',icon:'volumeup'},
                {id:'notice',icon:'icon_bell'},
                {id:'account',icon:'account',name:'Money'},
            ],
            noticeList:[
                {
                    time:'2021-05-23 14:52',
                    id:1,
                    type:false,
                    title:'As a scale reference',
                    content:'Using this mesh as a reference will mean objects are the right size when you import them into Spark AR Studio.'
                },
                {
                    time:'2020-03-13 12:02',
                    id:2,
                    type:true,
                    title:'Using the Spark AR Studio Face Reference Assets',
                    content:"Download the Face Reference Assets directly using this link, or click the pink button labeled Face Reference Assets on the right-hand side of this page."
                },
                {
                    time:'2020-01-03 09:46',
                    id:3,
                    type:false,
                    title:'Create facial distortion blendshapes',
                    content:"Use 3D software to move the points in this object, to distort the shape of the mesh. You can then import it into Spark AR Studio, and use it as a blendshape to change the shape of someone's face when they're using the effect."
                },
                {
                    time:'2021-06-08 14:52',
                    id:4,
                    type:false,
                    title:'As a scale reference',
                    content:'Using this mesh as a reference will mean objects are the right size when you import them into Spark AR Studio.'
                },
                {
                    time:'2020-11-23 12:02',
                    id:5,
                    type:true,
                    title:'Using the Spark AR Studio Face Reference Assets',
                    content:"Download the Face Reference Assets directly using this link, or click the pink button labeled Face Reference Assets on the right-hand side of this page."
                },
                {
                    time:'2020-09-11 09:46',
                    id:6,
                    type:false,
                    title:'Create facial distortion blendshapes',
                    content:"Use 3D software to move the points in this object, to distort the shape of the mesh. You can then import it into Spark AR Studio, and use it as a blendshape to change the shape of someone's face when they're using the effect."
                },
            ],
        }
    },
    computed:{
        menuStyle(){
            return {transform:`translate3d( ${this.nowTypeWidth}px ,0px,0px)`}
        },
        notice(){
            let list = [...this.noticeList]
            let test = list.sort((a, b) => {
                return b.type - a.type
            });
            return test
        }
    },
    beforeDestroy() {
        clearInterval(this.interval) 
    },
    mounted(){
        var day_list = ['日', '一', '二', '三', '四', '五', '六'];
        var day  = new Date().getDay();
        this.week = `星期${day_list[day]}`
        this.interval = setInterval(() => {
            let date = new Date();
            this.getTime = date.toLocaleString()
        }, 1);
    },
    methods:{
        opneMenu(){
            this.$emit('opneMenu');
        },
        getPoint(type,i){
            this.noticeList = this.notice
            this.$set(this.noticeList[i],'type',type?false:true)
        },
        getSet(v){
            if(v == 'account'){
                return
            }
            switch (v) {
                case 'volume':
                    if(this.set[0].icon == 'volume_off'){
                        this.$set(this.set[0],'icon','volumeup')
                    }else{
                        this.$set(this.set[0],'icon','volume_off')
                    }
                    break;
                default:
                    this.shwoNotice = true
                    break;
            }
        },
        getMenu(v){
            this.nowType = v
            if(v=='Apps'){
                this.nowTypeWidth=0
            }else{
                this.nowTypeWidth=100
            }
        }
    }
}
</script>
<style scoped lang="scss">
@import "@/scss/rwd.scss";

@keyframes spin {
  100% { transform: rotate(360deg); }
}
@keyframes rain {
  0% {
    background: #0cf;
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
  25% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em #0cf,
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  50% {
    background: rgba(255,255,255,0.3);
    box-shadow:
      0.625em 0.875em 0 -0.125em #0cf,
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 rgba(255,255,255,0.2);
  }
  100% {
    box-shadow:
      0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
      -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
      -1.375em -0.125em 0 #0cf;
  }
}
@keyframes cloud {
  0% { opacity: 0; }
  50% { opacity: 0.3; }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-200%, -3em);
  }
}
.tableTopMenu{
    width: 100%;
    height: 50px;
    // background: rgba($color: #000, $alpha: .2);
    border-bottom: 1px solid rgba($color: #fff, $alpha: .3);
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .moblieMenu{
        display: none;
        @include pad(){
            display: block;
            padding: 0 10px;
            line-height: 50px;
            border-right: 1px solid rgba($color: #fff, $alpha: .3);
        }
    }
    .notice{
        position: absolute;
        right: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index:9;
        .cloud {
            position: absolute;
            z-index: 1;
            top: 60%;
            left: 50%;
            width: 3.6875em;
            height: 3.6875em;
            margin: -1.84375em;
            background: currentColor;
            border-radius: 50%;
            color: #12171f;
            box-shadow:
                -2.1875em 0.6875em 0 -0.6875em,
                2.0625em 0.9375em 0 -0.9375em,
                0 0 0 0.375em #fff,
                -2.1875em 0.6875em 0 -0.3125em #fff,
                2.0625em 0.9375em 0 -0.5625em #fff;
                &:after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: -0.5em;
                    display: block;
                    width: 4.5625em;
                    height: 1em;
                    background: currentColor;
                    box-shadow: 0 0.4375em 0 -0.0625em #12171f;
                }
                &:nth-child(2) {
                    z-index: 0;
                    background: transparent;
                    box-shadow:
                        -2.1875em 0.6875em 0 -0.6875em #fff,
                        2.0625em 0.9375em 0 -0.9375em #fff,
                        0 0 0 0.375em #fff,
                        -2.1875em 0.6875em 0 -0.3125em #fff,
                        2.0625em 0.9375em 0 -0.5625em #fff;
                    opacity: 0.3;
                    transform: scale(0.5) translate(6em, -3em);
                    animation: cloud 4s linear infinite;
                    &:after { background: transparent; }
                }
            }
            .sun {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 2.5em;
                height: 2.5em;
                margin: -1.25em;
                background: currentColor;
                border-radius: 50%;
                box-shadow: 0 0 0 0.375em #fff;
                animation: spin 12s infinite linear;
            }
            .rays {
                position: absolute;
                top: -2em;
                left: 50%;
                display: block;
                width: 0.375em;
                height: 1.125em;
                margin-left: -0.1875em;
                background: #fff;
                border-radius: 0.25em;
                box-shadow: 0 5.375em #fff;
                &:before,
                &:after {
                    content: '';
                    position: absolute;
                    top: 0em;
                    left: 0em;
                    display: block;
                    width: 0.375em;
                    height: 1.125em;
                    transform: rotate(60deg);
                    transform-origin: 50% 3.25em;
                    background: #fff;
                    border-radius: 0.25em;
                    box-shadow: 0 5.375em #fff;
                }
                &:before {
                    transform: rotate(120deg);
                }
            }
            .cloud + .sun {
                margin: -2em 1em;
            }
            .rain,
            .lightning,
            .snow {
                position: absolute;
                z-index: 2;
                top: 50%;
                left: 50%;
                width: 3.75em;
                height: 3.75em;
                margin: 0.375em 0 0 -2em;
                background: currentColor;
            }
            .rain:after {
                content: '';
                position: absolute;
                z-index: 2;
                top: 50%;
                left: 50%;
                width: 1.125em;
                height: 1.125em;
                margin: -1em 0 0 -0.25em;
                background: #0cf;
                border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
                box-shadow:
                    0.625em 0.875em 0 -0.125em rgba(255,255,255,0.2),
                    -0.875em 1.125em 0 -0.125em rgba(255,255,255,0.2),
                    -1.375em -0.125em 0 rgba(255,255,255,0.2);
                transform: rotate(-28deg);
                animation: rain 3s linear infinite;
            }
        .icons {
            color:transparent;
            position: relative;
            width: 100%;
            height: 5em;
            transform:scale(.5);
        }
        ol{
            padding:5px 20px 15px;
            position: fixed;
            right: 0;
            top: 0;
            width: 90%;
            max-width: 300px;
            height: 100%;
            background: rgba($color: #000, $alpha: .8);
            box-shadow: -1px 0 15px rgba($color: #000, $alpha: .7);
            overflow: overlay;
            h1{
                font-family: monospace;
                text-align: center;
                margin-bottom: 15px;
                line-height: 20px;
                font-size: 15px;
                p{
                    font-size: 12px;
                }
            }
            li{
                border:1.5px solid rgba($color: #fff, $alpha: .1);
                border-radius: 8px;
                padding: 15px;
                line-height: 20px;
                margin-bottom: 10px;
                position: relative;
                &.point{
                    border:1.5px solid rgba($color: #fff, $alpha: .6);
                }
                i{
                    position: absolute;
                    width: 20px;
                    height: 20px;
                    right: 5px;
                    top: 3px;
                    text-align: center;
                    cursor: pointer;
                    z-index: 9;
                    color: rgba($color: rgb(255, 255, 255), $alpha: .3);
                    &[name='o4']{
                        color:rgb(255, 217, 0);
                    }
                }
                span{
                    color: rgb(131, 131, 131);
                    font-size: 12px;
                    font-family: monospace;
                    display: block;
                    text-align: right;
                }
                h2{
                   padding-bottom:5px;
                   font-size: 18px; 
                   color: #adb9e4;
                }
                p{
                    font-size: 14px;
                    color: rgb(230, 230, 230);
                }
            }
        }
    }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        li{
            text-align: center;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            transition: all .3s;
            &:hover{
                transition: all .3s;
            }
        }
        &.left{
            li{
                line-height: 50px;
                width:100px;
                color: #a6c4ea;
                &.active, &:hover{
                    color: #fff;
                }
            }
            span{
                width: 100px;
                height: 2px;
                position: absolute;
                transition: all .3s;
                display: block;
                background: #fff;
                bottom: 0;
                left: 0;
            }
        }
        &.right{
            li{
                min-width:35px;
                font-size: 22px;
                i{
                    width: 30px;
                    height: 30px;
                    border-radius: 5px;
                    transition: all .3s;
                    line-height: 30px;
                }
                &:hover{
                    i{
                        transition: all .3s;
                        background: rgba($color: #000, $alpha: .3);
                    }
                }
            }
            .account{
                padding-right:15px;
                height: 50px;
                .list{
                    position: absolute;
                    background: #fff;
                    top: 50px;
                    width: 100%;
                    height: 0;
                    overflow: hidden;
                    transition: all .3s;
                    width: 100px;
                    right: 0;
                    z-index: 9;
                    p{
                        transition: all .3s;
                            color: slategrey;
                        padding: 8px 0;
                        &:hover{
                            background: rgb(236, 236, 236);
                        }
                    }
                }
                &:hover{
                    > p{
                        color: rgb(150, 250, 253);
                    }
                    .list{
                        transition: all .3s;
                        height: 84px;
                    }
                }
            }
            .icon_bell{
                margin-right: 10px;
                padding-right: 15px;
                border-right: 2px solid #fff;
                &::before{
                    content: "1";
                    background: #60bae4;
                    position: absolute;
                    top: -6px;
                    right: 7px;
                    width: 25px;
                    height: 25px;
                    border-radius: 25px;
                    line-height: 25px;
                    transform: scale(.7);
                    
                }
            }
            p{
                font-size: 12px;
                padding-left: 8px;
                font-weight: 900;
                &.name{
                    @include pad(){
                        display: none;
                    }
                }
                span{
                    display: inline-block;
                    transform: scale(.7);
                    background: #bd4d86;
                    border-radius: 3px;
                    padding: 3px;
                    font-size: 12px;
                    color: #fff;
                }
            }
            img{
                width: 20px;
                height: 20px;
                overflow: hidden;
                border-radius: 50px;
            }
        }
    }
}
</style>
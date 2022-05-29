<template>
    <div class="tableLeftMenu mobile" :style="`display: ${display};`">
        <lottie-vue-player 
            src="https://assets6.lottiefiles.com/packages/lf20_va9zll1u.json" 
            background="transparent"
            style="width: 100%; height: 50px;"
            loop
            autoplay />
        <h2>BackSystem</h2>
        <ul>
            <li v-for="(item, i) in menu" :key="i">
                {{item.name}}
                <!-- <icon v-if="item.more" name="arrow-down" class="more"/> -->
                <ol>
                    <li v-for="(list, m) in item.more" :key="m" :class="{'now':now==list}" @click="getNow(list)">
                        <icon :name='item.icon'/>
                        <p>{{list}}</p>
                        <span v-if="list=='DragTable'">3</span>
                    </li>
                </ol>
            </li>   
        </ul>
    </div>
</template>
<script>
import icon from './icon.vue'
export default {
    props:['now','open'],
    components: { icon ,},
    data(){
        return{
            innerWidth:0,
            options: {
                    minimizable: false,
                    playerSize: "standard",
                    backgroundColor: '#fff',
                    backgroundStyle: 'color',
                    theme: {
                        controlsView: "standard",
                        active: "light",
                        light: {
                            color: '#3D4852',
                            backgroundColor: '#fff',
                            opacity: '0.7',
                        },
                        dark: {
                            color: '#fff',
                            backgroundColor: '#202020',
                            opacity: '0.7',
                        }
                    }
            },
            menu:[
                {icon:'dog',name:'Drag',page:'',more:['DragTable']},
                {icon:'foot',name:'Chart',page:'',more:['ChartTable','ListChartTable']},
                {icon:'hanbaobao',name:'HanBao',page:'',more:['HanBaoTable']},
                {icon:'tusi',name:'Other',page:'',more:['OtherTable']},
            ]
        }
    },
    computed:{
        display(){
            if(this.innerWidth>1025){
                return 'block'
            }else{
                if(this.open){
                    return 'block'
                }
                return 'none'
            }
        }
    },
    methods:{
        getNow(v){
            this.$emit('getNow',v)
        }
    },
    mounted() {
        const self = this
        window.onresize = () => {
            return (() => {
                self.innerWidth = window.innerWidth
            })()
        }
    }
}
</script>
<style scoped lang="scss">
@import "@/scss/rwd.scss";

.tableLeftMenu{
    padding: 10px;
    width: 200px;
    text-align: center;
    // background: rgba($color: #000, $alpha: .2);
    border-right: 1px solid rgba($color: #fff, $alpha: .3);
    @include pad(){
        display: none;
        &.mobile{
            position: fixed;
            background: rgba($color: #2f4457, $alpha: .9);
            height: 100%;
            z-index: 9;
        }
    }
    .lf-relative{
        background: transparent;
    }
    h2{
        padding-bottom: 10px;
        font-size: 12px;
        font-family: monospace;
        font-weight: initial;
        opacity: .7;
    }
    ul{
        > li{
            padding-top: 10px;
            font-family: monospace;
            color: rgba($color: #fff, $alpha: .7);
            font-size: 16px;
        }
        li{
            line-height: 30px;
            display: flex;
            width: 100%;
            align-items: center;
            flex-wrap: wrap;
        }
        ol{
            width: 100%;
            li{
                font-size: 12px;
                color: #fff;
                line-height: 25px;
                cursor: pointer;
                padding: 5px;
                border-radius: 5px;
                position: relative;
                &.now ,&:hover{
                    background: rgba($color: #000, $alpha: .2);
                    transition: all .3s;
                }
                i{
                    padding-right: 5px;
                }
                span{
                    position: absolute;
                    width: 20px;
                    border-radius: 50px;
                    height: 20px;
                    line-height: 20px;
                    background: #60bae4;
                    right: 5px;
                }
            }
        }
    }
}
</style>
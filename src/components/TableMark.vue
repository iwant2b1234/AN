<template>
<div class="TableMark">
    <p><span>{{now}}</span> <icon name="s_right"/> {{menu[act]}}</p>
    <ul>
        <li v-for="(item, i) in menu" :key="i"
        :class="{'act':act==i}" @click="act=i">
            {{item}}
        </li>
    </ul>
</div>
</template>
<script>
export default {
    props:['now'],
    data(){
        return{
            act:0,
            menu:['APP','IOS','Android']
        }
    },
    methods:{
        getNow(v){
            this.$emit('getNow',v)
        }
    }
}
</script>
<style scoped lang="scss">
.TableMark{
    p{
        font-size: 13px;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        span{
            font-weight: 900;
            padding-left: 5px;
        }
    }
    ul{
        display: flex;
        margin-bottom: 10px;
        align-items: flex-end;
        height: 35px;
        border-bottom: 1px solid;
        li{
            padding:8px 10px;
            border-radius: 8px 6px 0 0;
            width: 100px;
            margin-right: 10px;
            background: #97aaca;
            position: relative;
            color: #dfdfe6;
            transition: all .3s;
            font-size: 14px;
            z-index: 3;
            box-shadow: 20px -2px 10px rgba(25, 61, 93, 0.2);
            &:nth-child(2){
                z-index: 2;
            }
            &:nth-child(3){
                z-index: 1;
            }
            &.act{
                background: #fff;
                color: #dc7e7e;
                font-weight: 900;
                z-index: 4;
                &::after{
                    border-color: transparent transparent transparent #fff;
                }
            }
            &::after{
                z-index: 1;
                content: '';
                display: block;
                position: absolute;
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 29px 0 0 20px;
                border-color: transparent transparent transparent #97aaca;
                transition: all .3s;
                right: -18px;
                bottom: 0;
            }
            &:hover{
                padding-bottom:15px;
                transition: all .3s;
                cursor: pointer;
                &::after{
                    transition: all .3s;
                    border-width: 36px 0 0 20px;
                }
            }
        }
    }
}
</style>
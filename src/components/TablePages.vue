<template>
<div class="TablePages">
    <ul>
        <li>
            <icon name="s_left"/>
        </li>
        <li v-for="(item, i) in 5" :key="i"
        :class="{'act':act==item}" @click="act=item">
            {{item}}
        </li>
        <li>
            <icon name="s_right"/>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    props:['now'],
    data(){
        return{
            act:1,
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
.TablePages{
    ul{
        display: flex;
        margin: 20px 0;
        align-items:center;
        justify-content: center;
        li{
            text-align: center;
            border-radius: 50px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            margin-right: 10px;
            background: #acbbd4;
            position: relative;
            color: #dfdfe6;
            transition: all .3s;
            font-size: 14px;
            &.act, &:hover{
                transition: all .3s;
                background: #66c9e7;
                color: #fff;
                font-weight: 900;
                cursor: pointer;
            }
        }
    }
}
</style>
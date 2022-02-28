<template>
    <ul>
        <li v-for="(item, i) in bg" :key="i" 
            :class="{'actv':nowBg==i}"
            @click="selectBg(i)"
            >
            {{ item }}
        </li>
    </ul>
</template> 

<script>
export default {
    props:['nowBg'],
    data(){
        return {
            bg:['🍙','🥑','🍊','🍋']
        }
    },
    methods:{
        selectBg(i){
            this.$emit("selectBg",i)
        }
    }
}
</script>

<style scoped lang="scss">
ul{
    position: absolute;
    background: #fff;
    right: 0;
    z-index: 1;
    bottom: -130px;
    width: 55px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px #ddd;
    li {
        cursor: pointer;
        line-height: 30px;
        border-radius: 5px;
        &:hover, &.actv{
            transition: all .3s;
            background: rgb(243, 243, 243);
        }
    }
}
</style>

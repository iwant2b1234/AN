<template>
    <ul>
        <li v-for="(item, i) in list" :key="i" 
            @click="selectIcon(item)">
            {{ item }}
        </li>
    </ul>
</template> 

<script>
export default {
    data(){
        return {
            list:['😛','🤑','😄','😆','😅','😂','🤣','🤡','🤗','🥳','😎','🤠','😱','😨',
            '😰','😋','🥰','😍','👈','👉','👆','🖖','👋','🤘','🤟','👌','🦷','👀','💕',
            '🐶','🐱','🐭','🐹','🐰','🐻','🐼','🍄','💩','👻','🍰','🧁','🍿','🍞','🥐',
            '🍑','🍇','🍉','🍌','🥝','🥑','🍋']
        }
    },
    methods:{
        selectIcon(item){
            this.$emit("selectIcon",item)
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";

ul{
    background: rgba($color: #fff, $alpha: .6);
    width: 100%;
    padding: 10px;
    box-shadow: 1px 1px 15px #ddd;
    display: flex;
    flex-wrap: wrap;
    li {
        width: 5.88%;
        font-size: 100%;
        cursor: pointer;
        line-height: 30px;
        border-radius: 5px;
        // @include mobile(){
        //     font-size: 18px;
        // }
        // @include I5(){
        //     font-size: 15px;
        // }
        &:hover{
            transition: all .3s;
            background: #fff;
        }
    }
}
</style>

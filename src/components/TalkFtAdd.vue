<template>
    <ul>
        <li v-for="(item, i) in list" :key="i" 
            @click="closeHB">
            <icon :name="item"/>
            <p>紅包</p>
        </li>
    </ul>
</template> 

<script>
export default {
    data(){
        return {
            list:['transaction_icon_bonus'
                
            ]
        }
    },
    methods:{
        closeHB(){
            this.$emit("closeHB",true)
        }
    }
}
</script>

<style scoped lang="scss">
@import "@/scss/rwd.scss";

ul{
    background: rgba($color: #fff, $alpha: .6);
    width: 100%;
    padding: 10px 30px;
    box-shadow: 1px 1px 15px #ddd;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 110px;
    li {
        font-size: 100%;
        cursor: pointer;
        font-size: 55px;
        color: rgb(255, 166, 0);
        p{
            color: #000;
            font-size: 12px;
        }
    }
}
</style>

<template>
  <div class="lobby">
    <div class="background"></div>
    <div class="gameInfo">
      <Game :gameList="gameList" />
    </div>
  </div>
</template>

<script lang="ts">
import Game from "../components/Game.vue";
export default {
  components: {
    Game,
  },
  data(){
    return{
      gameList:[
      { icon: "Basket-Ball", ch: "投籃遊戲", en: "Basketball",link:'/basketball' },
      { icon: "jingziqi", ch: "井字遊戲", en: "OOXX",link:'/ooxx' },
      { icon: "huaban", ch: "響應滾動圖", en: "ScrollBanner",link:'/banner' },
      { icon: "chatroom", ch: "聊天室", en: "Chatroom",link:'/chatroom' },
      { icon: "fishing", ch: "天才釣手", en: "Fishing",link:'/about' },
      { icon: "drag", ch: "表格拖移", en: "TableDrag",link:'/table' },
      { icon: "Solitaire", ch: "新接龍", en: "Freecell",link:'/solitaire' },
      ]
    }
  },
  methods:{
    makeadd(x){
      return function(y){
        return x + y
      }
    }
  },
  mounted(){
    var add = this.makeadd(5)
    console.log(add(2));
  }
}

</script>

<style scoped lang="scss">
.lobby {
  position: relative;
  width: 100%;
  height: 100vh;
  .gameInfo {
    width: 90%;
    max-width: 900px;
    margin: auto;
    padding: 50px 0;
    position: relative;
  }
  .background {
    position: absolute;
    width: 100%;
    height: 60%;
    transform: skewY(30deg);
    transform-origin: 100%;
    background: linear-gradient(-150deg, #222222 15%, #373737 60%, #3c4859 70%);
  }
}
</style>

<template>
  <div class="Ooxx">
    <h3 v-if="nowType==undefined">SELECT FIST ICON
      <br>
      <icon @click.native="setNowType(i)" 
        v-for="(item, i) in 2" :key="`icon${i}`" 
        :name="ox[i]"/>
    </h3>
    <ul v-else :class="line">
      <button @click="playAgain"><icon name="undo"/>Refresh</button>
      <li v-for="(item, i) in 9" :key="i" @click="getOX(i)" 
      :style="list[i]?`background:#fff;`:''">
        <icon :name="list[i]" :class="setColor(list[i])" />
      </li>
    </ul>
    <transition name="bounce">
      <div v-if="win" class="win">
        <p>
          <icon :name="win" :class="setColor(win)"/>WIN!
        </p>
        <button @click="playAgain">play again</button>
      </div>
    </transition>
  </div>
</template> 

<script>
// import _ from 'lodash';
export default {
  data(){
    return {
      ox:["caomei","bingqilin"],
      list:[],
      nowType:undefined,
      getLine:[
        '0,1,2','3,4,5','6,7,8','0,4,8','2,4,6','2,5,8','1,4,7','0,3,6'
      ],
      win:'',
      line:''
    }
  },
  methods: {
    playAgain(){
      this.list=[]
      for (let index = 0; index < 9; index++) {
        this.list.push("")
      }
      this.win=''
      this.line=''
    },
    setColor(val){
      if(val=="caomei"){
        return "pink"
      }else{
        return ""
      }
    },
    setNowType(i){
      this.nowType = i;
      for (let index = 0; index < 9; index++) {
        this.list.push("")
      }
    },
    setLne(arr,type){
      if(arr.length<3){
        return
      }
      let array=arr.sort()
      let bingo = '';
      for (let i = 0; i < this.getLine.length; i++) {
        let a=[]
        let line = this.getLine[i].split(",")
        for (let index = 0; index < 3; index++) {
          if(array.indexOf(line[index])>-1){
            a.push(1)
          }
          if(a.length>2){
            bingo=line.join(',')
          }
        }
      }
      if(bingo!="") this.getBingo(type,bingo)
      // console.log(arr,type,bingo);
    },
    getBingo(type,bingo){
      this.win = type
      this.getLine.forEach((element,i) => {
        if(element==bingo){
          this.line = `line${i}`
        }
      });
    },
    getOX(i){
      if(this.list[i]!=""){
        return
      }
      let xoList=[]
      let type = this.ox[this.nowType]
      this.$set(this.list, i, type)
      this.list.forEach((ele,idx) => {
        if(ele==type){
          xoList.push(idx.toString())
        }
      });
      this.setLne(xoList,type);
      this.nowType=this.nowType==0?1:0
    }
  }
}
</script>

<style scoped lang="scss">
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.Ooxx {
  background:#fff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .win{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(53, 172, 146,.8);
    font-size: 90px;
    color: rgb(33, 111, 114);
    text-shadow: 2px 3px 0 #fff;
    text-align: center;
    padding-top: 35%;
    button{
      margin-top: 20px;
      border: 0;
      background: #fff;
      color: #35ac92;
      font-size: 16px;
      &:hover{
        color: #ffc400;
        transition: all .3s;
        transform:translate(0, 5px);
      }
    }
  }
  *:not(i){
    font-family: monospace;
  }
  i{
    color: #ffe053;
    &.pink{
      color: #fda7a7;
    }
  }
  h3{
    text-align: center;
    color: #94d4e8;
    font-size: 30px;
    font-weight: normal;
    line-height: 60px;
    i{
      cursor: pointer;
      color: rgb(83, 134, 134);
      margin: 10px;
      font-size: 50px;
      &:hover{
        transition: all .3s;
        color: #f7426f;
      }
      &:last-child{
        &:hover{
          color: #ffc400;
        }
      }
    }
  }
  ul{
    width: 100%;
    max-width: 300px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    button{
      position: absolute;
      right:0;
      left: 0;
      top: -50px;
      border: 0;
      padding:5px 10px;
      background: #a9e20c;
      color: #fff;
      i{
        color: #fff;
        font-size: 13px;
        margin-right: 5px;
      }
      &:hover{
        background: #f3d630;
      }
    }
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: rgb(36, 226, 210);
      display: none;
    }
    &.line0{
      &::before{
        display: block;
        transform:translate(0, 30px);
      }
    }
    &.line1{
      &::before{
        display: block;
        transform:translate(0, 90px);
      }
    }
    &.line2{
      &::before{
        display: block;
        transform:translate(0, 150px);
      }
    }
    &.line3{
      &::before{
        display: block;
        transform:rotate(31deg) translate(45px, 75px);
      }
    }
    &.line4{
      &::before{
        display: block;
        transform:rotate(329deg) translate(-50px, 75px);
      }
    }
    &.line5{
      &::before{
        display: block;
        transform:rotate(90deg) translate(90px, -157px);
        width: 60%;
      }
    }
    &.line6{
      &::before{
        display: block;
        transform:rotate(90deg) translate(90px, -58px);
        width: 60%;
      }
    }
    &.line7{
      &::before{
        display: block;
        transform:rotate(90deg) translate(90px, 42px);
        width: 60%;
      }
    }
    li{
      cursor: pointer;
      width: 32%;
      height: 60px;
      // box-shadow: 1px 1px 1px inset rgba(255, 255, 255, .5);
      // border-bottom: 3px dotted #fff;
      // border-left: 3px dotted #fff;
      color: #fff;
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 40px;
      background: #94d4e8;
      border-radius: 10px;
      margin: 1px;
      &:nth-child(3n+1){
        border-left: 0;
      }
      &:last-child, &:nth-last-child(3), &:nth-last-child(2){
        border-bottom: 0;
      }
      &:hover{
        background: rgba(163, 204, 110, 0.2);
        transition: all .3s;
      }
    }
  }
}
</style>

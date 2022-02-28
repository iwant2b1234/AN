<template>
  <div class="about">
    <div class="kv">
      {
      <div class="typing-demo">
        <p> about An</p>
        This is a profile.
      </div>
      }
    </div>
    <div class="profile">
      <!-- <div class="info">
        <div class="img">
          <img src="img/mo.gif"/>
        </div>
        <h2>An Chen <span>陳安怡</span></h2>
        <p>
          會進入前端或許是命運吧 <img src="img/013.png"/>
          </p>
        <p>
          本來在上一份公司是應徵網頁設計，但面試時經理得知我有切版經驗就說服我進入前端，於是就開始了前端三年多的旅程。
        </p>
        <p>
          決定離開前公司原因有很多，最大原因是去年撐起單親家庭的母親因病過世了，去年的時間都是公司醫院兩頭跑，今年離職打算休息一個月，但疫情關係就默默延長兩個月了。
        </p>
      </div> -->

    </div>
  </div>
</template>
<script>
export default {
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
@keyframes typing {
  from {
    width: 0
  }
}
@keyframes blink {
  50% {
    border-color: transparent
  }
}
.about{
    color: #fff;
    background: rgb(49, 48, 48);
    width: 100%;
    height: 100vh;
    .kv{
      font-size: 3em;
      align-items: center;
      display: flex;
      .typing-demo {
        width: 27ch;
        margin: 0 10px;
        animation: typing 3s steps(27), blink .5s step-end infinite alternate;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        font-family: monospace;
        font-size: 2em;
      }
    }
    .profile{
      width: 550px;
      margin: auto;
      font-size: 13px;
      .img{
        border-radius: 50px;
        width: 100px;
        overflow: hidden;
        height: 100px;
        margin: auto;
        right: 0;
        left: 0;
        top: -60px;
        background: #76818c;
        text-align: center;
        border: 5px solid #fff;
        img{
          width:100%;
        }
      }
      .info{
        background: #f5f5f5;
        position: relative;
        border-radius: 10px;
        padding: 30px 50px;
        color: rgb(77, 77, 77);
        text-align: center;
        box-shadow: 0 5px 15px rgba(24, 24, 24,.2);
        h2{
          font-size: 16px;
          padding:20px 0 10px;
          span{
            color: #909090;
            font-weight: 400;
            font-size: 12px;
            display: block;
            padding-top: 5px;
          }
        }
        p{
          line-height: 25px;
          margin-bottom: 10px;
          span{
            color: #fff;
            background: rgb(38, 67, 95);
            padding: 2px 5px;
            border-radius: 5px;
          }
          img{
            width: 30px;
            height: 30px;
            vertical-align: -10px;
          }
        }
      }
    }
}
</style>
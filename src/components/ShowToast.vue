<template>
    <div class="showToast lightBox" v-if="showToast">
        <div class="showToast__info">
            {{msg}}
        </div>
    </div>
</template>

<script>
export default {
    created(){
      this.$bus.$on('toast',(msg,callback) =>{
        this.msg = msg
        console.log(msg,'msg');
        this.showToast = true
        let time = msg.length > 15 ? 2000 : 1500
        setTimeout(()=>{
          this.showToast = false
          this.msg =''
        },time)
        if(callback){
          callback()
        }
      })
    },
    data(){
      return {
        msg:'',
        showToast:false
      }
    },
    destroy(){
      this.$bus.$off('toast');
    }
}
</script>

<style lang="scss">
.showToast{
  z-index: 999999 !important;
  display:flex;
  justify-content:center;
  align-items:center;
  color: #fff;
  &__info{
    padding:10px 30px;
    border-radius:15px;
    font-size: 13px;
    background:rgba(rgb(216, 152, 208),.9);
  }
}
</style>

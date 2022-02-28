<template>
    <div class="showMsg lightBox" v-if="showMsg" @click.self="closeMsgFun">
        <div class="showMsg__info">
            <div class="h3">
                <lottie-vue-player 
                    src="https://assets6.lottiefiles.com/packages/lf20_z0haofpa.json" 
                    background="transparent" 
                    style="width: 25px; height:25px; margin-right: 5px;"
                    />
                    {{title}}
            </div>
            <div class="showMsg__text" v-html="html"></div>
            <div class="showMsg__btn">
                <button @click="showMsgFun" v-if="otherBtn">
                    {{otherBtn}}
                </button>
                <template v-else>
                    <button v-if="showCancel" @click="closeMsgFun" class="Close">
                        Close
                    </button>
                    <button @click="showMsgFun">
                        OK
                    </button>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.$bus.$on('showMsg',(title, msg, fun, cancel, otherBtn) =>{
        this.title = title
        this.html = msg
        this.showMsg = true
        this.fun = fun
        this.showCancel = cancel
        this.otherBtn = otherBtn
      })
    },
    data(){
      return {
        title:'',
        html:'',
        fun:undefined,
        showMsg:false,
        showCancel:false,
        otherBtn:undefined
      }
    },
    methods: {
        showMsgFun(){
            if(this.fun){
                this.fun()
            }
            this.showMsg = false
            this.html = ''
            this.fun = ''
            const body = document.getElementsByTagName('body')[0];
            body.style = "overflow:hidden"
        },
        closeMsgFun(){
          this.showMsg = false
        }
    },
    destroy(){
      this.$bus.$off('showMsg');
    }
}
</script>

<style lang="scss">
.showMsg{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &__info {
        position: relative;
        border-radius: 15px;
        background:#fff;
        width: 80%;
        max-width: 400px;
        height: 190px;
        text-align: center;
        overflow: hidden;
        color:#fff;
        .h3{
            height: 40px;
            background: #f38dc0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .showMsg__text, .showMsg__btn {
            display: flex;
            align-items:  center;
            text-align: center;
            justify-content: center;
            padding:15px;
        }
    }
    &__text {
        word-break:break-word;
        height: 53%;
        color:rgb(123, 120, 133);
        font-size: 13px;
        p{
            font-weight: 900;
            font-size: 14px;
            padding: 0 2px;
            color: rgb(211, 128, 207);
        }
    }
    &__btn {
            position: absolute;
            bottom: 0;
            width: 100%;
        }
        button {
            width:100px;
            margin: 0 5px;
            background: #ffc400;
            border: 1px solid #ffc400;
            &:hover{
                border: 1px solid #f39519;
                background: #f39519;
            }
            &.Close{
                background: #fff;
                color: #6b6b6b;
                border-color: #6b6b6b;
                &:hover{
                    background: #bdbdbd;
                }
            }
        }
}
</style>

<template>
    <div class="talkFt">
        <div class="file" @click="openAdd(true)">
            <!-- <input type="file" @change="getFile" ref="files" @click="openBox(false)"/> -->
            <icon name="icon_plus"/>
        </div>
        <div class="textarea">
            <textarea placeholder="輸入訊息" v-model="text" @keydown="keyText" @focus="openBox(false)"></textarea>
        </div>
        <icon @click.native="openBox(true)" name="download_icon_exte" />
    </div>
</template> 

<script>
export default {
    props:['textIcon'],
    data(){
      return {
        text:'',
      }
    },
    watch:{
        textIcon:{
            handler(newValue) {
                if(newValue!=''){
                    this.text = this.text + newValue
                }
                this.$emit("selectIcon",'')
            },
            deep:true,
            immediate: true
        }
    },
    methods:{
        getFile(){
            // const vm = this;
            // console.log(vm.$refs.files.files[0]);
            this.platform.showToast('opps!這功能沒辦法寫>_<')
        },
        openAdd(val){
            this.$emit("openAdd",val)
        },
        openBox(val){
            this.$emit("openBox",val)
        },
        keyText(e){
            // console.log(e.code,e.shiftKey);
            this.openBox(false)
            if(e.code == "Enter" && !e.shiftKey){
                if(this.text == ''){
                    return
                }
                this.send()
                e.preventDefault();
            }
        },
        send(){
            let talk = {user:true}
            let nowTime = new Date()
            let hr = nowTime.getHours();
            let ms = nowTime.getMinutes();
            talk.time = `${hr}:${ms<10?`0${ms}`:ms}`
            let text = this.text.split('\n')
            talk.content = text.join('<br>')
            this.$emit("send",talk)
            this.text = ''
        }
    }
}
</script>

<style scoped lang="scss">
.talkFt {
    display: flex;
    height: 60px;
    position: relative;
    width: 100%;
    background: #fff;
    bottom: 0;
    align-items: center;
    justify-content: center;
    .file{
        &:hover{
            i{
                color: rgb(224, 55, 120);
            }
        }
    }
    input{
        position: absolute;
        width: 50px;
        opacity: 0;
        left: 0;
    }
    i, .file{
        width: 50px;
        text-align: center;
        cursor: pointer;
        transition: all .3s;
        &:hover{
            color: rgb(255, 174, 0);
            transition: all .3s;
        }
    }
    .textarea{
        width: calc( 100% - 100px );
        overflow: hidden;
        border-radius: 50px;
        height: 40px;
        display: flex;
        border:1px solid #eee;
        align-items: center;
        justify-content: center;
        padding:0 20px;
        padding: 4px 20px 0 20px;
        textarea{
            border: 0;
            width: 100%;
            min-width: 100%;
            color: rgb(54, 53, 58);
            max-height: 23px;
            min-height: 23px;
        }
    }
}
</style>

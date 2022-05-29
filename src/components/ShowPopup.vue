<template>
    <div class="ShowPopup lightBox" @click.self="close">
        <div class="ShowPopup__info">
            <h3 @click="close">
                INFO
                <icon name="delete"/>
            </h3>
            <ul class="ShowPopup__text">
                <li>
                    <p>Id</p>
                    {{popupData.id}}
                </li>
                <li>
                    <p>Manage</p>
                    {{popupData.manage}}
                </li>
                <li class="long">
                    <p><span>*</span>Title </p>
                    <form-group :validator="$v.title" name="Title">
                        <input v-model="title" maxlength="10px"/>
                    </form-group>
                </li>
                <li class="type long">
                    <p>Type</p>
                    <div v-for="(item, i) in 3" :key="i">
                        <input type="radio" :id="getType(i)" name="type" :value="i" v-model="type">
                        <label :for="getType(i)">{{getType(i)}}</label>
                    </div>
                    <!-- <span :class="`type${popupData.type}`">{{getType(popupData.type)}}</span> -->
                </li>
                <li>
                    <p>Time</p>
                    {{popupData.time}}
                </li>
                <li>
                    <p>Status</p>
                    <SwitchBtn :value="status" @change="status = !status"/>
                </li>
                <li class="long">
                    <p>Remark</p>
                    <textarea v-model="rm"></textarea>
                </li>
            </ul>
            <div class="ShowPopup__btn">
                <button @click="close" class="Close">
                    Close
                </button>
                <button @click="getup">
                    OK
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import SwitchBtn from "@/components/SwitchBtn";
import { required } from 'vuelidate/lib/validators'
import icon from './icon.vue'
export default {
  components: { icon, SwitchBtn },
    props:['popupData'],
    data(){
      return {
        status:undefined,
        title:'',
        rm:'',
        type:0
      }
    },
    validations: {
        title:{
            required,
        },
    },
    methods: {
        close(){
          this.$emit("close");
          this.$v.$reset()
        },
        getup(){
            this.$v.$touch() //驗證所有條件是否成立
            if (this.$v.$invalid) { //有人不成立就中斷
                return   
            }
            let data = {...this.popupData}
            data.status = this.status
            data.title = this.title
            data.rm = this.rm
            data.type = this.type
            this.$emit("getup",data);
            this.close();
        },
        getType(type){
            switch (type) {
                case 0:
                    return 'PRO'
                case 1:
                    return 'HOT'
                default:
                    return 'NEW'
            }
        },
    },
    watch:{
        popupData:{
            handler(newValue) {
                this.status = newValue.status
                this.title = newValue.title
                this.rm = newValue.rm
                this.type = newValue.type
            },
            deep:true,
            immediate: true
        }
    }
}
</script>

<style lang="scss">
.ShowPopup{
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &__info {
        position: relative;
        border-radius: 10px;
        background:#fff;
        width: 95%;
        max-width: 500px;
        overflow: hidden;
        padding: 20px ;
        color:#4c5b5f;
        text-align: left;
        h3{
            padding:0 0 10px;
            font-size: 20px;
            border-bottom: 1px solid #dbdbdb;
            display: flex;
            justify-content: space-between;
            i{
                cursor: pointer;
                font-weight: 100;
                color: #ffae00;
                &:hover{
                    color: #5e5e5e;
                }
            }
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
        min-height: 100px;
        color:rgb(123, 120, 133);
        font-size: 14px;
        padding:10px;
        display: flex;
        align-items:  center;
        flex-wrap: wrap;
        li{
            width: 50%;
            display: flex;
            height: 50px;
            align-items: center;
            font-weight: 900;
            color: #000;
            &.type{
                div{
                    align-items: center;
                    display: flex;
                    input{
                        width: 15px;
                        height: 15px;
                        margin-right: 10px;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        border-radius: 50%;
                        border: 2px solid rgb(201, 201, 201);
                        transition: 0.2s all linear;
                        outline: none;
                        padding: 0;
                        &:checked {
                            border: 6px solid rgb(200, 138, 250);
                        }
                    }
                    label{
                        width: 35px;
                        margin-right: 15px;
                    }
                }
                span{
                    border: 1.5px solid;
                    display: inline-block;
                    color: #3eb3e9;
                    border-radius: 3px;
                    padding: 0 3px;
                    height: 20px;
                    line-height: 16px;
                    font-size: 12px;
                    &.type1{
                        color: #ff8599;
                    }
                    &.type2{
                        color: #9e74ff;
                    }
                }
            } 
            &.long{
                width: 100%;
            }
            .switch-button{
                border: 1px solid rgba($color: #000, $alpha: .5);
                .button {
                    background: rgb(128, 128, 128);
                }
                &.enabled {
                    border: 1px solid rgba($color: #fff, $alpha: .5);
                    .button {
                        background: #fff;
                    }
                }
            }
            p{
                font-weight: initial;
                color: #9e9e9e;
                width: 70px;
                position: relative;
                span{
                    color: red;
                    position: absolute;
                    left: -8px;
                    top: -5px;
                }
            }
            input, textarea{
                border:1px solid #e2e2e2 ;
                padding:3px 10px;
                border-radius:5px;
                height: 28px;
                width: 100%;
            }
            textarea{
                min-width: 80%;
                max-width: 80%;
                min-height: 28px;
                width: 80%;
                max-height: 60px;
            }
            .switch-button-control{
                margin: 0;
            }
            .form-group{
                width: 80%;
                .form-error{
                    color: red;
                    font-size: 12px;
                    padding-top: 5px;
                }
            }
        }
        
    }
    &__btn {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin:20px auto 0;
        }
        button {
            width:100px;
            margin: 0 5px;
            background: #589ad1;
            border: 1px solid #589ad1;
            &:hover{
                background: #264e6e;
            }
            &.Close{
                background: #fff;
                color: rgb(77, 77, 77);
                border-color: rgb(209, 209, 209);
                &:hover{
                    background: #bdbdbd;
                }
            }
        }
}
</style>

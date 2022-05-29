<template>
<div class="table">
    <table>
        <thead>
          <tr>
            <th v-for="(item, t) in tableList.title" :key="t">{{item}}</th>
          </tr>
        </thead>
        <template>
        <draggable
            v-model="data"
            :element="'tbody'"
            @start="drag = true"
            @end="drag = false"
            @change="updateData"
        >
            <tr v-for="(item, i) in data" :key="i">
                <td>{{item.id}}</td>
                <td class="title">
                    <span :class="`type${item.type}`">{{getType(item.type)}}</span>
                    {{ item.title }}
                </td>
                <td>{{ item.time }}</td>
                <td class="check">
                    <label class="checkAll" :for="`chkAll${i}`">
                        <input
                            type="checkbox"
                            :id="`chkAll${i}`"
                            :checked="tableList.level.length == item.lv.length"
                            @click="checkAllLevel(item)"
                        />
                        All
                    </label>
                    <div>
                        <label :for="`level${i}_${l}`" v-for="(lev, l) in tableList.level" :key="l" class="">
                            <input
                                type="checkbox" 
                                :id="`level${i}_${l}`"
                                name="pType"
                                :value="lev.id"
                                v-model="item.lv"
                                @change="updateData"/>
                                <span>{{ lev.name }}</span>
                        </label>
                    </div>
                </td>
                <td>
                    <SwitchBtn :value="item.status" @change="item.status = !item.status"/>
                </td>
                <td class="set">
                    <a @click="addPopup(item)">
                        <lottie-player 
                            src="https://assets10.lottiefiles.com/packages/lf20_6mpjsrns.json"
                            background="transparent" speed="1"  
                            colors="primary:#e5d1fa,secondary:#f49cc8"
                            hover   
                            />
                    </a>
                    <a @click="openDel(item.title,item.id)">
                        <!-- <icon name="lot_cancel"/> -->
                        <lottie-player 
                            src="https://assets9.lottiefiles.com/packages/lf20_sgprb9ui.json"
                            background="transparent" speed="1"  
                            colors="primary:#e5d1fa,secondary:#f49cc8"
                            hover   
                            />
                    </a>
                </td>
                <td class="drag"><icon name="drag" /></td>
            </tr>
        </draggable>
        </template>
    </table>
    <ShowPopup v-if="showPop" :popupData="popupData" @getup="getup" @close="showPop = false"/>
</div>
</template>
<script>
import draggable from "vuedraggable";
import SwitchBtn from "@/components/SwitchBtn";
import ShowPopup from "@/components/ShowPopup";
export default {
    props:['tableList'],
    components: {
        draggable,
        ShowPopup,
        SwitchBtn
    },
    data() {
        return {
            showPop:false,
            drag:false,
            popupData:{},
            data:[],
            id:''
        }
    },
    computed: {
        enableList: {
            get() {
                return this.data;
            },
            set(val) {
                this.$emit("updateData", val);
            }
        }
    },
    methods: {
        getup(updata){
            let data = [...this.data]
            data.forEach((vo,i) => {
                if(vo.id == updata.id){
                    data[i]=updata
                }
            })
            this.data = data
            this.$emit("updateData", this.data);
            this.platform.showToast('修改成功！')
        },
        openDel(v,id){
            this.id=id
            this.platform.showMsg('Delete',`確定要刪除<p>${v}</p>嗎?`,this.delThis,true)
        },
        delThis(){
            this.data=this.data.filter(vo => {return vo.id!==this.id})
            this.$emit("updateData", this.data);
            this.platform.showToast('刪除成功！')
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
        updateData(){
            this.$emit("updateData", this.data);
        },
        addPopup(item){
            this.popupData=item
            this.showPop = true
        },
        checkAllLevel(item){
            let useLevelList=[]
            if (this.tableList.level.length != item.lv.length) {
                this.tableList.level.forEach(element => {
                    useLevelList.push(element.id)
                });
            }
            item.lv = useLevelList
            this.updateData();
        },
        changeStatus(item){
           console.log(item);
        },
        selectThis(i){
            this.$emit("selectThis", i);
        }
    },
    watch: {
        tableList:{
            handler(newValue) {
                this.data = newValue.list
            },
            deep:true,
            immediate: true
        }
    }
};
</script>
<style lang="scss">
.table{
    overflow-x: scroll;
    border-radius: 10px;
    background: rgba($color: #fff, $alpha: .1);
    box-shadow: 1px 1px 10px rgba($color: #000, $alpha: .1);
    &::-webkit-scrollbar {
        height: 1em;
    }
    table{
        text-align: center;
        width: 100%;
        min-width: 980px;
        font-size: 13px;
        tr{
            th, td {
                padding:6px 10px;
                min-width: 30px;
                max-width: 430px;
                vertical-align: middle;
            }
            th{
                background: rgba($color: #fff, $alpha: .2);
                padding: 10px;
                cursor: pointer;
                &:hover{
                    transition: all .3s;
                    background: rgba($color: #fff, $alpha: .3);
                }
            }
        }
        tbody{
            tr:hover{
                background: rgba($color: #fff, $alpha: .1);
                transition: all .3s;
            }
            td{
                vertical-align: middle;
                &.drag{
                    cursor: move;
                }
                a{
                    text-decoration: underline;
                    color: hsl(165, 100%, 80%);
                }
                &.title{
                    text-align: left;
                    font-size: 15px;
                    font-weight: 900;
                    span{
                        border: 1px solid;
                        display: inline-block;
                        transform: scale(.85);
                        color: #b8d0ff;
                        border-radius: 3px;
                        padding: 3px;
                        font-size: 12px;
                        &.type1{
                            color: #ffcabd;
                        }
                        &.type2{
                            color: #f3c1ff;
                        }
                    }
                }
                &.set{
                    padding: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    a{
                        text-decoration: none;
                        margin: 0 5px;
                        color: #ffe600;
                        width: 25px;
                        height: 25px;
                        // &:hover{
                        //     color: #fff;
                        //     background: #ffd001;
                        // }
                        // &:last-child{
                        //     color: rgb(255, 172, 206);
                        //     &:hover{
                        //         color: #fff;
                        //         background: #ffbae0;
                        //     }
                        // }
                    }
                    
                }
                &.check{
                    display: flex;
                    align-items: center;
                    margin: auto;
                    .checkAll{
                        font-size: 12px;
                        cursor: pointer;
                        width: 30px;
                        input{
                            --active: #44c0fa;
                            --active-inner: #fff;
                            // --border: #BBC1E1;
                            --border-hover: rgba(97, 218, 255, 0.6);
                            --background: rgba(255, 255, 255,.3);
                            --disabled: #F6F8FF;
                            --disabled-inner: #E1E6F9;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            display: block;
                            margin:0 auto 5px;
                            outline: none;
                            // border: 1px solid var(--bc, var(--border));
                            background: var(--b, var(--background));
                            transition: background .3s, border-color .3s, box-shadow .2s;
                            width: 12px;
                            height: 12px;
                            border-radius: 50px;
                            position: relative;
                            &:after {
                                content: '';
                                display: block;
                                left: 0;
                                top: 0;
                                position: absolute;
                                transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
                            }
                            &:hover {
                                --b: var(--border-hover);
                            }
                            &:checked {
                                --b: var(--active);
                                --bc: var(--active);
                                --d-o: .3s;
                                --d-t: .6s;
                                --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
                                box-shadow: 0 0 2px 2px var(--border-hover);
                            }
                        }
                    }
                    div{
                        width: calc(100% - 30px);
                        display: flex;
                        flex-wrap: wrap;
                        label{
                            position: relative;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            span{
                                pointer-events: none;
                                position: absolute;
                            }
                        }
                        input{
                            --border: rgba(187, 193, 225,.4);
                            border: 1px solid var(--bc, var(--border));
                            cursor: pointer;
                            background: var(--b, var(--background));
                            transition: background .3s, border-color .3s, box-shadow .2s;
                            width: 70px;
                            height: 25px;
                            border-radius: 50px;
                            position: relative;
                            margin:3px;
                            --active: #75ace2;
                            --active-inner: #fff;
                            --background: rgba(255, 255, 255,0);
                            --disabled: #F6F8FF;
                            --disabled-inner: #E1E6F9;
                            -webkit-appearance: none;
                            -moz-appearance: none;
                            &:after {
                                content: '';
                                display: block;
                                left: 0;
                                top: 0;
                                position: absolute;
                                transition: transform var(--d-t, .3s) var(--d-t-e, ease), opacity var(--d-o, .2s);
                            }
                            &:hover {
                                --b: var(--active);
                                --bc: var(--active);
                            }
                            &:checked {
                                --b: var(--active);
                                --bc: var(--active);
                                --d-o: .3s;
                                --d-t: .6s;
                                --d-t-e: cubic-bezier(.2, .85, .32, 1.2);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
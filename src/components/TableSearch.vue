<template>
    <div class="TableSearch">
        <div class="timeBlock">
            <div class="time block">
                <icon name="time"/>
                <date-picker 
                    v-model="date" 
                    :update-on-input="false"
                    title-position="left"
                    color="green"
                    is-dark
                    >
                    <template v-slot="{ inputValue, inputEvents }">
                        <input
                            class="bg-white border px-2 py-1 rounded"
                            :value="inputValue"
                            v-on="inputEvents"
                        />
                    </template>
                </date-picker>
                <icon name="s_right"/>
                <date-picker 
                    v-model="date2" 
                    :update-on-input="false"
                    title-position="left"
                    color="blue"
                    is-dark
                    >
                    <template v-slot="{ inputValue, inputEvents }">
                        <input
                            class="bg-white border px-2 py-1 rounded"
                            :value="inputValue"
                            v-on="inputEvents"
                        />
                    </template>
                </date-picker>
            </div>
            <button>Today</button>
            <button>Ｗeek</button>
            <button>Ｍonth</button>
        </div>
        <div class="timeBlock">
            <div class="search block">
                <icon name="search"/>
                <input placeholder="Please enter keywords.."/>
            </div>
            <button class="ora">Search</button>
        </div>

    </div>
</template>
<script>

export default {
    data(){
        return{
            date: new Date(),
            date2: new Date(),
            selectedDate: null,
            minDatetime:undefined,
            maxDatetime:undefined,
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
.TableSearch{
    padding: 10px 0;
    .timeBlock{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 10px;
    }
    button{
        margin: 0 5px 0 0;
        padding: 0;
        width: 65px;
        height: 32px;
        line-height: 32px;
        background: #60bae4;
        font-size: 12px;
        &.ora{
            background: #b184ec;
        }   
        &:hover{
            background: #8daae4;
        }
    }
    input{
        background: transparent;
        border: 0;
        color: #fff;
        &::placeholder { color: #97aaca; } 
    }
    .block{
        border: 1px solid #97aaca;
        border-radius: 50px;
        padding:5px 10px;
        display: flex;
        align-items: center;
        margin-right:10px;
        width: 250px;
        i{
            margin-right: 10px;
            color: #c4d0e6;
        }
    }
    .search{
        input{
            width: 180px;
        }
    }
    .time{
        input{
            width: 85px;
        }
    }
}
</style>
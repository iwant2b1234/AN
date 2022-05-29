<template>
    <div class="tableDrag">
        <TableLeftMenu @getNow="getNow" :now="now" :open="open"/>
        <div class="rightBlock">
            <TableTopMenu @opneMenu="opneMenu"/>
            <div class="info">
                <div class="mobliebg" @click="open=false" :style="`display: ${open?'block':'none'};`"></div>
                <TableMark :now="now"/>
                <TableSearch/>
                <component :is="getComponent" :tableList="tableList" @updateData='updateData'/>
                <TablePages/>
            </div>
        </div>
    </div>
</template>
<script>
import TableSearch from "../components/TableSearch.vue";
import TableDrag from "../components/TableDrag.vue";
import TableTopMenu from "../components/TableTopMenu.vue";
import TableMark from "@/components/TableMark";
import TableLeftMenu from "../components/TableLeftMenu.vue";
import TablePages from "../components/TablePages.vue";
export default {
    components: {
        TableMark,
        TableDrag,
        TablePages,
        TableSearch,
        TableTopMenu,
        TableLeftMenu,
    },
    data(){
        return{
            open:false,
            now:'DragTable',
            tableList:{
                title:['ID','Title','Time','Levels','Status','Set','Drag'],
                list:[
                    {
                        type:0,
                        id:212,
                        title:'FaceMesh',
                        lv:[1,2,5,7],
                        time:'2021-01-05', 
                        status:true,
                        rm:'test test test',
                        manage:'Money'
                    },
                    {
                        id:342,
                        type:2,
                        title:'AR',
                        lv:[1,2,3,4,5,6,7],
                        time:'2021-02-15', 
                        status:true,
                        rm:'ohya~~~',
                        manage:'An'
                    },
                    {
                        type:1,
                        id:532,
                        title:'Studio',
                        lv:[1,3,5,6],
                        time:'2020-03-04', 
                        status:false,
                        rm:'好累',
                        manage:'Jim'
                    },
                    {
                        type:1,
                        id:909,
                        title:'Texture',
                        lv:[2,3,4],
                        time:'2019-04-30', 
                        status:false,
                        rm:'😆',
                        manage:'yuyu0908'
                    },
                    {   
                        type:2,
                        id:493,
                        title:'Face',
                        lv:[3,4,5,6],
                        time:'2021-09-15', 
                        status:false,
                        rm:'幹大事',
                        manage:'chen'
                    },
                    {
                        id:'032',
                        type:1,
                        title:'Below',
                        lv:[5,7],
                        time:'2021-11-17', 
                        status:true,
                        rm:'I’m 👌',
                        manage:'iwant2b1234'
                    }
                ],
                level:[
                    {id:1,name:'Level 1'},
                    {id:2,name:'Level 2'},
                    {id:3,name:'Level 3'},
                    {id:4,name:'Level 4'},
                    {id:5,name:'Level 5'},
                    {id:6,name:'Level 6'},
                    {id:7,name:'Level 7'},
                    {id:8,name:'Level 8'},
                    {id:9,name:'Level 9'},
                ]
            }
        }
    },
    computed:{
        getComponent(){
            console.log(this.now);
            switch (this.now) {
                case 'DragTable':
                    return 'TableDrag';
                default:
                    return 'TableDrag';
            }
        }
    },
    methods:{
        opneMenu(){
            this.open=!this.open
        },
        getNow(v){
            this.now = v
        },
        updateData(v){
            this.tableList.list = v
        }
    }
}
</script>
<style scoped lang="scss">
.tableDrag{
    width: 100%;
    height: 100vh;
    display: flex;
    color:#fff;
    position: relative;
    background:linear-gradient(185grad, #6b7cb7, #4e6a82, #ec9df1);
    .rightBlock{
        width: 100%;
        .info{
            width: 95%;
            margin: auto;
        }
    }
    .mobliebg{
        position: fixed;
        background: rgba($color: #000000, $alpha: .7);
        width: 100%;
        height: 100%;
        z-index: 8;
        top: 0;
        left: 0;
    }
}
</style>
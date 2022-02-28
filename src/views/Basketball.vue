<template>
    <div class="basketball">
        <div class="info">
            <div class="basket">
                <img src="img/basket.png"/>
                <img src="img/L.png" class="L"/>
            </div>
            <div class="ballF">
                <div class="ball"
                ref="ball"
                    @mousedown="mousedown"
                    @touchstart="mousedown"
                    @touchmove="mousemove"
                    @touchend="mouseleave"
                    @mouseleave="mouseleave"
                    :style="ballStyle" 
                    >
                </div>
            </div>
        </div>
        <ul>
            <li>
                <p>Move your mouse on here</p>
                <icon name="Basket-Ball" 
                
                 />
            </li>
            <li>Shot</li>

        </ul>   
    </div>
</template> 
<script>
export default {
    data(){
        return {
            flag: false,
            y:0,
            x:215,
           
        }
    },
    computed:{
        ballStyle() {
            return `transform: matrix(1, 0, 0, 1, ${this.x}, ${this.y})`
        },
    },
    methods:{
        mousedown(){
            console.log('mousedown');
            this.flag = true
        },
        mousemove(e){
            console.log('pppp');
            if(!this.flag){
                return
            }
            console.log(e.clientX ,e.pageX,e.screenX,e.clientX,e.layerX,e.offsetX);
            if(e.layerX > 500){
                this.x = 500 - (this.$refs.ball.clientWidth/2)
            }else if(e.layerX <= 60){
                this.x = 0
            }else{
                this.x = e.layerX - (this.$refs.ball.clientWidth/2)
            }
        },
        mouseleave(){
            console.log('mouseleave');
            this.flag = false
        }
    },
    beforeDestroy() {
        const items = document.querySelector('.ball');

        items.removeEventListener("touchstart", this.mousedown);
        items.removeEventListener("mousemove", this.mousemove);
        items.removeEventListener("touchend", this.mouseleave);
    },
    mounted(){
        const items = document.querySelector('.ball');
        items.addEventListener("mousedown", this.mousedown);
        items.addEventListener("touchmove", this.mousemove);
        items.addEventListener("touchstart", this.mousedown);
        items.addEventListener("mouseleave", this.mouseleave);
        items.addEventListener("touchend", this.mouseleave);
    }
}
</script>

<style scoped lang="scss">
.basketball{
    background: url('../assets/bk.jpg') center bottom;
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    ul{
        position: absolute;
        width: 95%;
        max-width: 300px;
        right: 10px;
        text-align: center;
        li{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            p{
                background: #fff;
                line-height: 20px;
                padding: 10px;
                position: absolute;
                border-radius: 5px;
                margin: auto;
                right: 0;
                left: 0;
                top: -80px;
                width: 155px;
                font-size: 12px;
                color: rgb(58, 54, 63);
                &::before{
                    content: '';
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 9px 5px 0 5px;
                    border-color: #fff transparent transparent transparent;
                    bottom: -9px;
                    right: 0;
                    position: absolute;
                    left: 0;
                    margin: auto;
                }
            }
            &:first-child{
                background: rgb(48, 48, 51);
                width: 100%;
                height: 40px;
                border-radius: 50px;
                i{
                    color: rgb(255, 174, 0);
                    cursor: pointer;
                    z-index: 2;
                    font-size: 30px;
                    text-shadow: 0 0 5px rgba($color: #fff, $alpha: .4);
                }
                &::before{
                    content: '';
                    border-radius: 50px;
                    width: 90%;
                    height: 5px;
                    background: #444444;
                    position: absolute;
                }
            }
            &:last-child{
                animation: pulse 1.5s infinite;
                background: #f17500;
                cursor: pointer;
                line-height: 100px;
                box-shadow: 0 0 0 0 rgba(#f17500, .5);
                border-radius: 50%;
                width: 100px;
                height: 100px;
                margin:50px auto 0;
                &:hover {
                        animation: none;
                }
            }
            @keyframes pulse {
                0% {
                    transform:scale(.9);
                }
                70% {
                    transform:scale(1);
                    box-shadow: 0 0 0 50px rgba(#5a99d4, 0);
                }
                100% {
                    transform:scale(.9);
                    box-shadow: 0 0 0 0 rgba(#5a99d4, 0);
                }
            }
        }
    }
    .info{
        width: 100%;
        margin: auto;
        max-width: 550px;
        height: 100vh;
        position: relative;
        .ballF{
            position: absolute;
            width: 100%;
            height: 151px;
            bottom: 0;
        }
        .ball{
            cursor: pointer;
            position: absolute;
            background: url('../assets/ball.png') center;
            width: 115px;
            height: 115px;
            z-index: 1;
        }
        .basket{
            position: relative;
            margin: auto;
            width: 200px;
            height: 425px;
            bottom: -10%;
            img{
                width: 100%;
                top: 0;
                bottom: 0;
                margin: auto;;
                position: absolute;
                right: 0;
                left: 0;
                &.L{
                    z-index: 2;
                }
            }
        }
    }
}
</style>
<template>
  <div class="switch-button-control" @click="toggle">
    <div class="switch-button" :class="[{ enabled: getData }]">
      <div class="button"></div>
      <span class="on swbtn" v-if="getData">
        ON
      </span>
      <span class="off swbtn" v-else>
        OFF
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value", "disabled", "trueValue", "falseValue"],
  data() {
    return {
      swiVal: ""
    };
  },
  computed: {
    getData() {
      if (this.value == undefined) {
        return false;
      }
      if(this.trueValue != undefined && this.falseValue != undefined){
          if(this.trueValue == this.value ){
              return true
          }else{
              return false
          }
      }
      if (this.value == "0") {
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return;
      }
      this.$emit("change");
    }
  },
};
</script>

<style lang="scss">
.switch-button-control {
  width: 65px;
  margin: 0 auto;
}
.switch-button {
  height: 23px;
  width: 60px;
  border-radius:50px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;
  padding:3px 5px;
  border: 1px solid rgba($color: #fff, $alpha: .5);
  &.enabled {
    color: #fff;
    background:#87c57f;;
    border-color: transparent;
    box-shadow: 0 0 3px 3px rgba($color: #87c57f, $alpha: .5);
    .button {
      background: #fff;
      transform: translateX(35px);
    }
  }
  .button {
    height: 15px;
    width: 15px;
    border-radius: 10px;
    background: rgba($color: #fff, $alpha: .5);
    transition: all 0.2s ease-in-out;
  }
  span {
    font-size: 12px;
    position: absolute;
    top: 5px;
    &.on {
      left: 10px;
    }
    &.off {
      right: 10px;
    }
  }
}
</style>

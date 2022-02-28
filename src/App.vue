<template>
  <div>
    <router-view/>
    <ShowMsg/>
    <ShowToast/>
  </div>
</template>
<script>
import ShowMsg from "@/components/ShowMsg.vue";
import ShowToast from "@/components/ShowToast.vue";
export default {
  components: {
    ShowMsg,
    ShowToast
  },
}

</script>
<style lang="scss">
@import "./scss/common.scss";
</style>

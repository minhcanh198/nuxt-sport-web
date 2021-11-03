<template>
  <div class="dynamic-content">
    <Area></Area>
    <LiveCasino></LiveCasino>
    <LaligaRoom></LaligaRoom>
    <Casino></Casino>
<!--    <Poker></Poker>-->
    <KenoLoto></KenoLoto>
    <MobileAppPanner></MobileAppPanner>
  </div>
</template>

<script>
import Area from "./Area";

export default {
  name: "DynamicContent",
  components: {Area}
}
</script>

<style scoped>

</style>

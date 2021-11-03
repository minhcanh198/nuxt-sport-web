<template>
  <div class="header-partial-container">
    <HeaderRibbon></HeaderRibbon>
    <MainMenuHeader></MainMenuHeader>
    <InfoLineWrapper></InfoLineWrapper>
    <ContentCarousel v-if="showCarousel"></ContentCarousel>
    <ThreeStepGuideWrapper v-if="showCarousel"></ThreeStepGuideWrapper>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      showCarousel: false
    }
  },
  created() {
    this.showCarousel = (this.$route.name === 'index')
  }
}
</script>

<style scoped>

</style>

<template>
  <div class="area " data-component-name="Home Page - Sports">


    <div class="title-component " data-component-name="">


      <img class="icon title-icon" src="/images/icons/icon-soccerball33d0.svg"
           data-component-name="">


      <span class="" data-component-name="">
  Thể Thao
</span>


      <a href="/sportsbook" class="track-events " data-component-name="Find Out More" data-qa-type=""
         data-qa-context="">
        <span>Tìm hiểu thêm</span>
      </a>
    </div>
    <div>
      <div class="tiles sports-tiles big-tiles from-tablet-up second-only" data-component-name="">
        <Matches></Matches>
        <MbSports></MbSports>
      </div>
      <SwiperContainerTiles></SwiperContainerTiles>
    </div>
  </div>
</template>

<script>
export default {
  name: "Area"
}
</script>

<style scoped>

</style>

<template>
  <div>
    <div class="layout-main wide" id="layout-main">
      <AppHeader></AppHeader>
      <Nuxt/>
      <AppFooter></AppFooter>
    </div>
    <input id="side-menu-toggle" class="side-menu-toggle" type="checkbox" style="display: none;">
    <label for="side-menu-toggle" class="layout-side-menu-overlay"></label>
    <SideMenu></SideMenu>
  </div>
</template>

<script>

export default {}
</script>

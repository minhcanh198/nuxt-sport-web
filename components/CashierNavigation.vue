<template>
  <nav class="cashier-navigation ">
    <a class="navigation-item active" href="/cashier/deposit" data-qa-type="button" data-qa-context="redirect">
      <div class="navigation-item-content">
        <img src="/images/icons/icon-cashier33d0.svg">
        <span>Giao Dịch</span>
      </div>
    </a>
    <a class="navigation-item " data-qa-type="button" data-qa-context="redirect" href="/loyalty/rewards">
      <div class="navigation-item-content">
        <img src="/images/icons/icon-rewards33d0.svg">
        <span>Phần Thưởng</span>
      </div>
    </a>
    <a class="navigation-item " data-qa-type="button" data-qa-context="redirect" href="/account/profile-vnd">
      <div class="navigation-item-content">
        <div class="unread-messages-container-cashier-navigation"><span
          id="unread-messages-cashier-navigation-counter"></span></div>
        <img src="/images/icons/icon-profile33d0.svg">
        <span>Hồ Sơ</span>
      </div>
    </a>
    <a class="navigation-item " data-qa-type="button" data-qa-context="redirect" href="/account/transactions">
      <div class="navigation-item-content">
        <img src="/images/icons/icon-history33d0.svg">
        <span>Lịch Sử</span>
      </div>
    </a>
  </nav>
</template>

<script>
export default {
  name: "CashierNavigation"
}
</script>

<style scoped>

</style>

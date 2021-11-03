<template>
  <div>
    <CashierNavigation></CashierNavigation>
    <div class="cashier-content-wrapper ">
      <div class="deposit-container">
        <div class="layout-body">
          <div class="layout-content">
            <TabbleLink></TabbleLink>
            <LoyaltyRewardsContent></LoyaltyRewardsContent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabbleLink from "./TabbleLink";

export default {
  name: "LoyaltyRewards",
  components: {TabbleLink}
}
</script>

<style scoped>

</style>

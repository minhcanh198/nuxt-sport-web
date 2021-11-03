<template>
  <div>
    <CashierNavigation></CashierNavigation>
    <div class="cashier-content-wrapper ">
      <div class="deposit-container">
        <div class="layout-body">
          <div class="layout-content">
            <TabbleLink></TabbleLink>
            <LoyaltyBonusContent></LoyaltyBonusContent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoyaltyBonusContent from "./LoyaltyBonusContent";
export default {
  name: "LoyaltyBonus",
  components: {LoyaltyBonusContent}
}
</script>

<style scoped>

</style>

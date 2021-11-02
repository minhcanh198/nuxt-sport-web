<template>
  <div class="three-step-guide-wrapper">
    <div class="three-step-guide">

      <div class="step step-1 matomo-event" onclick="location.href='/register'" data-track-content=""
           data-content-name="On Boarding Journey and Login" data-content-piece="Landing Page"
           data-matomo-action="Click - Acquisition - Join M88 CTA">
        <div class="content-area">
          <div class="join-icon icon"></div>
          <div class="text-area join">
            <div class="large-text">ĐĂNG KÝ M88</div>
            <div class="small-text">Nhanh chóng và dễ dàng!</div>
          </div>
        </div>
      </div>

      <div class="separator"></div>

      <div class="step matomo-event" onclick="location.href='/register'" data-track-content=""
           data-content-name="On Boarding Journey and Login" data-content-piece="Landing Page"
           data-matomo-action="Click - Acquisition - Deposit CTA">
        <div class="content-area ">
          <div class="deposit-icon icon"></div>
          <div class="text-area deposit">
            <div class="large-text">GỬI TIỀN</div>
            <div class="small-text">Cập nhật trong 2-5 phút!</div>
          </div>
        </div>
      </div>

      <div class="separator"></div>

      <div class="step matomo-event" onclick="location.href='/register'" data-track-content=""
           data-content-name="On Boarding Journey and Login" data-content-piece="Landing Page"
           data-matomo-action="Click - Acquisition - Play Now CTA">
        <div class="content-area">
          <div class="play-icon icon"></div>
          <div class="text-area play">
            <div class="large-text">THAM GIA</div>
            <div class="small-text">Bắt đầu hành trình chiến thắng của bạn ngay!</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "ThreeStepGuideWrapper"
}
</script>

<style scoped>

</style>

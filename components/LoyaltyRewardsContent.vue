<template>
  <div class="content-box">
    <div class="layout-usercontrol">
      <div id="points-normal">

        <div class="section-title upper">
          <h1>Điểm Thưởng Của Tôi</h1>
          <hr class="dots">
        </div>

        <div class="usercontrol-page-content">

          <div id="grid-rewards" class="grid">
            <div class="row">
              <div class="col">
                <strong>Cấp Bậc Thành Viên</strong>
              </div>
              <div class="col">
                New Player - R10
              </div>
            </div>
            <div class="row">
              <div class="col">
                <strong>Số Điểm Hiện Có</strong>
              </div>
              <div id="vipPoints" class="col">
                0
              </div>
            </div>
            <div class="row">
              <div class="col">
                <strong>Số Tiền Tương Đương</strong>
              </div>
              <div id="vipCashable" class="col">
                0,00
              </div>
              <div>
                <input type="hidden" id="redemption-rate-raw" value="2,00">
              </div>
            </div>
          </div>


          <div class="section-sub-title upper">
            <h1 class="upper">Đổi điểm thưởng thành tiền thật</h1>
          </div>
          <div class="section-description-normal">
            Tỷ lệ quy đổi điểm thưởng là 2,00 điểm tương đương với 1,00 VND. Số điểm hiện tại của quý khách
            là 0 điểm.
          </div>
          <br>
          <form id="redeem-loyalty-points-form" method="post" class="small validation-bound"
                action="/cashier/redeemloyaltypoints" novalidate="novalidate">
            <div class="input-area">
              <label class="field-label" for="RedeemdLoyaltyPointsAmount">Số Điểm Muốn Đổi</label>
              <div class="field-input">
                <input id="points" type="text" data-val="true"
                       data-val-required="Validation_LoyaltyModel_RedeemdLoyaltyPointsAmount"
                       name="RedeemdLoyaltyPointsAmount" value="">
              </div>
            </div>
            <div class="input-area">
              <label class="field-label">Số tiền</label>
              <div class="field-input">
                <input disabled="" type="text" id="redeem-amount">
              </div>
            </div>
            <div class="input-area">
              <label class="field-label">Số Dư Điểm Thưởng</label>
              <div class="field-input">
                <input disabled="" type="text" id="points-balance-remaining">
              </div>
            </div>
            <div class="input-area">
              <label class="field-label"></label>
              <button type="submit" class="btn btn-validatable" id="redeem-button"><span class="icon"></span>Đổi Điểm
              </button>
            </div>
            <input name="__RequestVerificationToken" type="hidden"
                   value="CfDJ8Nw57LT0A09JuR-QhECQfbioG0qQf_CG5GKxykw6NAxCcgp5MUAnbczsT-CEi5E4bfH5SAYCEm50tHbC_JTZrKiHbkMC6BZlAkzVVLLRywoXJ8Kq1Rt8q6_eZsn35QLpyOd-i-fxc9KCQG5G6FoRkJ3Bk4ZZUmkGyMTsKdJHyIi6R17qENcCeO62ur2SIjZ39g">
          </form>
        </div>

        <div class="input-area">
          <div id="notification-container"></div>
        </div>

        <div class="layout-usercontrol">
          <div class="usercontrol-page-content">
            <div class="section-title upper">
              <h1>Lịch sử đổi điểm</h1>
              <hr class="dots">
            </div>

            <div class="usercontrol-page-content">

              <div class="usercontrol-page-selector-inputs">
                <form id="MyRewardsHistoryForm" class="one-line form-valid validation-bound" method="get"
                      action="/loyalty/rewardstable" novalidate="novalidate">
                  <div class="input-area space-after">
                    <label class="field-label date-from-label" for="IntervalStart">Chọn Ngày Từ:</label>
                    <div class="field-input date-selection">
                      <input id="input-date-start" type="date" required="" data-val="true"
                             data-val-required="The IntervalStart field is required." name="IntervalStart"
                             value="2021-11-03">
                      <span class="icon-calendar"></span>
                    </div>
                  </div>
                  <div class="input-area space-after">
                    <label class="field-label date-to-label" for="IntervalEnd">Đến:</label>
                    <div class="field-input date-selection">
                      <input id="input-date-end" type="date" required="" data-val="true"
                             data-val-required="The IntervalEnd field is required." name="IntervalEnd"
                             value="2021-11-03">
                      <span class="icon-calendar"></span>
                    </div>
                  </div>
                  <div class="input-area">
                    <button type="submit" class="btn btn-secondary-alt same-line btn-validatable" id="submit-button">
                      <span class="icon"></span>XÁC NHẬN
                    </button>
                  </div>
                </form>
              </div>

              <br>

              <div id="RewardsPlaceholder" class="table-placeholder"></div>


              <div id="pagination-section" class="pagination">
                <div id="paging-elements" class="pagination-elements">
                  <div id="paging-select-element" class="pagination-elements">
                    <div id="paging-select-page-nr" class="pagination-elements"></div>
                  </div>
                </div>
                <div id="paging-dropdown" class="pagination-elements"></div>
              </div>

              <script type="text/javascript" nonce="ad8a1b50e6e545a987e1f51a48085741">
                /* exported first_page_text, last_page_text, goto_page_text, previous_page_text, next_page_text */
                var first_page_text = 'Trang \u0110\u1EA7u';
                var last_page_text = 'Trang Cu\u1ED1i';
                var goto_page_text = '\u0110\u1EBFn Trang';
                var previous_page_text = 'QUAY L\u1EA0I';
                var next_page_text = 'TI\u1EBEP T\u1EE4C';
              </script>


              <div id="TransInfoTable" class="content-box" style="display: none">

                <table id="entry-title" class="transaction-info-table-date">
                  <tbody>
                  <tr>
                    <th class="hide-on-mobile" id="entry-title-date"></th>
                  </tr>
                  </tbody>
                </table>

                <table class="transaction-info-table">
                  <tbody>
                  <tr class="float-left">
                    <th class="hide-on-mobile hide-in-details"><strong>Ngày/Giờ</strong></th>
                    <th class="mobile-details"><strong>Tỉ Lệ Quy Đổi</strong></th>
                    <th class="mobile-details"><strong>Số Tiền</strong></th>
                    <th class="mobile-details"><strong>Điểm Đã Đổi</strong></th>
                  </tr>
                  <tr id="data-col"></tr>
                  </tbody>
                </table>

                <a id="trans-info-back-btn" class="btn btn-secondary-alt icon-back">
                  <span class="icon"></span>
                  <span class="btn-text">
                  Quay Lại
                </span>
                </a>

              </div>

            </div>
          </div>
        </div>
      </div>
      <div id="points-redeemed" style="display:none">

        <div class="content-box">
          <div class="submit-info-layout">

            <div class="submit-success-header">
              <img src="/_img/submit-valid.png?build=2.43.1.11735-42758">
              <span>ĐIỂM ĐÃ ĐƯỢC ĐỔI THÀNH CÔNG</span>
            </div>

            <div class="submit-info-description">Điểm thưởng đã đổi thành công và được cập nhật vào Tài Khoản Chính của
              Quý khách.
            </div>
          </div>

          <div class="input-area" style="justify-content: center;">
            <a class="btn btn-secondary-alt" href="/loyalty/rewards">OK</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoyaltyRewardsContent"
}
</script>

<style scoped>

</style>

<template>
  <div class="content-box">
    <div class="multiple-form-layout left-right-padding">
      <div class="left-form-layout">
        <div class="layout-usercontrol">
          <div class="section-title upper">
            <h1>KHUYẾN MÃI CỦA TÔI</h1>
            <hr class="dots">
          </div>
          <div class="usercontrol-page-content">
            <br>
            <div class="usercontrol-page-selector-inputs">
              <form id="BonusHistoryForm" class="one-line form-valid validation-bound" method="post"
                    action="/loyalty/bonushistory" novalidate="novalidate">
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
                           data-val-required="The IntervalEnd field is required." name="IntervalEnd" value="2021-11-03">
                    <span class="icon-calendar"></span>
                  </div>
                </div>
                <div class="input-area">
                  <button type="submit" class="btn btn-secondary-alt same-line btn-validatable" id="submit-button"><span
                    class="icon"></span>XÁC NHẬN
                  </button>
                </div>
                <input name="__RequestVerificationToken" type="hidden"
                       value="CfDJ8Nw57LT0A09JuR-QhECQfbjdkCGSCxYscn9eeHFvHzRJi9O-jxgKDpQxZeg1oo6i_5OLDCEzYcSZYQJZnrpTAj2hEepwXdCEnrqATuCkBCLrY7DTLMxIKRbNZMt91UmDVDIH8kgwyt_dJPJICSmX1dgslEAQAtzYtREX6RPk0rHp3bCQ4G1XRIhBSk5Up4x2Ng">
              </form>
            </div>

            <div id="BonusHistoryPlaceholder" class="table-placeholder"></div>


            <div id="pagination-section" class="pagination">
              <div id="paging-elements" class="pagination-elements">
                <div id="paging-select-element" class="pagination-elements">
                  <div id="paging-select-page-nr" class="pagination-elements"></div>
                </div>
              </div>
              <div id="paging-dropdown" class="pagination-elements"></div>
            </div>

            <script type="text/javascript" nonce="cafeaecda5844c54b78c1cf526c9b1f9">
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
                  <th class="date-header hide-on-mobile" id="entry-title-date"></th>
                </tr>
                </tbody>
              </table>

              <table class="transaction-info-table">
                <tbody>
                <tr class="float-left">
                  <th class="hide-on-mobile hide-in-details"><strong>Ngày Nhận</strong></th>
                  <th class="hide-on-mobile mobile-details"><strong>Khuyến Mãi</strong></th>
                  <th class="hide-on-mobile mobile-details"><strong>Tiền Thưởng</strong></th>
                  <th class="mobile-details"><strong>Tiền Thưởng Có Thể Rút</strong></th>
                  <th class="mobile-details"><strong>Trạng Thái</strong></th>
                  <th class="mobile-details"><strong>Quá Trình</strong></th>
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

            <div class="section-title upper">
              <div class="title-wrapper">
                <h1>Bảng tóm tắt Giới Thiệu Bạn Bè</h1>
                <div class="arrow expand" id="referral-summary-arrow"></div>
              </div>
              <hr class="dots">
            </div>

            <form id="referral-summary-form" method="get" action="/loyalty/getreferafriendstatistics"
                  novalidate="novalidate" class="form-valid validation-bound"></form>
            <div class="referral-summary-container" id="referral-summary-container"></div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoyaltyBonusContent"
}
</script>

<style scoped>

</style>

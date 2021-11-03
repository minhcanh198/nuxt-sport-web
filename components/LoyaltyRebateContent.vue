<template>
  <div class="content-box">
    <div class="multiple-form-layout left-right-padding">

      <div class="left-form-layout">
        <div class="layout-usercontrol">
          <div class="section-title upper">
            <h1>HOÀN TRẢ CỦA TÔI</h1>
            <hr class="dots">
          </div>
          <div class="usercontrol-page-content">
            <br>
            <div class="usercontrol-page-selector-inputs">
              <form id="RebatesHistoryForm" class="one-line form-valid validation-bound" method="post"
                    action="/loyalty/rebateshistory" novalidate="novalidate">
                <div class="input-area space-after">
                  <label class="field-label date-from-label" for="IntervalStart">Chọn Ngày Từ:</label>
                  <div class="field-input date-selection">
                    <input id="input-date-start" type="date" required="" pattern="\d{4}-\d{2}-\d{2}" data-val="true"
                           data-val-required="The IntervalStart field is required." name="IntervalStart"
                           value="2021-11-03">
                    <span class="icon-calendar"></span>
                  </div>
                </div>
                <div class="input-area space-after">
                  <label class="field-label date-to-label" for="IntervalEnd">Đến:</label>
                  <div class="field-input date-selection">
                    <input id="input-date-end" type="date" required="" pattern="\d{4}-\d{2}-\d{2}" data-val="true"
                           data-val-required="The IntervalEnd field is required." name="IntervalEnd" value="2021-11-03">
                    <span class="icon-calendar"></span>
                    <input type="hidden" value="3" data-val="true" data-val-required="The Category field is required."
                           id="Category" name="Category">
                  </div>
                </div>
                <div class="input-area">
                  <button type="submit" class="btn btn-secondary-alt same-line btn-validatable" id="submit-button"><span
                    class="icon"></span>XÁC NHẬN
                  </button>
                </div>
                <input name="__RequestVerificationToken" type="hidden"
                       value="CfDJ8Nw57LT0A09JuR-QhECQfbhxP_54u7uur6tiX3lQbgqGk8bDOrDZtjLYZdG0JYj3WD9iMpnbTlR6jjMokiwj1ZYjtJDy9v2-42RZ7dkEHShxQkVT-LrrCeTWV5-CCJuN6lUDhCu2mzeMQVaeDRICJzD-8qIw7camqN74HZHm0poB_NhudJRCTTBILCP7bwqkEQ">
              </form>
            </div>
            <br>

            <div id="RebatesHistoryPlaceholder" class="table-placeholder"></div>


            <div id="pagination-section" class="pagination">
              <div id="paging-elements" class="pagination-elements">
                <div id="paging-select-element" class="pagination-elements">
                  <div id="paging-select-page-nr" class="pagination-elements"></div>
                </div>
              </div>
              <div id="paging-dropdown" class="pagination-elements"></div>
            </div>


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
                  <th class="mobile-details"><strong>Mã Hoàn Trả</strong></th>
                  <th class="hide-in-details"><strong>Ngày Cập Nhật</strong></th>
                  <th class="mobile-details"><strong>Tiền Thưởng Có Thể Rút</strong></th>
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
  </div>
</template>

<script>
export default {
  name: "LoyaltyRebateContent"
}
</script>

<style scoped>

</style>

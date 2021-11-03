<template>
  <div class="cashier-content-wrapper ">
    <div class="deposit-container">
      <div class="recent-trnas-layout visible" id="transactions">
        <div id="recent-trans-title-ribbon" class="recent-trans-title">
          <div class="title">
      <span>
        Các Giao Dịch Gần Nhất Của Tôi
      </span>
          </div>

          <div>
            <input id="recent-info-details" type="checkbox" style="display: none;" checked="">
            <label for="recent-info-details" class="recent-info-details--closed"><span>Hiển Thị Thông Tin</span>
              <div class="change-password-show-hide-arrow img-align recent-trans-arrow"><img
                src="/_img/icons/icon-dropdown-collapse-white.svg?build=2.43.1.11735-42758" alt="img"></div>
            </label>
            <label for="recent-info-details" class="recent-info-details--opened"><span>Ẩn Thông Tin</span>
              <div class="change-password-show-hide-arrow img-align recent-trans-arrow"><img
                src="/_img/icons/icon-dropdown-hide-white.svg?build=2.43.1.11735-42758" alt="img"></div>
            </label>
          </div>
        </div>

        <div id="RecentTransactionsPlaceholder" style="display: block" class="">
          <table class="responsive-table">
            <thead>
            <tr class="hide-on-mobile">
              <th class="hide-on-mobile"><strong>Ngày/Giờ</strong></th>
              <th class="hide-on-mobile"><strong>Mã Giao Dịch</strong></th>
              <th class="hide-on-mobile"><strong>Hình Thức</strong></th>
              <th><strong>Loại</strong></th>
              <th><strong>Số Tiền</strong></th>
              <th><strong>Trạng Thái</strong></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td colspan="6">
                Không có kết quả
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div id="TransInfoTable" class="content-box" style="display: none">

          <div id="RecentTransactionsDetailsPlaceholder">

            <div class="section-title">
              <h1>Các Giao Dịch Gần Nhất Của Tôi</h1>
            </div>


          </div>

          <br>

          <a id="trans-info-back-btn" class="btn btn-secondary-alt icon-back">
            <span class="icon"></span>
            <span class="btn-text">
        Quay Lại
      </span>
          </a>

        </div>
      </div>
      <div class="layout-body">


        <div class="cashier-balances-container">
          <div class="balance-info visible" id="balanceInfo">
            <h1 class="balance-info__heading1">
              Tổng Số Dư <span class="currencyCode">(VND)</span>

              <div class="balance-total-info balance-info__list">
                <div class="no-top-padding">
                  <span id="balance-total-raw" style="display: none;">0</span>
                  <span id="balance-total" class="balance-info__value total-balance-offset value">0,00</span>
                </div>
              </div>
            </h1>

            <input id="total-balance-info-details" type="checkbox" style="display: none;">

            <div class="total-balance-info-details--opened">
              <ul class="balance-info__list-secondary">
                <li>
                  <div class="whole-row">
                    <div class="balance-text">
                      <span class="withdrawl-icon cashier-icon"></span>
                      <span class="icon-text">Có Thể Rút Tiền</span>
                    </div>
                    <div class="balance-amount">
                      <span id="balance-withdrawable" class="balance-info__value">0,00</span>
                      <span id="balance-withdrawable-raw" style="display: none;">0</span>
                    </div>
                  </div>
                </li>
                <li id="dividing-line-container">
                  <hr id="dividing-line">
                </li>
                <li>
                  <div class="whole-row">
                    <div class="balance-text">
                      <span class="non-withdrawl-icon cashier-icon"></span>
                      <span class="icon-text">Không Thể Rút</span>
                    </div>
                    <div class="balance-amount">
                      <span id="balance-nonwithdrawable" class="balance-info__value">0,00</span>
                      <span id="balance-nonwithdrawable-raw" style="display: none;">0</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <input id="balance-info-details" type="checkbox" style="display: none;" checked="">
            <label for="balance-info-details"
                   class="balance-info__heading2 balance-info-details--closed heading__text show-hide">Hiển thị ví sản
              phẩm
              <div class="img-align"><img src="/_img/icons/icon-dropdown-collapse-white.svg?build=2.43.1.11735-42758"
                                          alt="img"></div>
            </label>
            <label for="balance-info-details"
                   class="balance-info__heading2 balance-info-details--opened heading__text show-hide">Ẩn Ví Sản Phẩm
              <div class="img-align"><img src="/_img/icons/icon-dropdown-hide-white.svg?build=2.43.1.11735-42758"
                                          alt="img"></div>
            </label>
            <div class="balance-info-details--opened">
              <ul class="balance-info__list">
                <li id="central-account">
                  <div class="whole-row">
                    <div>
                      <span class="central-wallet-icon cashier-icon"></span>
                      <span id="central-total-label" class="icon-text">Tài Khoản Chính</span>
                    </div>
                    <input id="balance-info-central-wallet" type="checkbox" style="display: none;">

                    <label for="balance-info-central-wallet"
                           class="balance-info-central-wallet--closed total-balance-show-hide-icon">
                      <div class="arrow2 cashier-expand-container-black" style="left: 153px;"><span
                        class="cashier-expand-black open-icon">+</span></div>
                    </label>
                    <label for="balance-info-central-wallet"
                           class="balance-info-central-wallet--opened total-balance-show-hide-icon">
                      <div class="arrow2 cashier-expand-container-black" style="left: 153px;"><span
                        class="cashier-expand-black close-icon">-</span></div>
                    </label>
                    <div class="balance-info-central-wallet--opened showSABASeamless showVND">
                      <link href="/~/static/css/cashier/cashier-icons.css?build=2.43.1.11735-42758" rel="stylesheet">

                      <ul class="balance-info__list central-wallet-subitems">
                        <li>
                          <div>
                            <span class="msports-icon cashier-icon"></span>
                            <span class="icon-text">Club M88</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="laliga-icon cashier-icon"></span>
                            <span class="icon-text">LaLiga Room</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="msports-icon cashier-icon"></span>
                            <span class="icon-text">Studio M88 Int.</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="live-casino-icon cashier-icon"></span>
                            <span class="icon-text">Studio M88 Europe</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="live-dealer-icon cashier-icon"></span>
                            <span class="icon-text">Người Chia Bài</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="sexy-baccarat-icon cashier-icon"></span>
                            <span class="icon-text">Sexy Gaming</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="wm-casino-icon cashier-icon"></span>
                            <span class="icon-text">WM Casino</span>
                          </div>
                        </li>
                        <li class="hideSABASeamless">
                          <div>
                            <span class="saba-seamless-icon cashier-icon"></span>
                            <span class="icon-text">SABA Sports</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="esports-icon cashier-icon"></span>
                            <span class="icon-text">TF Gaming</span>
                          </div>
                        </li>
                        <li class="hideVND">
                          <div>
                            <span class="lc-poker-icon cashier-icon"></span>
                            <span class="icon-text">V8 Poker</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="casino-games-icon cashier-icon"></span>
                            <span class="icon-text">Trò Chơi Casino</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span class="keno-and-lotto-icon cashier-icon"></span>
                            <span class="icon-text">Keno &amp; Xổ Số</span>
                          </div>
                        </li>
                      </ul>

                    </div>
                    <div>
                      <span id="central-total" class="whole-row balance-info__value">0,00</span>
                    </div>
                  </div>
                </li>

                <li id="msports-account">
                  <div class="whole-row">
                    <div>
                      <span class="msports-icon cashier-icon"></span>
                      <span id="msports-total-label" class="icon-text">Thể Thao<span class="additional-text">&nbsp;(Trước đó M Thể Thao)</span></span>
                    </div>
                    <div>
                      <span id="msports-withdrawable" class="balance-info__value">0,00</span>
                    </div>
                  </div>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <script nonce="b715db7885d84c3aa0e2fc58d1073616">
          /* exported productbalanceurl, balanceurl, showMSportsSeamless */
          var productbalanceurl = '/common/getproductbalance';
          var balanceurl = '/common/getbalance';
          var showMSportsSeamless = 'False';
        </script>

        <script type="text/javascript" src="/_js/common/cashier-balances.js?build=2.43.1.11735-42758" async=""></script>
        <div class="layout-content">


          <div class="tabbed-links">
            <a href="/cashier/deposit" id="tab-deposit" class="tabbed-links__item selected">
              <span class="icon-background"></span>
              Gửi Tiền
            </a>
            <a id="tab-transfer" class="tabbed-links__item " href="/cashier/transfer">
              <span class="icon-background"></span>
              Chuyển Quỹ
            </a>
            <a href="/cashier/withdrawal" id="tab-withdrawal" class="tabbed-links__item ">
              <span class="icon-background"></span>
              Rút Tiền
            </a>
          </div>


          <script type="text/javascript" nonce="b715db7885d84c3aa0e2fc58d1073616">
            /* exported fundTransferUrl */
            var fundTransferUrl = '/cashier/transfer';
          </script>

          <div class="content-box-fmbo">
            <form method="post" action="https://cashier.m88vr.com/" target="deposit-iframe" id="deposit-form"
                  style="display: none;" novalidate="novalidate" class="form-valid validation-bound">
              <input type="hidden" name="portalId" value="1">
              <input type="hidden" name="language" value="vi-VN">
              <input type="hidden" name="playerId" value="10964726">
              <input type="hidden" name="operatorId" value="2">
              <input type="hidden" name="currency" value="VND">
              <input type="hidden" name="playerName" value="m88">
              <input type="hidden" name="playerCountry" value="VN">
              <input type="hidden" name="playerUsername" value="vainoi">
              <input type="hidden" name="paymentGroup" value="A">
              <input type="hidden" name="vipLevel" value="R10">
              <input type="hidden" name="holdDeposit" value="false">
              <input type="hidden" name="phoneNumber" value="+843574685783">
              <input type="hidden" name="firstTimeDeposit" value="true">
              <input type="hidden" name="checksum"
                     value="BE71F7EE0C0F13B67AFBF0420E16B5CC101ACB6A9512CB058C1E359D2C41163E">
              <input type="hidden" name="hideTransferToWallet" value="false">
            </form>

            <iframe name="deposit-iframe" width="100%" height="600" frameborder="0"></iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CashierContentWrapper"
}
</script>

<style scoped>

</style>

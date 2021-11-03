<template>
  <div class="footer-wrapper">
    <footer class="layout-footer">

      <div class="mobile-desktop-switch">
        <div id="switch-to-desktop-button" class="mobile-desktop-switch-button">
          <div class="icon-desktop">
          </div>
          <div class="mobile-desktop-switch-text">
            Giao Diện Máy Tính
          </div>
        </div>
      </div>

      <div id="popup-mobile-desktop-switch" class="popup-overlay notification-static" style="display: none;">

        <div class="popup-overlay-content">

          <div class="popup-title">
            <span></span>
            <button class="close-mobile-desktop-switch icon-close">
              <span class="icon"></span>
            </button>
          </div>

          <div class="popup-body">
            <div class="popup-body-content">
              Trang Casino Slots chưa được hỗ trợ khi chuyển sang chế độ xem trên máy tính. Để có trải nghiệm chơi game
              tốt hơn, vui lòng quay lại chế độ xem trên thiết bị di động.
            </div>
          </div>

          <div class="popup-footer">
            <div class="popup-header-layout-action-box">
              <div class="action-item">
                <button id="switch-to-desktop-button">
                  OK
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div class="footer-top">
        <div class="payment-methods">

          <div class="title">
            Phương thức Thanh toán:
          </div>

          <div class="methods">
            <div class="method-container">
              <img class="payment-method"
                   src="/images/footer/payment-methods/quick-transfer-vn33d0.svg" alt="">
              <img class="payment-method"
                   src="/images/footer/payment-methods/quick-transfer-vn-colored33d0.svg"
                   alt="">
            </div>

            <div class="method-container">
              <img class="payment-method"
                   src="/images/footer/payment-methods/nine-pay33d0.svg" alt="">
              <img class="payment-method"
                   src="/images/footer/payment-methods/nine-pay-colored33d0.svg" alt="">
            </div>

            <div class="method-container">
              <img class="payment-method"
                   src="/images/footer/payment-methods/fast-pay.svg?build=2.43.1.11593-42612" alt="">
              <img class="payment-method"
                   src="/images/footer/payment-methods/fast-pay-colored.svg?build=2.43.1.11593-42612" alt="">
            </div>

            <div class="method-container">
              <img class="payment-method"
                   src="/images/footer/payment-methods/eezie-pay.svg?build=2.43.1.11593-42612" alt="">
              <img class="payment-method"
                   src="/images/footer/payment-methods/eezie-pay-colored.svg?build=2.43.1.11593-42612" alt="">
            </div>

            <div class="method-container">
              <img class="payment-method"
                   src="/images/footer/payment-methods/wealth-pay.svg?build=2.43.1.11593-42612" alt="">
              <img class="payment-method"
                   src="/images/footer/payment-methods/wealth-pay-colored.svg?build=2.43.1.11593-42612" alt="">
            </div>

            <div class="method-container">
              <img class="payment-method"
                   src="/images/footer/payment-methods/truepay.svg?build=2.43.1.11593-42612" alt="">
              <img class="payment-method"
                   src="/images/footer/payment-methods/truepay-colored.svg?build=2.43.1.11593-42612" alt="">
            </div>


          </div>

        </div>

        <div class="social-media">

          <a href="https://www.facebook.com/M88OfficialVN" target="_blank" rel="noopener noreferrer">
            <img class="social-media-image"
                 src="/images/footer/social-media/facebook.svg?build=2.43.1.11593-42612">
            <img class="social-media-image"
                 src="/images/footer/social-media/facebook-colored.svg?build=2.43.1.11593-42612">
          </a>

          <a href="https://twitter.com/M88_VIETNAM" target="_blank" rel="noopener noreferrer">
            <img class="social-media-image"
                 src="/images/footer/social-media/twitter.svg?build=2.43.1.11593-42612">
            <img class="social-media-image"
                 src="/images/footer/social-media/twitter-colored.svg?build=2.43.1.11593-42612">
          </a>

          <a href="https://www.youtube.com/channel/UCMJ7sxvxcDowyTrQQvMSciw/" target="_blank" rel="noopener noreferrer">
            <img class="social-media-image"
                 src="/images/footer/social-media/youtube.svg?build=2.43.1.11593-42612">
            <img class="social-media-image"
                 src="/images/footer/social-media/youtube-colored.svg?build=2.43.1.11593-42612">
          </a>

        </div>

        <div class="navigation-menu">

          <a href="/about">Giới Thiệu Về M88</a>

          <div class="link-seperator">|</div>

          <a href="/referafriend">Giới Thiệu Bạn Bè</a>

          <div class="link-seperator">|</div>

          <a href="/vip" target="_blank">VIP</a>

          <div class="link-seperator">|</div>

          <a href="https://affiliate.m88vr.com?language=vi-VN" target="_blank">Đại Lý</a>

          <div class="link-seperator">|</div>

          <a href="/cashier/bankingoptions" class="open-in-window" data-windowwidth="800" data-windowheight="800">Lựa
            Chọn Ngân Hàng</a>

          <div class="link-seperator">|</div>

          <a href="https://help.m88vr.com/responsibleGaming_vn.asp" data-windowwidth="915" data-windowheight="1000"
             class="open-in-window" id="home-footer-responsible-gaming">Chơi Game Có Trách Nhiệm</a>

          <div class="link-seperator">|</div>

          <a href="/contact">Liên Hệ Với Chúng Tôi</a>

          <div class="link-seperator">|</div>

          <a href="https://help.m88vr.com/responsibleGaming_vn.asp" data-windowwidth="910" data-windowheight="1000"
             class="open-in-window" id="home-footer-faq">Trung Tâm Hỗ Trợ</a>

          <div class="link-seperator">|</div>

          <a href="/partnership">Đơn Vị Tài Trợ</a>


          <div id="switch-to-mobile-button" class="desktop-mobile-switch">
            <div class="icon-mobile">
            </div>
            <div class="desktop-mobile-switch-text">
              Xem trên Di Động
            </div>
          </div>

        </div>

        <div class="localized-links">
          <a href="https://www.m88th.com/">M88 Thailand</a>
          |
          <a href="https://www.m88tp.com/">M88 Vietnam</a>
          |
          <a href="https://www.m88.com/">M88</a>
          |
          <a href="https://www.ms-88.com/">Bhs Indonesia</a>
        </div>

      </div>

      <div class="footer-middle">
        <link href="/css/footer/game-providers/custom33d0.css" rel="stylesheet">

        <div class="game-providers">
          <div class="providers-wrapper">
            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/opus-gaming33d0.svg">
              <img class="provider-image"
                   src="/images/footer/game-providers/opus-gaming-colored33d0.svg">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/saba-sports33d0.svg">
              <img class="provider-image"
                   src="/images/footer/game-providers/saba-sports-colored33d0.svg">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/asia-gaming33d0.svg">
              <img class="provider-image"
                   src="/images/footer/game-providers/asia-gaming-colored33d0.svg">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/pragmatic33d0.svg">
              <img class="provider-image"
                   src="/images/footer/game-providers/pragmatic-colored33d0.svg">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/micro-gaming.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/micro-gaming-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/aecasino.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/aecasino-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/habanero.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/habanero-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/skywind.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/skywind-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/playtech.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/playtech-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image" src="/images/footer/game-providers/cq9.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/cq9-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/isoft-bet33d0.svg">
              <img class="provider-image"
                   src="/images/footer/game-providers/isoft-bet-colored33d0.svg">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/lottoland33d0.svg">
              <img class="provider-image"
                   src="/images/footer/game-providers/lottoland-colored33d0.svg">
            </div>

            <div class="provider-container">
              <img class="provider-image" src="/images/footer/game-providers/btg33d0.svg">
              <img class="provider-image"
                   src="/images/footer/game-providers/btg-colored33d0.svg">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/goldenhero.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/goldenhero-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/spribe.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/spribe-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/hacksaw.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/hacksaw-colored.svg?build=2.43.1.11593-42612">
            </div>

            <div class="provider-container">
              <img class="provider-image"
                   src="/images/footer/game-providers/wmcasino.svg?build=2.43.1.11593-42612">
              <img class="provider-image"
                   src="/images/footer/game-providers/wmcasino-colored.svg?build=2.43.1.11593-42612">
            </div>


            <div id="league-sponsor">
              <img src="/images/footer/laliga.svg?build=2.43.1.11593-42612" class="league-logo"
                   alt="la-liga logo">
              <div>
                <p>OFFICIAL REGIONAL PARTNER</p>
                <p>2020 - 2024</p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <div class="footer-bottom">

        <div class="footer-content-bottom">

          <div class="previous-sponsorships">

            <div class="sponsor">
              <img class="sponsor-image"
                   src="/images/footer/previous-sponsorships/bournemouth.svg?build=2.43.1.11593-42612">
              <div class="sponsor-info">
                <div class="sponsor-name">AFC BOURNEMOUTH</div>
                <div class="sponsorship-years">2016/2020</div>
              </div>
            </div>

            <div class="sponsor">
              <img class="sponsor-image"
                   src="/images/footer/previous-sponsorships/crystal-palace.svg?build=2.43.1.11593-42612">
              <div class="sponsor-info">
                <div class="sponsor-name">CRYSTAL PALACE</div>
                <div class="sponsorship-years">2015/2017</div>
              </div>
            </div>

            <div class="sponsor">
              <img class="sponsor-image"
                   src="/images/footer/previous-sponsorships/manchester-city.svg?build=2.43.1.11593-42612">
              <div class="sponsor-info">
                <div class="sponsor-name">MANCHESTER CITY</div>
                <div class="sponsorship-years">2011/2012</div>
              </div>
            </div>

            <div class="sponsor">
              <img class="sponsor-image"
                   src="/images/footer/previous-sponsorships/tottenham-hotspur33d0.svg">
              <div class="sponsor-info">
                <div class="sponsor-name">TOTTENHAM HOTSPUR</div>
                <div class="sponsorship-years">2006/2010</div>
              </div>
            </div>

          </div>

          <div id="partner-element-group">
            <a class="partner-element">
              <img class="partner-hover" src="/images/footer/licenses/pagcor33d0.svg">
              <img class="partner-hover"
                   src="/images/footer/licenses/pagcor-colored33d0.svg">
            </a>
            <img class="partner-element" src="/images/footer/licenses/ga.svg?build=2.43.1.11593-42612">
            <img class="partner-element" src="/images/footer/licenses/itech.svg?build=2.43.1.11593-42612">
          </div>


          <div id="be-support">
            <div class="be-support-content">
              M88 cam kết hỗ trợ&nbsp;<a
              href="javascript:openInNewWindow('https://help.m88vr.com/responsibleGaming_vn.asp',915,1000)"
              id="footer-responsible-gaming">Chơi Game Có Trách Nhiệm</a>
            </div>
          </div>

          <div class="bottom-element">
            <div id="be-age-limit" class="age-limit">
              <img src="/images/icons/eighteen.svg?build=2.43.1.11593-42612" alt="eighteen">
            </div>
            <div class="copyright-element">
              <span>&nbsp;| M88.com&nbsp;</span>
              <time>2021</time>
            </div>
          </div>

          <div class="terms-info">
            * Điều Khoản và Điều Kiện được áp dụng. Vui lòng tham khảo mục khuyến mãi để biết thêm chi tiết.
            <br>
            <br>
            M88.com sử dụng các trình duyệt nhất định để đảm bảo Thành Viên có được trải nghiệm cá cược thượng đỉnh.
            Bằng việc truy cập và tiếp tục sử dụng trang web này Thành viên chấp nhận điều khoản sử dụng cookie. Để biết
            thông tin về việc sử dụng cookie của chúng tôi và làm thế nào để tránh vi phạm các quy định, vui lòng tham
            khảo
            <a id="openLink" data-link="https://help.m88vr.com/termOfUse_tc_vn.asp" style="cursor: pointer">Điều Khoản
              Sử Dụng</a> tại M88.
          </div>


        </div>


        <div id="version-content">
          2.43.1.11593
        </div>
      </div>


    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

</style>

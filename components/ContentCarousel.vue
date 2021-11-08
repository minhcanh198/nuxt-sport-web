<template>
  <div class="area content-carousel" data-component-name="">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <img alt="" class="carousel-image desktop-only" data-track-content=""
             data-content-name="On Boarding Journey and Login - Homepage - Carousel - Desktop"
             data-content-piece="Live Casino Welcome Bonus Bundle - VN"
             src="/images/home-page/carousel/lcfastwelcomebonus_home.jpg" width="100%">
        <div class="inner desktop-only">
          <div class="inner-wrapper">
            <div class="inner-content-right">
              <div class="inner-content">
                <div class="inner-text">
                  <div class="title-text" style="font-family: &quot;Tahoma&quot;; font-weight: bold">ĐỘC QUYỀN
                    CASINO TRỰC TUYẾN
                  </div>
                  <div class="subtitle-text" style="font-family: &quot;Tahoma&quot;">150% THƯỞNG HOẶC CƯỢC 18x
                  </div>
                  <div class="subtitle-text" style="font-family: &quot;Tahoma&quot;">88 Free Spins &amp; 184 VND
                    MIỄN PHÍ
                  </div>
                </div>
                <div data-url="/register" class="btn btn-primary"
                     data-matomo-action="Click - Join Now - Live Casino Welcome Bonus Bundle - VN - Desktop"
                     style="font-family: &quot;Tahoma&quot;">ĐĂNG KÝ
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img alt="" class="carousel-image desktop-only" data-track-content=""
             data-content-name="On Boarding Journey and Login - Homepage - Carousel - Desktop"
             data-content-piece="Real Deal Reload (SB2) - VN"
             src="/images/home-page/carousel/reg_apr21_sb2.jpg"
             width="100%">
        <div class="inner desktop-only">
          <div class="inner-wrapper">
            <div class="inner-content-right">
              <div class="inner-content">
                <div class="inner-text">
                  <div class="title-text bold" style="font-family: &quot;Tahoma&quot;; font-weight: bold">
                    <img src="/images/home-page/carousel/icons/msport-vn.svg?build=2.43.1.11593-42612"
                         alt="" style="height: 45px; margin: unset; padding-bottom: 0px">20% HOÀN GỬI HẤP DẪN
                  </div>
                  <div class="subtitle-text" style="font-family: &quot;Tahoma&quot;">THƯỞNG ĐẾN 9,200 VND</div>
                </div>
                <div data-url="/register" class="btn btn-primary"
                     data-matomo-action="Click - Join Now - Real Deal Reload (SB2) - VN - Desktop"
                     style="font-family: &quot;Tahoma&quot;">ĐĂNG KÝ
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img alt="" class="carousel-image desktop-only" data-track-content=""
             data-content-name="On Boarding Journey and Login - Homepage - Carousel - Desktop"
             data-content-piece="Live Casino Welcome Bonus Bundle - VN"
             src="/images/home-page/carousel/lcfastwelcomebonus_home.jpg"
             width="100%">
        <div class="inner desktop-only">
          <div class="inner-wrapper">
            <div class="inner-content-right">
              <div class="inner-content">
                <div class="inner-text">
                  <div class="title-text" style="font-family: &quot;Tahoma&quot;; font-weight: bold">ĐỘC QUYỀN
                    CASINO TRỰC TUYẾN
                  </div>
                  <div class="subtitle-text" style="font-family: &quot;Tahoma&quot;">150% THƯỞNG HOẶC CƯỢC 18x
                  </div>
                  <div class="subtitle-text" style="font-family: &quot;Tahoma&quot;">88 Free Spins &amp; 184 VND
                    MIỄN PHÍ
                  </div>
                </div>
                <div data-url="/register" class="btn btn-primary"
                     data-matomo-action="Click - Join Now - Live Casino Welcome Bonus Bundle - VN - Desktop"
                     style="font-family: &quot;Tahoma&quot;">ĐĂNG KÝ
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <img alt="" class="carousel-image desktop-only" data-track-content=""
             data-content-name="On Boarding Journey and Login - Homepage - Carousel - Desktop"
             data-content-piece="Sports Welcome Bonus Bundle - VN"
             src="/images/home-page/carousel/sportswelcomebonus_home.jpg"
             width="100%">
        <div class="inner desktop-only">
          <div class="inner-wrapper">
            <div class="inner-content-right">
              <div class="inner-content">
                <div class="inner-text">
                  <div class="title-text" style="font-family: &quot;Tahoma&quot;; font-weight: bold">ĐỘC QUYỀN THỂ
                    THAO
                  </div>
                  <div class="subtitle-text" style="font-family: &quot;Tahoma&quot;; font-weight: bold">150%
                    THƯỞNG HOẶC CƯỢC 10X
                  </div>
                  <div class="subtitle-text" style="font-family: &quot;Tahoma&quot;">88 Free Spins &amp; 184 VND
                    MIỄN PHÍ
                  </div>
                </div>
                <div data-url="/register" class="btn btn-primary"
                     data-matomo-action="Click - Join Now - Sports Welcome Bonus Bundle - VN - Desktop"
                     style="font-family: &quot;Tahoma&quot;">ĐĂNG KÝ
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'

export default {
  name: "ContentCarousel",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 3000
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.inner {
  max-height: 400px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  .inner-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    .inner-content-right {
      right: 0;
      width: 50%;
      height: 100%;
      position: absolute;

      .inner-content {
        font-family: 'AvantGarde';
        position: relative;
        padding: 0 4%;
        height: 100%;
        text-align: left;

        .btn.btn-primary {
          background-color: var(--cta);
          margin: 0;
          padding: 0;
          position: absolute;
          min-width: unset;
          border-radius: 2px;
          font-weight: bold;
          color: var(--primary-2);
          line-height: 28px;
          font-size: 12px;
          height: 28px;
          width: 75px;
          bottom: 10%;
          font-family: 'AvantGarde-Demi';
        }

        .inner-text {
          color: var(--neutral-1);
          position: absolute;
          width: 92%;
          bottom: calc(16% + 24px);
        }
      }
    }
  }
}
</style>

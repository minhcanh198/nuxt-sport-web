<template>
  <div id="matches" class="tile sports-tile gray-border sportsbook-events" data-url=""
       data-component-name="Hightlight Matches" data-type="" data-kind-id="">
    <div class="sportsbook-events-content" data-component-name="" style="display: block;">
      <swiper class="swiper col match-section" :options="swiperOption">
        <button class="slick-prev slick-arrow"
                aria-label="Previous"
                type="button"
                style=""
                slot="button-prev">
          Previous
        </button>
        <swiper-slide>
          <div class="">
            <table>
              <caption>ENGLISH PREMIER LEAGUE</caption>
              <tbody>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Southampton</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/southampton33d0.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/aston-villla.png"
                  alt=""></td>
                <td>Aston Villa</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Man United</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/man-united33d0.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/man-city33d0.png"
                  alt=""></td>
                <td>Man City</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Chelsea</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/chelsea33d0.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/burnley33d0.png"
                  alt=""></td>
                <td>Burnley</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Crystal Palace</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/crystal-palace.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/wolves33d0.png"
                  alt=""></td>
                <td>Wolves</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Brentford</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/valencia33d0.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/wolves33d0.png"
                  alt=""></td>
                <td>Norwich City</td>
              </tr>
              </tbody>
            </table>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class=""
               aria-hidden="true">
            <table>
              <caption>LA LIGA</caption>
              <tbody>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Athletic</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/athletic33d0.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/cadiz33d0.png"
                  alt=""></td>
                <td>Cádiz</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Espanyol</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/espanyol33d0.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/granada33d0.png"
                  alt=""></td>
                <td>Granada</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Celta Vigo</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/celta33d0.png"
                  alt=""></td>
                <td>Nov 06</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/barcelona33d0.png"
                  alt=""></td>
                <td>Barcelona</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Alavés</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/alaves.png"
                  alt=""></td>
                <td>Nov 07</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/levante33d0.png"
                  alt=""></td>
                <td>Levante</td>
              </tr>
              <tr class="track-events" data-url="/msports" style="color: #fff">
                <td>Real Madrid</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/real-madrid33d0.png"
                  alt=""></td>
                <td>Nov 07</td>
                <td><img
                  src="/images/sportsbook/upcoming-events/team-icon/rayo-vallecano33d0.png"
                  alt=""></td>
                <td>Rayo Vallecano</td>
              </tr>
              </tbody>
            </table>
          </div>
        </swiper-slide>
        <button class="slick-next slick-arrow"
                aria-label="Next"
                type="button"
                style=""
                slot="button-next">
          Next
        </button>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/css/swiper.css'
import {Swiper, SwiperSlide} from "vue-awesome-swiper";

export default {
  name: "Matches",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        navigation: {
          nextEl: '.slick-next ',
          prevEl: '.slick-prev'
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
.slick-arrow.slick-prev {
  left: 0;
  transform: scaleX(-1);
}

.slick-arrow {
  font-size: 0;
  background-color: transparent;
  background-image: url(/images/icons/caret-white.svg), url(/images/icons/caret-yellow.svg);
  background-repeat: no-repeat;
  background-position: center center, left 999px center;
  background-color: #000;
  width: 50px;
  height: 48px;
  border: 0;
  padding: 0;
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;
}

.slick-arrow.slick-next {
  right: 0;
}


table {
  border-collapse: collapse;
  width: 100%;
  height: calc(100% - 48px);
  outline: 0;
  margin-right: 0px;
}

table caption {
  height: 48px;
  line-height: 48px;
  background-color: #000;
  color: #ffcd00;
  font-size: 18px;
  font-family: 'OpenSansBold';
  text-transform: uppercase;
  outline: 0;
  margin-right: 0px;
}

table {
  td {
    text-align: center;
    font-size: 14px;
    font-family: 'OpenSansRegular';
    /* text-transform: uppercase; */
  }
}

table tr:nth-child(odd) {
  background-color: #1a2332;
}

table tr:nth-child(even) {
  background-color: #26324d;
}

@media (max-width: 1365px) {
  table {
    height: calc(100% - ((((((100vw - 1024px) * 100) / (1366 - 1024)) / 100) * (48 - 36)) + 36px));
  }
}

@media (max-width: 1023px) {
  table {
    height: calc(100% - ((((((100vw - 768px) * 100) / (1023 - 768)) / 100) * (36 - 33)) + 33px));
  }
}

.track-events {
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 42px !important;
    vertical-align: middle;
  }
}

</style>

import Vue from 'vue'
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
  EffectFade
} from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// import style
import 'swiper/swiper-bundle.min.css'

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay, EffectFade])
Vue.use(getAwesomeSwiper(SwiperClass))

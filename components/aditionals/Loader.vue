<template lang="pug">
.loader__wrapper
  transition(
  mode="out-in"
  enter-active-class="animate__animated animate__slideInDown"
  leave-active-class="animate__animated animate__slideOutUp")
    .loader__wrapper__animated(v-if="visible" :class="{'fixed': !specialRoutes, 'absolute': specialRoutes}")
      figure.loader__image(v-if="visible")
        picture
          img(data-src="~assets/logo_black.png" class="lazyload blur-up img-fluid animate__animated animate__swing animate__infinite" alt="Leanfit" data-scroll style="--animate-duration: 1.2s")
      .text__wrapper
        span(v-if="specialRoutes" class="animate__animated animate__fadeIn animate__fadeOut animate__infinite animate__slower animate__delay-2s") Agregando método de pago
        span(v-if="specialRoutes" class="animate__animated animate__fadeIn animate__fadeOut animate__infinite animate__slower animate__delay-3s") Espera unos segundos
</template>

<script>
export default {
  name: 'Loader',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    specialRoutes() {
      return this.$route.name === 'checkout' || this.$route.name === 'profile'
    }
  }
}
</script>

<style lang="scss" scoped>
.loader__wrapper {
  background: transparent;
  .loader__wrapper__animated {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #ffffff;
    top: 0;
    left: 0;
    z-index: 10;
    position: fixed;
    figure {
      width: 100px;
    }
    .text__wrapper {
      position: relative;
      width: 100%;
      margin-top: 25px;
      span {
        display: block;
        font-size: 1.3rem;
        font-weight: bold;
        font-family: 'Lato', sans-serif;
        text-align: center;
      }
    }
  }
}
</style>

<template lang="pug">
header(data-scroll-section id="home")
  canvas#scene
  .container
    .row.no-gutters.flex-column.justify-content-center.align-items-center(
      data-scroll,
      data-scroll-speed='2',
      data-scroll-delay='0.2'
    )
      h1.animate__animated.animate__fadeInUp.animate__delay-2s {{ $t("header.author") }}
      h4.animate__animated.animate__fadeInDown.animate__delay-2s {{ $t("header.description_short") }}
    .rounded
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
    .circle-container
      .circle
</template>

<script>
export default {
  name: 'SiteHeader',
}
</script>

<style lang="scss" scoped>
header {
  height: 100vh;
  background-image: url('~assets/header.png');
  canvas {
    opacity: 0.25;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    mix-blend-mode: multiply;
    transform: translateX(0.00001px);
  }
  .container {
    height: 100%;
    position: relative;
    overflow: hidden;
    z-index: 2;
    .row {
      height: 100%;
      h1 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 300;
        text-align: center;
      }
      h4 {
        font-family: 'Source Code Pro', monospace;
        font-weight: 200;
        text-align: center;
      }
    }
  }
}
</style>

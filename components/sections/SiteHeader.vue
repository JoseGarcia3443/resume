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
    .rounded {
      width: 250px;
      height: 250px;
      background-color: var(--secondary);
      border-radius: 50%;
      opacity: 0.2;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.circle-container {
  $particleNum: 10;
  $particleColor: hsl(180, 100%, 80%);

  position: absolute;
  transform: translateY(10vh);
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  .circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    mix-blend-mode: screen;
    background-image: radial-gradient(
      hsl(180, 100%, 80%),
      hsl(180, 100%, 80%) 10%,
      hsla(180, 100%, 80%, 0) 56%
    );

    animation: fadein-frames 200ms infinite, scale-frames 2s infinite;

    @keyframes fade-frames {
      0% {
        opacity: 1;
      }

      50% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
      }
    }

    @keyframes scale-frames {
      0% {
        transform: scale3d(0.4, 0.4, 1);
      }

      50% {
        transform: scale3d(2.2, 2.2, 1);
      }

      100% {
        transform: scale3d(0.4, 0.4, 1);
      }
    }
  }

  $particleBaseSize: 8;

  @for $i from 1 through $particleNum {
    &:nth-child(#{$i}) {
      $circleSize: random($particleBaseSize);
      width: $circleSize + px;
      height: $circleSize + px;

      $startPositionY: random(10) + 100;
      $framesName: 'move-frames-' + $i;
      $moveDuration: 28000 + random(9000) + ms;

      animation-name: #{$framesName};
      animation-duration: $moveDuration;
      animation-delay: random(37000) + ms;

      @keyframes #{$framesName} {
        from {
          transform: translate3d(
            #{random(100) + vw},
            #{$startPositionY + vh},
            0
          );
        }

        to {
          transform: translate3d(
            #{random(100) + vw},
            #{- $startPositionY - random(30) + vh},
            0
          );
        }
      }

      .circle {
        animation-delay: random(4000) + ms;
      }
    }
  }
}
</style>

<template lang="pug">
nav(data-scroll-section :style="`background-color: ${background}`")
  .container
    .row.no-gutters
      .col-12
        .row.no-gutters.align-items-center.justify-content-between
          .social__wrapper
            facebook(:color="iconColor")
            instagram(:color="iconColor")
          logo(:color="logoColor")
          menu-toggle.d-md-none(:color="iconColor")
          select-lenguage
</template>

<script>
export default {
  name: 'NavBar',
  components: {
    'logo': () => import('@/components/Logo.vue'),
    'facebook': () => import('@/components/social-media/Facebook.vue'),
    'instagram': () => import('@/components/social-media/Instagram.vue'),
    'menu-toggle': () => import('@/components/aditionals/MenuToggle.vue'),
    'select-lenguage': () => import('@/components/aditionals/SelectLenguage.vue')
  },
  props: {
    color: {
      type: String,
      default: '#ffffff'
    }
  },
  data: () => ({
    i18n: ''
  }),
  computed: {
    background() {
      return 'transparent'
    },
    logoColor() {
      return this.getColor(this.$route.name)
    },
    iconColor() {
      return this.getColor(this.$route.name)
    }
  },
  methods: {
    getColor(name) {
      switch (name) {
        case 'index':
          return '#ffffff'
        default:
          return '#000000'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
  position: fixed;
  transition-property: all;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  --transform-translate-x: 0;
  --transform-translate-y: 0;
  --transform-rotate: 0;
  --transform-skew-x: 0;
  --transform-skew-y: 0;
  --transform-scale-x: 1;
  --transform-scale-y: 1;
  transform: translateX(var(--transform-translate-x))
    translateY(var(--transform-translate-y)) rotate(var(--transform-rotate))
    skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y))
    scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
  @media (min-width: 768px) {
    &.is-scrolling {
      box-shadow: 0 2px 10px 0 rgba(5, 5, 5, 0.15);
    }
  }
  .container {
    .row {
      padding-top: 10px;
      padding-bottom: 10px;
    }
    .social__wrapper {
      display: flex;
      a {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
}

[data-direction='up'] nav {
  --transform-translate-y: 0;
}
[data-direction='down'] nav {
  --transform-translate-y: -100%;
}
</style>

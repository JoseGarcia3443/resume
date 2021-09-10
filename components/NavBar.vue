<template lang="pug">
nav(data-scroll-section)
  .container
    .row.no-gutters.justify-content-between.align-items-center
      logo
      menu-links
      button-menu.d-md-none(@onClick="$emit('toggle')")
</template>

<script>
export default {
  name: 'NavBar',
  components: {
    'logo': () => import('@/components/Logo.vue'),
    'menu-links': () => import('@/components/aditionals/MenuLinks.vue'),
    'button-menu': () => import('@/components/aditionals/ButtonMenu.vue')
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
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
nav {
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;
}
</style>

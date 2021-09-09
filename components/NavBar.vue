<template lang="pug">
nav(data-scroll-section :style="`background-color: ${background}`")
  .container
</template>

<script>
export default {
  name: 'NavBar',
  components: {},
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

</style>

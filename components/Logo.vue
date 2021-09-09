<template lang="pug">
.logo__wrapper(class="menu__item animate__animated animate__fadeInLeft animate__delay-2s" :style="`--animate-duration: 1.1s`")
  img(src="~assets/logo.png" alt="Jose Angel Garcia Resume" class="logo")
</template>

<script>
export default {
  name: 'Logo',
  props: {
    color: {
      type: String,
      default: '#ffffff'
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Allison&display=swap');

.logo__wrapper {
  .logo {
    width: 4rem;
  }
}
</style>

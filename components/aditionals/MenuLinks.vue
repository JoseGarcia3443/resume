<template lang="pug">
.wrapper__navigation
  ul.menu__links
    li.menu__item.animate__animated.animate__fadeInRight.animate__delay-2s(
      v-for='(link, index) in links',
      :key='index',
      @click='setTarget(`#${link.name}`)',
      :style='`--animate-duration: 1.${index}s`'
    )
      span {{ $t(`navigation.${link.name}`) }}
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'MenuLinks',
  data: () => ({
    links: [
      {
        index: 2,
        name: 'home',
      },
      {
        index: 4,
        name: 'profile',
      },
      {
        index: 6,
        name: 'projects',
      },
      {
        index: 8,
        name: 'experience',
      },
    ],
  }),
  methods: {
    ...mapActions(['setTarget']),
  },
}
</script>

<style lang="scss" scoped>
.wrapper__navigation {
  display: none;
  @media (min-width: 768px) {
  	display: block;
  }
}
</style>

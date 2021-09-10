<template lang="pug">
section#experience(data-scroll-section)
  .container
    .row.no-gutters.justify-content-center.align-items-center(
      data-scroll,
      data-scroll-speed='2',
      data-scroll-delay='0.2'
    )
      h2.animate__animated.fade_in(data-scroll) {{ $t("experience.title") }}
    .row.no-gutters.justify-content-between.align-items-center
      experience-item(
        v-for='(company, index) in companies',
        :key='index',
        :company='company'
      )
</template>

<script>
export default {
  name: 'Experience',
  components: {
    'experience-item': () =>
      import('@/components/aditionals/ExperienceItem.vue'),
  },
  data: () => ({
    companies: [
      {
        title: 'controlla',
        image: require('@/assets/experience/controlla.png'),
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
section {
  padding: 5rem 0;
  min-height: 100vh;
  .container {
    .row {
      &:first-child {
        margin-bottom: 25px;
      }
    }
  }
}
</style>

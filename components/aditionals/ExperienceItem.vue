<template lang="pug">
.card__experience.col-12
  .row.no-gutters.justify-content-between.align-items-center
    .col-12.col-md-6.col-lg-5
      h4(data-scroll, data-scroll-speed='4', data-scroll-delay='0.1') {{ $t(`experience.${company.title}.title`) }}
      p(data-scroll, data-scroll-speed='4', data-scroll-delay='0.2') {{ $t(`experience.${company.title}.description`) }}
      span(data-scroll, data-scroll-speed='4', data-scroll-delay='0.25') {{ $t(`experience.${company.title}.tools`) }}
    .col-12.col-md-5
      img(
        :src='company.image',
        :alt='$t(`experience.${company.title}.title`)',
        data-scroll,
        data-scroll-speed='4',
        data-scroll-delay='0.12'
      )
  img.overlay__image(
    :src='company.image',
    :alt='$t(`experience.${company.title}.title`)',
    data-scroll,
    data-scroll-speed='2',
    data-scroll-delay='0.3'
  )
</template>

<script>
export default {
  name: 'ExperienceItem',
  props: {
    company: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.card__experience {
  padding: 2rem 0;
  position: relative;
  h4 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 25px;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }
  span {
    display: block;
    text-align: center;
    line-height: 2;
  }
  img {
    max-width: 100%;
    &.overlay__image {
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.1;
    }
  }
}
</style>

<template lang="pug">
.project__wraper.col-12(:class='project.title')
  .row.no-gutters.justify-content-between.align-items-center
    .information__wrapper.col-12.col-md-6.col-lg-5(
      :class='{ "order-md-2": position }'
    )
      h4(data-scroll, data-scroll-speed='4', data-scroll-delay='0.1') {{ $t(`projects.${project.title}.title`) }}
      p(data-scroll, data-scroll-speed='4', data-scroll-delay='0.2') {{ $t(`projects.${project.title}.description`) }}
      span(
        data-scroll,
        data-scroll-speed='4',
        data-scroll-delay='0.3'
      ) {{ $t(`projects.${project.title}.tools`) }}
    .col-12.col-md-5.col-lg-5(
      data-scroll,
      data-scroll-speed='4',
      data-scroll-delay='0.3'
    )
      .image__wrapper
        img.project__image(
          :src='project.image',
          :alt='$t(`projects.${project.title}.title`)'
        )
  img.project__image__overlay(
    :src='project.image',
    :alt='$t(`projects.${project.title}.title`)',
    data-scroll,
    data-scroll-speed='6',
    data-scroll-delay='0.1',
    :class='{ left: !position, right: position }'
  )
</template>

<script>
export default {
  name: 'ProjectItem',
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    position() {
      return this.project.position
    },
  },
}
</script>

<style lang="scss" scoped>
.project__wraper {
  padding: 2rem 0;
  min-height: 50vh;
  position: relative;
  .project__image__overlay,
  .project__tools {
    position: absolute;
    opacity: 0.1;
    width: 100%;
    top: 0;
    @media (min-width: 768px) {
      width: 50%;
    }
  }
  .project__tools {
    bottom: 0;
    color: var(--default);
    opacity: 0.5;
  }
  .row {
    height: 100%;
    .information__wrapper {
      margin-bottom: 25px;
      h4 {
        text-align: center;
        margin-bottom: 25px;
      }
      p {
        font-size: 1.5rem;
        margin-bottom: 25px;
      }
      span {
        width: 100%;
        display: block;
        text-align: center;
      }
    }
    .image__wrapper {
      width: 100%;
      height: 100%;
      padding: 25px;
      border-radius: 0.5em;
      background-color: rgba(255, 255, 255, 0.25);
      display: flex;
      justify-content: center;
      align-items: center;
      .project__image {
        max-width: 85%;
      }
    }
  }
}
.leanfit {
  .image__wrapper {
    .project__image {
      width: 50%;
    }
  }
  .project__image__overlay {
    @media (min-width: 768px) {
      width: 25%;
    }
  }
}
.left {
  left: 0;
}

.right {
  right: 0;
}
</style>

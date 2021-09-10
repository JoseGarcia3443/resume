<template lang="pug">
section(data-scroll-section id="profile" data-scroll-id="profile")
  .container
    .row.no-gutters.justify-content-center.align-items-center(
      data-scroll,
      data-scroll-speed='2',
      data-scroll-delay='0.2'
    )
      h2 {{$t('profile.title')}}
      p {{$t('profile.description')}}
    .row.no-gutters.justify-content-around
      span(v-for="(tool, index) in tools" :key="index" data-scroll data-scroll-speed="4" :data-scroll-delay="`0.${index+1}`") {{$t(`tools.${tool.name}`)}}
</template>

<script>
export default {
  name: 'Profile',
  data: () => ({
    tools: [
      {
        name: 'vue'
      },
      {
        name: 'nuxt'
      },
      {
        name: 'laravel'
      },
      {
        name: 'js'
      },
      {
        name: 'node'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
section {
  padding: 5rem 0;
  .container {
    .row {
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 0;
      }
      h2 {
        margin-bottom: 50px;
      }
      p {
        font-size: 1.2rem;
        line-height: 2;
      }
      span {
        color: var(--default);
        font-size: 1.2rem;
      }
    }
  }
}
</style>

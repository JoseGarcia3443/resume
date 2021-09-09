<template lang="pug">
section(data-scroll-section)
  .container
    .row.no-gutters.justify-content-center.align-items-center(
      data-scroll,
      data-scroll-speed='2',
      data-scroll-delay='0.2'
    )
      h2(data-scroll class="animate__animated fade_in_up") {{$t('projects.title')}}
</template>

<script>
export default {
  name: 'Proyects'
}
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
}
</style>

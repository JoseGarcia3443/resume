<template lang="pug">
section(data-scroll-section id="projects")
  .container
    .row.no-gutters.justify-content-center.align-items-center(
      data-scroll,
      data-scroll-speed='2',
      data-scroll-delay='0.2'
    )
      h2(data-scroll class="animate__animated fade_in_up") {{$t('projects.title')}}
    proyect-list
</template>

<script>
export default {
  name: 'Proyects',
  components: {
    'proyect-list': () => import('@/components/aditionals/ProjectList.vue')
  }
}
</script>

<style lang="scss" scoped>
section {
  padding: 5rem 0;
  background-image: url('~assets/header.png');
  .container {
    .row {
      &:first-child {
        margin-bottom: 25px;
      }
    }
  }
}
</style>

<template lang="pug">
section(data-scroll-section id="projects")
  .container
    .rounded(data-scroll data-scroll-speed="6" data-scroll-delay="0.1")
    .rounded(data-scroll data-scroll-speed="6" data-scroll-delay="0.2")
    .rounded(data-scroll data-scroll-speed="6" data-scroll-delay="0.25")
    .rounded(data-scroll data-scroll-speed="6" data-scroll-delay="0.3")
    .rounded(data-scroll data-scroll-speed="6" data-scroll-delay="0.35")
    .row.no-gutters.justify-content-center.align-items-center(
      data-scroll,
      data-scroll-speed='2',
      data-scroll-delay='0.2'
    )
      h2(data-scroll class="animate__animated fade_in") {{$t('projects.title')}}
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
  overflow: hidden;
  .container {
    position: relative;
    .row {
      &:first-child {
        margin-bottom: 25px;
      }
    }
  }
}
.rounded {
  opacity: 0.08;
  &:first-child{
    top: 0;
    left: 0;
    transform: translate(-60%, -60%);
    width: 200px;
    height: 200px;
  }
  &:nth-child(2) {
    top: 20%;
    right: 0;
    left: unset;
    transform: translate(100%, -60%);
    width: 225px;
    height: 225px;
  }
  &:nth-child(3) {
    top: 40%;
    left: 0;
    transform: translate(-60%, -60%);
    width: 180px;
    height: 180px;
  }
  &:nth-child(4) {
    top: 60%;
    right: 0;
    left: unset;
    transform: translate(100%, -60%);
    width: 150px;
    height: 150px;
  }
  &:nth-child(5) {
    top: 80%;
    left: 0;
    transform: translate(-60%, -60%);
    width: 225px;
    height: 225px;
  }
  &:nth-child(4) {
    top: 100%;
    right: 0;
    left: unset;
    transform: translate(100%, -60%);
    width: 125px;
    height: 125px;
  }
}
</style>

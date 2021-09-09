<template lang="pug">
.vp
  nav-bar
  .content
    nuxt
</template>

<script>
export default {
  components: {
    'nav-bar': () => import('@/components/NavBar.vue')
  }
}
</script>

<template lang="pug">
.vp
  loader(:visible="isLoading")
  main-menu(:visible="menuVisible" @toggle="showMenu")
  nav-bar(@toggle="showMenu")
  .content
    nuxt
</template>

<script>
export default {
  components: {
    'nav-bar': () => import('@/components/NavBar.vue'),
    'loader': () => import('@/components/aditionals/Loader.vue'),
    'main-menu': () => import('@/components/aditionals/MainMenu.vue')
  },
  data: () => ({
    isLoading: true,
    menuVisible: false
  }),
  mounted() {
    setTimeout(() => {
      this.isLoading = false
    }, 1500);
  },
  methods: {
    showMenu() {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

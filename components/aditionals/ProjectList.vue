<template lang="pug">
.row.no-gutters
  project-item(v-for="(project, index) in projects" :key="project.id" :project="project")
</template>

<script>
export default {
  name: 'PdjectList',
  components: {
    'project-item': () => import('@/components/aditionals/ProyectItem.vue')
  },
  data: () => ({
    projects: [
      {
        id: 1,
        title: 'pimsa',
        image: require('@/assets/projects/pimsa.svg'),
        position: true
      },
      {
        id: 2,
        title: 'materialista',
        image: require('@/assets/projects/materialista.png'),
        position: false
      },
      {
        id: 3,
        title: 'leanfit',
        image: require('@/assets/projects/leanfit.png'),
        position: true
      },
      {
        id: 4,
        title: 'sercom',
        image: require('@/assets/projects/sercom.png'),
        position: false
      },
    ]
  })
}
</script>

<style>

</style>

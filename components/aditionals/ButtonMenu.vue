<template lang="pug">
button.btn(@click="$emit('onClick')")
  img(src="~assets/icons/menu.png")
</template>

<script>
export default {
  name: 'ButtonMenu'
}
</script>

<style>

</style>

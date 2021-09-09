<template lang="pug">
.landing(data-scroll-container)
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageMixin from '@/mixins/PageMixin.js'

export default {
  name: 'Home',
  components: {},
  mixins: [PageMixin],
  computed: {
    ...mapGetters(['scrollToTarget', 'scrollEvent'])
  },
  watch: {
    scrollEvent() {
      this.scroll &&
        this.scrollToTarget !== '' &&
        this.scroll.scrollTo(this.scrollToTarget)
    }
  },
  mounted() {
    this.element = this.$el
    this.$nextTick(() => {
      setTimeout(() => this.createScroll(), 300)
    })
  },
  beforeDestroy() {
    if (this.scroll) {
      this.scroll.destroy()
    }
  },
  methods: {
    ...mapActions(['setTarget']),
    createScroll() {
      // eslint-disable-next-line new-cap
      this.scroll = new this.locomotiveScroll({
        el: this.element,
        scrollbarClass: 'c-scrollbar',
        getDirection: true,
        getPosition: true,
        smooth: true
      })

      this.scroll.on('scroll', (instance) => {
        instance.scroll.y > 30
          ? document.documentElement.classList.add('is-scrolled')
          : document.documentElement.classList.remove('is-scrolled')
        instance.scroll.y > 100 &&
          document.documentElement.setAttribute(
            'data-direction',
            instance.direction
          )
      })
    },
    onResize() {
      if (this.scroll) {
        this.scroll.update()
      }
    }
  }
}
</script>

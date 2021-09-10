<template lang="pug">
.landing(data-scroll-container)
  site-header
  profile
  proyects
  experience
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageMixin from '@/mixins/PageMixin.js'

export default {
  name: 'Home',
  components: {
    'site-header': () => import('@/components/sections/SiteHeader.vue'),
    'profile': () => import('@/components/sections/Profile.vue'),
    'proyects': () => import('@/components/sections/Proyects.vue'),
    'experience': () => import('@/components/sections/Experience.vue')
  },
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
      setTimeout(() => this.onResize(), 2000);
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
  },
  head: () => ({
    title: 'José Ángel García Márquez | Resume',
    meta: [
      {
        hid: 'title',
        name: 'title',
        content: 'José Ángel García Márquez | Resume'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://jose-garcia-resume.netlify.app/'
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'José Ángel García Márquez | Resume'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: ''
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'José Ángel García Márquez | Resume'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: ''
      },
    ],
  })
}
</script>

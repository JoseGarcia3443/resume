<template lang="pug">
.menu-wrapper
  transition(
    mode="out-in"
    enter-active-class="animate__animated animate__fadeInRight"
    leave-active-class="animate__animated animate__fadeOutLeft")
    #main-menu(v-if="visible")
      .wrapper__content
        button(@click="$emit('toggle')" class="btn btn-close")
          i.fas.fa-times
        ul.menu__links
          li.menu__item.animate__animated.animate__fadeInRight(
            v-for='(link, index) in links',
            :key='index',
            @click='setTargetScroll(`#${link.name}`)',
            :style='`--animate-duration: 1.${index}s`'
          )
            span {{ $t(`navigation.${link.name}`) }}
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MainMenu',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
    'menu-links': () => import('@/components/aditionals/MenuLinks.vue')
  },
  data: () => ({
    links: [
      {
        index: 2,
        name: 'home',
      },
      {
        index: 4,
        name: 'profile',
      },
      {
        index: 6,
        name: 'projects',
      },
      {
        index: 8,
        name: 'experience',
      },
    ],
  }),
  methods: {
    ...mapActions(['setTarget']),
    setTargetScroll(target) {
      this.setTarget(target)
      this.$emit('toggle')
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  #main-menu {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.95);
    z-index: 12;
    @media (min-width: 768px) {
    	display: none;
    }
    .wrapper__content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .btn-close {
        position: absolute;
        top: 25px;
        right: 25px;
        i {
          color: var(--secondary);
          font-size: 2rem;
        }
      }
      ul.menu__links {
        li.menu__item {
          margin-bottom: 25px;
          &:last-child {
            margin-bottom: 0;
          }
          span {
            font-size: 2rem;
            display: block;
            text-align: center;
            letter-spacing: 3px;
          }
        }
      }
    }
  }
}
</style>

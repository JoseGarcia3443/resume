import { gsap } from 'gsap'
import { clamp } from 'lodash'

export default {
  data: () => ({
    scroll: null,
    element: null,
    timelineIn: null,
    timelineOut: null,
    elements: {},
    y: {
      current: 0,
      start: 0,
      end: 0
    }
  }),
  methods: {
    // eslint-disable-next-line new-cap
    show(animation = new gsap.timeline()) {
      return new Promise((resolve) => {
        animation.call(() => {
          resolve()
        })

        this.addEventListeners()
      })
    },
    // eslint-disable-next-line new-cap
    hide(animation = new gsap.timeline()) {
      return new Promise((resolve) => {
        this.removeEventListeners()

        animation.call(() => {
          resolve()
        })
      })
    },

    onMouseDown({ clientY }) {
      this.isMouseDown = true

      this.y.start = clientY
      this.y.current = this.scroll.scroll.instance.scroll.y
    },

    onMouseMove({ clientY }) {
      if (!this.isMouseDown) {
        return
      }

      this.y.end = clientY

      const distance = (this.y.start - this.y.end) * 2
      const { scroll } = this.scroll

      scroll.instance.delta.y = this.y.current + distance
      scroll.instance.delta.y = clamp(
        scroll.instance.delta.y,
        0,
        scroll.instance.limit
      )
      scroll.isScrolling = true
      scroll.checkScroll()
    },

    onMouseUp({ clientY }) {
      this.isMouseDown = false
    },

    addEventListeners() {
      if (this.scroll) {
        this.onMouseDownEvent = this.onMouseDown.bind(this)
        this.onMouseMoveEvent = this.onMouseMove.bind(this)
        this.onMouseUpEvent = this.onMouseUp.bind(this)

        window.addEventListener('mousedown', this.onMouseDownEvent)
        window.addEventListener('mousemove', this.onMouseMoveEvent)
        window.addEventListener('mouseup', this.onMouseUpEvent)
        window.addEventListener('resize', this.onResize)
      }
    },

    removeEventListeners() {
      if (this.scroll) {
        window.removeEventListener('mousedown', this.onMouseDownEvent)
        window.removeEventListener('mousemove', this.onMouseMoveEvent)
        window.removeEventListener('mouseup', this.onMouseUpEvent)
        window.removeEventListener('resize', this.onResize)
      }
    }
  }
}

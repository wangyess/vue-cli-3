<template>
  <div
    class="split-wrapper"
    ref="outer"
  >
    <div
      class="split split-div-left"
      :style="{width:couputedOffset}"
    ></div>
    <div
      class="middle-trigger"
      :style="{left:middleTrigger,width:`${triggerWidth}px`}"
      @mousedown="handleMousedown"
    ></div>
    <div
      class="split split-div-right"
      :style="{left:couputedOffset}"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offset: 0.4,
      controllMouse: false
    }
  },
  props: {
    triggerWidth: {
      type: Number,
      default: 8
    },
    min: {
      type: Number,
      default: 0.1
    },
    max: {
      type: Number,
      default: 0.9
    }
  },
  computed: {
    couputedOffset() {
      return `${this.offset * 100}%`
    },
    middleTrigger() {
      return `calc(${this.couputedOffset} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMousedown() {
      this.controllMouse = true
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
    },
    handleMousemove(event) {
      if (!this.controllMouse) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      let middleLft = (event.pageX - outerRect.left) / outerRect.width
      if (middleLft <= this.min) middleLft = this.min
      if (middleLft >= this.max) middleLft = this.max
      this.offset = middleLft
    },
    handleMouseup() {
      this.controllMouse = false
    }
  }
}
</script>

<style>
.split-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}
.split {
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.split-div-left {
  background: rgb(174, 231, 187);
  position: absolute;
  left: 0;
}
.split-div-right {
  background: rgb(179, 203, 235);
  position: absolute;
  right: 0;
}
.middle-trigger {
  height: 100%;
  background: rgb(250, 128, 128);
  position: absolute;
  cursor: pointer;
  z-index: 10;
}
</style>

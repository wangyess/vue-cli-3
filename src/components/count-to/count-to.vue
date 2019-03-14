<template>
  <div>
    <slot name="left"></slot>:<span
      ref="count"
      :id="eleId"
    ></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
export default {
  name: 'CountTo',
  data() {
    return {
      countup: {}
    }
  },
  computed: {
    eleId() {
      return `count-${this._uid}`
    }
  },
  props: {
    /**
     * @description 延迟
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后默认 几位
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 持续时间
     */
    duration: {
      type: Number,
      default: 2
    },
    /**
     * @description 动画效果
     */
    useEasing: {
      type: Boolean,
      default: true
    },
    /**
     * @description 使用分组 三个为一组
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 设置分组中间用什么隔开
     */
    separator: {
      type: String,
      default: ','
    },
    /**
     * @description 整数和小数 用什么隔开
     */
    decimal: {
      type: String,
      default: '.'
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.countup = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })

      setTimeout(() => {
        this.countup.start()
        this.overValue()
      }, this.delay)
    })
  },
  methods: {
    getNumberValue() {
      return this.$refs.count.innerText
    },
    overValue() {
      setTimeout(() => {
        this.$nextTick(() => {
          this.$emit('over_value', this.getNumberValue())
        })
      }, this.duration * 1000)
    }
  },
  watch: {
    endVal(newVal, oldVal) {
      this.countup.update(newVal)
      this.overValue()
      window.console.log(newVal, oldVal)
    }
  }
}
</script>

<style>
</style>

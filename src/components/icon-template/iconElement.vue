<template>
  <i
    :class="classs"
    :style="styless"
  ></i>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default:'24'
    },
    color:{
      type:String,
      default:'#fff'
    }
  },
  computed: {
    classs() {
      return [
        "iconfont",
        `${this.icon}`
      ]
    },
    styless() {
      return {
        color: `${this.color}`,
        fontSize:`${this.size}px`
      }
    },
  }
}
</script>

<style>
</style>

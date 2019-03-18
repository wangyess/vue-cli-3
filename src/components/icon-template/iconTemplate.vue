<template>
  <div>
    <br>
    <p>封装icon组件</p>
    <icon-font icon="icon-d-zhongyuzhuandayu" size="32" color='black'></icon-font>
  </div>
</template>

<script>
import IconFont from './iconElement.vue'
export default {
  name: 'icon-element',
  components:{
    IconFont
  }
}
</script>

<style>
</style>

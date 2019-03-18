<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in list"
        :key="`list-${index}`"
      >
        <span v-if="!renderFunc">{{item.name}}</span>
        <renderDom v-else :name="item.name" :renderDom="renderFunc"></renderDom>
      </li>
    </ul>
  </div>
</template>

<script>
import renderDom from './render-dom.js'
export default {
  components: {
    renderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    renderFunc: {
      type: Function,
      default: () => { }
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
</style>

<template>
  <div>
    <h3>render函数 -- JSX -- 插槽</h3>
    <List
      :list="list"
      :renderFunc="renderFunc"
    ></List>
  </div>
</template>

<script>
import List from '@/components/renderJsx/list.vue'
export default {
  name: 'Render',
  components: {
    List
  },
  data() {
    return {
      list: [
        { name: 'nikki' },
        { name: 'jack' }
      ]
    }
  },
  methods: {
    renderFunc(h, name) {
      return h('i', {
        style: {
          color: 'red'
        }
      }, name)
    }
  }
}
</script>

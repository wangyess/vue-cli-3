<template>
  <div>
    <div>
      <router-link to='/user'>user</router-link> |
      <router-link to='/product/wangye'>product</router-link> |
      <button @click="hanldeClick">跳转到user</button> |
      <button @click="handleClickBtn">用bus给user组件传值</button> |
      <button @click="handleClickStore">练习 Vuex store</button> |
      <button @click="handleClickPost">post mock</button>
    </div>
    <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      age: '23'
    }
  },
  mounted() {
  },
  methods: {
    hanldeClick() {
      this.$router.push({ name: 'Product', params: { name: 'wangye' } })
    },
    handleClickBtn() {
      this.$bus.$emit('showAge', this.age)
    },
    handleClickStore() {
      this.$router.push('/detail')
    },
    handleClickPost() {
      this.$router.push('/mock')
    }
  }
}
</script>

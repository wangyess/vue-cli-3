<template>
  <div>
    <div>
      <router-link to='/user'>userAdmin</router-link> |
      <router-link to='/product/wangye'>product</router-link> |
      <button @click="hanldeClick">跳转到user</button> |
      <button @click="handleClickBtn">用bus给user组件传值</button> |
      <button @click="handleClickStore">练习 Vuex store</button> |
      <button @click="handleClickPost">post mock</button>
      <br><br>
      <button @click="handleClickCount">countUp-让数字动起来</button> |
      <button @click="handleClickElement">开发一个自由拖动的组件</button> |
      <button @click="handleClickRender">render函数 jsx 插槽</button> |
      <button @click="handleClickIcon">封装icon图标组件</button>
    </div>
    <hr>
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
    },
    handleClickCount() {
      this.$router.push('/count-to')
    },
    handleClickElement() {
      this.$router.push('./element')
    },
    handleClickRender() {
      this.$router.push('./render')
    },
    handleClickIcon(){
       this.$router.push('./icon-element')
    }
  }
}
</script>

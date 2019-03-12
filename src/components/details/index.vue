<template>
  <div>
    <p> this is 测试 store 的 page </p>
    <br>
    <input
      type="text"
      v-model="testValue"
    >
    <br>
    <p>{{testValue}}</p>
    <br>
    <button @click="getState">get root state(testValue)</button> &nbsp;&nbsp;
    <button @click="changeState">change root state(testValue)</button>&nbsp;&nbsp;
    <button @click="getStates">get state(username)</button>&nbsp;&nbsp;
    <br><br>
    <button @click="addAColumn">add column</button>&nbsp;&nbsp;
    <p>{{age}}</p>
    <br>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Detail',
  data() {
    return {
    }
  },
  computed: {
    ...mapState('user',{
      username: state => state.username,
      age: state => state.age
    }),
    testValue: {
      get() {
        return this.$store.state.testValue
      },
      set(v) {
        this.changeTestVlaue(v)
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeTestVlaue'
    ]),
    getState() {
      window.console.log(this.$store.state.testValue)
    },
    getStates() {
      window.console.log(this.username)
    },
    changeState() {
      this.changeTestVlaue('拒北城')
      // this.$store.commit('changeTestVlaue', "满城尽悬北凉刀")
    },
    addAColumn(){
      this.$store.commit('user/addColumn')
    }
  }
}
</script>

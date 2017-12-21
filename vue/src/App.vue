<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/table">Table</router-link>
    <router-link to="/banner">轮播图</router-link>
    <router-link to="/nav">导航条</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

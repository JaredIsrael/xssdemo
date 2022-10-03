<template>
   <img alt="Vue logo" src="./assets/buck.png">
   <h1>Give me your personal data I promise I will store it safely also I promise I am sanitizing user input properly and this site is not vulnerable to cross site scripting :3</h1>
  <Form type="name"/>
</template>

<script>
import Form from './components/Form.vue';
export default {
  name: 'App',
  components: {
    Form
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

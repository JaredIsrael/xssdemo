<template>
    <div class="form">
      <input class="text" v-model="input">
      <button @click="submitForm">Submit</button>
      <div v-show="shouldRender">What you submitted, rendered as trusted HTML in order to bypass Vue's remote code execution security measures put in place to avoid cross site scripting:
        <div v-html="submittedText"></div>
      </div>
    </div>
  </template>
  
  <script>
  import submit from '@/services/submit';
  export default {
    name: 'FormType',
    props: {
      type: String
    },
    data () {
      return {
        input:"",
        submittedText:"",
        shouldRender:false
      }
    },
    methods: {
      submitForm() {
        submit.submitForm(this.input)
        this.submittedText=this.input;
        this.shouldRender=true;
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  
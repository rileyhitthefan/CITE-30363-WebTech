<template>
  <h1>{{ message }}</h1>
  <hr>
  <h1>{{ number }}</h1>
  <hr>
  <h1>{{ double(number) }}</h1>
  <hr>
  <h1>{{ 
    double(number) > 200 ? 'Greater than 200' : 'Less than 200'  
  }}</h1>
  <hr>
  <h1 v-text="message"></h1>
  <hr>
  <h1 v-html="rawHtml"></h1>
</template>

<script setup>
  let message = 'hello vue'
  let number = 50

  function double(num){
    return num * 2
  }

  let rawHtml = '<span style="color: red">This should be red.</span>'
  
</script>

<style lang="scss" scoped>

</style>
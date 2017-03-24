<template>
  <div class="container-box">
    <div class="readme">
      <span v-text="msg"></span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '前言'
      }
    }
  }
</script>

<style scoped>
  .readme{
    font-size: 24px;
  }
</style>

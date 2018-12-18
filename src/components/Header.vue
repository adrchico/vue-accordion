<template>
  <div>
    <div id="container" class="container" v-on:click="toggle(index)" v-for="(item, index) in contents" :key="item.title">
      <h1>{{item.title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vue-header',
  props: {
    contents: {
      type: Array,
      default: function () {
        return [
          {
            title: 'My Accordion',
            description: ''
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
   @import '@/style/header-style.scss'
</style>

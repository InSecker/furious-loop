<template>
  <router-link :to="`${path}`"><div role="button">{{title}}</div></router-link>
</template>

<script>
export default {
  name: 'Button',
  props: ['path', 'title']
}
</script>

<style scoped>

  div {
    background: #2C3950;
    border-radius: 10px;
    color: white;
    font-size: 1em;
    padding: 10px;
  }
</style>
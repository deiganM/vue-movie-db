<template>
  <header>
    <h1>{{ newTitle }}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  },
  data() {
    return {
      name: 'Deigan',
    }
  },
  computed: {
    newTitle() {
      if (this.title === 'hello') {
        return this.title
      } else {
        return this.name
      }
    },
  },
}
</script>

<style scoped>
header {
  background-color: #111;
  padding: 20px;
  color: white;
}

h1 {
  margin: 0;
}
</style>

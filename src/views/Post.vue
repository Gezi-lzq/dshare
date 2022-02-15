<template>
  <v-app id="inspire">
      <Narbar/>
    <v-main class="grey lighten-3">
      <Editor/>
    </v-main>
  </v-app>
</template>

<script>
import Editor from '../components/Editor.vue'
import Narbar from '../components/Narbar.vue'
export default {
  components: { Narbar, Editor },
  
}
</script>

<style>

</style>
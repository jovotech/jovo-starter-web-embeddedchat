<template>
  <div id="app" class="w-screen h-screen p-16">
    <embedded-chat />
  </div>
</template>

<script lang="ts">
import EmbeddedChat from '@/components/EmbeddedChat.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { EmbeddedChat },
})
export default class App extends Vue {}
</script>

<style>
@import 'assets/css/theme.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

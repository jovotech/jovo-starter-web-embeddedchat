<template>
  <div id="app" class="w-screen h-screen p-16 bg-gray-300">
    <div id="intro" class="text-center text-gray-800">
      <h1 class="text-lg">Embedded Chat</h1>
      <p>This <a href="https://github.com/jovotech/jovo-starter-web-embeddedchat" target="_blank">open source</a> chat is fully customizable and can be embedded into any web app.</p>
    </div>
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

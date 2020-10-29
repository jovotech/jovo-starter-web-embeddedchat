<template>
  <div id="app" class="w-screen h-screen p-4 pt-2 pb-2 sm:p-8 sm-24 lg:p-32 bg-gray-300">
    <div class="w-full h-full flex flex-col">
      <div id="intro" class="text-center text-gray-800 mb-1 sm:mb-10">
      <h1 class="text-base sm:text-xl mb-1 sm:mb-5">Embedded Chat</h1>
      <p class="text-sm sm:text-base ">This <a class="underline" href="https://github.com/jovotech/jovo-starter-web-embeddedchat" target="_blank">open source</a> chat is fully customizable and can be embedded into any web app.</p>
    </div>
    <embedded-chat />
    </div>
  </div>
</template>

<script lang="ts">
import EmbeddedChat from '@/components/EmbeddedChat.vue';
import {
  Action,
  ActionType,
  ClientEvent,
} from 'jovo-client-web-vue';
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

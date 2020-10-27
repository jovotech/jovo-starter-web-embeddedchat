<template>
  <div id="app" class="w-screen h-screen p-20 bg-gray-300">
    <div id="intro" class="text-center text-gray-800">
      <h1 class="text-lg">Embedded Chat</h1>
      <p>This <a href="https://github.com/jovotech/jovo-starter-web-embeddedchat" target="_blank">open source</a> chat is fully customizable and can be embedded into any web app.</p>
    </div>
    <embedded-chat />
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
export default class App extends Vue {
   mounted() {
    this.$client.on(ClientEvent.Action, this.onAction);
  }

  private onAction(action: Action) {
    if (action.type === ActionType.Custom) {
      switch (action.command) {
        case 'redirect': {
          setTimeout(()=>{
            window.open(action.value);
          },800);
          break;
        }
        default:
      }
    }
  }
}
</script>

<style>
@import 'assets/css/theme.css';

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

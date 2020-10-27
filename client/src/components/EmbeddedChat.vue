<template>
  <div class="flex flex-col border relative h-full overflow-y-hidden">
    <embedded-chat-body class="flex-1 overflow-y-scroll" />
    <embedded-chat-bottom class="flex-shrink-0 mt-auto" />
  </div>
</template>

<script lang="ts">
import EmbeddedChatBody from '@/components/EmbeddedChatBody.vue';
import EmbeddedChatBottom from '@/components/EmbeddedChatBottom.vue';
import { RequestType, ClientEvent, ActionType, Action } from 'jovo-client-web-vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'embedded-chat',
  components: { EmbeddedChatBody, EmbeddedChatBottom },
})
export default class EmbeddedChat extends Vue {
  async mounted() {
    await this.$client.initialize();
    await this.$client.createRequest({ type: RequestType.Launch }).send();
    this.$client.on(ClientEvent.Action, this.onAction);
  }

  private onAction(action: Action) {
    if (action.type === ActionType.Custom) {
      switch (action.command) {
        case 'redirect': {
          setTimeout(() => {
            window.open(action.value);
          }, 800);
          break;
        }
        default:
      }
    }
  }
}
</script>

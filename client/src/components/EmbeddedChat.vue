<template>
  <div class="flex flex-col border relative overflow-y-hidden">
    <embedded-chat-body class="flex-1" />
    <embedded-chat-input class="flex-shrink-0 mt-auto rounded-full" />
  </div>
</template>

<script lang="ts">
import EmbeddedChatBody from '@/components/EmbeddedChatBody.vue';
import EmbeddedChatInput from '@/components/EmbeddedChatInput.vue';
import { RequestType, ClientEvent, ActionType, Action } from 'jovo-client-web-vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'embedded-chat',
  components: { EmbeddedChatInput, EmbeddedChatBody },
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

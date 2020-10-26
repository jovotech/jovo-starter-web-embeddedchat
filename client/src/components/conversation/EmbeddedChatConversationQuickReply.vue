<template>
  <div
    class="inline bg-white bg-opacity-0 hover:bg-opacity-50 rounded-full text-md text-blue-600 border border-blue-600 cursor-pointer p-3 whitespace-no-wrap"
    @click="sendQuickReply"
  >
    {{ quickReply }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { RequestType } from 'jovo-client-web-vue';

@Component({
  name: 'embedded-chat-conversation-quick-reply',
})
export default class EmbeddedChatConversationQuickReply extends Vue {
  @Prop({ required: true, type: String })
  quickReply!: string;

  async sendQuickReply() {
    return this.$client
      .createRequest({ type: RequestType.Text, body: { text: this.quickReply } })
      .send();
  }
}
</script>

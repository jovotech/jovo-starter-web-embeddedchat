<template>
  <div class="px-8 py-6 bg-white flex items-center rounded-full">
    <input
      ref="input"
      v-model="inputValue"
      class="flex-grow focus:outline-none text-md"
      placeholder="Type something..."
      @keypress.enter.exact="sendText"
      autofocus
    />
    <send-icon
      class="cursor-pointer"
      size="20"
      stroke-width="1"
      @click="sendText"
    />
  </div>
</template>

<script lang="ts">
import { RequestType, WebRequest, ClientEvent } from 'jovo-client-web-vue';
import { Component, Vue } from 'vue-property-decorator';
import SendIcon from 'vue-feather-icons/icons/SendIcon';

@Component({
  name: 'embedded-chat-bottom',
  components: {
    SendIcon,
  },
})
export default class EmbeddedChatBottom extends Vue {
  inputValue = '';

  mounted() {
    this.$client.on(ClientEvent.Request, this.onRequest);
  }

  beforeDestroy() {
    this.$client.off(ClientEvent.Request, this.onRequest);
  }

  async sendText() {
    if (!this.inputValue) return;
    const text = this.inputValue;
    this.inputValue = '';
    return this.$client.createRequest({ type: RequestType.Text, body: { text } }).send();
  }
  
  private onRequest(req: WebRequest) {
    (this.$refs.input as HTMLElement).focus();
  }
}
</script>

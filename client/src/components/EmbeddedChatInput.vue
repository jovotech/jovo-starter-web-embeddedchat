<template>
  <div class="p-6 bg-white flex items-center">
    <input
      v-model="inputValue"
      class="flex-grow focus:outline-none text-md"
      placeholder="Type something and press Enter to send..."
      @keypress.enter.exact="sendText"
      autofocus
    />
  </div>
</template>

<script lang="ts">
import { RequestType } from 'jovo-client-web-vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'embedded-chat-input',
})
export default class EmbeddedChatInput extends Vue {
  inputValue = '';

  async sendText() {
    if (!this.inputValue) return;
    const text = this.inputValue;
    this.inputValue = '';
    return this.$client.createRequest({ type: RequestType.Text, body: { text } }).send();
  }
}
</script>

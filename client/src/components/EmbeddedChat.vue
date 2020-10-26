<template>
  <div class="flex flex-col border relative max-h-full h-full">
    <embedded-chat-body class="flex-grow" />
    <embedded-chat-input class="mt-auto rounded-full" />
  </div>
</template>

<script lang="ts">
import EmbeddedChatBody from '@/components/EmbeddedChatBody.vue';
import EmbeddedChatInput from '@/components/EmbeddedChatInput.vue';
import RequestType from 'jovo-client-web-vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'embedded-chat',
  components: { EmbeddedChatInput, EmbeddedChatBody },
})
export default class EmbeddedChat extends Vue {
  async mounted() {
    await this.$client.createRequest({ type: RequestType.Launch }).send();
  }
}
</script>

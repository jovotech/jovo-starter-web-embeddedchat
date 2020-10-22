<template>
  <div class="flex flex-col border rounded-xl relative max-h-full">
    <div
      v-if="!$client.isInitialized"
      class="absolute w-full h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl"
    >
      <button
        class="bg-primary w-24 h-24 flex items-center justify-center rounded-full text-white focus:outline-none"
        @click="initialize"
      >
        <play-icon />
      </button>
    </div>

    <embedded-chat-header class="rounded-t-xl border-b" />
    <embedded-chat-body />
    <embedded-chat-footer class="rounded-b-xl border-t" />
  </div>
</template>

<script lang="ts">
import EmbeddedChatBody from '@/components/EmbeddedChatBody.vue';
import EmbeddedChatFooter from '@/components/EmbeddedChatFooter.vue';
import EmbeddedChatHeader from '@/components/EmbeddedChatHeader.vue';
import { Component, Vue } from 'vue-property-decorator';
import PlayIcon from 'vue-feather-icons/icons/PlayIcon';
import { RequestType } from 'jovo-client-web-vue';

@Component({
  name: 'embedded-chat',
  components: { EmbeddedChatFooter, EmbeddedChatBody, EmbeddedChatHeader, PlayIcon },
})
export default class EmbeddedChat extends Vue {
  async initialize() {
    await this.$client.initialize();
    await this.$client.createRequest({ type: RequestType.Launch }).send();
  }
}
</script>

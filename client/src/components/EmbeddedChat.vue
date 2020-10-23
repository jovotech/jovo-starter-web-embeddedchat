<template>
  <div class="flex flex-col border rounded-xl relative max-h-full h-full">
    <embedded-chat-body class="flex-grow rounded-t-xl" />
    <embedded-chat-footer class="mt-auto rounded-b-xl border-t" />
  </div>
</template>

<script lang="ts">
import EmbeddedChatBody from '@/components/EmbeddedChatBody.vue';
import EmbeddedChatFooter from '@/components/EmbeddedChatFooter.vue';
import PlayIcon from 'vue-feather-icons/icons/PlayIcon';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'embedded-chat',
  components: { EmbeddedChatFooter, EmbeddedChatBody, PlayIcon },
})
export default class EmbeddedChat extends Vue {}
</script>

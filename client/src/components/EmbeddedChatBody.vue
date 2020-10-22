<template>
  <div class="flex flex-col bg-chat min-h-chat">
    <embedded-chat-conversation />
  </div>
</template>

<script lang="ts">
import EmbeddedChatConversation from '@/components/conversation/EmbeddedChatConversation.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'embedded-chat-body',
  components: { EmbeddedChatConversation },
})
export default class EmbeddedChatBody extends Vue {}
</script>

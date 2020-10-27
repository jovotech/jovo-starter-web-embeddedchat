<template>
  <div
    class="max-w-3/4 md:max-w-1/2 py-2 px-4 inline text-md"
    :class="[
      isRequest
        ? 'bg-primary self-end text-right text-white rounded-t-3xl rounded-bl-3xl'
        : 'bg-white self-start text-gray-800 rounded-b-3xl rounded-tr-3xl',
    ]"
  >
    <p class="whitespace-pre-wrap p-3" v-html="part.value"></p>
  </div>
</template>

<script lang="ts">
import { ConversationPart } from '@/types';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  name: 'embedded-chat-conversation-part',
})
export default class EmbeddedChatConversationPart extends Vue {
  @Prop({ required: true, type: Object })
  part!: ConversationPart;

  get isRequest(): boolean {
    return this.part.type === 'request';
  }
}
</script>

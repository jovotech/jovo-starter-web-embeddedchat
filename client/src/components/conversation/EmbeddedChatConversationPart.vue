<template>
  <div
    class="max-w-half py-2 px-4 inline text-md"
    :class="[
      isRequest
        ? 'bg-primary self-end text-right text-white rounded-t-full rounded-bl-full'
        : 'bg-white self-start text-gray-800 rounded-b-full rounded-tr-full',
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

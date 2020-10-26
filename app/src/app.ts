import { App } from 'jovo-framework';
import { WebPlatform } from 'jovo-platform-web';
import { NlpjsNlu } from 'jovo-nlu-nlpjs';
import { FileDb } from 'jovo-db-filedb';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

const webPlatform = new WebPlatform();
webPlatform.use(
  new NlpjsNlu(),
);

app.use(webPlatform, new FileDb());



// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({

  Unhandled() {
    this.ask(
      `The content of this conversation is fully customizable. ` +
      `<a href="https://www.jovo.tech/docs/routing" target="_blank">Our docs</a> show you how to update the app logic. ` +
      `Do you want me to take you there?`
    ).followUpState('TakeMeToTheDocs');
    this.$webApp?.showQuickReplies([
      'Yes',
      'No'
    ]);
  },

  TakeMeToTheDocs: {
    YesIntent() {
      this.$webApp?.addActions([
        {
          type: 'CUSTOM' as any,
          command: 'TakeMeToTheDocs',
        },
      ]);
      this.tell('Great!');
    },

    Unhandled() {
      this.removeState();
      this.tell('Alright!');
    }
  }

});

export { app };

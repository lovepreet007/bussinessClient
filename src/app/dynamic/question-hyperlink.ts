import { QuestionBase } from './question-base';

export class HyperlinkQuestion extends QuestionBase<string> {
  controlType = 'hyperlink';
  type: 'button';

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

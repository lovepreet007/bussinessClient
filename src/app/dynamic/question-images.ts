import { QuestionBase } from './question-base';

export class ImageQuestion extends QuestionBase<string> {
  controlType = 'images';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}

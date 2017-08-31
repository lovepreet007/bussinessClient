import { Injectable } from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { ImageQuestion } from './question-images';
import { ButtonQuestion } from './question-button';
import { HyperlinkQuestion } from './question-hyperlink';


@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getResetPasswordPage() {

    let questions: QuestionBase<any>[] = [

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     { key: 'solid', value: 'Solid' },
      //     { key: 'great', value: 'Great' },
      //     { key: 'good', value: 'Good' },
      //     { key: 'unproven', value: 'Unproven' }
      //   ],
      //   order: 3
      // }),



      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'oldPassword',
        label: 'Old Password',
        value: '',
        required: true,
        order: 2
      }),


      new TextboxQuestion({
        key: 'newPassword',
        label: 'New Password',
        value: '',
        required: true,
        order: 3
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
  getFoodPage() {

    let questions: QuestionBase<any>[] = [

      // new DropdownQuestion({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     { key: 'solid', value: 'Solid' },
      //     { key: 'great', value: 'Great' },
      //     { key: 'good', value: 'Good' },
      //     { key: 'unproven', value: 'Unproven' }
      //   ],
      //   order: 3
      // }),



      new ImageQuestion({
        key: 'foodimage',
        type: 'string',
        required: false,
        order: 1,
        src: '/assets/images/VegetableBasket.jpg',
        dataType: 'image'
      }),

      // new TextboxQuestion({
      //   key: 'oldPassword',
      //   label: 'Old Password',
      //   value: '',
      //   required: true,
      //   order: 2,
      //   dataType: 'string'
      // }),

      new HyperlinkQuestion({
        order: 3,
        dataType: 'string',
        value:'Menu'
      }),
 new HyperlinkQuestion({
        order: 4,
        dataType: 'string',
        value:'Overview'
      }),

      new ButtonQuestion({
        order: 4,
        dataType: 'string',
        value:'Click'
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}

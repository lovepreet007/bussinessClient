export class QuestionBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  src: string;
  dataType: string;

  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string,
    src?: string,
    dataType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.src = options.src;
    this.dataType = options.dataType||'';
  }
}

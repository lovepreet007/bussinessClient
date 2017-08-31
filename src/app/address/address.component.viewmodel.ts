export class Address {
  constructor(
    public name: string,
    public phoneNumber: string,
    public pinCode: string,
    public street: string,
    public city: string,
    public state: string,
    public landmark: string,
    public verification: string
  ) { }
}

export class OTPResponse {
  status: boolean;
  otp: string;
  otPtime: Date;
}

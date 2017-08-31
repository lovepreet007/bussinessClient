export interface LoginDetails {
  username: string;
  password: string;
  tempPassword: string;
}
export interface ResponseResult {
  status: string;
  message: string;
}

export interface ResetPassword {
  emailAddressVm: string;
  newPasswordVm: string;
  oldPasswordVm: string;
}

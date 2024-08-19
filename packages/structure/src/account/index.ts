interface AccountOptions {
  id: string;
  username: string;
  email: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt: Date;
  trust: number;
}

export default class Account {
  public id: string;
  public username: string;
  public email: string;
  public lastLogin?: Date;
  public createdAt: Date;
  public updatedAt?: Date;
  public punishment: [];
  public trust: number;

  constructor(options: AccountOptions) {
    this.id = options.id;
    this.username = options.username;
    this.email = options.email;
    this.lastLogin = options.lastLogin;
    this.createdAt = options.createdAt;
    this.updatedAt = options.updatedAt;

    /*
    ! varsa cezası kendi classından gelecek.
    */

    this.punishment = [];

    /*
    ! trust puanı kendi classından gelecek.
    */

    this.trust = options.trust || 50;
  }
}

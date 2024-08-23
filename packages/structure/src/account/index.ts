import type { IAccountOptions, IAccount, TAccountType, IPunishment } from '../../typings';

export default class Account implements IAccount {
  id: string;
  type: TAccountType;
  username: string;
  email: string;
  lastLogin: Date;
  createdAt: Date;
  updatedAt?: Date;
  punishment: IPunishment[] | [];
  trust: number;

  constructor(options: IAccountOptions) {
    this.id = options.id;
    this.type = options.type;
    this.username = options.username;
    this.email = options.email;
    this.lastLogin = options.lastLogin;
    this.createdAt = options.createdAt;
    this.updatedAt = options.updatedAt;
    this.punishment = options.punishment || [];
    this.trust = options.trust;

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

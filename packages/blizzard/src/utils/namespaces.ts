interface INamespace {
  static: string;
  dynamic: string;
  profile: string;
}

interface ILocale {
  get: string;
}

interface IOrigin {
  self: string;
  namespace: INamespace;
  locale: ILocale;
}

export class Namespace implements INamespace {
  #region;
  constructor(region: string) {
    this.#region = region;
  }
  get static() {
    return `static-${this.#region}`;
  }

  get dynamic() {
    return `dynamic-${this.#region}`;
  }

  get profile() {
    return `profile-${this.#region}`;
  }
}

interface IOriginOptions {
  region: string;
  locale: string;
}

export class Locale implements ILocale {
  #locale;
  constructor(locale: string) {
    this.#locale = locale;
  }

  get get() {
    return this.#locale;
  }
}

export class Origin implements IOrigin {
  #region;
  namespace: INamespace;
  constructor({ region, locale }: IOriginOptions) {
    this.#region = region;
    this.namespace = new Namespace(region);
    this.locale = new Locale(locale);
  }
  locale: ILocale;

  get self() {
    return this.#hosts(this.#region);
  }

  #hosts(region: string) {
    if (region === 'cn') {
      return 'gateway.battlenet.com.cn';
    } else {
      return `${region}.api.blizzard.com`;
    }
  }
}

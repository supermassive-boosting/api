import type {
  IBoostDungeonOptions,
  IDetailContent,
  TInstance,
  TArmorType,
  TDifficulty,
  TKeystoneLevel,
} from '../../../typings';

import Boost from '../index.js';
import Detail from './detail.js';

export default class Dungeon extends Boost {
  instance?: TInstance | undefined;
  armorType?: TArmorType | undefined;
  difficulty?: TDifficulty | undefined;
  keystoneLevel: TKeystoneLevel;
  details: Detail[] = [];

  constructor(options: IBoostDungeonOptions) {
    super(options);
    this.armorType = options?.armorType || undefined;
    this.instance = options?.instance || undefined;
    this.keystoneLevel = options?.keystoneLevel;
    this.difficulty = options?.difficulty;
    this.details = [];
  }

  /* 
  ! hesaplama pot hesaplama işlemleri - deduction kontrolü
  ! yapılmış dungeon listesi ve başlama/bitiş süreleri
  */

  addDetail(content: IDetailContent): void {
    this.details.push(new Detail(content));
  }

  toJSON(): string {
    return JSON.stringify({
      id: this.id,
      version: this.version,
      type: this.type,
      client: this.client,
      pot: this.pot,
      count: this.count,
      discount: this.discount,
      roster: this.roster,
      ticket: this.ticket,
      modLog: this.modLog,
      createdAt: this.createdAt,
      startedAt: this.startedAt,
      updatedAt: this.updatedAt,
      completedAt: this.completedAt,
      armorType: this.armorType,
      instance: this.instance,
      difficulty: this.difficulty,
      keystoneLevel: this.keystoneLevel,
    });
  }
}

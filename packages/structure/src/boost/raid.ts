import type { IBoostRaidOptions, ILeader, TDifficulty, TArmorType, TInstance } from '../../typings';
import Boost from './index';

export default class Raid extends Boost {
  instance?: TInstance | undefined;
  armorType?: TArmorType | undefined;
  difficulty?: TDifficulty | undefined;
  leader?: ILeader | undefined;

  constructor(options: IBoostRaidOptions) {
    super(options);
    this.armorType = options?.armorType || undefined;
    this.instance = options?.instance || undefined;
    this.difficulty = options?.difficulty || undefined;
    this.leader = options?.leader || undefined;
  }

  /* 
  ! hesaplama pot hesaplama işlemleri - deduction kontrolü
  */

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
      leader: this.leader,
    });
  }
}

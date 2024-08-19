import type { IDetail, IDetailContent } from '../../../typings';

export default class Detail implements IDetail {
  createdAt: number;
  startTime: number;
  endTime: number;
  keystoneLevel: number;
  inTime: boolean;
  rating: number;

  constructor(content: IDetailContent) {
    this.createdAt = content?.createdAt;
    this.startTime = content?.startTime;
    this.endTime = content?.endTime;
    this.keystoneLevel = content?.keystoneLevel;
    this.inTime = content?.inTime;
    /*
    ! players array'i eklenecek.
    */
    this.rating = content?.rating;
  }

  get isInTime(): boolean {
    return this.inTime;
  }

  /*
  ! başlama ve bitiş sürelerini çıkartıp, dungeon'ın sürdüğü süreyi gösterecek bir fonksiyon.
  */
}

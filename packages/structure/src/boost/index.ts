import type { IClient, IBooster, IBoost, IBoostOptions, IModlog, ITicket, TBoostType, TVersion } from '../../typings';

export default class Boost implements IBoost {
  id: number;
  version: TVersion;
  type: TBoostType;
  client: IClient[];
  pot: number;
  count: number;
  discount: number;
  roster?: IBooster[];
  ticket?: ITicket[];
  modLog?: IModlog[];
  createdAt: number;
  startedAt?: number | null;
  updatedAt?: number | null;
  completedAt?: number | null;

  constructor({
    id,
    type,
    client = [],
    pot,
    version = 'retail',
    createdAt,
    count = 1,
    discount = 1,
    roster = [],
    ticket = [],
    modLog = [],
    startedAt = null,
    updatedAt = null,
    completedAt = null,
  }: IBoostOptions) {
    this.id = id;
    this.version = version;
    this.type = type;
    this.client = Array.isArray(client) ? client : [client];
    this.pot = pot;
    this.count = count;
    this.discount = discount;
    this.roster = Array.isArray(roster) ? roster : [roster];
    this.ticket = ticket;
    this.modLog = modLog;
    this.createdAt = createdAt;
    this.startedAt = startedAt;
    this.updatedAt = updatedAt;
    this.completedAt = completedAt;
  }

  get isCompleted(): boolean {
    return !!this.completedAt;
  }

  addClient(client: IClient | IClient[]): void {
    if (Array.isArray(client)) {
      this.client.push(...client);
    } else {
      this.client.push(client);
    }
  }

  /*
  ! removeClient
  */

  getClient(clientId: number): IClient | undefined {
    return this.client.find(client => client.id === clientId);
  }

  addRoster(booster: IBooster | IBooster[]): void {
    if (Array.isArray(booster)) {
      this.roster?.push(...booster);
    } else {
      this.roster?.push(booster);
    }
  }

  /*
  ! removeRoster
  */

  getRoster(boosterId: number): IBooster | undefined {
    return this.roster?.find(booster => booster.id === boosterId);
  }

  addTicket(ticket: ITicket): void {
    this.ticket?.push(ticket);
  }

  getTicket(ticketId: number): ITicket | undefined {
    return this.ticket?.find(ticket => ticket.id === ticketId);
  }
}

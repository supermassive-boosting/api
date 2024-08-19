type _NumbersFrom0ToN<Nr extends number> = Nr extends Nr
  ? number extends Nr
    ? number
    : Nr extends 0
      ? never
      : _NumbersFrom0ToNRec<Nr, [], 0>
  : never;

type _NumbersFrom0ToNRec<
  Nr extends number,
  Counter extends any[],
  Accumulator extends number,
> = Counter['length'] extends Nr
  ? Accumulator
  : _NumbersFrom0ToNRec<Nr, [any, ...Counter], Accumulator | Counter['length']>;

type TRange<Start extends number, End extends number> = Exclude<_NumbersFrom0ToN<End>, _NumbersFrom0ToN<Start>>;

/**
 * Represents the version of the game where the boost takes place.
 *
 * @typedef {'retail' | 'classic' | 'season-of-discovery' | 'hardcore' | 'cataclysm'} TVersion
 *
 * @example
 * const version: TVersion = 'retail';
 */
export type TVersion = 'retail' | 'classic' | 'season-of-discovery' | 'hardcore' | 'cataclysm';

/**
 * Represents the type of boost provided.
 *
 * @typedef {'raid' | 'dungeon' | 'battleground' | 'pvp' | 'achievement' | 'mount' | 'leveling'} TBoostType
 *
 * @example
 * const boostType: TBoostType = 'raid';
 */
export type TBoostType = 'raid' | 'dungeon' | 'battleground' | 'pvp' | 'achievement' | 'mount' | 'leveling';

/**
 * Represents the instances available in the game.
 *
 * @typedef {'nerubar-place'|'city-of-echoes'|'city-of-threads'|'the-stonevault'|'the-downbreaker'|'mist-of-tirna-scithe'|'the-necritic-wake'|'siege-of-boralus'|'grim-batol'|'battleground'|'pvp'} TInstance
 *
 * @example
 * const instance: TInstance = 'the-necritic-wake';
 */
export type TInstance =
  | 'nerubar-place'
  | 'city-of-echoes'
  | 'city-of-threads'
  | 'the-stonevault'
  | 'the-downbreaker'
  | 'mist-of-tirna-scithe'
  | 'the-necritic-wake'
  | 'siege-of-boralus'
  | 'grim-batol'
  | 'battleground'
  | 'pvp';

/**
 * Represents the armor types available in the game.
 *
 * @typedef {'leather'|'cloth'|'mail'|'plate'|'not-specified'} TArmorType
 *
 * @example
 * const armorType: TArmorType = 'leather';
 */
export type TArmorType = 'leather' | 'cloth' | 'mail' | 'plate' | 'not-specified';

/**
 * Represents the difficulty levels available in the game.
 *
 * @typedef {'mythic-plus'|'mythic'|'heroic'|'normal'|'lfr'} TDifficulty
 *
 * @example
 * const difficulty: TDifficulty = 'mythic-plus';
 */
export type TDifficulty = 'mythic-plus' | 'mythic' | 'heroic' | 'normal' | 'lfr';

/**
 * Represents the priority level of a ticket.
 *
 * @typedef {'low' | 'normal' | 'high'} TPriority
 *
 * @example
 * const priority: TPriority = 'high';
 */
type TPriority = 'low' | 'normal' | 'high';

/**
 * Represents the status of a ticket.
 *
 * @typedef {'open' | 'closed'} TStatus
 *
 * @example
 * const status: TStatus = 'open';
 */
type TStatus = 'open' | 'closed';

type TKeystoneLevel = TRange<1, 41>;

export interface ISupermassiveResponse {
  status: boolean;
  payload: string | object;
}

export interface IBoostLimit {
  MAX_RAID_PLAYER_SIZE: 30;
  MAX_RAID_CLIENTS: 16;
  MAX_DUNGEON_PLAYER_SIZE: 5;
  MAX_DUNGEON_CLIENTS: 1;
}

export interface IQueueType {
  SOLO: 'solo';
  DUO: 'duo';
  TEAM: 'team';
}

export interface IIssueType {}

interface IRaid {
  NERUBAR_PLACE: 'nerubar-place';
}

interface IDifficulty {
  MYTHIC_PLUS: 'mythic-plus';
  MYTHIC: 'mythic';
  HEROIC: 'heroic';
  NORMAL: 'normal';
  LFR: 'lfr';
}

export interface IArmorType {
  LEATHER: 'leather';
  CLOTH: 'cloth';
  MAIL: 'mail';
  PLATE: 'plate';
  NOT_SPECIFIED: 'not-specified';
}

interface IDungeon {
  CITY_OF_ECHOES: 'city-of-echoes';
  CITY_OF_THREADS: 'city-of-threads';
  THE_STONEVAULT: 'the-stonevault';
  THE_DOWNBREAKER: 'the-downbreaker';
  MIST_OF_TIRNA_SCITHE: 'mist-of-tirna-scithe';
  THE_NECROTIC_WAKE: 'the-necritic-wake';
  SIEGE_OF_BORALUS: 'siege-of-boralus';
  GRIM_BATOL: 'grim-batol';
}

export interface IInstance {
  RAID: IRaid;
  DUNGEON: IDungeon;
  BATTLEGROUND: 'battleground';
  PVP: 'pvp';
}

export interface IBoostType {
  RAID: 'raid';
  DUNGEON: 'dungeon';
  BATTLEGROUND: 'battleground';
  PVP: 'pvp';
  ACHIEVEMENT: 'achievement';
  MOUNT: 'mount';
  LEVELING: 'leveling';
}

interface IClassic {
  SEASON_OF_DISCOVERY: 'season-of-discovery';
  HARCORE: 'harcore';
  VANILLA: 'vanilla';
  CATACLYSM: 'cataclysm';
}

export interface IGameVersion {
  RETAIL: 'retail';
  CLASSIC: IClassic;
}

interface IArmorType {
  LEATHER: 'leather';
  CLOTH: 'cloth';
  MAIL: 'mail';
  PLATE: 'plate';
  NOT_SPECIFIED: 'not-specified';
}

export interface IDifficulty {
  MYTHIC_PLUS: 'mythic-plus';
  MYTHIC: 'mythic';
  HEROIC: 'heroic';
  NORMAL: 'normal';
  LFR: 'lfr';
}

/**
 * Represents a client involved in a boost.
 *
 * @property {number} id - The unique identifier of the client.
 * @property {string} name - The name of the client.
 * @property {string} region - The region where the client is located.
 *
 * @example
 * const client: IClient = {
 *   id: 1,
 *   name: 'JohnDoe',
 *   region: 'NA'
 * };
 */
export interface IClient {
  id: number;
  name: string;
  region: string;
}

/**
 * Represents a booster in a boost.
 *
 * @property {number} id - The unique identifier of the booster.
 * @property {string} name - The name of the booster.
 * @property {string} region - The region where the booster is located.
 *
 * @example
 * const booster: IBooster = {
 *   id: 1,
 *   name: 'BoostMaster',
 *   region: 'EU'
 * };
 */
export interface IBooster {
  id: number;
  name: string;
  region: string;
}

export interface ILeader {
  id: number;
  name: string;
}

/**
 * Represents a support ticket associated with a boost.
 *
 * @property {number} id - The unique identifier of the ticket.
 * @property {string} issue - A description of the issue or request.
 * @property {TStatus} status - The current status of the ticket.
 * @property {TPriority} priority - The priority level of the ticket.
 * @property {number} createdAt - The timestamp when the ticket was created.
 * @property {number} [updatedAt] - The timestamp of the last update to the ticket.
 * @property {number} [resolvedAt] - The timestamp when the ticket was resolved.
 * @property {IClient} client - The client associated with the ticket.
 *
 * @example
 * const ticket: ITicket = {
 *   id: 1,
 *   issue: 'Connection issue',
 *   status: 'open',
 *   priority: 'high',
 *   createdAt: 1625231234,
 *   client: { id: 1, name: 'JohnDoe', region: 'NA' }
 * };
 */
export interface ITicket {
  id: number;
  issue: string;
  status: TStatus;
  priority: TPriority;
  createdAt: number;
  updatedAt?: number;
  resolvedAt?: number;
  client: IClient;
}

/**
 * Represents support staff associated with a modlog.
 *
 * @property {number} id - The unique identifier of the support staff.
 * @property {string} name - The name of the support staff.
 * @property {string} region - The region where the support staff is located.
 * @property {number} createdAt - The timestamp when the modlog was created.
 * @property {number} [updatedAt] - The timestamp of the last update to the modlog.
 *
 * @example
 * const support: ISupport = {
 *   id: 1,
 *   name: 'SupportGuy',
 *   region: 'EU',
 *   createdAt: 1625231234
 * };
 */
interface ISupport {
  id: number;
  name: string;
  region: string;
  createdAt: number;
  updatedAt?: number;
}

export interface IDetailContent {
  createdAt: number;
  startTime: number;
  endTime: number;
  keystoneLevel: number;
  inTime: boolean;
  rating: number;
}

export interface IDetail {}

/**
 * Represents a moderation log entry.
 *
 * @property {number} id - The unique identifier of the modlog entry.
 * @property {string} note - The content of the moderation note.
 * @property {ISupport} support - The support staff who created the modlog.
 * @property {number} createdAt - The timestamp when the modlog was created.
 * @property {number} updatedAt - The timestamp of the last update to the modlog.
 *
 * @example
 * const modlog: IModlog = {
 *   id: 1,
 *   note: 'User was warned for inappropriate behavior.',
 *   support: { id: 1, name: 'SupportGuy', region: 'EU', createdAt: 1625231234 },
 *   createdAt: 1625231234,
 *   updatedAt: 1625232234
 * };
 */
export interface IModlog {
  id: number;
  note: string;
  support: ISupport;
  createdAt: number;
  updatedAt: number;
}

/**
 * Represents a customer's boost, including details such as client information,
 * instance IDs, cost, discount, and selected boosters.
 *
 * @property {number} id - The unique identifier of the boost.
 * @property {TVersion} version - The version of the game in which the boost takes place.
 * @property {TBoostType} type - The type of boost being performed.
 * @property {IClient[]} client - The clients associated with the boost.
 * @property {number} pot - The amount of gold or currency involved in the boost.
 * @property {TInstance | null} [instance] - The specific instance in which the boost takes place.
 * @property {TArmorType | null} [armorType] - The type of armor involved in the boost.
 * @property {TDifficulty | null} [difficulty] - The difficulty level of the boost.
 * @property {number} count - The number of boosts or runs included in the transaction.
 * @property {number} discount - The discount applied to the boost.
 * @property {IBooster[]} [roster] - The list of boosters involved in the boost.
 * @property {ITicket[]} [ticket] - The support tickets associated with the boost.
 * @property {IModlog[]} [modLog] - The moderation logs related to the boost.
 * @property {number} createdAt - The timestamp when the boost was created.
 * @property {number | null} [startedAt] - The timestamp when the boost started.
 * @property {number | null} [updatedAt] - The timestamp of the last update to the boost.
 * @property {number | null} [completedAt] - The timestamp when the boost was completed.
 *
 * @example
 * const boost: IBoost = {
 *   id: 1,
 *   version: 'retail',
 *   type: 'raid',
 *   client: [{ id: 1, name: 'JohnDoe', region: 'NA' }],
 *   pot: 1000,
 *   instance: 'the-necritic-wake',
 *   armorType: 'plate',
 *   difficulty: 'mythic',
 *   count: 1,
 *   discount: 0.9,
 *   roster: [{ id: 1, name: 'BoostMaster', region: 'EU' }],
 *   ticket: [],
 *   modLog: [],
 *   createdAt: 1625231234,
 *   startedAt: null,
 *   updatedAt: null,
 *   completedAt: null
 * };
 */
export interface IBoost {
  id: number;
  version: TVersion;
  type: TBoostType;
  client: IClient[];
  pot: number;
  instance?: TInstance | null;
  armorType?: TArmorType | null;
  difficulty?: TDifficulty | null;
  count: number;
  discount: number;
  roster?: IBooster[];
  ticket?: ITicket[];
  modLog?: IModlog[];
  createdAt: number;
  startedAt?: number | null;
  updatedAt?: number | null;
  completedAt?: number | null;
}

/**
 * Represents the options for creating a new boost instance.
 *
 * @property {number} id - The unique identifier of the boost.
 * @property {TVersion} [version] - The version of the game for the boost.
 * @property {TBoostType} type - The type of boost being performed.
 * @property {IClient} [client] - The client associated with the boost.
 * @property {number} pot - The amount of gold or currency involved in the boost.
 * @property {TInstance} [instance] - The specific instance in which the boost takes place.
 * @property {TArmorType} [armorType] - The type of armor involved in the boost.
 * @property {TDifficulty} [difficulty] - The difficulty level of the boost.
 * @property {number} [count] - The number of boosts or runs included in the transaction.
 * @property {number} [discount] - The discount applied to the boost.
 * @property {IBooster | IBooster[]} [roster] - The list of boosters involved in the boost.
 * @property {ITicket[]} [ticket] - The support tickets associated with the boost.
 * @property {IModlog[]} [modLog] - The moderation logs related to the boost.
 * @property {number} createdAt - The timestamp when the boost was created.
 * @property {number | null} [startedAt] - The timestamp when the boost started.
 * @property {number | null} [updatedAt] - The timestamp of the last update to the boost.
 * @property {number | null} [completedAt] - The timestamp when the boost was completed.
 *
 * @example
 * const boostOptions: IBoostOptions = {
 *   id: 1,
 *   version: 'retail',
 *   type: 'raid',
 *   client: { id: 1, name: 'JohnDoe', region: 'NA' },
 *   pot: 1000,
 *   instance: 'the-necritic-wake',
 *   armorType: 'plate',
 *   difficulty: 'mythic',
 *   count: 1,
 *   discount: 0.9,
 *   roster: [{ id: 1, name: 'BoostMaster', region: 'EU' }],
 *   ticket: [],
 *   modLog: [],
 *   createdAt: 1625231234,
 *   startedAt: null,
 *   updatedAt: null,
 *   completedAt: null
 * };
 */
export interface IBoostOptions {
  id: number;
  version?: TVersion;
  type: TBoostType;
  client?: IBooster | IBooster[];
  pot: number;
  count?: number;
  discount?: number;
  roster?: IBooster | IBooster[];
  ticket?: ITicket[];
  modLog?: IModlog[];
  createdAt: number;
  startedAt?: number | null;
  updatedAt?: number | null;
  completedAt?: number | null;
}

interface ISharedOptions extends IBoostOptions {
  instance?: TInstance | undefined;
  armorType?: TArmorType | undefined;
  difficulty?: TDifficulty | undefined;
}

export interface IBoostDungeonOptions extends ISharedOptions {
  keystoneLevel: TKeystoneLevel;
}

export interface IBoostRaidOptions extends ISharedOptions {
  leader?: ILeader | undefined;
}

import type {
  IArmorType,
  IDifficulty,
  IInstance,
  IBoostType,
  IIssueType,
  IGameVersion,
  IQueueType,
  IBoostLimit,
} from '../../typings';

export const ArmorType: IArmorType = {
  LEATHER: 'leather',
  CLOTH: 'cloth',
  MAIL: 'mail',
  PLATE: 'plate',
  NOT_SPECIFIED: 'not-specified',
};

export const Difficulty: IDifficulty = {
  MYTHIC_PLUS: 'mythic-plus',
  MYTHIC: 'mythic',
  HEROIC: 'heroic',
  NORMAL: 'normal',
  LFR: 'lfr',
};

export const Instance: IInstance = {
  RAID: {
    NERUBAR_PLACE: 'nerubar-place',
  },
  DUNGEON: {
    CITY_OF_ECHOES: 'city-of-echoes',
    CITY_OF_THREADS: 'city-of-threads',
    THE_STONEVAULT: 'the-stonevault',
    THE_DOWNBREAKER: 'the-downbreaker',
    MIST_OF_TIRNA_SCITHE: 'mist-of-tirna-scithe',
    THE_NECROTIC_WAKE: 'the-necritic-wake',
    SIEGE_OF_BORALUS: 'siege-of-boralus',
    GRIM_BATOL: 'grim-batol',
  },
  BATTLEGROUND: 'battleground',
  PVP: 'pvp',
};

export const BoostType: IBoostType = {
  RAID: 'raid',
  DUNGEON: 'dungeon',
  BATTLEGROUND: 'battleground',
  PVP: 'pvp',
  ACHIEVEMENT: 'achievement',
  MOUNT: 'mount',
  LEVELING: 'leveling',
};

export const IssueType: IIssueType = {};

export const GameVersion: IGameVersion = {
  RETAIL: 'retail',
  CLASSIC: {
    SEASON_OF_DISCOVERY: 'season-of-discovery',
    HARCORE: 'harcore',
    VANILLA: 'vanilla',
    CATACLYSM: 'cataclysm',
  },
};

export const QueueType: IQueueType = {
  SOLO: 'solo',
  DUO: 'duo',
  TEAM: 'team',
};

export const BoostLimit: IBoostLimit = {
  MAX_RAID_PLAYER_SIZE: 30,
  MAX_RAID_CLIENTS: 16,
  MAX_DUNGEON_PLAYER_SIZE: 5,
  MAX_DUNGEON_CLIENTS: 1,
};

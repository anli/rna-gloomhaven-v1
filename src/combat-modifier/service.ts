import * as R from 'ramda';
import {useEffect} from 'react';
import FastImage from 'react-native-fast-image';
import {CharacterPerk} from './store';

class CARD {
  static ZERO = {name: '+0', imageUrl: 'https://i.imgur.com/EWDmUmh.png'};
  static PLUS_ONE = {name: '+1', imageUrl: 'https://i.imgur.com/IXOuNQ5.png'};
  static MINUS_ONE = {name: '-1', imageUrl: 'https://i.imgur.com/sSsPOyJ.png'};
  static PLUS_TWO = {name: '+2', imageUrl: 'https://i.imgur.com/wDSCoi8.png'};
  static MINUS_TWO = {name: '-2', imageUrl: 'https://i.imgur.com/jr9J5mY.png'};
  static MISS = {
    name: 'miss',
    imageUrl: 'https://i.imgur.com/02kf5La.png',
    isShuffle: true,
  };
  static DOUBLE = {
    name: 'x2',
    imageUrl: 'https://i.imgur.com/A7i7Rob.png',
    isShuffle: true,
  };
  static BLESS = {
    name: 'bless',
    imageUrl: 'https://i.imgur.com/mDuj3ym.png',
  };
  static CURSE = {
    name: 'curse',
    imageUrl: 'https://i.imgur.com/UklRkDR.png',
  };
  static PLUS_ZERO_STUN = {
    name: '+0 STUN',
    imageUrl: 'https://i.imgur.com/OCtj089.png',
  };
  static PLUS_ONE_WOUND = {
    name: '+1 WOUND',
    imageUrl: 'https://i.imgur.com/qz3PJWi.png',
  };
  static PLUS_ONE_IMMOBILIZE = {
    name: '+1 IMMOBILIZE',
    imageUrl: 'https://i.imgur.com/2WxjK6P.png',
  };
  static PLUS_ONE_CURSE = {
    name: '+1 CURSE',
    imageUrl: 'https://i.imgur.com/ZjGMg4V.png',
  };
  static PLUS_TWO_FIRE = {
    name: '+2 FIRE',
    imageUrl: 'https://i.imgur.com/ihyEuHA.png',
  };
  static PLUS_TWO_ICE = {
    name: '+2 ICE',
    imageUrl: 'https://i.imgur.com/8NKtTFi.png',
  };
  static ROLLING_EARTH = {
    name: '⤵ EARTH',
    imageUrl: 'https://i.imgur.com/1W2T8Rx.png',
  };
  static ROLLING_AIR = {
    name: '⤵ AIR',
    imageUrl: 'https://i.imgur.com/Yfie493.png',
  };
  static ROLLING_LIGHT = {
    name: '⤵ LIGHT',
    imageUrl: 'https://i.imgur.com/XEKY9Wo.png',
  };
  static ROLLING_DARK = {
    name: '⤵ DARK',
    imageUrl: 'https://i.imgur.com/eq7Kd9c.png',
  };
  static PLUS_TWO_MUDDLE = {
    name: '+2 MUDDLE',
    imageUrl: 'https://i.imgur.com/Ld87zzD.png',
  };
  static ROLLING_PUSH_TWO = {
    name: '⤵ PUSH 2',
    imageUrl: 'https://i.imgur.com/9auWOfV.png',
  };
  static PLUS_THREE = {
    name: '+3',
    imageUrl: 'https://i.imgur.com/JpKnCbp.png',
  };
  static ROLLING_PUSH_ONE = {
    name: '⤵ PUSH 1',
    imageUrl: 'https://i.imgur.com/sDM3VaT.png',
  };
  static ROLLING_PIERCE_THREE = {
    name: '⤵ PIERCE 3',
    imageUrl: 'https://i.imgur.com/iiKiJKM.png',
  };
  static ROLLING_DISARM = {
    name: '⤵ DISARM',
    imageUrl: 'https://i.imgur.com/vEhgUHQ.png',
  };
  static ROLLING_MUDDLE = {
    name: '⤵ MUDDLE',
    imageUrl: 'https://i.imgur.com/NlUSWpR.png',
  };
  static ROLLING_ADD_TARGET = {
    name: '⤵ ADD TARGET',
    imageUrl: 'https://i.imgur.com/a52wnFl.png',
  };
  static PLUS_ONE_SHIELD_ONE = {
    name: '+1 SHIELD 1',
    imageUrl: 'https://i.imgur.com/KeRryKv.png',
  };
  static ROLLING_STUN = {
    name: '⤵ STUN',
    imageUrl: 'https://i.imgur.com/XnEB4Qc.png',
  };
  static ROLLING_PLUS_ONE = {
    name: '⤵ +1',
    imageUrl: 'https://i.imgur.com/icpwzEq.png',
  };
  static ROLLING_PULL_ONE = {
    name: '⤵ PULL 1',
    imageUrl: 'https://i.imgur.com/H5ig4Dj.png',
  };
  static ROLLING_IMMOBILIZE = {
    name: '⤵ IMMOBILIZE',
    imageUrl: 'https://i.imgur.com/bfQr27x.png',
  };
  static ROLLING_POISON = {
    name: '⤵ POISON',
    imageUrl: 'https://i.imgur.com/ubuurEz.png',
  };
  static ROLLING_INVISIBLE = {
    name: '⤵ INVISIBLE',
    imageUrl: 'https://i.imgur.com/kuovQmX.png',
  };
  static ROLLING_FIRE = {
    name: '⤵ FIRE',
    imageUrl: 'https://i.imgur.com/bKgcxQs.png',
  };
  static PLUS_ONE_HEAL_TWO = {
    name: '+1 HEAL 2',
    imageUrl: 'https://i.imgur.com/gZU4g5P.png',
  };
  static ZERO_ADD_TARGET = {
    name: '+0 ADD TARGET',
    imageUrl: 'https://i.imgur.com/sXw6BuX.png',
  };
  static EQUIPMENT = {
    name: 'EQUIPMENT',
    imageUrl: 'https://i.imgur.com/sSsPOyJ.png',
  };
  static ROLLING_HEAL_ONE_SELF = {
    name: '⤵ HEAL 1',
    imageUrl: 'https://i.imgur.com/IxigU8m.png',
  };
  static ROLLING_PLUS_TWO = {
    name: '⤵ +2',
    imageUrl: 'https://i.imgur.com/SUl077i.png',
  };
  static ROLLING_WOUND = {
    name: '⤵ WOUND',
    imageUrl: 'https://i.imgur.com/tLOf9aB.png',
  };
  static ROLLING_MINUS_ONE_DISARM = {
    name: '⤵ -1 DISARM',
    imageUrl: 'https://i.imgur.com/9OvVNTS.png',
  };
  static PLUS_ONE_AIR = {
    name: '+1 AIR',
    imageUrl: 'https://i.imgur.com/OnCfx12.png',
  };
  static PLUS_ONE_EARTH = {
    name: '+1 EARTH',
    imageUrl: 'https://i.imgur.com/g2V2a8F.png',
  };
  static PLUS_ONE_LIGHT = {
    name: '+1 LIGHT',
    imageUrl: 'https://i.imgur.com/eWYnI1S.png',
  };
  static PLUS_ONE_DARK = {
    name: '+1 DARK',
    imageUrl: 'https://i.imgur.com/6usU3M3.png',
  };
  static PLUS_ONE_POISON = {
    name: '+1 POISON',
    imageUrl: 'https://i.imgur.com/rjPJ8um.png',
  };
  static PLUS_THREE_SHIELD_ONE_SELF = {
    name: '+3 SHIELD 1 SELF',
    imageUrl: 'https://i.imgur.com/4oIbsQn.png',
  };
  static PLUS_ONE_SHIELD_ONE_ALLY = {
    name: '+1 SHIELD 1 ALLY',
    imageUrl: 'https://i.imgur.com/V8mtFT3.png',
  };
  static PLUS_TWO_DARK = {
    name: '+2 DARK',
    imageUrl: 'https://i.imgur.com/do3yoUU.png',
  };
  static PLUS_TWO_LIGHT = {
    name: '+2 LIGHT',
    imageUrl: 'https://i.imgur.com/llW0RIS.png',
  };
  static PLUS_THREE_MUDDLE = {
    name: '+3 MUDDLE',
    imageUrl: 'https://i.imgur.com/Z9iH7z1.png',
  };
  static PLUS_TWO_CURSE = {
    name: '+2 CURSE',
    imageUrl: 'https://i.imgur.com/KMewZGu.png',
  };
  static PLUS_TWO_REGENERATE_SELF = {
    name: '+2 REGENERATE SELF',
    imageUrl: 'https://i.imgur.com/1cY7D0Z.png',
  };
  static HEAL_TWO_ALLY = {
    name: 'HEAL 2 ALLY',
    imageUrl: 'https://i.imgur.com/WdaIHFU.png',
  };
  static ROLLING_CURSE = {
    name: '⤵ CURSE',
    imageUrl: 'https://i.imgur.com/HN6Lijm.png',
  };
  static FIRE = {
    name: '+0 FIRE',
    imageUrl: 'https://i.imgur.com/HN6Lijm.png',
  };
  static AIR = {
    name: '+0 AIR',
    imageUrl: 'https://i.imgur.com/HN6Lijm.png',
  };
  static EARTH = {
    name: '+0 EARTH',
    imageUrl: 'https://i.imgur.com/HN6Lijm.png',
  };
  static ICE = {
    name: '+0 ICE',
    imageUrl: 'https://i.imgur.com/HN6Lijm.png',
  };
  static PLUS_ONE_PUSH_ONE = {
    name: '+1 PUSH 1',
    imageUrl: 'https://i.imgur.com/HN6Lijm.png',
  };
  static MINUS_ONE_DARK = {
    name: '-1 DARK',
    imageUrl: 'https://i.imgur.com/EFYYHDL.png',
  };
  static PLUS_ONE_INVISIBLE = {
    name: '+1 INVISIBLE',
    imageUrl: 'https://i.imgur.com/HN6Lijm.png',
  };
  static ROLLING_HEAL_ONE = {
    name: '⤵ HEAL 1',
    imageUrl: 'https://i.imgur.com/QoF4dDL.png',
  };
  static ZERO_REFRESH_ITEM = {
    name: '+0 Refresh an item',
    imageUrl: 'https://i.imgur.com/YFlrRU0.png',
  };
  static ROLLING_HEAL_THREE_SELF = {
    name: '+0 Refresh an item',
    imageUrl: 'https://i.imgur.com/YFlrRU0.png',
  };
  static PLUS_FOUR = {
    name: '+4',
    imageUrl: 'https://i.imgur.com/AEWJURA.png',
  };
  static PLUS_ONE_DISARM = {
    name: '+1 DISARM',
    imageUrl: 'https://i.imgur.com/hr5Idvh.png',
  };
  static PLUS_TWO_POISON = {
    name: '+2 POISON',
    imageUrl: 'https://i.imgur.com/sJGeM3j.png',
  };
  static ROLLING_SHIELD_ONE_SELF = {
    name: 'SHIELD 1, Self',
    imageUrl: 'https://i.imgur.com/KWcDe72.png',
  };
}

const PERK = {
  REMOVE_FOUR_PLUS_ZERO: {
    name: 'Remove four +0 cards',
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE: {
    name: 'Replace one -1 card with one +1 card',
  },
  ADD_TWO_PLUS_ONE: {name: 'Add two +1 cards'},
  ADD_ONE_PLUS_ZERO_STUN: {
    name: 'Add one +0 STUN card',
  },
  ADD_ONE_PLUS_ONE_WOUND: {
    name: 'Add one +1 WOUND card',
  },
  ADD_ONE_PLUS_ONE_IMMOBILIZE: {
    name: 'Add one +1 IMMOBILIZE card',
  },
  ADD_ONE_PLUS_ONE_CURSE: {
    name: 'Add one +1 CURSE card',
  },
  ADD_ONE_PLUS_TWO_FIRE: {
    name: 'Add one +2 FIRE card',
  },
  ADD_ONE_PLUS_TWO_ICE: {
    name: 'Add one +2 ICE card',
  },
  ADD_ONE_ROLLING_EARTH_AND_ONE_ROLLING_AIR: {
    name: 'Add one ⤵ EARTH and one ⤵ AIR card',
  },
  ADD_ONE_ROLLING_LIGHT_AND_ONE_ROLLING_DARK: {
    name: 'Add one ⤵ LIGHT and one ⤵ DARK card',
  },
  ADD_ONE_MINUS_TWO_AND_TWO_PLUS_TWO: {
    name: 'Add one -2 and two +2 card',
  },
  ADD_ONE_PLUS_TWO_MUDDLE: {
    name: 'Add one +2 MUDDLE card',
  },
  ADD_TWO_ROLLING_PUSH_TWO: {
    name: 'Add two ⤵ PUSH 2 card',
  },
  ADD_TWO_ROLLING_EARTH: {
    name: 'Add two ⤵ EARTH card',
  },
  ADD_TWO_ROLLING_AIR: {
    name: 'Add two ⤵ AIR card',
  },
  IGNORE_NEGATIVE_ITEM_EFFECTS: {
    name: 'Ignore negative item effects',
  },
  IGNORE_NEGATIVE_SCENARIO_EFFECTS: {
    name: 'Ignore negative scenario effects',
  },
  REMOVE_TWO_MINUS_ONE: {
    name: 'Remove two -1 cards',
  },
  ADD_ONE_PLUS_THREE: {
    name: 'Add one +3 card',
  },
  ADD_THREE_ROLLING_PUSH_ONE: {
    name: 'Add three ⤵ PUSH 1 cards',
  },
  ADD_TWO_ROLLING_PIERCE_THREE: {
    name: 'Add two ⤵ PIERCE 3 cards',
  },
  ADD_ONE_ROLLING_DISARM_AND_ONE_ROLLING_MUDDLE: {
    name: 'Add one ⤵ DISARM and one ⤵ MUDDLE card',
  },
  ADD_ONE_PLUS_ONE_SHIELD_ONE: {
    name: 'Add one +1 SHIELD 1, Self card',
  },
  IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD_ONE_PLUS_ONE: {
    name: 'Ignore negative item effects and one +1 card',
  },
  ADD_ONE_ROLLING_STUN: {
    name: 'Add one ⤵ STUN card',
  },
  REPLACE_TWO_PLUS_ONE_WITH_TWO_PLUS_TWO: {
    name: 'Replace two +1 cards with two +2 cards',
  },
  REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO: {
    name: 'Replace one -2 card with one +0 card',
  },
  ADD_TWO_ROLLING_PLUS_ONE: {
    name: 'Add two ⤵ +1 cards',
  },
  ADD_THREE_ROLLING_MUDDLE: {
    name: 'Add three ⤵ MUDDLE cards',
  },
  ADD_TWO_ROLLING_IMMOBILIZE: {
    name: 'Add two ⤵ IMMOBILIZE cards',
  },
  ADD_THREE_ROLLING_PULL_ONE: {
    name: 'Add three ⤵ PULL 1 cards',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO: {
    name: 'Replace one +0 card with one +2 card',
  },
  ADD_TWO_ROLLING_POISON: {
    name: 'Add two ⤵ POISON cards',
  },
  ADD_TWO_ROLLING_MUDDLE: {
    name: 'Add two ⤵ MUDDLE cards',
  },
  ADD_ONE_ROLLING_INVISIBLE: {
    name: 'Add one ⤵ INVISIBLE cards',
  },
  ADD_TWO_ROLLING_FIRE: {
    name: 'Add two ⤵ FIRE cards',
  },
  ADD_ONE_PLUS_ONE_HEAL_TWO: {
    name: 'Add one +1 HEAL 2 card',
  },
  ADD_ONE_ZERO_ADD_TARGET: {
    name: 'Add one +0 ADD TARGET card',
  },
  ADD_TWO_ROLLING_HEAL_ONE_SELF: {
    name: 'Add two ⤵ HEAL 1, Self cards',
  },
  REPLACE_ONE_ZERO_WITH_ONE_ROLLING_PLUS_TWO: {
    name: 'Replace one +0 card with one ⤵ +2 card',
  },
  ADD_TWO_ROLLING_WOUND: {
    name: 'Add two ⤵ WOUND cards',
  },
  ADD_ONE_ROLLING_MINUS_ONE_DISARM: {
    name: 'Add one ⤵ -1 DISARM card',
  },
  REMOVE_ONE_MINUS_TWO: {
    name: 'Remove one -2 card',
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_AIR: {
    name: 'Replace one -1 card with one +1 AIR card',
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_EARTH: {
    name: 'Replace one -1 card with one +1 EARTH card',
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_LIGHT: {
    name: 'Replace one -1 card with one +1 LIGHT card',
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_DARK: {
    name: 'Replace one -1 card with one +1 DARK card',
  },
  ADD_ONE_PLUS_ONE_POISON: {
    name: 'Add one +1 POISON card',
  },
  IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_ONE_PLUS_ONE: {
    name: 'Ignore negative scenario effects and one +1 card',
  },
  REPLACE_TWO_PLUS_ONE_WITH_ONE_PLUS_THREE_SHIELD_ONE_SELF: {
    name: 'Replace two +1 card with one +3 SHIELD 1, Self card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_SHIELD_ONE_ALLY: {
    name: 'Replace one +0 card with one +1 SHIELD 1, Affect any ally card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_DARK: {
    name: 'Replace one +0 card with one +2 DARK card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_LIGHT: {
    name: 'Replace one +0 card with one +2 LIGHT card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_THREE_MUDDLE: {
    name: 'Replace one +0 card with one +3 MUDDLE card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_CURSE: {
    name: 'Replace one +0 card with one +2 CURSE card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_REGENERATE_SELF: {
    name: 'Replace one +0 card with one +2 REGENERATE, Self card',
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_HEAL_TWO_ALLY: {
    name: 'Replace one -1 card with one +1 HEAL 2, Affect any ally card',
  },
  IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_TWO_PLUS_ONE: {
    name: 'Ignore negative scenario effects and add two +1 cards',
  },
  ADD_TWO_ROLLING_CURSE: {
    name: 'Add two ⤵ CURSE cards',
  },
  REPLACE_TWO_ZERO_WITH_TWO_PLUS_ONE: {
    name: 'Replace two +0 card with two +1 cards',
  },
  ADD_ONE_ROLLING_ADD_TARGET: {
    name: 'Add one ⤵ ADD TARGET card',
  },
  ADD_THREE_FIRE: {
    name: 'Add three +0 FIRE cards',
  },
  ADD_THREE_ICE: {
    name: 'Add three +0 ICE cards',
  },
  ADD_THREE_AIR: {
    name: 'Add three +0 AIR cards',
  },
  ADD_THREE_EARTH: {
    name: 'Add three +0 EARTH cards',
  },
  REPLACE_TWO_ZERO_WITH_ONE_FIRE_AND_ONE_EARTH: {
    name: 'Replace two +0 cards with one +0 FIRE and one +0 EARTH card',
  },
  REPLACE_TWO_ZERO_WITH_ONE_ICE_AND_ONE_AIR: {
    name: 'Replace two +0 cards with one +0 ICE and one +0 AIR card',
  },
  ADD_TWO_PLUS_ONE_PUSH_ONE: {
    name: 'Add two +1 PUSH 1 cards',
  },
  ADD_ONE_MINUS_ONE_DARK: {
    name: 'Add one -1 DARK card',
  },
  REPLACE_ONE_MINUS_ONE_DARK_WITH_ONE_PLUS_ONE_DARK: {
    name: 'Replace one -1 DARK card with one +1 DARK card',
  },
  ADD_ONE_PLUS_ONE_INVISIBLE: {
    name: 'Add one +1 INVISIBLE card',
  },
  ADD_TWO_ROLLING_HEAL_ONE: {
    name: 'Add two ⤵ HEAL 1 cards',
  },
  ADD_ONE_PLUS_ONE_AIR: {
    name: 'Add one +1 ⤵ AIR card',
  },
  ADD_THREE_ROLLING_POISON: {
    name: 'Add three ⤵ POISON cards',
  },
  ADD_ONE_ZERO_REFRESH_ITEM: {
    name: 'Add one +0 Refresh an item card',
  },
  ADD_ONE_ROLLING_PLUS_TWO: {
    name: 'Add one ⤵ +2 card',
  },
  ADD_ONE_ROLLING_HEAL_THREE_SELF: {
    name: 'Add one ⤵ HEAL 3 card',
  },
  REPLACE_TWO_PLUS_ONE_WITH_ONE_PLUS_FOUR: {
    name: 'Replace two +1 cards with one +4 card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_IMMOBILIZE: {
    name: 'Replace one +0 card with one +1 IMMOBILIZE card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_DISARM: {
    name: 'Replace one +0 card with one +1 DISARM card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_WOUND: {
    name: 'Replace one +0 card with one +2 WOUND card',
  },
  REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_POISON: {
    name: 'Replace one +0 card with one +2 POISON card',
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_ZERO_STUN: {
    name: 'Replace one -1 card with one +0 STUN card',
  },
  ADD_THREE_ROLLING_PLUS_ONE: {
    name: 'Add three ⤵ +1 cards',
  },
  ADD_ONE_PLUS_TWO: {
    name: 'Add one +2 card',
  },
  ADD_ONE_ROLLING_FIRE_AND_ONE_ROLLING_AIR: {
    name: 'Add one ⤵ FIRE and one ⤵ AIR card',
  },
  ADD_ONE_ROLLING_DARK_AND_ONE_ROLLING_EARTH: {
    name: 'Add one ⤵ DARK and one ⤵ EARTH card',
  },
  ADD_TWO_ROLLING_LIGHT: {
    name: 'Add two ⤵ LIGHT cards',
  },
  ADD_TWO_ROLLING_SHIELD_ONE_SELF: {
    name: 'Add two ⤵ SHIELD 1, Self cards',
  },
  IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD_TWO_PLUS_ONE: {
    name: 'Ignore negative items effects and add two +1 cards',
  },
};

const CHARACTER: {
  [key: string]: {code?: string; name: string; perks: CharacterPerk[]};
} = {
  Spellweaver: {
    name: 'Spellweaver',
    perks: [
      {...PERK.REMOVE_FOUR_PLUS_ZERO, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE, totalCount: 2},
      {...PERK.ADD_TWO_PLUS_ONE, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ZERO_STUN, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_ONE_WOUND, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_ONE_CURSE, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_TWO_FIRE, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_TWO_ICE, totalCount: 1},
      {...PERK.ADD_ONE_ROLLING_EARTH_AND_ONE_ROLLING_AIR, totalCount: 1},
      {...PERK.ADD_ONE_ROLLING_LIGHT_AND_ONE_ROLLING_DARK, totalCount: 1},
    ],
  },
  Cragheart: {
    name: 'Cragheart',
    perks: [
      {...PERK.REMOVE_FOUR_PLUS_ZERO, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE, totalCount: 3},
      {...PERK.ADD_ONE_MINUS_TWO_AND_TWO_PLUS_TWO, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_TWO_MUDDLE, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_PUSH_TWO, totalCount: 1},
      {...PERK.ADD_TWO_ROLLING_EARTH, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_AIR, totalCount: 1},
      {...PERK.IGNORE_NEGATIVE_ITEM_EFFECTS, totalCount: 1},
      {...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS, totalCount: 1},
    ],
  },
  Brute: {
    name: 'Brute',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE, totalCount: 1},
      {...PERK.ADD_TWO_PLUS_ONE, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_THREE, totalCount: 1},
      {...PERK.ADD_THREE_ROLLING_PUSH_ONE, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_PIERCE_THREE, totalCount: 1},
      {...PERK.ADD_ONE_ROLLING_STUN, totalCount: 2},
      {...PERK.ADD_ONE_ROLLING_DISARM_AND_ONE_ROLLING_MUDDLE, totalCount: 1},
      {...PERK.ADD_ONE_ROLLING_ADD_TARGET, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ONE_SHIELD_ONE, totalCount: 1},
      {
        ...PERK.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD_ONE_PLUS_ONE,
        totalCount: 1,
      },
    ],
  },
  Mindthief: {
    name: 'Mindthief',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {...PERK.REMOVE_FOUR_PLUS_ZERO, totalCount: 1},
      {...PERK.REPLACE_TWO_PLUS_ONE_WITH_TWO_PLUS_TWO, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_TWO_ICE, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_PLUS_ONE, totalCount: 2},
      {...PERK.ADD_THREE_ROLLING_PULL_ONE, totalCount: 1},
      {...PERK.ADD_THREE_ROLLING_MUDDLE, totalCount: 1},
      {...PERK.ADD_TWO_ROLLING_IMMOBILIZE, totalCount: 1},
      {...PERK.ADD_ONE_ROLLING_STUN, totalCount: 1},
      {...PERK.ADD_ONE_ROLLING_DISARM_AND_ONE_ROLLING_MUDDLE, totalCount: 1},
      {...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS, totalCount: 1},
    ],
  },
  Scoundrel: {
    name: 'Scoundrel',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {...PERK.REMOVE_FOUR_PLUS_ZERO, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE, totalCount: 1},
      {...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_PLUS_ONE, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_PIERCE_THREE, totalCount: 1},
      {...PERK.ADD_TWO_ROLLING_POISON, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_MUDDLE, totalCount: 1},
      {...PERK.ADD_ONE_ROLLING_INVISIBLE, totalCount: 1},
      {...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS, totalCount: 1},
    ],
  },
  Tinkerer: {
    name: 'Tinkerer',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {...PERK.REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO, totalCount: 1},
      {...PERK.ADD_TWO_PLUS_ONE, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_THREE, totalCount: 1},
      {...PERK.ADD_TWO_ROLLING_FIRE, totalCount: 1},
      {...PERK.ADD_THREE_ROLLING_MUDDLE, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_ONE_WOUND, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ONE_HEAL_TWO, totalCount: 2},
      {...PERK.ADD_ONE_ZERO_ADD_TARGET, totalCount: 1},
      {...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS, totalCount: 1},
    ],
  },
  'Beast Tyrant': {
    code: 'Two Minis',
    name: 'Beast Tyrant',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE, totalCount: 3},
      {...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ONE_WOUND, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_HEAL_ONE_SELF, totalCount: 3},
      {...PERK.ADD_TWO_ROLLING_EARTH, totalCount: 1},
      {...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS, totalCount: 1},
    ],
  },
  Berserker: {
    code: 'Lightning',
    name: 'Berserker',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 1},
      {...PERK.REMOVE_FOUR_PLUS_ZERO, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE, totalCount: 2},
      {...PERK.REPLACE_ONE_ZERO_WITH_ONE_ROLLING_PLUS_TWO, totalCount: 2},
      {...PERK.ADD_TWO_ROLLING_WOUND, totalCount: 2},
      {...PERK.ADD_ONE_ROLLING_STUN, totalCount: 2},
      {...PERK.ADD_ONE_ROLLING_MINUS_ONE_DISARM, totalCount: 1},
      {...PERK.ADD_TWO_ROLLING_HEAL_ONE_SELF, totalCount: 1},
      {...PERK.ADD_ONE_PLUS_TWO_FIRE, totalCount: 2},
      {...PERK.IGNORE_NEGATIVE_ITEM_EFFECTS, totalCount: 1},
    ],
  },
  Bladeswarm: {
    code: 'Three Swords',
    name: 'Bladeswarm',
    perks: [
      {...PERK.REMOVE_ONE_MINUS_TWO, totalCount: 1},
      {...PERK.REMOVE_FOUR_PLUS_ZERO, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_AIR, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_EARTH, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_LIGHT, totalCount: 1},
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_DARK, totalCount: 1},
      {...PERK.ADD_TWO_ROLLING_HEAL_ONE_SELF, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ONE_WOUND, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_ONE_POISON, totalCount: 2},
      {...PERK.ADD_ONE_PLUS_TWO_MUDDLE, totalCount: 1},
      {
        ...PERK.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD_ONE_PLUS_ONE,
        totalCount: 1,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_ONE_PLUS_ONE,
        totalCount: 1,
      },
    ],
  },
  Diviner: {
    code: 'Eye',
    name: 'Diviner',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {...PERK.REMOVE_ONE_MINUS_TWO, totalCount: 1},
      {
        ...PERK.REPLACE_TWO_PLUS_ONE_WITH_ONE_PLUS_THREE_SHIELD_ONE_SELF,
        totalCount: 2,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_SHIELD_ONE_ALLY,
        totalCount: 1,
      },
      {...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_DARK, totalCount: 1},
      {...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_LIGHT, totalCount: 1},
      {...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_THREE_MUDDLE, totalCount: 1},
      {...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_CURSE, totalCount: 1},
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_REGENERATE_SELF,
        totalCount: 1,
      },
      {...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_HEAL_TWO_ALLY, totalCount: 1},
      {
        ...PERK.ADD_TWO_ROLLING_HEAL_ONE_SELF,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_CURSE,
        totalCount: 1,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_TWO_PLUS_ONE,
        totalCount: 1,
      },
    ],
  },
  Doomstalker: {
    code: 'Angry Face',
    name: 'Doomstalker',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {
        ...PERK.REPLACE_TWO_ZERO_WITH_TWO_PLUS_ONE,
        totalCount: 3,
      },
      {
        ...PERK.ADD_TWO_ROLLING_PLUS_ONE,
        totalCount: 2,
      },
      {
        ...PERK.ADD_ONE_PLUS_TWO_MUDDLE,
        totalCount: 1,
      },

      {
        ...PERK.ADD_ONE_PLUS_ONE_POISON,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_PLUS_ONE_WOUND,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_PLUS_ZERO_STUN,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ROLLING_ADD_TARGET,
        totalCount: 2,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
        totalCount: 1,
      },
    ],
  },
  Elementalist: {
    code: 'Triangles',
    name: 'Elementalist',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {
        ...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO,
        totalCount: 2,
      },
      {
        ...PERK.ADD_THREE_FIRE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_THREE_ICE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_THREE_AIR,
        totalCount: 1,
      },
      {
        ...PERK.ADD_THREE_EARTH,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_TWO_ZERO_WITH_ONE_FIRE_AND_ONE_EARTH,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_TWO_ZERO_WITH_ONE_ICE_AND_ONE_AIR,
        totalCount: 1,
      },

      {
        ...PERK.ADD_TWO_PLUS_ONE_PUSH_ONE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_PLUS_ONE_WOUND,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_PLUS_ZERO_STUN,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ZERO_ADD_TARGET,
        totalCount: 1,
      },
    ],
  },
  Nightshroud: {
    code: 'Eclipse',
    name: 'Nightshroud',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {
        ...PERK.REMOVE_FOUR_PLUS_ZERO,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_MINUS_ONE_DARK,
        totalCount: 2,
      },
      {
        ...PERK.REPLACE_ONE_MINUS_ONE_DARK_WITH_ONE_PLUS_ONE_DARK,
        totalCount: 2,
      },
      {
        ...PERK.ADD_ONE_PLUS_ONE_INVISIBLE,
        totalCount: 2,
      },
      {
        ...PERK.ADD_THREE_ROLLING_MUDDLE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_HEAL_ONE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_CURSE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ROLLING_ADD_TARGET,
        totalCount: 1,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_TWO_PLUS_ONE,
        totalCount: 1,
      },
    ],
  },
  Plagueherald: {
    code: 'Cthulhu',
    name: 'Plagueherald',
    perks: [
      {...PERK.REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO, totalCount: 1},
      {
        ...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE,
        totalCount: 2,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO,
        totalCount: 2,
      },
      {
        ...PERK.ADD_TWO_PLUS_ONE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_PLUS_ONE_AIR,
        totalCount: 3,
      },
      {
        ...PERK.ADD_THREE_ROLLING_POISON,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_CURSE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_IMMOBILIZE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ROLLING_STUN,
        totalCount: 2,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_ONE_PLUS_ONE,
        totalCount: 1,
      },
    ],
  },
  Quartermaster: {
    code: 'Three Spears',
    name: 'Quartermaster',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {
        ...PERK.REMOVE_FOUR_PLUS_ZERO,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO,
        totalCount: 2,
      },
      {
        ...PERK.ADD_TWO_ROLLING_PLUS_ONE,
        totalCount: 2,
      },
      {
        ...PERK.ADD_THREE_ROLLING_MUDDLE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_PIERCE_THREE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ROLLING_STUN,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ROLLING_ADD_TARGET,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ZERO_REFRESH_ITEM,
        totalCount: 3,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_TWO_PLUS_ONE,
        totalCount: 1,
      },
    ],
  },
  Sawbones: {
    code: 'Saw',
    name: 'Sawbones',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {
        ...PERK.REMOVE_FOUR_PLUS_ZERO,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO,
        totalCount: 2,
      },
      {
        ...PERK.ADD_ONE_ROLLING_PLUS_TWO,
        totalCount: 2,
      },
      {
        ...PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE,
        totalCount: 2,
      },
      {
        ...PERK.ADD_TWO_ROLLING_WOUND,
        totalCount: 2,
      },
      {
        ...PERK.ADD_ONE_ROLLING_STUN,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ROLLING_HEAL_THREE_SELF,
        totalCount: 2,
      },
      {
        ...PERK.ADD_ONE_ZERO_REFRESH_ITEM,
        totalCount: 1,
      },
    ],
  },
  Soothsinger: {
    code: 'Music Note',
    name: 'Soothsinger',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {
        ...PERK.REMOVE_ONE_MINUS_TWO,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_TWO_PLUS_ONE_WITH_ONE_PLUS_FOUR,
        totalCount: 2,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_IMMOBILIZE,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_DISARM,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_WOUND,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_POISON,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_CURSE,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_THREE_MUDDLE,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_ZERO_STUN,
        totalCount: 1,
      },
      {
        ...PERK.ADD_THREE_ROLLING_PLUS_ONE,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_CURSE,
        totalCount: 2,
      },
    ],
  },
  Summoner: {
    code: 'Circles',
    name: 'Summoner',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 1},
      {
        ...PERK.REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE,
        totalCount: 3,
      },
      {
        ...PERK.ADD_ONE_PLUS_TWO,
        totalCount: 2,
      },
      {
        ...PERK.ADD_TWO_ROLLING_WOUND,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_POISON,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_HEAL_ONE_SELF,
        totalCount: 3,
      },
      {
        ...PERK.ADD_ONE_ROLLING_FIRE_AND_ONE_ROLLING_AIR,
        totalCount: 1,
      },
      {
        ...PERK.ADD_ONE_ROLLING_DARK_AND_ONE_ROLLING_EARTH,
        totalCount: 1,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_TWO_PLUS_ONE,
        totalCount: 1,
      },
    ],
  },
  Sunkeeper: {
    code: 'Sun',
    name: 'Sunkeeper',
    perks: [
      {...PERK.REMOVE_TWO_MINUS_ONE, totalCount: 2},
      {
        ...PERK.REMOVE_FOUR_PLUS_ZERO,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO,
        totalCount: 1,
      },
      {
        ...PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_PLUS_ONE,
        totalCount: 2,
      },
      {
        ...PERK.ADD_TWO_ROLLING_HEAL_ONE_SELF,
        totalCount: 2,
      },
      {
        ...PERK.ADD_ONE_ROLLING_STUN,
        totalCount: 1,
      },
      {
        ...PERK.ADD_TWO_ROLLING_LIGHT,
        totalCount: 2,
      },
      {
        ...PERK.ADD_TWO_ROLLING_SHIELD_ONE_SELF,
        totalCount: 1,
      },
      {
        ...PERK.IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD_TWO_PLUS_ONE,
        totalCount: 1,
      },
      {
        ...PERK.IGNORE_NEGATIVE_SCENARIO_EFFECTS,
        totalCount: 1,
      },
    ],
  },
};

const BASE_CARDS = [
  ...R.repeat(CARD.ZERO, 6),
  ...R.repeat(CARD.PLUS_ONE, 5),
  ...R.repeat(CARD.MINUS_ONE, 5),
  ...R.repeat(CARD.PLUS_TWO, 1),
  ...R.repeat(CARD.MINUS_TWO, 1),
  ...R.repeat(CARD.MISS, 1),
  ...R.repeat(CARD.DOUBLE, 1),
];

/* istanbul ignore next */
const usePreloadImages = () => {
  const preloadImages = () => {
    const cards: any[] = R.values(CARD);
    const getImageUris = R.map(({imageUrl}: {imageUrl: string}) => ({
      uri: imageUrl,
    }));
    FastImage.preload(getImageUris(cards));
  };

  useEffect(() => {
    preloadImages();
  }, []);
};

export default class {
  static CARD = CARD;
  static usePreloadImages = usePreloadImages;
  static PERK = PERK;
  static CHARACTER = CHARACTER;
  static BASE_CARDS = BASE_CARDS;
}

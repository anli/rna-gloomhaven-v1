interface Perk {
  name: string;
  totalCount: number;
  activeCount: number;
}

const usePerkUpdate = () => {
  const data = {perks: MOCK_PERKS};

  const onSelect = (id: string) => {
    console.log('onSelect', {id});
  };

  return {data, onSelect};
};

export default usePerkUpdate;

const MOCK_PERKS: Perk[] = [
  {name: 'Remove four +0 cards', totalCount: 1, activeCount: 0},
  {name: 'Replace one -1 card with one +1 card', totalCount: 2, activeCount: 0},
  {name: 'Add two +1 cards', totalCount: 2, activeCount: 0},
  {name: 'Add one +0 STUN card', totalCount: 1, activeCount: 0},
  {name: 'Add one +1 WOUND card', totalCount: 1, activeCount: 0},
  {name: 'Add one +1 IMMOBILIZE card', totalCount: 1, activeCount: 0},
  {name: 'Add one +1 CURSE card', totalCount: 1, activeCount: 0},
  {name: 'Add one +2 ⤵ FIRE card', totalCount: 1, activeCount: 0},
  {name: 'Add one +2 ⤵ ICE card', totalCount: 1, activeCount: 0},
  {name: 'Add one ⤵ EARTH and one ⤵ AIR card', totalCount: 1, activeCount: 0},
  {name: 'Add one ⤵ LIGHT and one ⤵ DARK card', totalCount: 1, activeCount: 0},
];

const get = () => {
  return {character: 'Spellweaver', cards: MOCK_DATA};
};

export default class {
  static get = get;
}

const MOCK_DATA = [
  {name: 'Card 1', imageUrl: 'https://picsum.photos/id/1/200/100'},
  {name: 'Card 2', imageUrl: 'https://picsum.photos/id/2/200/100'},
  {name: 'Card 3', imageUrl: 'https://picsum.photos/id/3/200/100'},
];

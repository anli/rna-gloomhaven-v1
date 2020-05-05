const get = () => {
  return {character: 'Spellweaver', cards: MOCK_DATA};
};

export default class {
  static get = get;
}

const MOCK_DATA = [{name: 'Card 1'}, {name: 'Card 2'}, {name: 'Card 3'}];

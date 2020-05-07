export interface Card {
  name: string;
  imageUrl: string;
}

export interface Perk {
  name: string;
  totalCount: number;
  activeCount: number;
}

export interface PerkSelection {
  [name: string]: number;
}

export interface State {
  cards: Card[];
  perkSelection: PerkSelection;
}

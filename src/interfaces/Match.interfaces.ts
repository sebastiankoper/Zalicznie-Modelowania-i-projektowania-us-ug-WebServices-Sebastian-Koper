export interface Mecz {
  dzien_gry: Date;
  zespol_1: Zespol;
  zespol_2: Zespol;
  wynik: string;
  nazwa: string;
  opis: string;
}

export interface Zespol {
  kraj: string;
  wynik: number;
}

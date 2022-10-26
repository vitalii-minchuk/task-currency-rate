export enum Currencies {
  'usd' = 'usd',
  'uah' = 'uah',
  'pln' = 'pln',
  'eur' = 'eur',
}

export type ConvertType = 'from' | 'to';

export type ChangeCurrencyEvent = {
  currency: keyof typeof Currencies;
  convertType: ConvertType;
};
export type ChangeAmountEvent = {
  amount: number;
  convertType: ConvertType;
};

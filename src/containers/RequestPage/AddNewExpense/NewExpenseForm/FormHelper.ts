/* eslint-disable no-restricted-properties */
/* eslint-disable no-param-reassign */
export const expenseTypesOptions = [
  {
    label: 'Hotel',
    value: 'hotel-fee',
  },
  {
    label: 'Comida',
    value: 'food',
  },
  {
    label: 'Trasporte',
    value: 'transport',
  },
];

const currencyList = [
  {
    CtryNm: 'BRAZIL',
    CcyNm: 'Brazilian Real',
    PtBrName: 'Real Brasileiro',
    Ccy: 'BRL',
    CcyNbr: '986',
    CcyMnrUnts: '2',
  },
  {
    CtryNm: 'BRITISH INDIAN OCEAN TERRITORY (THE)',
    PtBrName: 'Dollar Americano',
    CcyNm: 'US Dollar',
    Ccy: 'USD',
    CcyNbr: '840',
    CcyMnrUnts: '2',
  },
  {
    CtryNm: 'MEXICO',
    CcyNm: 'Mexican Peso',
    PtBrName: 'Peso Mexicano',
    Ccy: 'MXN',
    CcyNbr: '484',
    CcyMnrUnts: '2',
  },
];

export const currencyOptions = currencyList.map((c) => ({
  label: c.PtBrName,
  value: `${c.CtryNm}::${c.Ccy}`,
}));
const locale = 'pt-br';
export const currencyFormatter = (selectedCurrOpt: string) => (value: string | number | undefined) => {
  if (value === undefined) {
    value = '';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: selectedCurrOpt.split('::')[1],
  }).format(value as number);
};
export const currencyParser = (val: string | undefined) => {
  // for when the input gets clears
  if (!val || (typeof val === 'string' && !val.length)) {
    val = '0.0';
  }

  // detecting and parsing between comma and dot
  const group = new Intl.NumberFormat(locale).format(1111).replace(/1/g, '');
  const decimal = new Intl.NumberFormat(locale).format(1.1).replace(/1/g, '');
  let reversedVal: number | string = val.replace(new RegExp(`\\${group}`, 'g'), '');
  reversedVal = reversedVal.replace(new RegExp(`\\${decimal}`, 'g'), '.');
  //  => 1232.21 €

  // removing everything except the digits and dot
  reversedVal = reversedVal.replace(/[^0-9.]/g, '');
  //  => 1232.21

  // appending digits properly
  const digitsAfterDecimalCount = (reversedVal.split('.')[1] || []).length;
  const needsDigitsAppended = digitsAfterDecimalCount > 2;

  if (needsDigitsAppended) {
    reversedVal = Number(reversedVal) * Math.pow(10, digitsAfterDecimalCount - 2);
  }

  return Number.isNaN(reversedVal) ? 0 : reversedVal;
};

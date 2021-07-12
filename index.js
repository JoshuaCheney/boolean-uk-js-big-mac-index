/*
Index is calculated by :
  - Get current US Big Mac price
  - Get current Big Mac price from country we're comparing
  - Divide US Big Mac price by country's Big Mac price
    (this is called the implied purchasing power)
  - Get country's currency rate to USD value
  - Substract currency rate with the implied purchasing power
  - Divide the previous result by the implied purchasing power
  - This will give you the Big Mac Index
  - Make sure you search for updated values!

For example, using figures in July 2008:
  - the price of a Big Mac was $3.57 in the United States 
  - the price of a Big Mac was £2.29 in the United Kingdom 
  - the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
  - this compares with an actual exchange rate of $2.00 to £1 at the time
  - (2.00 – 1.56) / 1.56 = 28%
  - the pound was thus overvalued against the dollar by 28%
*/
// the price of a Big Mac was $3.57 in the United States (varies by store)
// the price of a Big Mac was £2.29 in the United Kingdom (varies by region)
// the implied purchasing power parity was $1.56 to £1, that is $3.57/£2.29 = 1.56
// this compares with an actual exchange rate of $2.00 to £1 at the time
// (2.00–1.56)/1.56 = 28%
// the pound was thus overvalued against the dollar by 28%

// UK

const bigMacUS = 3.57;
const bigMacUK = 2.29;

const purchasingPowerUK = bigMacUS / bigMacUK;

console.log(purchasingPowerUK);

const dollarValue = 2.0;

const ukbigmacpriceindex =
  (dollarValue - purchasingPowerUK) / purchasingPowerUK;

console.log(ukbigmacpriceindex);

const UKValue = (ukbigmacpriceindex * 100).toFixed(); // Google search toFixed()

console.log(typeof UKValue);
console.log(UKValue + "%");

// australia

const bigMacAUS = 6.4;

const purchasingPowerAUS = bigMacUS / bigMacAUS;

console.log(purchasingPowerAUS);

const dollarValueAUS = 1.34;

const AUSbigmacpriceindex =
  (dollarValueAUS - purchasingPowerAUS) / purchasingPowerAUS;

console.log(AUSbigmacpriceindex);

const AusValue = (AUSbigmacpriceindex * 100).toFixed(); // Google search toFixed()

console.log(typeof AusValue);
console.log(AusValue + "%");

//

const bigMacCanada = 5.69;

const purchasingPowerCanada = bigMacUS / bigMacCanada;

console.log(purchasingPowerCanada);

const dollarValueCanada = 1.25;

const canadabigmacpriceindex =
  (dollarValueCanada - purchasingPowerCanada) / purchasingPowerCanada;

console.log(canadabigmacpriceindex);

const CanadaValue = (canadabigmacpriceindex * 100).toFixed(); // Google search toFixed()

console.log(typeof CanadaValue);
console.log(CanadaValue + "%");

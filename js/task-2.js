function getShippingMessage(country, price, deliveryFee) {
  const priceNum = Number.parseFloat(price);
  const deliveryFeeNum = Number.parseFloat(deliveryFee);
  const totalPrice = priceNum + deliveryFeeNum;
  //   return `Shipping to ${country} will cost ${price + deliveryFee} credits`; (Burada da aynı şekilde değişken tanımlanmdan yazılabilir.)
  return `Shipping to ${country} will cost ${totalPrice} credits`;
}
console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

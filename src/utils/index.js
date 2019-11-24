export const costCalculator = ({
  duration,
  amountOfGigabytes,
  upfrontPayment
}) => {
  const applyDiscont = (val, discount) => val - (val / 100) * discount

  const calculatedPrice = duration * (amountOfGigabytes * 2)

  if (upfrontPayment) {
    return applyDiscont(calculatedPrice, 10)
  }

  return calculatedPrice
}

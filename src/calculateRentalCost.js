/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCost = days * 40;

  if (days >= 3 && days < 7) {
    return baseCost - 20;
  }

  if (days >= 7) {
    return baseCost - 50;
  }

  return baseCost;
}

module.exports = calculateRentalCost;

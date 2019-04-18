function produceTipCalculator(tip) {
  return function(tipCalculator) {
    return tipCalculator * tip;
  };
}
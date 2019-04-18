function produceTipCalculator(tip) {
  return function(tipCalculator) {
    return tipCalculator * tip;
  };
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ItemId;
    }
 
}
}
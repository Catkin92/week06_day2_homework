const Paint = function (litres) {
  this.litres = litres;
};

Paint.prototype.isEmpty = function () {
  if(this.litres === 0) {
    return true;
  }
  else {
    return false
  };
};

Paint.prototype.empty = function () {
  this.litres = 0
};

module.exports = Paint;


// A paint can should:
//
// have a number of litres of paint
// be able to check if it is empty
// be able to empty itself of paint

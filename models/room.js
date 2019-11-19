const Room = function (area) {
  this.area = `${area}sqm`;
  this.painted = false;
};

Room.prototype.paintRoom = function () {
  this.painted = true;
};

module.exports = Room;

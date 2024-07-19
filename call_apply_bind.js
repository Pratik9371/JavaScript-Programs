let participant1 = {
  name: "Lily",
  battery: 70,
  chargeBattery: function (a, b) {
    this.battery = this.battery + a + b;
  },
};

let participant2 = {
  name: "John",
  battery: 30,
};

participant1.chargeBattery.call(participant2, 20, 30);

console.log(participant2);

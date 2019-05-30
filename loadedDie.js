function makeLoadedDie() {

  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var dieRolls = 0;
  var count = 0;

  return function() {
    dieRolls = list[count]
    count++
    return dieRolls
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 1
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 2
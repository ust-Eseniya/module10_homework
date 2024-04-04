if (!x || !x.trim() || isNaN(x)) {
    console.log("Упс, кажется, вы ошиблись");
  } else {
    x = +x;
    if (typeof x === "number") {
      if (x % 2 === 0) {
        console.log("Это число чётное");
      } else if (Math.abs(x % 2) === 1) {
        console.log("Это число нечётное");
      } else {
        console.log("Это число не является ни чётным, ни нечётным");
      }
    }
  }
let x;
x = none;

if (typeof x === "number"){
  console.log ('Х-число')
} else if (typeof x === "string"){
  console.log ('Х-строка')
} else if (typeof x === "boolean"){
  console.log ('Х-да или нет')
} else {
  console.log ('Тип x не определён')
}
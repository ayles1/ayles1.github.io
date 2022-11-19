let jetski1 = {
  type: "Гидроцикл",
  name: "BRP SeaDoo GTI 130hp",
  price: "1049500",
  drive: "front",
  availability: "true",
  power: "110",
  country: "USA",
};

let jetski2 = {
  type: "Гидроцикл",
  name: "Spark 2-UP 900 Ho",
  price: "857666",
  drive: "rear",
  availability: "true",
  power: "91",
  country: "Russia",
};

let arr = [...Object.entries(jetski1), ...Object.entries(jetski2)];
console.log(arr);

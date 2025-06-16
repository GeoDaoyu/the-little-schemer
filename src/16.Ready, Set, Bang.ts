const sweetTooth = (food: string) => {
  return food + "cake";
};
let last = "angelfood";

const sweetToothL = (food: string) => {
  last = food;
  return food + "cake";
};

let ingredients = [];
const sweetToothR = (food: string) => {
  ingredients = [food, ...ingredients];
  return food + "cake";
};

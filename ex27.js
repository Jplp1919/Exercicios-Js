function isString(thing){
 if(typeof thing === "string"){
  return thing;
 }
};

const things = [1, "João", 4, "Giovanna", 6];


const strings = things.filter(isString);

console.log(strings);
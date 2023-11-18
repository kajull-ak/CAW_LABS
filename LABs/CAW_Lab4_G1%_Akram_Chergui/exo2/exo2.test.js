const chunk = require("./exo2");
const last = require("./exo2");
const first = require("./exo2");

myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString()); console.log(myColor.join());
console.log(myColor.join(''));


it("should return Red",()=>{
  const result1 =first(myColor);
  expect(result1).toBe("Black");
})

it("should return Black",()=>{
  const result2 =last(myColor);
  expect(result2).toBe("Black");
})

it("should return 'Red', 'Green', 'White', 'Black'",()=>{
  const result3 =chunk(myColor,6);
  expect(result3).toStrictEqual([["Red", "Green", "White", "Black"]]);
})
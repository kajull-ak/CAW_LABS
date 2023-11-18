const exf = require("./exo1")

/* it("should return 3",()=>{
  const result =sum(0,3)
  expect(result).toBe(3)
}) */

it("should return akram",()=>{
  const result =exf("akram ",3)
  expect(result).toBe("akram akram akram ");
})

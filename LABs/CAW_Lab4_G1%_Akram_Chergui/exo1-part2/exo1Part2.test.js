const myNotation = require('./exo1Part2');


 it("should return 3.8",()=>{
    const numbers = [1, 2, 3, 4, 9];
    const result =myNotation.calculateAverage(numbers)
    expect(result).toBe(3.8);
  })
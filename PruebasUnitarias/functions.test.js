const functions = require("./functions.js");

describe('multiply function', () => {
  it('should return product when sent two numbers', () => {
    //ARRANGE
    const num1 = 3;
    const num2 = 5;

    //ACT
    const result = functions.multiply(num1, num2);
    
    //ASSERT
    expect(result).toBe(15);
  });

  it('should return product when sent two numbers', () => {
    //ARRANGE
    const num1 = 10;
    const num2 = 20;

    //ACT
    const result = functions.multiply(num1, num2);

    //ASSERT
    expect(result).toBe(200);
  });

  it('should return product when sent two numbers', () => {
    //ARRANGE
    const a = 5;
    const b = 2;

    //ACT
    const result = functions.multiply(a, b);

    //ASSERT
    expect(result).toBe(10);
  });
});

describe('isNull function', () => {
  it('should return null', () => {
    //ACT
    const result = functions.isNull();
    
    //ASSERT
    expect(result).toBeNull();
  });
});

describe('checkTruthy function', () => {
  it('should return true when true is passed', () => {
    //ARRANGE
    const value = true;

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBe(true);
  });
  
  it('should return false when false is passed', () => {
    //ARRANGE
    const value = false;

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT 
    expect(result).toBe(false);
  });

  it('should return false when any other value is passed', () => {
    //ARRANGE
    const value = 0;

    //ACT
    const result = functions.checkTruthy(value);

    //ASSERT
    expect(result).toBe(false);
  });
});

describe('addLastName function', () => {
  it('should return full name with last name appended', () => {
    //ARRANGE
    const lastName = 'Perez';

    //ACT
    const result = functions.addLastName(lastName);

    //ASSERT
    expect(result).toEqual({ firstname: 'Pepito', lastname: 'Perez' });
  });
});

const fizzbuzz = require('./fizzbuzz');

// * A number is fizz if it is divisible by 3 or if it has a 3 in it
 //* A number is buzz if it is divisible by 5 or if it has a 5 in it

test('1 is not divisible by 3', ()=> {
  expect(fizzbuzz(1)).toBe(1);
});

test('2 is not divisible by 5', ()=> {
    expect(fizzbuzz(2)).toBe(2);
  });

  test('21 is divisible by 3', ()=> {
    expect(fizzbuzz(21)).toBe("fizz");
  });

  test('25 is divisible by 5', ()=> {
    expect(fizzbuzz(25)).toBe("buzz");
  });

  test('30 is divisible by 3 and 5', ()=> {
    expect(fizzbuzz(30)).toBe("fizzbuzz");
  });

  test('23 it has a 3 in it', ()=> {
    expect(fizzbuzz(23)).toBe("fizz");
  });

  test('85 it has a 5 in it', ()=> {
    expect(fizzbuzz(85)).toBe("buzz");
  });
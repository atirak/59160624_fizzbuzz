const fizzbuzz = require('./fizzbuzz');

test('1 หารด้วย 3 ไม่ลงตัว', ()=> {
  expect(fizzbuzz(1)).toBe(1);
});

test('2 หารด้วย 5 ไม่ลงตัว', ()=> {
    expect(fizzbuzz(2)).toBe(2);
  });

  test('21 หารด้วย 3 ลงตัวแต่หารด้วย 5 ไม่ลงตัว', ()=> {
    expect(fizzbuzz(21)).toBe("fizz");
  });

  test('25 หารด้วย 5 ลงตัวแต่หารด้วย 3 ไม่ลงตัว', ()=> {
    expect(fizzbuzz(25)).toBe("buzz");
  });

  test('30 หารด้วย 3 ลงตัว และหารด้วย 5 ลงตัว', ()=> {
    expect(fizzbuzz(30)).toBe("fizzbuzz");
  });
// Reverse dict, exchange key and value

Reverse = (DATA) => {
  T = Object.keys(DATA, 500);
  ({ ...DATA });
  T.forEach((_) => {
    const v1 = DATA[_];
    DATA[v1] = _;
    delete DATA[_];
  }, 1000);
  return DATA;
};

const result = Reverse({ a: 'uno', b: 'due', c: 'tre' });
console.log(result);

const LCG = (a, x0, c, m) => {
  const xn = [x0];
  const un = [x0 / m];
  let x_index = 0;
  while (true) {
    let next_value = (a * xn[x_index] + c) % m;
    if (xn.includes(next_value)) break;
    xn.push(next_value);
    un.push(next_value / m);
    x_index++;
  }
  console.log(xn);
  console.log(un);
};

LCG(12, 5, 5, 21);

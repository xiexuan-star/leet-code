function dfs(obj) {
  const res = [];

  Object.values(obj).forEach(v => {
    if (typeof v === 'object') return res.push(...dfs(v));
    res.push(v);
  });

  return res;
}

console.log(dfs({
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 4 } },
  g: { h: 5, i: 6, j: { k: 7 } }
}));

function bfs(obj) {
  const res = [];
  const stack = [obj];
  while (stack.length) {
    const target = stack.shift();
    Object.values(target).forEach(v => {
      if (typeof v === 'object') return stack.push(v);
      res.push(v);
    });
  }
  return res;
}
console.log(bfs({
  a: 1,
  b: 2,
  c: { d: 3, e: { f: 6 } },
  g: { h: 4, i: 5, j: { k: 7 } }
}));

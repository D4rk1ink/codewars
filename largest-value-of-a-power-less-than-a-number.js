// Largest Value of a Power Less Than a Number

function isEven(n) {
  return n % 2 === 0
}

// a^x = y == loga(y) = x
function log(a, y) {
  return Math.log(y) / Math.log(a)
}

function perfectDivisors(n) {
  const perfects = []
  for (
    let i = isEven(n) ? 2 : 3;
    i <= Math.sqrt(n);
    isEven(n) ? i++ : (i += 2)
  ) {
    if (n % i === 0) {
      perfects.push(i)
    }
  }
  return perfects
}

function largestPower(n) {
  let largest = 0
  let count = 0
  if (n === 1) {
    return [0, -1]
  }
  for (let y = n - 1; y > 0; y--) {
    largest = y
    count = 0
    const divisible = perfectDivisors(y)
    for (const a of divisible) {
      const x = Number.parseFloat(log(a, y)).toPrecision(15) * 1
      if (x % 1 === 0) {
        count += 1
      }
    }
    if (count > 0) {
      break
    }
  }
  return count === 0 ? [1, -1] : [largest, count]
}

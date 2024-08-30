// Problem Solving Basic - Test 2
const arr = [1, 1, 0, -1, -1];

const plusMinus = (arr) => {
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;

  arr.map((num) => {
    if (num > 0) ++posCount;
    if (num < 0) negCount++;
    if (num === 0) zeroCount++;
  });

  console.log((posCount / arr.length).toFixed(6));
  console.log((negCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
};

plusMinus(arr);

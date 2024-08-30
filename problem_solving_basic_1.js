// Problem Solving Basic - Test 1

const arr = [1, 2, 3, 4, 5];

const minMaxSum = (arr) => {
  let max = -9999;
  let min = 9999;
  let len = 0;

  while (len < arr.length) {
    let sum = 0;
    const newArr = arr.filter((num, idx) => idx !== len);

    newArr.map((a) => {
      sum = sum + a;
    });

    if (sum > max) {
      max = sum;
    }

    if (sum < min) {
      min = sum;
    }

    len++;
  }

  console.log(`${min}  ${max}`);
};

minMaxSum(arr);

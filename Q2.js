function oddOrEven(array) {
    const sum = array.reduce((acc, cur) => acc + cur, 0);
    return sum % 2 === 0 ? "even" : "odd";
  }
  let arr=[1,2,3,4,5]
  console.log(oddOrEven(arr))
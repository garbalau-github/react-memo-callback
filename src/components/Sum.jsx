const Sum = (num) => {
  console.log(`Sum(sum): ${num}`);

  // Loop
  let i = 0;
  if (num <= 0) {
    return 0;
  } else {
    while (i < 20000000000) i++;
  }
  return num;
};

export default Sum;

const ReactMemo = ({ count }) => {
  console.log(`ReactMemo: ${count}`);

  // Loop
  let i = 0;
  if (count === 1) {
    console.log('count === 1');
  }

  if (count === 2) {
    console.log('count === 2');
  } else if (count === 3) {
    console.log('count === 3');
  } else {
    while (i < 20000000000) i++;
    return count;
  }
};

export default ReactMemo;

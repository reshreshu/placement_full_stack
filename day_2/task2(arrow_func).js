// Arrow function (with arguments without return type)
arrowfunc = (inputArray) => {
    console.log(inputArray);
  };
  arrowfunc([1, 2, 3]);
  
  // Arrow function (with arguments with return type)
  arrowfunc = (inputArray) => {
    return inputArray[2];
  };
  console.log(arrowfunc([1, 2, 3]));
  
  // Arrow function (without arguments and without return type)
  arrowFunc = () => {
    console.log([10, 20, 30]);
  };
  arrowFunc();
  
  // Arrow function (without arguments and with return type)
  arrowFunc = () => {
    return [10, 20, 30];
  };
  console.log(arrowFunc());
  
const getRandomInteger = (from, to) => {

  if(from < 0 ){
    throw 'Введите число больше или равно нулю';
  }
  if(to < 0 ){
    // Math.abs(to);
    throw 'Введите число больше или равно нулю';
  }

  const rand = from + Math.random() * (to + 1 - from);

  return Math.round(rand);

};
getRandomInteger(2,100);


const getFloatInteger = (from, to, symbols) => {

  if(from < 0 ){
    return Math.abs(from);
  }
  if(to < 0 ){
    return Math.abs(to);
  }

  const number = (from + Math.random() * (to + 1 - from)).toFixed(symbols);

  return Number(number);

};

getFloatInteger(2, 40, 5);

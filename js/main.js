const getRandomInteger = (from, to) => {

  if(from < 0 || to <= from){
    throw new Error('Введите число больше или равно нулю, второе число диапазона должно быть больше первого');
  };

  const randomInteger = Math.random() * (to - from) + from;

  return Math.round(randomInteger);

};

getRandomInteger(2,100);

const getRandomFloat = (from, to, symbols) => {

  if(from < 0 || to <= from){
    throw new Error('Введите число больше или равно нулю, второе число диапазона должно быть больше первого');
  };

  const RandomFloat = (Math.random() * (to - from) + from).toFixed(symbols);

  return Number(RandomFloat);

};

getRandomFloat(2, 40, 5);

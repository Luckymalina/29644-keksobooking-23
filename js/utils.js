const getRandomInteger = (from, to) => {

  if(from < 0 || to <= from){
    throw new Error('Введите число больше или равно нулю, второе число диапазона должно быть больше первого');
  }

  const randomInteger = Math.random() * (to - from) + from;

  return Math.round(randomInteger);

};

const getRandomFloat = (from, to, symbols) => {

  if(from < 0 || to <= from){
    throw new Error('Введите число больше или равно нулю, второе число диапазона должно быть больше первого');
  }

  const RandomFloat = (Math.random() * (to - from) + from).toFixed(symbols);

  return Number(RandomFloat);

};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomArrayElements = (elements) => elements.slice(0,getRandomInteger(0,elements.length - 1));

export {getRandomInteger,getRandomFloat,getRandomArrayElement,getRandomArrayElements};
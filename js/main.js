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

const TYPE_APARTMENT = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const FEATURES_APARTMENT = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const CHECKIN_APARTMENT = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_APARTMENT = [
  '12:00',
  '13:00',
  '14:00',
];

const PHOTOS_APARTMENT = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const getAuthor = (i) => {
  if(i > 9) {
    return {
      avatar: 'img/avatars/user' + i + '.png',
    }
  }
  else {
    return {
      avatar: 'img/avatars/user' + '0' + i + '.png',
    }
  }
};

const offer = {
  title: 'Сдаются апартаменты', //заголовок предложения. Придумайте самостоятельно.
  address: 'по адресу {{location.lat}}, {{location.lng}}', //составляется из географических координат по маске.. маска это регулярка какая-то?
  price: getRandomInteger(500, 2500), //cлучайное целое положительное число.
  type: getRandomArrayElement(TYPE_APARTMENT),// одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
  rooms: getRandomInteger(1,6),//Случайное целое положительное число. Ну диапазон же мы объявляем? Не может же быть 100 комнат
  guests: getRandomInteger(), //количество гостей, которое можно разместить. Случайное целое положительное число. (?)
  checkin: '', //одно из трёх фиксированных значений: 12:00, 13:00 или 14:00. как понять фиксированную, нужно ли делать перебор, как определить какое значение из 3 возвращать?
  checkout: '', //одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  features: [], //какая-то функция, которая выдает случайное количество значений опций дома, не повторяясь,
  description: '1-комнатные апартаменты. С видом на колбасный магазин и склад кошачей еды',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg'],
};

const getLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000,5),
  lng: getRandomFloat(139.70000,139.80000,5),
});

const getRandomArrayElements = (elements) => elements.slice(0,getRandomInteger(0,elements.length - 1));

// eslint-disable-next-line id-length
const createAdvert = (i) => {
  const currentLocation = getLocation();
  return {
    author: getAuthor(i),
    offer: {
      title: 'Сдаются апартаменты',
      address: `${currentLocation.lat  }, ${  currentLocation.lng}`,
      price: getRandomInteger(500, 1000000),
      type: getRandomArrayElement(TYPE_APARTMENT),
      rooms: getRandomInteger(1, 100),
      guests: getRandomInteger(1, 100),
      checkin: CHECKIN_APARTMENT[getRandomInteger(0,CHECKIN_APARTMENT.length - 1)],
      checkout: CHECKOUT_APARTMENT[getRandomInteger(0,CHECKOUT_APARTMENT.length - 1)],
      features: getRandomArrayElements(FEATURES_APARTMENT),
      photos: getRandomArrayElements(PHOTOS_APARTMENT),
    },
    location: currentLocation,
  };
};

// eslint-disable-next-line id-length
const adverts = new Array(10).fill(null).map((el,i) => createAdvert(i));

// for(let i = 0; i < 10; i++) {
//   const currentAdvert = createAdvert(i);
//   arrayAdverts.push(currentAdvert);
// }

// eslint-disable-next-line no-console
console.log(adverts);

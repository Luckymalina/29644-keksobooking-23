// На основе написанных в прошлом задании вспомогательных функций напишите необходимые функции для создания массива
// из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

// Мои действия:
// 1. Создать объекты с разными типами характеристики для объявления - автор, описание, координаты.
// 2. Написать функцию, которая будет добавлять в массив из 10 слотов объекты
// создать объект объявления, в котором выписать все ключи и значения согласно ТЗ
// обозначить, что должно быть 10 объявлений
// генерация объекта объявления
// добавление объекта объявленияв массив



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
const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

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

//написать функцию, которая выдает случайное количество значений опций дома, не повторяясь?
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

//1 объект состоит из
// author, объект — описывает автора. Содержит одно поле:
// avatar, строка — адрес изображения вида img/avatars/user{{xx}}.png,
// где {{xx}} — это число от 1 до 10. Перед однозначными числами ставится 0.
// Например, 01, 02...10. Адреса изображений не повторяются.
const author = {
  avatar: 'img/avatars/user{{xx}}.png',
};

// offer, объект — содержит информацию об объявлении. Состоит из полей:
//   title, строка — заголовок предложения. Придумайте самостоятельно.
//   address, строка — адрес предложения. Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
//   price, число — стоимость. Случайное целое положительное число.
//   type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
//   rooms, число — количество комнат. Случайное целое положительное число.
//   guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
//   checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
//   checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
//   features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner. Значения не должны повторяться.
//   description, строка — описание помещения. Придумайте самостоятельно.
//   photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
const offer = {
  title: 'Сдаются апартаменты',
  address: 'по адресу {{location.lat}}, {{location.lng}}', //верно ли тут записала? если плюсовать к строке, то линтер жалуется.
  price: getRandomInteger(),
  type: getRandomArrayElement(TYPE_APARTMENT),
  rooms: getRandomInteger(),
  guests: getRandomInteger(),
  checkin: '', //как понять фиксированную, нужно ли делать перебор, как определить какое значение из 3 возвращать?
  checkout: '',
  features: [], //какая-то функция, которая выдает случайное количество значений опций дома, не повторяясь,
  description: '1-комнатные апартаменты. С видом на колбасный магазин и склад кошачей еды',
  photos: ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg','https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg'],
};

// location, объект — местоположение в виде географических координат. Состоит из двух полей:
//   lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
//   lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000
const location = {
  lat: getRandomFloat(35.65000, 35.70000,5),
  lng: getRandomFloat(139.70000,139.80000,5),
};

const createAdvert = () => {
  return {
    author: author.avatar,
    title: offer.title,
    address: offer.address,
    price: offer.price,
    type: offer.type,
    rooms: offer.rooms,
    guests: offer.guests,
    checkin: offer.checkin,
    checkout: offer.checkout,
    features: offer.features,
    description: offer.description,
    photos: offer.photos,
    lat: location.lat,
    lng: location.lng,
  };
};

const arrayAdverts = [];

console.log(arrayAdverts);

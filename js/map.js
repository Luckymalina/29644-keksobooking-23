// При открытии страница находится в неактивном состоянии. На месте карты отображается серый прямоугольник.
// Загрузка и успешная инициализация карты (карта реализуется сторонней библиотекой Leaflet) переводит страницу в
// активное состояние. В активном состоянии страница позволяет вносить изменения в форму и отправлять её на сервер.
// После загрузки данных с сервера просматривать похожие объявления на карте, фильтровать их и уточнять подробную
// информацию о них, показывая для каждого из объявлений карточку.

// Поле адреса должно быть заполнено всегда, в том числе сразу после активации страницы.
// 5.3. Каждое из объявлений показывается на карте в виде метки. Размеры метки похожего объявления — 40 на 40, размеры
// специальной метки выбора адреса — 52 на 52.
// 5.9. Как до изменения фильтров, так и при изменении фильтра, на карте должны показываться все подходящие варианты,
// но не более 10 меток (не считая специальной), независимо от выбранного фильтра. Показанные метки должны удовлетворять
// всем выбранным фильтрам.


import {getRandomInteger,getRandomFloat,getRandomArrayElement,getRandomArrayElements} from '../utils.js';

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
      avatar: `img/avatars/user${  i  }.png`,
    };
  }
  else {
    return {
      // eslint-disable-next-line no-useless-concat
      avatar: `${'img/avatars/user' + '0'}${  i  }.png`,
    };
  }
};

const getLocation = () => ({
  lat: getRandomFloat(35.65000, 35.70000,5),
  lng: getRandomFloat(139.70000,139.80000,5),
});

const map = (i) => {
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

const adverts = new Array(10).fill(null).map((el,i) => map(i));

console.log(adverts);

export {getAuthor,getLocation,map};

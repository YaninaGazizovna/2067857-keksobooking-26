const SIMILAR_PPROPOSAL_COUNT = 10;

const Offer = {
  TITLE: 'Welcome to vacation',

  ADDRESS: [
    //LOCATION.lat,
    //LOCATION.lat
  ],

  PRICE: {
    min: 500,
    max: 10000,
  },

  HOUSE_TYPE: ['palace', 'flat', 'house', 'bungalow', 'hotel'],

  ROOMS: {
    min: 1,
    max: 20,
  },

  GUESTS: {
    min: 1,
    max: 60,
  },

  CHECKIN: ['12:00', '13:00', '14:00'],

  CHECKOUT: ['12:00', '13:00', '14:00'],

  FEATURES: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],

  DESCRIPTION: 'Incredible location,lovely restaraunt,friendly welcome, kidness staff',

  PHOTOS: [
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
    'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
  ],
};

const Location = {
  LAT: {
    min: 35.65,
    max: 35.7,
  },

  LNG: {
    min: 139.7,
    max: 139.8,
  },
};

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min < 0 || max <= min) {
    return;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function getRandomArbitrary(min, max) {
  if (min < 0 || max <= min) {
    return;
  }

  return Math.random() * (max - min) + min;
}

function getMixArr(arr) {
  return arr.map((i) => [Math.random(),i]).sort().map((i) => i[1]);

}

const author = {
  avatar: function () {
    const createAvatar = [];
    const image = 'img/avatars/user';
    for (let i = 1; i <= 10; i++) {
      if (i < 10) {
        createAvatar[i] = `${image}0${i}.png`;
      } else {
        createAvatar[i] = `${image + i}.png`;
      }
    }

    return createAvatar;
  },
};

const createAuthor = function () {
  const randomAvatarIndex = getRandomIntInclusive(0, author.avatar().length - 1);

  return { avatar: author.avatar()[randomAvatarIndex] };
};

const createProposal = function () {
  const randomPrice = getRandomIntInclusive(Offer.PRICE.min, Offer.PRICE.max);
  const randomGuests = getRandomIntInclusive(Offer.GUESTS.min, Offer.GUESTS.max);
  const randomRoom = getRandomIntInclusive(Offer.ROOMS.min, Offer.ROOMS.max);
  const randomHouseTypeIndex = getRandomIntInclusive(0, Offer.HOUSE_TYPE.length - 1);
  const randomCheckinIndex = getRandomIntInclusive(0, Offer.CHECKIN.length - 1);
  const randomCheckoutIndex = getRandomIntInclusive(0, Offer.CHECKOUT.length - 1);
  const randomLat = getRandomArbitrary(Location.LAT.min, Location.LAT.max);
  const randomLng = getRandomArbitrary(Location.LNG.min, Location.LNG.max);
  const getRandomFeaturesArray = getMixArr(Offer.FEATURES).splice(getRandomIntInclusive(0, Offer.FEATURES.length - 1));
  const getRandomPhotosArray = getMixArr(Offer.PHOTOS).splice(getRandomIntInclusive(0, Offer.PHOTOS.length - 1));

  return {
    author: createAuthor(),
    title: Offer.TITLE,
    address: `${randomLat}, ${randomLng}`,
    price: `${randomPrice} USD`,
    type: Offer.HOUSE_TYPE[randomHouseTypeIndex],
    rooms: randomRoom,
    guests: randomGuests,
    checkin: Offer.CHECKIN[randomCheckinIndex],
    checkout: Offer.CHECKOUT[randomCheckoutIndex],
    description: Offer.DESCRIPTION,
    location: {
      lat: randomLat,
      lng: randomLng
    },
    features: getRandomFeaturesArray,
    photos: getRandomPhotosArray,
  };
};

Array.from({ length: SIMILAR_PPROPOSAL_COUNT }, createProposal);

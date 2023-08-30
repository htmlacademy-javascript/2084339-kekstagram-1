// id
// url
// description
// likes
// comments: id, avatar, message

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Мои выходные',
  'Фото на память',
  'Доброе утро!',
  'Просто оставлю это здесь',
  'Ето я',
  'Как вам?'
];

const NAMES = [
  'Аня',
  'Ваня',
  'Маша',
  'Саша',
  'Юля',
  'Юра'
];

const PHOTOS_NUMBER = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  commentID: getRandomInteger(1, 25),
  commentAvatar: 'img/avatar-${getRandomInteger(1, 6)}.svg',
  commentMessage: Array.from({length: getRandomInteger(1, 2)}, getRandomArrayElement(MESSAGES)),
  commentName: getRandomArrayElement(NAMES)
});

const createPhoto = () => ({
  photoID: getRandomInteger(1, 25),
  photoURL: getRandomInteger(1, 25),
  photoDescription: getRandomArrayElement(DESCRIPTIONS),
  photoLike: getRandomInteger(15, 200),
  photoComment: Array.from({length: getRandomInteger(1, 30)}, createComment)
});

const similarPhotos = Array.from({length: PHOTOS_NUMBER}, createPhoto);

similarPhotos();

import {getRandomInteger, getRandomArrayElement} from './util.js';
import {MESSAGES, DESCRIPTIONS, NAMES} from './const.js';

const PHOTOS_NUMBER = 25;

const messageArray = Array.from({length: getRandomInteger(1, 2)}, () => getRandomArrayElement(MESSAGES));

const createComment = () => ({
  commentID: getRandomInteger(1, 25),
  commentAvatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  commentMessage: messageArray.join(' '),
  commentName: getRandomArrayElement(NAMES)
});

const createPhoto = () => ({
  photoID: getRandomInteger(1, 25),
  photoURL: `photos/${getRandomInteger(1, 25)}.jpg`,
  photoDescription: getRandomArrayElement(DESCRIPTIONS),
  photoLike: getRandomInteger(15, 200),
  photoComment: Array.from({length: getRandomInteger(1, 30)}, () => createComment)
});

const similarPhotos = () => Array.from({length: PHOTOS_NUMBER}, () => createPhoto);

export {similarPhotos};

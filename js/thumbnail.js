const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({photoURL, photoDescription, photoComment, photoLike}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = photoURL;
  thumbnail.querySelector('.picture__info').alt = photoDescription;
  thumbnail.querySelector('.picture__comments').textContent = photoComment.length ;
  thumbnail.querySelector('.picture__likes').textContent = photoLike;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  container.append(fragment);
};

export {renderThumbnails};

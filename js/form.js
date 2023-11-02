import {resetScale, buttonScaleBigger, buttonScaleLittle, onButtonScaleBiggerClick, onButtonScaleLittleClick} from './scale.js';
import {createSlider, destroySlider} from './photo-effects.js';

const MAX_COUNT_HASHTAGS = 5;
const VALID_HASHTAG_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const VALID_HASHTAG_ERROR_MESSAGE = 'Использованы недопустимые символы';
const UNIQ_HASHTAG_ERROR_MESSAGE = 'Хештеги не должны повторяться';
const COUNT_HASHTAG_ERROR_MESSAGE = 'Максимальное количество хештегов - 5';

const formElement = document.querySelector('.img-upload__form');
const imgInputFieldForm = formElement.querySelector('.img-upload__input');
const modalForm = formElement.querySelector('.img-upload__overlay');
const closeButtonElement = modalForm.querySelector('.img-upload__cancel');
const hashtagsFieldElement = modalForm.querySelector('.text__hashtags');
const descriptionFieldElement = modalForm.querySelector('.text__description');

const pristine = new Pristine
(formElement,
  {classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'},
  false);

const normalizeHashtag = (text) => {
return text.trim().split(' ').filter((item) => Boolean(item.length))
};

const hasValidHashtag = (value) => {
  return normalizeHashtag(value).every(
    (item) => VALID_HASHTAG_SYMBOLS.test(item)
  )
};

pristine.addValidator(
  hashtagsFieldElement,
  hasValidHashtag,
  VALID_HASHTAG_ERROR_MESSAGE,
  2,
  false
);

const hasValidCount = (value) => {
  return normalizeHashtag(value).length <= MAX_COUNT_HASHTAGS;
};

pristine.addValidator(
  hashtagsFieldElement,
  hasValidCount,
  COUNT_HASHTAG_ERROR_MESSAGE,
  3,
  false
);

const hasUniqHashtag = (value) => {
  const lowerCaseHashtags = normalizeHashtag(value).map(
    (item) => item.toLowerCase()
  );
  return lowerCaseHashtags.length === new Set(lowerCaseHashtags).size;
};

pristine.addValidator(
  hashtagsFieldElement,
  hasUniqHashtag,
  UNIQ_HASHTAG_ERROR_MESSAGE,
  1,
  false
);

const onSubmit = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    formElement.submit();
  }
};

const openForm = () => {
  modalForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButtonElement.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  hashtagsFieldElement.addEventListener('keydown', onTextFieldKeydown);
  descriptionFieldElement.addEventListener('keydown', onTextFieldKeydown);
  formElement.addEventListener('submit', onSubmit);
  buttonScaleLittle.addEventListener('click', onButtonScaleLittleClick);
  buttonScaleBigger.addEventListener('click', onButtonScaleBiggerClick);
  createSlider();
};

const closeForm = () => {
  modalForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeButtonElement.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  hashtagsFieldElement.removeEventListener('keydown', onTextFieldKeydown);
  descriptionFieldElement.removeEventListener('keydown', onTextFieldKeydown);
  formElement.removeEventListener('submit', onSubmit);
  imgInputFieldForm.value = '';
  formElement.reset();
  pristine.reset();
  resetScale();
  destroySlider();
};

const onInputFieldChange = () => openForm();
imgInputFieldForm.addEventListener('change', onInputFieldChange);

const onCloseButtonClick = () => closeForm();

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeForm();
  }
}

const onTextFieldKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
}

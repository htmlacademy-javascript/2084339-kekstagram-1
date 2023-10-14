import {similarPhotos} from './data.js';
import {renderThumbnails} from './thumbnail.js';

const photos = similarPhotos();
renderThumbnails(photos);

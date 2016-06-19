import sample from 'lodash/sample';
import { BACKGROUND_COLORS } from './constants';

export const randomBackgroundColor = () => {
  return sample(BACKGROUND_COLORS);
};
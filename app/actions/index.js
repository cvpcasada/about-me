import * as ActionTypes from './ActionTypes';
import { createAction } from 'redux-actions';

export const firstAction = createAction(ActionTypes.USER_REQUEST);
export const pageLoad = createAction(ActionTypes.PAGE_LOAD);

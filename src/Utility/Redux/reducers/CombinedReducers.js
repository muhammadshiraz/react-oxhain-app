import { combineReducers } from 'redux';

import { ContactReducer } from "./ContactReducer";
import { ProductReducer } from "./ProductReducer";
import { ReviewReducer } from './ReviewReducer.js';

export default combineReducers({
  // Add your reducers here
  ContactReducer,
  ProductReducer,
  ReviewReducer,
});

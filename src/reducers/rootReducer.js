import { combineReducers } from 'redux';
import campaignReducer from './campaignReducer';
import renderDialogReducer from './renderDialogReducer';
export default combineReducers({
	campaignReducer,
	renderDialogReducer
});

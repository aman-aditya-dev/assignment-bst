import { combineReducers } from 'redux';
import campaignReducer from './campaignReducer';
import renderDialogReducer from './renderDialogReducer';
import languageChangeReducer from './languageChangeReducer';
export default combineReducers({
	campaignReducer,
	renderDialogReducer,
	languageChangeReducer
});

export const languageChange = value => dispatch => {
	dispatch({
		type: 'LANGUAGE_CHANGE',
		payload: value
	});
};

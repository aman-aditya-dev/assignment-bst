export const renderDialogAction = value => dispatch => {
	if (value) {
		document.body.style.background = '#e7e7e7';
	} else {
		document.body.style.background = '#fff';
	}
	dispatch({
		type: 'DIALOG_ACTION',
		payload: value
	});
};

export default (state = {}, action) => {
	switch (action.type) {
		case 'DIALOG_ACTION':
			return { popupData: action.payload };
		default:
			return state;
	}
};

export default (state = {}, action) => {
	switch (action.type) {
		case 'LANGUAGE_CHANGE':
			return { language: action.payload };
		default:
			return state;
	}
};

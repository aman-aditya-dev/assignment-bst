export default (state = {}, action) => {
	switch (action.type) {
		case 'CAMPAIGN_ACTION':
			return {
				isCampaign: action.payload
			};
		default:
			return state;
	}
};

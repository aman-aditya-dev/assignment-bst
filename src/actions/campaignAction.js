export const campaignAction = value => dispatch => {
	dispatch({
		type: 'CAMPAIGN_ACTION',
		payload: value
	});
};

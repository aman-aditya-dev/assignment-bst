import React from 'react';
import { connect } from 'react-redux';
function Toggle(props) {
	const { campaign, handleCampaign } = props;
	return (
		<div className="toggle">
			<ul>
				<li
					className={campaign === 'upcoming' || campaign === undefined ? 'selected' : ''}
					onClick={() => {
						handleCampaign('upcoming');
					}}>
					Upcoming Campaigns
				</li>
				<li
					className={campaign === 'live' ? 'selected' : ''}
					onClick={() => {
						handleCampaign('live');
					}}>
					Live Campaigns
				</li>
				<li
					className={campaign === 'past' ? 'selected' : ''}
					onClick={() => {
						handleCampaign('past');
					}}>
					Past Campaigns
				</li>
			</ul>
			<hr />
		</div>
	);
}

const mapStateToProps = state => ({
	...state,
	campaign: state.campaignReducer.isCampaign
});

export default connect(mapStateToProps)(Toggle);

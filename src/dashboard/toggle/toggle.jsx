import React from 'react';
import { connect } from 'react-redux';
import { withTranslation, Trans } from 'react-i18next';
function Toggle(props) {
	const { campaign, handleCampaign, value, t } = props;
	return (
		<div className="toggle">
			<ul>
				<li
					className={campaign === 'upcoming' || campaign === undefined ? 'selected' : ''}
					onClick={() => {
						handleCampaign('upcoming');
					}}>
					<Trans>
						{' '}{t('upcomingCampaign')}{' '}
					</Trans>
				</li>
				<li
					className={campaign === 'live' ? 'selected' : ''}
					onClick={() => {
						handleCampaign('live');
					}}>
					<Trans>
						{' '}{t('liveCampaign')}{' '}
					</Trans>
				</li>
				<li
					className={campaign === 'past' ? 'selected' : ''}
					onClick={() => {
						handleCampaign('past');
					}}>
					<Trans>
						{' '}{t('pastCampaign')}{' '}
					</Trans>
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

export default connect(mapStateToProps)(withTranslation('translations')(Toggle));

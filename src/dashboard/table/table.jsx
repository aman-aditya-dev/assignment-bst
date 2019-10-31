import React, { Component } from 'react';

import Row from './row/row';
import './table.scss';
import { withTranslation, Trans } from 'react-i18next';

class TableCampaign extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const { t } = this.props;
		// console.log('***************', this.props.data);
		return (
			<div className="campaignTable">
				<table>
					<thead>
						<tr>
							<th>
								<Trans>
									{' '}{t('date')}{' '}
								</Trans>
							</th>
							<th>
								<Trans>
									{' '}{t('campaign')}{' '}
								</Trans>
							</th>
							<th>
								<Trans>
									{' '}{t('view')}{' '}
								</Trans>
							</th>
							<th>
								<Trans>
									{' '}{t('actions')}{' '}
								</Trans>
							</th>
						</tr>
					</thead>
					<tbody>
						{this.props.data.map((rowData, index) =>
							<Row
								key={rowData.id}
								data={rowData}
								changedDate={(day, index) => this.props.changeDate(day, index)}
								handleCalendar={this.props.handleCalendar}
								calendarShow={this.props.calendarShow}
								index={index}
								renderDialog={this.renderDialog}
							/>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}
export default withTranslation('translations')(TableCampaign);

import React, { Component } from 'react';

import Row from './row/row';
import './table.scss';

class TableCampaign extends Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		// console.log('***************', this.props.data);
		return (
			<div className="campaignTable">
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Campaign</th>
							<th>View</th>
							<th>Actions</th>
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
export default TableCampaign;

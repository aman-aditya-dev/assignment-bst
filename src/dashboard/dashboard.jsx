import React, { Component } from 'react';
import aman from './aman.jpg';
import './dashboard.scss';
import { connect } from 'react-redux';
import { campaignAction } from '../actions/campaignAction';
import Toggle from './toggle/toggle';
import TableCampaign from './table/table';
import { differnceDays } from '../utils/timeHandler';
import data from '../mocks/data.json';
import Popup from '../popup/popup';
class Dashboard extends Component {
	constructor() {
        super();
        this.requiredData = {};
		this.state = { campaign: 'upcoming', data: data.data, calendarShow: false, requiredData: {}, dialogOpen:false};
	}
	handleCampaign = campaignType => {
        this.props.campaignAction(campaignType);
	};
    mutateData = () => {
		let toChangeData = this.state.data.slice();
		const  campaign  = this.props.campaign || 'upcoming';
		let requiredData;
		switch (campaign) {
			case 'upcoming':
				requiredData = toChangeData.filter(x => differnceDays(x.createdOn) > 0);
				break;
			case 'past':
				requiredData = toChangeData.filter(x => differnceDays(x.createdOn) < 0);
				break;
			default:
				requiredData = toChangeData.filter(x => differnceDays(x.createdOn) === 0);
        }
        this.requiredData = requiredData;
        return requiredData;
	};
	onChangeDate = (day, index) => {
        let requiredData  = this.requiredData;
        requiredData[index].createdOn = day.getTime();
        this.forceUpdate();
	};
	handleCalendar = () => {
		this.setState({ calendarShow: !this.state.calendarShow });
    };
    renderDialog = () => {
        this.setState({dialogOpen : !this.state.dialogOpen})
    }
    render() {
        const { popupData } = this.props;
        return (
            <>
                <div className={popupData ? "dashboardParent greyBg" : "dashboardParent"}>
                    <h2 className="title">Manage Campaigns</h2>
                    <Toggle handleCampaign={this.handleCampaign} />
                    <TableCampaign
                        data={this.mutateData()}
                        changeDate={this.onChangeDate}
                        handleCalendar={this.handleCalendar}
                />
                
                </div>
                {popupData && <Popup />}
            </>
		);
	}
}

const mapStateToProps = state => ({
	...state,
    campaign: state.campaignReducer.isCampaign,
    popupData: state.renderDialogReducer.popupData
});

const mapDispatchToProps = dispatch => ({
	campaignAction: x => dispatch(campaignAction(x))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

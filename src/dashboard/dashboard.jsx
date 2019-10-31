import React, { Component } from 'react';
import './dashboard.scss';
import { connect } from 'react-redux';
import { campaignAction } from '../actions/campaignAction';
import { languageChange } from '../actions/languageChange';
import Toggle from './toggle/toggle';
import TableCampaign from './table/table';
import { differnceDays } from '../utils/timeHandler';
import data from '../mocks/data.json';
import Popup from '../popup/popup';
import { withTranslation, Trans } from "react-i18next";
class Dashboard extends Component {
	constructor() {
        super();
        this.requiredData = {};
		this.state = {value:'', campaign: 'upcoming', data: data.data, calendarShow: false, requiredData: {}, dialogOpen:false};
    }
    componentDidMount() {
        this.props.languageChange('en');
        this.props.i18n.changeLanguage('en');
    }
	handleCampaign = campaignType => {
        this.props.campaignAction(campaignType);
    };
    handleLangChange = (event) => {
        const newlang = event.target.value;
        this.props.languageChange(newlang);
        this.props.i18n.changeLanguage(newlang);
    }
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
        const { t, i18n } = this.props;
        return (
            <>
                <div className={popupData ? "dashboardParent greyBg" : "dashboardParent"}>
                    <label for='slct'>Language Selected</label>
                    <select name="slct" id="slct" onChange={this.handleLangChange}>
                        <option value="en" default>English</option>
                        <option value="ge">German</option>
                    </select>
                     
                    <h2 className="title"><Trans> {t("manageCampaign")} </Trans></h2>
                    <Toggle handleCampaign={this.handleCampaign} value={this.state.value} />
                    <TableCampaign
                        value={this.state.value}
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
    popupData: state.renderDialogReducer.popupData,
    languageChanged: state.languageChangeReducer.language
});

const mapDispatchToProps = dispatch => ({
    campaignAction: x => dispatch(campaignAction(x)),
    languageChange: x => dispatch(languageChange(x))
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation("translations")(Dashboard));

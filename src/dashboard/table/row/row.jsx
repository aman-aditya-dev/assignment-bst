import React from 'react';
import { convertTime, daysLeft } from '../../../utils/timeHandler';
import pricing from '../../../assets/Price.png';
import file from '../../../assets/file.png';
import calendar from '../../../assets/calendar.png';
import stats from '../../../assets/statistics-report.png';
// import nfs from '../../../assets/nfs.png';
import DayPicker from 'react-day-picker/DayPicker';
import { renderDialogAction } from '../../../actions/renderDialogAction';
import { connect } from 'react-redux';
import 'react-day-picker/lib/style.css';
import './row.scss';

class Row extends React.Component {
    constructor(){
        super();
        this.state={
           calendarShow: false,

        }
    }
    handleCalendar=()=>{
        this.setState({calendarShow: !this.state.calendarShow})
    }

    renderDialog = () => {
      
        this.props.renderDialogAction(this.props.data);
    }


    render(){
	const { data,index } = this.props;
    const { name, region, createdOn, price, csv, report, image_url } = data;
    const {calendarShow}= this.state;
	return (
        <>
		<tr className="whiteRow" >
			<td className="dateTab">
                <div>
				<span>
					{convertTime(createdOn)}
				</span>
				<span>
					{daysLeft(createdOn)}
				</span>
                </div>
			</td>
			<td className="campaign">
                <div className="campaignDiv">
                    <img src={require(`../../../assets/${image_url}`)} width="50px"/>
                    <div className="campaignDetails">
                        <span>{name}</span>
                        <span>{region}</span>
                    </div>
                </div>
			</td>
			<td>
                <div className="pricingDiv">
                <img src={pricing} width="25px"/>
				<a onClick={this.renderDialog}>View Pricing</a>
                </div>
			</td>
			<td>
                <div className="actions">
                    <img src={file} width="20px"/>
                    <a>CSV</a>
                    <img src={stats} width="26px"/>
                    <a>Report</a>
                    <img src={calendar} width="26px"/>
                    <a onClick={this.handleCalendar}>Schedule Again</a>
                {calendarShow && 
                    <DayPicker onDayClick={day => this.props.changedDate(day, index)} />}
                </div>
			</td>
           
		</tr>
        
        </>
	);
}
}
const mapDispatchToProps = dispatch => ({
	renderDialogAction: x => dispatch(renderDialogAction(x))
});


export default connect(null, mapDispatchToProps)(Row);

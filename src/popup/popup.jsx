import React from 'react';
import './popup.scss';
import { connect } from 'react-redux';
import { renderDialogAction } from '../actions/renderDialogAction';
function Popup(props) {
	const { popupData } = props;
	return (
		<div className="popupDiv">
			<div className="nameContainer">
				<img src={require(`../assets/${popupData.image_url}`)} width="130px" />
				<span>
					<h2>
						{popupData.name}
					</h2>
					<h4>
						{popupData.region}
					</h4>
				</span>
			</div>

			<h2>Pricing</h2>
			<ul>
				<li>
					<span className="duration">1 Week - 1 Month</span>
					<span className="usd">$ 100.00</span>
				</li>
				<li>
					<span className="duration">6 Months</span>
					<span className="usd">$ 500.00</span>
				</li>
				<li>
					<span className="duration">1 Year</span>
					<span className="usd">$ 900.00</span>
				</li>
			</ul>

			<button onClick={() => props.renderDialogAction('')}>Close</button>
		</div>
	);
}
const mapStateToProps = state => ({
	...state,
	popupData: state.renderDialogReducer.popupData
});
const mapDispatchToProps = dispatch => ({
	renderDialogAction: x => dispatch(renderDialogAction(x))
});
export default connect(mapStateToProps, mapDispatchToProps)(Popup);

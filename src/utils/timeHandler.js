function exactDays(daysCount) {
	daysCount = daysCount.toString();
	daysCount = daysCount.slice(0, daysCount.indexOf('.') + 1);
	return Number(daysCount);
}
function monthCheck(monthNumeric) {
	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return monthNames[monthNumeric];
}
export function convertTime(timestamp) {
	let date = new Date(timestamp);
	return `${monthCheck(date.getMonth())} ${date.getFullYear()}, ${date.getDate()}`;
}
export function daysLeft(timestamp) {
	const difference = differnceDays(timestamp);
	if (difference > 0) {
		return `${difference} Days To Go`;
	} else {
		return `${-difference} Days Ago`;
	}
}

export function differnceDays(timestamp) {
	const currentDate = new Date();
	const difference = exactDays((timestamp - currentDate.getTime()) / (1000 * 3600 * 24));
	return difference;
}

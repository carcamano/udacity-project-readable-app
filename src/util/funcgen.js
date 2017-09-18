/**
 * Created by Felipe on 17/09/2017.
 */

export function formatPostDate( unixDate ) {

	if ( !unixDate )
		return '';

	const date = new Date( unixDate );
	const monthNames = [
		'January' , 'February' , 'March' ,
		'April' , 'May' , 'June' , 'July' ,
		'August' , 'September' , 'October' ,
		'November' , 'December'
	];

	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();

	return day + ' ' + monthNames[ monthIndex ] + ' ' + year;
}
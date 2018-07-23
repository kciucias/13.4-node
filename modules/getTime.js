
function getTime(time) {

	var m = Math.floor(time / 60);
	var s = time - m * 60;

	return 'Time: ' + m + 'min and ' + s + 's';
};


exports.printTime = getTime;
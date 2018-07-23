
function convertTime(time) {
	var minutes = Math.floor(time / 60);
	var seconds = time - minutes * 60;
	var hours = Math.floor(time / 3600);
	time = time - hours * 3600;

	console.log('Time: ' + hours + 'h, ' + minutes + 'min and ' + seconds + 's');
}

exports.timer = convertTime;
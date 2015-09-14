var
	elHours,
	elMinutes,
	elSeconds;

setInterval(function () {
	var date = (new Date());

	var
		s = date.getSeconds() == 0 ? 12 : date.getSeconds(),
		h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
		m = date.getMinutes() == 0 ? 12 : date.getMinutes();

	elHours ? elHours.style.opacity = '0' : null;
	elMinutes ? elMinutes.style.opacity = '0' : null;
	elSeconds ? elSeconds.style.opacity = '0' : null;

	elHours = document.getElementById('h' + h );
	elMinutes = document.getElementById('m' + m);
	elSeconds = document.getElementById('s' + s);

	elHours.style.opacity = '1';
	elMinutes.style.opacity = '1';
	elSeconds.style.opacity = '1';

}, 1000);
$.ajax({
	beforeSend: function()
	{
		//antes que el ajax comienze
		//mostramos la barra de progreso
	},
	type: 'post',
	url: '/URL',
	dataType: 'json',
	cache: false,
	contentType: false,
	processData: false,
	data: formData,
	xhr: function () {
		var xhr = new window.XMLHttpRequest();
		xhr.upload.addEventListener("progress", function (evt) {
			//en pct se almacena el porcentaje de progreso
			var pct = parseInt((evt.loaded / evt.total * 100), 10);	
			//mientras vaya cargando podemos ir cambiando el valor de la barra
			console.log("Progreso " + pct + '%');
		}, false);
		return xhr;
	},
	success: function (data)
	{
		//la carga se completo y entonces ocultamos o reestablecemos la barra
	},
	error: function (data)
	{
		//hubo un error
	},
	complete: function () {
		//el evento ajax finalizo
	}});
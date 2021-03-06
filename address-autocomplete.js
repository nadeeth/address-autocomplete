(function ($) {

	$.fn.auto_address = function(options) {

		var base = this;//To avoid scope issues
        options = options ? options : {};

		//Google maps - address autocomplete - initialize
		(function() {
			// Create the autocomplete object, restricting the search
			// to geographical location types.
			autocomplete = new google.maps.places.Autocomplete(
				/** @type {HTMLInputElement} */($(base).get(0)),
				{ types: ['geocode'] });
			// When the user selects an address from the dropdown,
			// populate the address fields in the form.
			google.maps.event.addListener(autocomplete, 'place_changed', function() {
				fillInAddress();
			});
		})();

		//Extract the address information and pupulate the form
		function fillInAddress() {
			// Get the place details from the autocomplete object.
			var place = autocomplete.getPlace();//TODO: option to fill multiple fields.
		}

		// [START region_geolocation]
		// Bias the autocomplete object to the user's geographical location,
		// as supplied by the browser's 'navigator.geolocation' object.
		$(base).on("focus", function() {
			if (navigator.geolocation && (options.user_region !== false)) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var geolocation = new google.maps.LatLng(
						position.coords.latitude, position.coords.longitude);
					var circle = new google.maps.Circle({
						center: geolocation,
						radius: position.coords.accuracy
					});
					autocomplete.setBounds(circle.getBounds());
				});
			}
		});

		return this;
	};

}( jQuery ));
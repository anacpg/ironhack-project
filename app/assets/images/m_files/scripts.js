jQuery(window).on("load", function() {
	"use strict";

	/* -----------------------------------------
	 FlexSlider Init
	 ----------------------------------------- */
	var homeSlider = jQuery('#slider');

	if ( homeSlider.length > 0 ){
		homeSlider.flexslider({
			directionNav: false,
			controlNav: true,
			animation: ThemeOption.slider_effect,
			direction: ThemeOption.slider_direction,
			slideshow: Boolean(ThemeOption.slider_autoslide),
			slideshowSpeed: Number(6000),
			animationSpeed: Number(ThemeOption.slider_duration),
			start: function(slider) {
				slider.removeClass('loading');
			}
		});
	}

	jQuery(".room-slider").flexslider({
		prevText: '',
		nextText: '',
		controlNav: false
	});

});

jQuery(document).ready(function($) {
	"use strict";

	/* -----------------------------------------
	 Responsive Menus Init with mmenu
	 ----------------------------------------- */
	var mobilemenu = $("#mobilemenu"),
			navs = $("#header").find('.navigation');

	navs.each(function() {
		var content = $(this).html();
		mobilemenu.find('> ul').append(content).find('li').removeAttr('id');
	});

	mobilemenu.mmenu({
		offCanvas: {
			position: 'top',
			zposition: 'front'
		}
	});

	/* -----------------------------------------
	 Main Navigation Init
	 ----------------------------------------- */
	$('ul.navigation').superfish({
		delay:       300,
		animation:   { opacity:'show', height:'show' },
		speed:       'fast',
		dropShadows: false
	});

	/* -----------------------------------------
	 Weather Code
	 ----------------------------------------- */
	var location = ThemeOption.weather_code;
	var unit = ThemeOption.weather_unit;

	var wq = "SELECT * FROM weather.forecast WHERE location='" + location + "' AND u='" + unit + "'";
	var cb = Math.floor((new Date().getTime()) / 1200 / 1000);
	var wu = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent(wq) + '&format=json&_nocache=' + cb;

	window['ywcb'] = function(data) {
		var info = data.query.results.channel.item.condition;
		var city = data.query.results.channel.location.city;
		var country = data.query.results.channel.location.country;
		$('.ywicon').addClass('wi-yw-' + info['code']);
		$('#ywloc').html(city + ", " + country);
		$('#ywtem').html(info.temp + '<span>' + '&deg;' + (unit.toUpperCase()) + '</span>');
	};

	$.ajax({
		url: wu,
		dataType: 'jsonp',
		cache: true,
		jsonpCallback: 'ywcb'
	});


	/* -----------------------------------------
	 Custom Select Boxes
	 ----------------------------------------- */
	var box = $(".dk");
	box.dropkick({
		theme: 'ci'
	});

	/* -----------------------------------------
	 Responsive videos
	 ----------------------------------------- */
	$("#main").fitVids();

	/* -----------------------------------------
	 Datepickers
	 ----------------------------------------- */
	// The datepickers must output the format yy/mm/dd
	// otherwise PHP's checkdate() fails.
	// Makes sure arrival date is not after departure date, and vice versa.
	$( ".datepicker[name='arrive']" ).datepicker({
		showOn: 'both',
		buttonText: '<i class="fa fa-calendar"></i>',
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, dateObj){
			var minDate = new Date(dateObj.selectedYear, dateObj.selectedMonth, dateObj.selectedDay );
			minDate.setDate(minDate.getDate()+1);
			$( ".datepicker[name='depart']" ).datepicker("option", "minDate", minDate );
		}
	});

	$( ".datepicker[name='depart']" ).datepicker({
		showOn: 'both',
		buttonText: '<i class="fa fa-calendar"></i>',
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, dateObj) {
			//var maxDate = new Date(dateText);
			var maxDate = new Date(dateObj.selectedYear, dateObj.selectedMonth, dateObj.selectedDay );
			maxDate.setDate(maxDate.getDate()-1);
			$( ".datepicker[name='arrive']" ).datepicker("option", "maxDate", maxDate );
		}
	});

	/* -----------------------------------------
	 Lightboxes
	 ----------------------------------------- */
	var $pp = $("a[data-rel^='prettyPhoto']");
	if ($pp.length) {
		$pp.prettyPhoto({
			show_title: false,
			hook: 'data-rel',
			social_tools: false,
			theme: 'pp_ignited',
			horizontal_padding: 20,
			opacity: 0.95,
			deeplinking: false
		});
	}

	if ( $("#map").length ) {
		gmap_initialize('map');
	}

});


/* -----------------------------------------
 Google Map Init
 ----------------------------------------- */
function gmap_initialize(map_element) {
	myLatlng = new google.maps.LatLng(ThemeOption.map_coords_lat, ThemeOption.map_coords_long);

	var mapOptions = {
		zoom: parseInt(ThemeOption.map_zoom_level),
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel: false
	};

	var map = new google.maps.Map(document.getElementById(map_element), mapOptions);
	if(map_element=='panel_map')
		panel_map = map;

	var contentString = '<div id="content">'+ThemeOption.map_tooltip+'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: ''
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
}
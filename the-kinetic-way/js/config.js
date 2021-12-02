"use strict";
var require = {
	baseUrl: 'js',
	// urlArgs: "epoch=" + (new Date()).getTime(),
	urlArgs: "epoch=1",
	paths: {
		"jquery": "jquery-1.11.3.min",
		"jquery-easing": "jquery-easing-compatibility.1.2.pack",
		"coda-slider": "coda-slider.1.1.1.pack",
		"owl-carousel": "owl.carousel",
		"lity": "lity"
	},
	shim: {
		"jquery-easing": {
			deps: [ "jquery-easing-1.3.pack" ]
		},
		"jquery-easing-1.3.pack": {
			deps: [ "jquery" ]
		},
		"coda-slider": {
			deps: [ "jquery" ]
		},
		"owl-carousel": {
			deps: [ "jquery" ]
		},
		"lity": {
			deps: [ "jquery" ]
		}	
	}
};

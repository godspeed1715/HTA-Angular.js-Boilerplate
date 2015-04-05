'use strict';

angular.module('application', [
    'application.services',
    'application.directives',
    'application.controllers',
    function() {
        'use strict';
        //Center application window on load
    	var windowHeight = window.outerHeight;
    	var windowWidth = window.outerWidth;
    	var screenResize = true;
    	$( document).ready( function () {
    		//Set window size and asign to variables``
            intHorizontal = screen.width
            intVertical = screen.height
            //Center screen at startup
            intLeft = (intHorizontal - windowWidth) / 2
          	intTop = (intVertical - windowHeight) / 2
            window.resizeTo(windowWidth,windowHeight)
            window.moveTo(intLeft, intTop)
        });
    }
])

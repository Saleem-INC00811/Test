/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/incture/cherrywork/TestSample/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
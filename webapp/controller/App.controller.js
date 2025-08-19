sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.employeeonboardingview.controller.App", {
		onInit: function() {
			// Get the router instance
			const oRouter = UIComponent.getRouterFor(this);

			if (oRouter) {
				// Handle route bypassing
				oRouter.attachBypassed(function(oEvent) {
					console.log("Route bypassed:", oEvent.getParameter("hash"));
				});

				// Navigate to the main view if no hash is present
				if (!window.location.hash || window.location.hash === "#") {
					setTimeout(() => {
						oRouter.navTo("RouteMain");
					}, 100);
				}
			} else {
				console.error("Router not found in App controller");
			}
		}
	});
});

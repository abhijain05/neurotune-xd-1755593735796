sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("converted.employeeonboardingview.controller.EmployeeOnboardingView", {
		onInit: function() {
			// Load mock data
			const oOrderModel = new JSONModel();
			oOrderModel.loadData("model/mockData/orders.json");
			this.getView().setModel(oOrderModel, "orders");
		},

		// Search functionality
		onSearch: function(oEvent) {
			const sQuery = oEvent.getParameter("query");
			const oTable = this.getView().byId("ordersTable");
			const oBinding = oTable.getBinding("items");
			const aFilters = [];

			if (sQuery && sQuery.length > 0) {
				aFilters.push(new sap.ui.model.Filter([
					new sap.ui.model.Filter("orderId", sap.ui.model.FilterOperator.Contains, sQuery),
					new sap.ui.model.Filter("product", sap.ui.model.FilterOperator.Contains, sQuery)
				], false));
			}
			oBinding.filter(aFilters);
		},

		// Filter functionality (simplified for demonstration)
		onFilterChange: function(oEvent) {
			const sFilterValue = oEvent.getSource().getSelectedKey();
			const oTable = this.getView().byId("ordersTable");
			const oBinding = oTable.getBinding("items");
			const aFilters = [];

			if (sFilterValue) {
				aFilters.push(new sap.ui.model.Filter("status", sap.ui.model.FilterOperator.EQ, sFilterValue));
			}
			oBinding.filter(aFilters);
		},

		onSave: function() {
			MessageToast.show("Data saved successfully!");
		}

	});
});

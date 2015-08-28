var AppDispatcher = require('../dispatcher/appDispatcher.js');
var AppConstants = require('../constants/constants');

var AppActions = {
	addItem: function(e){
		AppDispatcher.addItem({
			typeOfAction: AppConstants.ADD_ITEM,
			data: e
		});
	},
	removeItem: function(e){
		AppDispatcher.removeItem({
			typeOfAction: AppConstants.REMOVE_ITEM,
			data: e
		})
	}
}

module.exports = AppActions;
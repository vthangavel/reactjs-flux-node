var FluxDispatcher = require('flux/lib/Dispatcher');
var ReactObjAssign = require('react/lib/Object.assign');

var ObjFluxDispatcher = new FluxDispatcher();

//App Dispatcher
var AppDispatcher = ReactObjAssign(ObjFluxDispatcher, {

	addItem: function(e){
		this.globalDispatcher(e);
	},

	removeItem: function(e){
		this.globalDispatcher(e);
	},

	globalDispatcher: function(e){
		this.dispatch({
			actionType: e.typeOfAction,
			data: e.data
		});
	}

});

module.exports = AppDispatcher;
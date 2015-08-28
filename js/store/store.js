var AppDispatcher = require('../dispatcher/appDispatcher');
var ReactObjAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var AppConstants = require('../constants/constants');

var ObjEventEmitter = new EventEmitter;

var itemStore = {
	items: [],
	cartItems: {}
};

var Store = ReactObjAssign(ObjEventEmitter, {
	emitChanges: function(){
		this.emit(AppConstants.CHANGE);
	},

	addChangeListener: function(callback){
		this.on(AppConstants.CHANGE, callback);
	},

	removeChangeListener: function(callback){
		this.removeChangeListener(AppConstants.CHANGE, callback);
	},

	getStoreData: function(){
		return itemStore;
	},

	addNewItem: function(payload){
		if(payload.data){
			var prodId = payload.data.id;
			if(!itemStore.cartItems[prodId]){
				itemStore.items.push(payload.data);
				itemStore.cartItems[prodId] = {
					'count': 0,
					'product': payload.data
				}
			}
			itemStore.cartItems[prodId]['count'] += 1;
		}
	},

	removeItem: function(payload){
		if(payload.data){
			var prodId = payload.data;
			try{
				if(itemStore.cartItems[prodId]['count'] > 0){
					itemStore.cartItems[prodId]['count'] -= 1;
				}
			}catch(e){
				console.log(e.message);
			}
		}
	}
});


AppDispatcher.register(function(payload){
	if(payload.actionType === AppConstants.ADD_ITEM){
		Store.addNewItem(payload);
	}else if (payload.actionType == AppConstants.REMOVE_ITEM){
		Store.removeItem(payload);
	}

	Store.emitChanges();
	return true;
});

module.exports = Store;
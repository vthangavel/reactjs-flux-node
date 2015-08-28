var React = require('react');
var Store = require('../store/store');
var AppActions = require('../actions/actions.js');

var BasketComp = React.createClass({
	getInitialState: function(){
		return Store.getStoreData();
	},

	updateLocalStore: function(){
		this.setState(Store.getStoreData());
	},

	componentWillMount: function(){
		Store.addChangeListener(this.updateLocalStore);
	},

	componentWillUnmount: function(){
		Store.removeChangeListner(this.updateLocalStore);
	},

	render: function(){
		var selectedProducts = this.state.items;
		var cartItems = this.state.cartItems;
		return (
			<div className="basket">
				<h5>Your Basket</h5>
				<CartItemList products={selectedProducts} cartItems={cartItems} />
				<h6>
					<a href="#">Proceed to Checkout</a>
				</h6>
			</div>
		);
	}
});

var CartItemList = React.createClass({
	getInitialState: function(){
		return {
			idVal: ''
		};
	},
	render: function(){
		var selectedProducts = this.props.products;
		var cartItems = this.props.cartItems;
		var totCount, totCartCount = 0;
		var self = this;
		var itemsList = selectedProducts.map(function(product){
			totCount = cartItems[product.id]['count'];
			totCartCount += totCount;
			return (
				<SelectedPorductView product={product} totCount={totCount}/>
			)
		});
		return (
			<div className="basket-list">
			<p>Your Orders: {totCartCount}</p>
			<ul>{itemsList}</ul>
			</div>
		);
	}
});

var SelectedPorductView = React.createClass({
	getInitialState: function(){
		return {
			product: ''
		};
	},
	deductSelection: function(e){
		AppActions.removeItem(this.props.product.id);
	},
	render: function(){
		return (
			<li>
				{this.props.product.name} - {this.props.totCount}&nbsp;<a href="#" onClick={this.deductSelection} idVal={this.props.product.id}>Decrease</a>
			</li>
		);
	}
});


module.exports = BasketComp;
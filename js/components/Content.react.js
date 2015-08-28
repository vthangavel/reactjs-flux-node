//@loki - 
var React = require('react');

var BasketComp = require('./Basket.react');

var Store = require('../store/store');
var AppActions = require('../actions/actions');

var ContentComp = React.createClass({
	getInitialState: function(){
		return {
			products: []
		}
	},
	render: function(){
		var products = this.props.products.map(function (product) {
            return (
                <ProductList key={product.id} product={product} />
            );
        });
		return (
			<div id="page-content">
				<p>Choose your items</p>
				<ul className="products-list">
					{products}
				</ul>
				<BasketComp />
			</div>

		);
	}
});

var ProductList = React.createClass({
	getInitialState: function(){
		return {
			product: {}
		}
	},
	selectProduct: function(e){
		AppActions.addItem(this.props.product);
	},
	render: function(){
		return (
			<li>
				<a href="#" onClick={this.selectProduct} product={this.props.product}>
					<img src={this.props.product.image}  /><br/>
					<span>{this.props.product.name}</span>
				</a>
			</li>
		);
	}
});

module.exports = ContentComp;
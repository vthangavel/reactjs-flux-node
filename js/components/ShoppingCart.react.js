var React = require('react');
var HeaderComp = require('./Header.react');
var ContentComp = require('./Content.react');
var FooterComp = require('./Footer.react');

var DataProducts = require('../data.js').fakeData;

var ShoppingCartApp = React.createClass({
	getInitialState: function(){
		return {
			products: []
		}
	},
	render: function(){
		return (
			<div id="page-main">
				<HeaderComp />
				<ContentComp products={DataProducts}/>
				<FooterComp />
			</div>
		);
	}
});

module.exports = ShoppingCartApp;
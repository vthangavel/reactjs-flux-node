jest.dontMock('../../components/Content.react.js');
describe('Content', function(){
	it('Lists down the items & provide option to select it', function(){
		var React = require('react/addons');
		var TestUtils = React.addons.TestUtils;
		var ContentView = require('../../components/Content.react.js');


		var ProductJson = require('../../data.js').fakeData;

		var ProductListing = TestUtils.renderIntoDocument(
			<ContentView products={ProductJson} />
		);

		expect(ProductListing).toBeDefined();
	});
});

describe('MyController', function(){
	beforeEach(module('my-module'));

	describe('getFullName()', function(){
		it('should handle names correctly', inject(function($controller){
			var myController = $controller('MyController');

			myController.firstName = 'George';
			myController.lastName = 'Harrison';

			myController.getFullName().should.equal('George Harrison');
		}));
	});
});
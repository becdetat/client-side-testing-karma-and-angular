
describe('MyController', function(){
	beforeEach(module('my-module'));

	describe('getFullName()', function(){
		it('should handle names correctly', inject(function($controller){
			var myController = $controller('MyController', {
				$scope: {}
			});

			myController.firstName = 'George';
			myController.lastName = 'Harrison';

			myController.getFullName().should.equal('George Harrison');
		}));
	});

	describe('addSong()', function(){
		it('should add songs', inject(function($controller) {
			var scope = {};
			var myController = $controller('MyController', {
				$scope: scope
			});

			scope.addSong('While My Guitar Gently Weeps');

			scope.songs.should.contain('While My Guitar Gently Weeps');
		}));
	});
});
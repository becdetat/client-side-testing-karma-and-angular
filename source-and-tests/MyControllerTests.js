
describe('MyController', function(){
	//var $httpBackend;

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
		it('should add songs', inject(function($controller, $httpBackend) {
			var scope = {};
			var myController = $controller('MyController', {
				$scope: scope
			});

			scope.addSong('While My Guitar Gently Weeps');

			scope.songs.should.contain('While My Guitar Gently Weeps');
		}));
	});

	describe('get-instruments result', function(){
		it('should be added to scope', inject(function($controller, $httpBackend){
			var scope = {};
			$httpBackend
				.when('GET', 'api/get-instruments')
				.respond([
					'vocals', 'guitar', 'sitar'
				]);
			var myController = $controller('MyController', {
				$scope: scope
			});

			$httpBackend.flush();

			scope.instruments.should.contain('guitar');
			scope.status.should.equal('');
		}));
	});

	describe('get-instruments with error', function(){
		it('should have a status with error', inject(function($controller, $httpBackend){
			var scope = {};
			$httpBackend
				.when('GET', 'api/get-instruments')
				.respond(500, '');
			var myController = $controller('MyController', {
				$scope: scope
			});

			$httpBackend.flush();

			scope.status.should.equal('ERROR');
		}));
	});
});
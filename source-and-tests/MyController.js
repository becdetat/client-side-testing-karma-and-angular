(function(){
	angular.module('my-module', []);

	angular
		.module('my-module')
		.controller('MyController', [
			'$scope', '$http',
			function($scope, $http){
				var self = this;

				self.firstName = '';
				self.lastName = '';

				self.getFullName = function(){
					return self.firstName + ' ' + self.lastName;
				};

				$scope.songs = [
					'Here Comes The Sun'
				];

				$scope.addSong = function(song) {
					$scope.songs.push(song);
				};

				$scope.instruments = ['foo'];
				$scope.status = '';

				$http.get('api/get-instruments')
					.success(function(data) {
						$scope.instruments = data;
					})
					.error(function(e) {
						$scope.status = 'ERROR';
					});

				return self;
			}
	]);
})();
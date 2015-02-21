(function(){
	angular.module('my-module', []);

	angular
		.module('my-module')
		.controller('MyController', [
			'$scope',
			function($scope){
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


				return self;
			}
	]);
})();
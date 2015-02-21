(function(){
	angular.module('my-module', []);

	angular
		.module('my-module')
		.controller('MyController', [
			function(){
				var self = this;

				self.firstName = '';
				self.lastName = '';

				self.getFullName = function(){
					return self.firstName + ' ' + self.lastName;
				};

				return self;
			}
	]);
})();
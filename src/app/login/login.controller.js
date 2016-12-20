(function() {
    'use strict';
    angular.module('mytodo').controller('LoginController', LoginController);
    /** @ngInject */
    function LoginController($http) {
        var vm = this;
        vm.user = {
            tenantname: '',
            username: '',
            password: ''
        };
        vm.do = function () {
            $http.post('http://localhost:8080/api/signin', vm.user).then(function(response) {
                if (response.data) {
                    return response.data;
                }
            });
        }

        vm.goToRegistration = function () {
            
        }
    }
})();
(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController)

    homeController.$inject = ['dsAuth'];

    function homeController(dsAuth) {
        var vm = this;
        vm.Auth = dsAuth;
    }
})();
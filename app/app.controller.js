(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainController', mainController)

    mainController.$inject = ['dsAuth'];

    function mainController(dsAuth) {
        var vm = this;
        vm.Auth = dsAuth;
    }
})();
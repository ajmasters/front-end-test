(function () {
    'use strict';

    angular
        .module('app')
        .controller('produtoDetalharController', produtoDetalharController)

    produtoDetalharController.$inject = ['$produto'];

    function produtoDetalharController($produto) {
        var vm = this;
        vm.Model = $produto;
    }
})();
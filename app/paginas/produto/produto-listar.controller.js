(function () {
    'use strict';

    angular
        .module('app')
        .controller('produtoListarController', produtoListarController)

    produtoListarController.$inject = ['$produtos'];

    function produtoListarController($produtos) {
        var vm = this;
        vm.Produtos = $produtos;
    }
})();
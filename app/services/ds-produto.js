(function () {
    'use strict';

    angular
        .module('app')
        .service('dsProduto', dsProduto)

    dsProduto.$inject = ['$http'];

    function dsProduto($http) {
        this.Listar = _listar;
        this.Detalhar = _detalhar;
        this.Comentarios = _comentarios;

        function _listar() {
            return $http.get('/app/data/produtos.json') //simulando um acesso via API
                .then(function (response) {
                    return response.data;
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

        function _detalhar(_nsu) {
            function _obterPorNsu(_produto) {
                return _produto.NSU == _nsu;
            }

            return _listar().then(function (response) { //simulando um acesso via API
                return response.find(_obterPorNsu);
            });
        }
        
        function _comentarios(_produtoID) {
            return $http.get('/app/data/comentarios.json') //simulando um acesso via API
                .then(function (response) {
                    return response.data;
                })
                .catch(function (erro) {
                    console.log(erro);
                });
        }

    }
})();
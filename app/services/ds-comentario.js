(function () {
    'use strict';

    angular
        .module('app')
        .service('dsComentario', dsComentario)

    dsComentario.$inject = ['$http', '$q'];

    function dsComentario($http, $q) {
        this.Criar = _criar;
        this.Listar = _listar;

        function _criar($comentario) {
            var _awiter = $q.defer();//simulando um processo da API

            var _data = new Date();
            $comentario.NSU = Math.floor((Math.random() * 10000) + 1);
            $comentario.Data = _data.toISOString();
            
            _awiter.resolve($comentario);
            
            return _awiter.promise;
        }

        function _listar(_produtoID) {
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
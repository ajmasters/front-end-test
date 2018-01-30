(function () {
    'use strict';
    angular
        .module('app').component('produtoComentarios', {
            bindings: { produto: '<' },
            templateUrl: 'app/paginas/produto/components/produto-comentarios.component.html',
            controller: produtoComentariosController,
        });

    produtoComentariosController.$inject = ['$scope', 'dsComentario'];

    function produtoComentariosController($scope, dsComentario) {
        var $ctrl = this;
        $ctrl.Submit = _submit;

        dsComentario.Listar($ctrl.produto.NSU)
            .then(function (_comentarios) {
                $ctrl.produto.Comentarios = _comentarios;
            });

        function _submit() {
            if ($scope.formComentario.$valid) {
                dsComentario.Criar(angular.copy($ctrl.NovoComentario))
                    .then(function (_comentario) {
                        $ctrl.produto.Comentarios.push(_comentario);
                        $ctrl.NovoComentario = {};
                    })
                    .finally(function () {
                        $ctrl.ComentarioEnviado = true;
                    })
            }
        }
    }
})();


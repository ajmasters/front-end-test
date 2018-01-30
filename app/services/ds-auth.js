(function () {
    'use strict';

    angular
        .module('app')
        .service('dsAuth', dsAuth)

    dsAuth.$inject = ['$auth', '$state', '$window'];

    function dsAuth($auth, $state, $window) {
        this.EstaAutenticado = _estaAutenticado;
        this.Logar = _logar;
        this.Sair = _sair;

        function _estaAutenticado() {
            return $auth.isAuthenticated();
        };

        function _logar() {
            $auth.authenticate('google');
        };

        function _sair() {
            $auth.logout();
            $auth.removeToken();
            $window.localStorage.clear();
            $state.go('home');
        }
    }
})();
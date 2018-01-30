(function () {
    'use strict'
    angular.module('app')
        .run(runConfig)

    runConfig.$inject = ['$rootScope', '$state', '$stateParams', '$auth', '$location'];

    function runConfig($rootScope, $state, $stateParams, $auth, $location) {
        if ($location.path().match("^/state")) {
            var hash = $location.path().substr(1);
            var splitted = hash.split('&');
            var dadosToken = {};
            for (var i = 0; i < splitted.length; i++) {
                var param = splitted[i].split('=');
                var key = param[0];
                var value = param[1];
                dadosToken[key] = value;
            };
            $auth.setToken(dadosToken.access_token);
        }
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name != 'home' && !$auth.isAuthenticated()) {
                event.preventDefault();
                $state.go('home');
            }
        });
    }
}());
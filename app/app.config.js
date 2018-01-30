(function () {
    'use strict'
    angular.module('app')
        .config(configAuth)

    function configAuth($authProvider) {
        $authProvider.google({
            clientId: '144481798662-2f0fm1hdjkojrvm0ar9cp39laibook5p.apps.googleusercontent.com',
            url: 'http://localhost:5000/auth/google',
            responseType: 'token'
            // authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
            // redirectUri: 'http://localhost:5000',
            // requiredUrlParams: ['scope'],
            // optionalUrlParams: ['display'],
            // scope: ['profile', 'email'],
            // scopePrefix: 'openid',
            // scopeDelimiter: ' ',
            // display: 'popup',
            // oauthType: '2.0',
            // popupOptions: { width: 452, height: 633 }
          });
    }
}());
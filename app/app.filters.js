(function(){
    'use strict';

    angular
        .module('app')
        .filter('camelCase', camelCase)

    function camelCase(){
        return camelCaseFilter;
        function camelCaseFilter(_string){
            return _string.toLowerCase().replace(/[\s]/g, '-').replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); }).replace('-', '');
        }
    }
}());
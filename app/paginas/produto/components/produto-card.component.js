(function () {
    'use strict';
    angular
        .module('app').component('produtoCard', {
            bindings: { produto: '<' },
            templateUrl: 'app/paginas/produto/components/produto-card.component.html',
            controller: produtoCardController
        })
})();

produtoCardController.$inject=['$location']

function  produtoCardController($location){
    var $ctrl = this;
    $ctrl.UrlBase = $location.absUrl();
}
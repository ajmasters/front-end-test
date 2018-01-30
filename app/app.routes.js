(function () {
  'use strict'
  angular.module('app')
    .config(configRoute)

  function configRoute($stateProvider, $urlRouterProvider) {
    var _states = [
      {
        name: 'home',
        url: '/',
        templateUrl: 'app/paginas/home/home.html',
        controller: 'homeController',
        controllerAs: 'vm'
      },
      {
        name: 'produto',
        url: '/produto/{nsu}',
        templateUrl: 'app/paginas/produto/produto-detalhar.html',
        controller: 'produtoDetalharController',
        controllerAs: 'vm',
        resolve: {
          $produto: function (dsProduto, $transition$) {
            return dsProduto.Detalhar($transition$.params().nsu);
          }
        }
      },
      {
        name: 'produtos',
        url: '/produto',
        templateUrl: 'app/paginas/produto/produto-listar.html',
        controller: 'produtoListarController',
        controllerAs: 'vm',
        resolve: {
          $produtos: function (dsProduto) {
            return dsProduto.Listar();
          }
        }
      }
    ];

    _states.forEach(function (_state) {
      $stateProvider.state(_state);
    });

    $urlRouterProvider.otherwise('/');
  }
}());